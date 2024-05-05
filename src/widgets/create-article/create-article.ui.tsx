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
  BlockNoteView,
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

interface CreateArticleProps {
  update: boolean;
  data?: PartialBlock[];
}

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

async function saveToStorage(jsonBlocks: Block[]) {
  localStorage.setItem('sandboxContent', JSON.stringify(jsonBlocks));
}

async function saveToStorageUpdate(jsonBlocks: Block[]) {
  localStorage.setItem('editorContent', JSON.stringify(jsonBlocks));
}

async function loadFromStorage() {
  const storageString = localStorage.getItem('sandboxContent');
  return storageString
    ? (JSON.parse(storageString) as PartialBlock[])
    : undefined;
}

async function loadFromStorageUpdate() {
  const storageString = localStorage.getItem('editorContent');
  return storageString
    ? (JSON.parse(storageString) as PartialBlock[])
    : undefined;
}

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
    const response = await $api.post('posts/image-upload/', body);
    return response.data.image;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw new Error('File upload failed');
  }
}

export function CreateArticle({ update, data }: CreateArticleProps) {
  const [initialContent, setInitialContent] = useState<
    PartialBlock[] | undefined | 'loading'
  >('loading');

   function isBlocksUpdate() {
    let blocks;
    loadFromStorageUpdate().then((content) => {
      blocks = content;
    });
    return blocks
  }

  useEffect(() => {
    if (true) {
      loadFromStorageUpdate().then((content) => {
        setInitialContent(content);
      });
    } else if (update) {
      setInitialContent(data);
    } else {
      loadFromStorage().then((content) => {
        setInitialContent(content);
      });
    }
  }, []);

  const editor = useMemo(() => {
    if (initialContent === 'loading') {
      return undefined;
    }
    return BlockNoteEditor.create({ schema, initialContent, uploadFile });
  }, [initialContent]);

  if (editor === undefined) {
    return 'Loading content...';
  }

  return (
    <BlockNoteView
      data-changing-font-demo
      slashMenu={false}
      editor={editor}
      theme={'light'}
      formattingToolbar={false}
      onChange={() => {update ? saveToStorageUpdate(editor.document) : saveToStorage(editor.document)}}
    >
      <CustomToolbar />
      <CommentToolbarController />
      <SuggestionMenuController
        triggerCharacter={'/'}
        suggestionMenuComponent={CustomSlashMenu}
        getItems={async (query) =>
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
