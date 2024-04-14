import '@blocknote/core/fonts/inter.css';
import { BlockNoteView, useCreateBlockNote } from '@blocknote/react';
import '@blocknote/react/style.css';

export function ArticleViewer() {
  const editor = useCreateBlockNote({
    initialContent: content,
  });

  return (
    <BlockNoteView
      data-changing-font-demo
      theme={'light'}
      editor={editor}
      editable={false}
    />
  );
}

const content = [
  {
    id: '11a4492e-d8a5-47d9-a0a8-803d4811e5fc',
    type: 'heading',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
      level: 2,
    },
    content: [
      {
        type: 'text',
        text: 'Иллюстрации',
        styles: {
          bold: true,
        },
      },
    ],
    children: [],
  },
  {
    id: '4349e28f-eb80-4ea7-ae25-411c4161c6eb',
    type: 'paragraph',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: '\nПравильно подобранные иллюстрации делают сайт живым. Их главная задача — не просто заполнить пустое место, а вызвать эмоции и связать их с брендом. Авторские иллюстрации помогут сделать сайт узнаваемым. Их можно использовать в заголовках, иконках и при создании анимации.\n',
        styles: {},
      },
    ],
    children: [
      {
        id: '218c4b46-bd20-4895-992b-aff138729cc7',
        type: 'paragraph',
        props: {
          textColor: 'default',
          backgroundColor: 'blue',
          textAlignment: 'left',
        },
        content: [
          {
            type: 'text',
            text: 'Иллюстрации помогут сделать дружелюбным даже самый минималистичный дизайн.',
            styles: {
              bold: true,
            },
          },
        ],
        children: [],
      },
    ],
  },
  {
    id: '0aa65bd2-f9fa-4048-a604-a62b4b269200',
    type: 'paragraph',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: '\nПри наполнении сайта иллюстрациями важно помнить о единообразии и не переусердствовать. Самые красивые иллюстрации вызовут отторжение, если их будет слишком много.',
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: 'face1c34-4c8d-4e12-9937-317963c55ba1',
    type: 'heading',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
      level: 2,
    },
    content: [
      {
        type: 'text',
        text: 'Типографика',
        styles: {
          bold: true,
        },
      },
    ],
    children: [],
  },
  {
    id: '8ae542b6-6f1d-4ff9-9535-dcd80a3ee975',
    type: 'paragraph',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: '\nТипографика играет большую роль в формировании идентичности бренда. От нее зависит, как пользователи будут воспринимать текст.\n',
        styles: {},
      },
    ],
    children: [
      {
        id: '07df62d6-3bcc-4287-96ea-b229862e9e7f',
        type: 'paragraph',
        props: {
          textColor: 'default',
          backgroundColor: 'default',
          textAlignment: 'left',
        },
        content: [
          {
            type: 'text',
            text: 'У каждого шрифта свой характер. Постарайтесь выбрать тот шрифт, который передаст настроение текста за счет графического образа.',
            styles: {
              bold: true,
              backgroundColor: 'blue',
            },
          },
        ],
        children: [],
      },
    ],
  },
  {
    id: '54c8ddc8-91d0-4955-b8c3-6f6ffaaa8efd',
    type: 'paragraph',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [],
    children: [],
  },
  {
    id: '2cb8b19b-adae-484e-9b76-d5d382dfd4c5',
    type: 'bulletListItem',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: 'Антиквенные шрифты',
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: '2457b802-cb31-44e1-909d-23e56bdfcca2',
    type: 'bulletListItem',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: 'Гротескные шрифты',
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: '92c4b195-7cd9-49b5-ab86-d1f5124131a2',
    type: 'bulletListItem',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: 'Декоративные шрифты',
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: 'b7e133cf-bbcf-41f7-8c9b-54d7f374c958',
    type: 'bulletListItem',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: 'Рукописные шрифты',
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: 'b11616c1-1d7a-48f6-80b4-68d44a9feadc',
    type: 'image',
    props: {
      backgroundColor: 'default',
      textAlignment: 'left',
      url: 'https://habrastorage.org/r/w1560/web/d59/dc0/87f/d59dc087f5d64d16b3fd75e214298993.png',
      caption: 'Caption',
      width: '100%',
    },
    children: [],
  },
  {
    id: '11a4492e-d8a5-47d9-a0a8-803d4811e5fc',
    type: 'heading',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
      level: 2,
    },
    content: [
      {
        type: 'text',
        text: 'Иллюстрации',
        styles: {
          bold: true,
        },
      },
    ],
    children: [],
  },
  {
    id: '4349e28f-eb80-4ea7-ae25-411c4161c6eb',
    type: 'paragraph',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: '\nПравильно подобранные иллюстрации делают сайт живым. Их главная задача — не просто заполнить пустое место, а вызвать эмоции и связать их с брендом. Авторские иллюстрации помогут сделать сайт узнаваемым. Их можно использовать в заголовках, иконках и при создании анимации.\n',
        styles: {},
      },
    ],
    children: [
      {
        id: '218c4b46-bd20-4895-992b-aff138729cc7',
        type: 'paragraph',
        props: {
          textColor: 'default',
          backgroundColor: 'blue',
          textAlignment: 'left',
        },
        content: [
          {
            type: 'text',
            text: 'Иллюстрации помогут сделать дружелюбным даже самый минималистичный дизайн.',
            styles: {
              bold: true,
            },
          },
        ],
        children: [],
      },
    ],
  },
  {
    id: '0aa65bd2-f9fa-4048-a604-a62b4b269200',
    type: 'paragraph',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: '\nПри наполнении сайта иллюстрациями важно помнить о единообразии и не переусердствовать. Самые красивые иллюстрации вызовут отторжение, если их будет слишком много.',
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: 'face1c34-4c8d-4e12-9937-317963c55ba1',
    type: 'heading',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
      level: 2,
    },
    content: [
      {
        type: 'text',
        text: 'Типографика',
        styles: {
          bold: true,
        },
      },
    ],
    children: [],
  },
  {
    id: '8ae542b6-6f1d-4ff9-9535-dcd80a3ee975',
    type: 'paragraph',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: '\nТипографика играет большую роль в формировании идентичности бренда. От нее зависит, как пользователи будут воспринимать текст.\n',
        styles: {},
      },
    ],
    children: [
      {
        id: '07df62d6-3bcc-4287-96ea-b229862e9e7f',
        type: 'paragraph',
        props: {
          textColor: 'default',
          backgroundColor: 'default',
          textAlignment: 'left',
        },
        content: [
          {
            type: 'text',
            text: 'У каждого шрифта свой характер. Постарайтесь выбрать тот шрифт, который передаст настроение текста за счет графического образа.',
            styles: {
              bold: true,
              backgroundColor: 'blue',
            },
          },
        ],
        children: [],
      },
    ],
  },
  {
    id: '54c8ddc8-91d0-4955-b8c3-6f6ffaaa8efd',
    type: 'paragraph',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [],
    children: [],
  },
  {
    id: '2cb8b19b-adae-484e-9b76-d5d382dfd4c5',
    type: 'bulletListItem',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: 'Антиквенные шрифты',
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: '2457b802-cb31-44e1-909d-23e56bdfcca2',
    type: 'bulletListItem',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: 'Гротескные шрифты',
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: '92c4b195-7cd9-49b5-ab86-d1f5124131a2',
    type: 'bulletListItem',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: 'Декоративные шрифты',
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: 'b7e133cf-bbcf-41f7-8c9b-54d7f374c958',
    type: 'bulletListItem',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: 'Рукописные шрифты',
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: 'b11616c1-1d7a-48f6-80b4-68d44a9feadc',
    type: 'image',
    props: {
      backgroundColor: 'default',
      textAlignment: 'left',
      url: 'https://habrastorage.org/r/w1560/web/d59/dc0/87f/d59dc087f5d64d16b3fd75e214298993.png',
      caption: '',
      width: '100%',
    },
    children: [],
  },
  {
    id: '11a4492e-d8a5-47d9-a0a8-803d4811e5fc',
    type: 'heading',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
      level: 2,
    },
    content: [
      {
        type: 'text',
        text: 'Иллюстрации',
        styles: {
          bold: true,
        },
      },
    ],
    children: [],
  },
  {
    id: '4349e28f-eb80-4ea7-ae25-411c4161c6eb',
    type: 'paragraph',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: '\nПравильно подобранные иллюстрации делают сайт живым. Их главная задача — не просто заполнить пустое место, а вызвать эмоции и связать их с брендом. Авторские иллюстрации помогут сделать сайт узнаваемым. Их можно использовать в заголовках, иконках и при создании анимации.\n',
        styles: {},
      },
    ],
    children: [
      {
        id: '218c4b46-bd20-4895-992b-aff138729cc7',
        type: 'paragraph',
        props: {
          textColor: 'default',
          backgroundColor: 'blue',
          textAlignment: 'left',
        },
        content: [
          {
            type: 'text',
            text: 'Иллюстрации помогут сделать дружелюбным даже самый минималистичный дизайн.',
            styles: {
              bold: true,
            },
          },
        ],
        children: [],
      },
    ],
  },
  {
    id: '0aa65bd2-f9fa-4048-a604-a62b4b269200',
    type: 'paragraph',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: '\nПри наполнении сайта иллюстрациями важно помнить о единообразии и не переусердствовать. Самые красивые иллюстрации вызовут отторжение, если их будет слишком много.',
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: 'face1c34-4c8d-4e12-9937-317963c55ba1',
    type: 'heading',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
      level: 2,
    },
    content: [
      {
        type: 'text',
        text: 'Типографика',
        styles: {
          bold: true,
        },
      },
    ],
    children: [],
  },
  {
    id: '8ae542b6-6f1d-4ff9-9535-dcd80a3ee975',
    type: 'paragraph',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: '\nТипографика играет большую роль в формировании идентичности бренда. От нее зависит, как пользователи будут воспринимать текст.\n',
        styles: {},
      },
    ],
    children: [
      {
        id: '07df62d6-3bcc-4287-96ea-b229862e9e7f',
        type: 'paragraph',
        props: {
          textColor: 'default',
          backgroundColor: 'default',
          textAlignment: 'left',
        },
        content: [
          {
            type: 'text',
            text: 'У каждого шрифта свой характер. Постарайтесь выбрать тот шрифт, который передаст настроение текста за счет графического образа.',
            styles: {
              bold: true,
              backgroundColor: 'blue',
            },
          },
        ],
        children: [],
      },
    ],
  },
  {
    id: '54c8ddc8-91d0-4955-b8c3-6f6ffaaa8efd',
    type: 'paragraph',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [],
    children: [],
  },
  {
    id: '2cb8b19b-adae-484e-9b76-d5d382dfd4c5',
    type: 'bulletListItem',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: 'Антиквенные шрифты',
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: '2457b802-cb31-44e1-909d-23e56bdfcca2',
    type: 'bulletListItem',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: 'Гротескные шрифты',
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: '92c4b195-7cd9-49b5-ab86-d1f5124131a2',
    type: 'bulletListItem',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: 'Декоративные шрифты',
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: 'b7e133cf-bbcf-41f7-8c9b-54d7f374c958',
    type: 'bulletListItem',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: 'Рукописные шрифты',
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: 'b11616c1-1d7a-48f6-80b4-68d44a9feadc',
    type: 'image',
    props: {
      backgroundColor: 'default',
      textAlignment: 'left',
      url: 'https://habrastorage.org/r/w1560/web/d59/dc0/87f/d59dc087f5d64d16b3fd75e214298993.png',
      caption: '',
      width: '100%',
    },
    children: [],
  },
  {
    id: '11a4492e-d8a5-47d9-a0a8-803d4811e5fc',
    type: 'heading',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
      level: 2,
    },
    content: [
      {
        type: 'text',
        text: 'Иллюстрации',
        styles: {
          bold: true,
        },
      },
    ],
    children: [],
  },
  {
    id: '4349e28f-eb80-4ea7-ae25-411c4161c6eb',
    type: 'paragraph',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: '\nПравильно подобранные иллюстрации делают сайт живым. Их главная задача — не просто заполнить пустое место, а вызвать эмоции и связать их с брендом. Авторские иллюстрации помогут сделать сайт узнаваемым. Их можно использовать в заголовках, иконках и при создании анимации.\n',
        styles: {},
      },
    ],
    children: [
      {
        id: '218c4b46-bd20-4895-992b-aff138729cc7',
        type: 'paragraph',
        props: {
          textColor: 'default',
          backgroundColor: 'blue',
          textAlignment: 'left',
        },
        content: [
          {
            type: 'text',
            text: 'Иллюстрации помогут сделать дружелюбным даже самый минималистичный дизайн.',
            styles: {
              bold: true,
            },
          },
        ],
        children: [],
      },
    ],
  },
  {
    id: '0aa65bd2-f9fa-4048-a604-a62b4b269200',
    type: 'paragraph',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: '\nПри наполнении сайта иллюстрациями важно помнить о единообразии и не переусердствовать. Самые красивые иллюстрации вызовут отторжение, если их будет слишком много.',
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: 'face1c34-4c8d-4e12-9937-317963c55ba1',
    type: 'heading',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
      level: 2,
    },
    content: [
      {
        type: 'text',
        text: 'Типографика',
        styles: {
          bold: true,
        },
      },
    ],
    children: [],
  },
  {
    id: '8ae542b6-6f1d-4ff9-9535-dcd80a3ee975',
    type: 'paragraph',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: '\nТипографика играет большую роль в формировании идентичности бренда. От нее зависит, как пользователи будут воспринимать текст.\n',
        styles: {},
      },
    ],
    children: [
      {
        id: '07df62d6-3bcc-4287-96ea-b229862e9e7f',
        type: 'paragraph',
        props: {
          textColor: 'default',
          backgroundColor: 'default',
          textAlignment: 'left',
        },
        content: [
          {
            type: 'text',
            text: 'У каждого шрифта свой характер. Постарайтесь выбрать тот шрифт, который передаст настроение текста за счет графического образа.',
            styles: {
              bold: true,
              backgroundColor: 'blue',
            },
          },
        ],
        children: [],
      },
    ],
  },
  {
    id: '54c8ddc8-91d0-4955-b8c3-6f6ffaaa8efd',
    type: 'paragraph',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [],
    children: [],
  },
  {
    id: '2cb8b19b-adae-484e-9b76-d5d382dfd4c5',
    type: 'bulletListItem',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: 'Антиквенные шрифты',
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: '2457b802-cb31-44e1-909d-23e56bdfcca2',
    type: 'bulletListItem',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: 'Гротескные шрифты',
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: '92c4b195-7cd9-49b5-ab86-d1f5124131a2',
    type: 'bulletListItem',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: 'Декоративные шрифты',
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: 'b7e133cf-bbcf-41f7-8c9b-54d7f374c958',
    type: 'bulletListItem',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: 'Рукописные шрифты',
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: 'b11616c1-1d7a-48f6-80b4-68d44a9feadc',
    type: 'image',
    props: {
      backgroundColor: 'default',
      textAlignment: 'left',
      url: 'https://habrastorage.org/r/w1560/web/d59/dc0/87f/d59dc087f5d64d16b3fd75e214298993.png',
      caption: '',
      width: '100%',
    },
    children: [],
  },
  {
    id: '11a4492e-d8a5-47d9-a0a8-803d4811e5fc',
    type: 'heading',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
      level: 2,
    },
    content: [
      {
        type: 'text',
        text: 'Иллюстрации',
        styles: {
          bold: true,
        },
      },
    ],
    children: [],
  },
  {
    id: '4349e28f-eb80-4ea7-ae25-411c4161c6eb',
    type: 'paragraph',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: '\nПравильно подобранные иллюстрации делают сайт живым. Их главная задача — не просто заполнить пустое место, а вызвать эмоции и связать их с брендом. Авторские иллюстрации помогут сделать сайт узнаваемым. Их можно использовать в заголовках, иконках и при создании анимации.\n',
        styles: {},
      },
    ],
    children: [
      {
        id: '218c4b46-bd20-4895-992b-aff138729cc7',
        type: 'paragraph',
        props: {
          textColor: 'default',
          backgroundColor: 'blue',
          textAlignment: 'left',
        },
        content: [
          {
            type: 'text',
            text: 'Иллюстрации помогут сделать дружелюбным даже самый минималистичный дизайн.',
            styles: {
              bold: true,
            },
          },
        ],
        children: [],
      },
    ],
  },
  {
    id: '0aa65bd2-f9fa-4048-a604-a62b4b269200',
    type: 'paragraph',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: '\nПри наполнении сайта иллюстрациями важно помнить о единообразии и не переусердствовать. Самые красивые иллюстрации вызовут отторжение, если их будет слишком много.',
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: 'face1c34-4c8d-4e12-9937-317963c55ba1',
    type: 'heading',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
      level: 2,
    },
    content: [
      {
        type: 'text',
        text: 'Типографика',
        styles: {
          bold: true,
        },
      },
    ],
    children: [],
  },
  {
    id: '8ae542b6-6f1d-4ff9-9535-dcd80a3ee975',
    type: 'paragraph',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: '\nТипографика играет большую роль в формировании идентичности бренда. От нее зависит, как пользователи будут воспринимать текст.\n',
        styles: {},
      },
    ],
    children: [
      {
        id: '07df62d6-3bcc-4287-96ea-b229862e9e7f',
        type: 'paragraph',
        props: {
          textColor: 'default',
          backgroundColor: 'default',
          textAlignment: 'left',
        },
        content: [
          {
            type: 'text',
            text: 'У каждого шрифта свой характер. Постарайтесь выбрать тот шрифт, который передаст настроение текста за счет графического образа.',
            styles: {
              bold: true,
              backgroundColor: 'blue',
            },
          },
        ],
        children: [],
      },
    ],
  },
  {
    id: '54c8ddc8-91d0-4955-b8c3-6f6ffaaa8efd',
    type: 'paragraph',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [],
    children: [],
  },
  {
    id: '2cb8b19b-adae-484e-9b76-d5d382dfd4c5',
    type: 'bulletListItem',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: 'Антиквенные шрифты',
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: '2457b802-cb31-44e1-909d-23e56bdfcca2',
    type: 'bulletListItem',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: 'Гротескные шрифты',
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: '92c4b195-7cd9-49b5-ab86-d1f5124131a2',
    type: 'bulletListItem',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: 'Декоративные шрифты',
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: 'b7e133cf-bbcf-41f7-8c9b-54d7f374c958',
    type: 'bulletListItem',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: 'Рукописные шрифты',
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: 'b11616c1-1d7a-48f6-80b4-68d44a9feadc',
    type: 'image',
    props: {
      backgroundColor: 'default',
      textAlignment: 'left',
      url: 'https://habrastorage.org/r/w1560/web/d59/dc0/87f/d59dc087f5d64d16b3fd75e214298993.png',
      caption: '',
      width: '100%',
    },
    children: [],
  },
  {
    id: '11a4492e-d8a5-47d9-a0a8-803d4811e5fc',
    type: 'heading',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
      level: 2,
    },
    content: [
      {
        type: 'text',
        text: 'Иллюстрации',
        styles: {
          bold: true,
        },
      },
    ],
    children: [],
  },
  {
    id: '4349e28f-eb80-4ea7-ae25-411c4161c6eb',
    type: 'paragraph',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: '\nПравильно подобранные иллюстрации делают сайт живым. Их главная задача — не просто заполнить пустое место, а вызвать эмоции и связать их с брендом. Авторские иллюстрации помогут сделать сайт узнаваемым. Их можно использовать в заголовках, иконках и при создании анимации.\n',
        styles: {},
      },
    ],
    children: [
      {
        id: '218c4b46-bd20-4895-992b-aff138729cc7',
        type: 'paragraph',
        props: {
          textColor: 'default',
          backgroundColor: 'blue',
          textAlignment: 'left',
        },
        content: [
          {
            type: 'text',
            text: 'Иллюстрации помогут сделать дружелюбным даже самый минималистичный дизайн.',
            styles: {
              bold: true,
            },
          },
        ],
        children: [],
      },
    ],
  },
  {
    id: '0aa65bd2-f9fa-4048-a604-a62b4b269200',
    type: 'paragraph',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: '\nПри наполнении сайта иллюстрациями важно помнить о единообразии и не переусердствовать. Самые красивые иллюстрации вызовут отторжение, если их будет слишком много.',
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: 'face1c34-4c8d-4e12-9937-317963c55ba1',
    type: 'heading',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
      level: 2,
    },
    content: [
      {
        type: 'text',
        text: 'Типографика',
        styles: {
          bold: true,
        },
      },
    ],
    children: [],
  },
  {
    id: '8ae542b6-6f1d-4ff9-9535-dcd80a3ee975',
    type: 'paragraph',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: '\nТипографика играет большую роль в формировании идентичности бренда. От нее зависит, как пользователи будут воспринимать текст.\n',
        styles: {},
      },
    ],
    children: [
      {
        id: '07df62d6-3bcc-4287-96ea-b229862e9e7f',
        type: 'paragraph',
        props: {
          textColor: 'default',
          backgroundColor: 'default',
          textAlignment: 'left',
        },
        content: [
          {
            type: 'text',
            text: 'У каждого шрифта свой характер. Постарайтесь выбрать тот шрифт, который передаст настроение текста за счет графического образа.',
            styles: {
              bold: true,
              backgroundColor: 'blue',
            },
          },
        ],
        children: [],
      },
    ],
  },
  {
    id: '54c8ddc8-91d0-4955-b8c3-6f6ffaaa8efd',
    type: 'paragraph',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [],
    children: [],
  },
  {
    id: '2cb8b19b-adae-484e-9b76-d5d382dfd4c5',
    type: 'bulletListItem',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: 'Антиквенные шрифты',
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: '2457b802-cb31-44e1-909d-23e56bdfcca2',
    type: 'bulletListItem',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: 'Гротескные шрифты',
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: '92c4b195-7cd9-49b5-ab86-d1f5124131a2',
    type: 'bulletListItem',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: 'Декоративные шрифты',
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: 'b7e133cf-bbcf-41f7-8c9b-54d7f374c958',
    type: 'bulletListItem',
    props: {
      textColor: 'default',
      backgroundColor: 'default',
      textAlignment: 'left',
    },
    content: [
      {
        type: 'text',
        text: 'Рукописные шрифты',
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: 'b11616c1-1d7a-48f6-80b4-68d44a9feadc',
    type: 'image',
    props: {
      backgroundColor: 'default',
      textAlignment: 'left',
      url: 'https://habrastorage.org/r/w1560/web/d59/dc0/87f/d59dc087f5d64d16b3fd75e214298993.png',
      caption: '',
      width: '100%',
    },
    children: [],
  },
];
