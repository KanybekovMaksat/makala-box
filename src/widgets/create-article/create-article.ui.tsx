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
import { CircularProgress } from '@mui/material';
import { YouTubeBlock } from '~features/blocknote/youtube-block';
import { RiYoutubeFill } from 'react-icons/ri';

const schema = BlockNoteSchema.create({
  blockSpecs: {
    ...defaultBlockSpecs,
    alert: AlertBlock,
    youtube: YouTubeBlock,
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

async function loadFromStorage() {
  const storageString = localStorage.getItem('sandboxContent');
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


const insertYouTubeVideo = (editor: typeof schema.BlockNoteEditor) => ({
  title: 'YouTube Видео',
  onItemClick: () => {
    insertOrUpdateBlock(editor, {
      type: 'youtube',
      props: {
        url: '',
      },
    });
  },
  aliases: ['youtube', 'video', 'embed', 'media'],
  group: 'Advanced',
  icon: <RiYoutubeFill />,
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

export function CreateArticle() {
  const [initialContent, setInitialContent] = useState<
    PartialBlock[] | undefined | 'loading'
  >('loading');

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    loadFromStorage().then((content) => {
      setInitialContent(content);
    });
  }, []);

  const editor = useMemo(() => {
    if (initialContent === 'loading') {
      return undefined;
    }
    return BlockNoteEditor.create({
      schema,
      initialContent,
      uploadFile,
    });
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
      <CommentToolbarController />
      <SuggestionMenuController
        triggerCharacter={'/'}
        suggestionMenuComponent={CustomSlashMenu}
        getItems={async (query: string) =>
          filterSuggestionItems(
            [
              ...getDefaultReactSlashMenuItems(editor),
              insertYouTubeVideo(editor),
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
