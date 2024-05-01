import {
  BasicTextStyleButton,
  BlockTypeSelect,
  ColorStyleButton,
  CreateLinkButton,
  FormattingToolbar,
  FormattingToolbarController,
  ImageCaptionButton,
  NestBlockButton,
  ReplaceImageButton,
  TextAlignButton,
  UnnestBlockButton,
} from '@blocknote/react';
import { CodeButton } from '../code-toolbar';
import { CreateCommentButton } from '@defensestation/blocknote-comments';

export const CustomToolbar = () => (
  <FormattingToolbarController
    formattingToolbar={() => (
      <FormattingToolbar>
        <BlockTypeSelect key={'blockTypeSelect'} />
        <ImageCaptionButton key={'imageCaptionButton'} />
        <ReplaceImageButton key={'replaceImageButton'} />
        <BasicTextStyleButton basicTextStyle={'bold'} key={'boldStyleButton'} />
        <BasicTextStyleButton
          basicTextStyle={'italic'}
          key={'italicStyleButton'}
        />
        <BasicTextStyleButton
          basicTextStyle={'underline'}
          key={'underlineStyleButton'}
        />
        <BasicTextStyleButton
          basicTextStyle={'strike'}
          key={'strikeStyleButton'}
        />
        <CodeButton />
        <CreateCommentButton key={'createCommentButtin'} />
        <TextAlignButton textAlignment={'left'} key={'textAlignLeftButton'} />
        <TextAlignButton
          textAlignment={'center'}
          key={'textAlignCenterButton'}
        />
        <TextAlignButton textAlignment={'right'} key={'textAlignRightButton'} />
        <ColorStyleButton key={'colorStyleButton'} />
        <NestBlockButton key={'nestBlockButton'} />
        <UnnestBlockButton key={'unnestBlockButton'} />
        <CreateLinkButton key={'createLinkButton'} />
      </FormattingToolbar>
    )}
  />
);
