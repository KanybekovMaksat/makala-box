import '@blocknote/core/fonts/inter.css';
import {
  BlockNoteView,
  DefaultReactSuggestionItem,
  SuggestionMenuController,
  SuggestionMenuProps,
  useCreateBlockNote,
} from '@blocknote/react';
import '@blocknote/react/style.css';

export function CreateArticle() {
  const editor = useCreateBlockNote({
    initialContent: [
      {
        type: 'paragraph',
      },
    ],
  });

  return (
    <BlockNoteView
      data-editor-mode
      slashMenu={false}
      editor={editor}
      theme={'light'}
    >
      <SuggestionMenuController
        triggerCharacter={'/'}
        suggestionMenuComponent={CustomSlashMenu}
      />
    </BlockNoteView>
  );
}

function getTranslatedСategory(title: string): string {
  switch (title) {
    case 'Headings':
      return 'Заголовки';
    case 'Basic blocks':
      return 'Базовые блоки';
    case 'Advanced':
      return 'Продвинутый';
    case 'Media':
      return 'Изображения';
    default:
      return title;
  }
}

function getTranslatedText(title: string): string {
  switch (title) {
    case 'Heading 1':
      return 'Заголовок 1';
    case 'Heading 2':
      return 'Заголовок 2';
    case 'Heading 3':
      return 'Заголовок 3';
    case 'Numbered List':
      return 'Нумерованный список';
    case 'Bullet List':
      return 'Маркированный список';
    case 'Paragraph':
      return 'Параграф';
    case 'Table':
      return 'Таблица';
    case 'Image':
      return 'Вставить изображение';
    default:
      return title;
  }
}

function CustomSlashMenu(
  props: SuggestionMenuProps<DefaultReactSuggestionItem>
) {
  const categories = Array.from(new Set(props.items.map((item) => item.group)));

  return (
    <div className="slash-menu">
      {categories.map((category) => (
        <div key={category}>
          <div className="text-sm font-medium p-2">
            {getTranslatedСategory(category)}
          </div>
          {props.items.map(
            (item, index) =>
              item.group === category && (
                <div
                  key={index}
                  className={`slash-menu-item p-3${
                    props.selectedIndex === index ? ' selected' : ''
                  }`}
                  onClick={() => {
                    props.onItemClick?.(item);
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className=" bg-[lightgray] p-1 rounded slash-icon">
                      {item.icon}
                    </div>
                    <div className="text-md text-md">
                      {getTranslatedText(item.title)}
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      ))}
    </div>
  );
}
