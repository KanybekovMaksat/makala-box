import $api from '~shared/api';
import {
  Block,
  BlockNoteEditor,
  BlockNoteSchema,
  PartialBlock,
  defaultBlockSpecs,
  defaultStyleSpecs,
  filterSuggestionItems,
  insertOrUpdateBlock,
} from '@blocknote/core';
import '@blocknote/core/fonts/inter.css';
import {
  SuggestionMenuController,
  getDefaultReactSlashMenuItems,
} from '@blocknote/react';
import '@blocknote/react/style.css';
import { CodeBlock, insertCode } from '@defensestation/blocknote-code';
import { AlertBlock } from '~features/blocknote/alert-block';
import { RiAlertFill } from 'react-icons/ri';
import { CustomSlashMenu } from '~features/blocknote/custom-slash';
import {
  commentStyleSpec,
  CommentToolbarController,
} from '@defensestation/blocknote-comments';
import { codeStyleSpec } from './../../features/blocknote/code-toolbar/code-toolbar.stylespec';
import { CustomToolbar } from '~features/blocknote/custom-toolbar';
import { useEffect, useMemo, useState } from 'react';
import { CircularProgress } from '@mui/material';
import { BlockNoteView } from '@blocknote/mantine';

const schema = BlockNoteSchema.create({
  blockSpecs: {
    ...defaultBlockSpecs,
    alert: AlertBlock,
    procode: CodeBlock,
  },
  styleSpecs: {
    ...defaultStyleSpecs,
    comment: commentStyleSpec,
    code: codeStyleSpec,
  },
});

const insertAlert = (editor: typeof schema.BlockNoteEditor) => ({
  title: 'Заметки',
  onItemClick: () => {
    insertOrUpdateBlock(editor, {
      type: 'alert',
    });
  },
  aliases: ['alert', 'notification', 'info', 'note'],
  group: 'Advanced',
  icon: <RiAlertFill />,
});

async function uploadFile(file: File) {
  const body = new FormData();
  body.append('image', file);
  try {
    console.log(file);
    const response = await $api.post('articles/image-upload/', body);
    return response.data.image;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw new Error('File upload failed');
  }
}

type EditArticleProps = {
  id: number;
  body: any;
};

export function EditArticle(props: EditArticleProps) {
  const saveToStorage = async (jsonBlocks: Block[]) => {
    localStorage.setItem(`editContent-${props.id}`, JSON.stringify(jsonBlocks));
  };

  const loadFromStorage = async () => {
    const storageString = localStorage.getItem(`editContent-${props.id}`);
    return storageString ? (JSON.parse(storageString) as PartialBlock[]) : undefined;
  };

  const [initialContent, setInitialContent] = useState<PartialBlock[] | 'loading'>('loading');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchInitialContent = async () => {
      const storedContent = await loadFromStorage();
      setInitialContent(storedContent || props.body);
      setIsLoading(false);
    };

    fetchInitialContent();
  }, [props.id, props.body]);

  const editor = useMemo(() => {
    if (initialContent === 'loading') return undefined;
    return BlockNoteEditor.create({ schema, initialContent, uploadFile });
  }, [initialContent]);

  if (editor === undefined) {
    return 'Loading content...';
  }

  return isLoading ? (
    <div className="flex flex-col items-center gap-3 my-20">
      <CircularProgress />
      Загрузка...
    </div>
  ) : (
    <BlockNoteView
      data-changing-font-demo
      slashMenu={false}
      editor={editor}
      theme={'light'}
      formattingToolbar={false}
      onChange={() => saveToStorage(editor.document)}
    >
      <CustomToolbar />
      <SuggestionMenuController
        triggerCharacter={'/'}
        suggestionMenuComponent={CustomSlashMenu}
        getItems={async (query: string) =>
          filterSuggestionItems(
            [
              ...getDefaultReactSlashMenuItems(editor),
              insertAlert(editor),
              insertCode(),
            ],
            query
          )
        }
      />
    </BlockNoteView>
  );
}
