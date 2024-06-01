import {
  BlockNoteSchema,
  defaultBlockSpecs,
  defaultStyleSpecs,
} from '@blocknote/core';
import {  useCreateBlockNote } from '@blocknote/react';
import { CodeBlock } from '@defensestation/blocknote-code';
import { AlertBlock } from '~features/blocknote/alert-block';
import { codeStyleSpec } from '~features/blocknote/code-toolbar';
import {
  CommentToolbarController,
  commentStyleSpec,
} from '@defensestation/blocknote-comments';
import '@blocknote/core/fonts/inter.css';
import '@blocknote/react/style.css';
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

type ArticleViewerProps = {
  body: any;
};

export function ArticleViewer(props: ArticleViewerProps) {
  const editor = useCreateBlockNote({
    schema,
    initialContent: props.body,
  });


  return (
    <BlockNoteView
      data-changing-font-demo
      slashMenu={false}
      editor={editor}
      theme={'light'}
      formattingToolbar={false}
      editable={false}
    >

    </BlockNoteView>
  );
}
