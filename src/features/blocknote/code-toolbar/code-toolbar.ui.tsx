import { BlockSchema, InlineContentSchema, StyleSchema } from '@blocknote/core';
import {
  ToolbarButton,
  useBlockNoteEditor,
  useEditorContentOrSelectionChange,
} from '@blocknote/react';
import { useState } from 'react';
import { RiCodeFill } from 'react-icons/ri';

export function CodeButton() {
  const editor = useBlockNoteEditor<
    BlockSchema,
    InlineContentSchema,
    StyleSchema
  >();

  const [isSelected, setIsSelected] = useState<boolean>(
    editor.getActiveStyles().code === 'rgba(135,131,120,.15)'
  );

  useEditorContentOrSelectionChange(() => {
    setIsSelected(editor.getActiveStyles().code === 'rgba(135,131,120,.15)');
  }, editor);

  const toggleCodeStyle = () => {
    const currentStyles = editor.getActiveStyles();
    if (currentStyles.code === 'rgba(135,131,120,.15)') {
      editor.removeStyles({ code: '' });
      setIsSelected(false);
    } else {
      editor.addStyles({
        code: 'rgba(135,131,120,.15)',
      });
      setIsSelected(true);
    }
  };

  return (
    <ToolbarButton
      mainTooltip={'Code'}
      icon={RiCodeFill}
      onClick={toggleCodeStyle}
      isSelected={isSelected}
    />
  );
}
