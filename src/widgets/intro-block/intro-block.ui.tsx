interface ICard {
  image: string;
  title: string;
  description: string;
}

const cards: ICard[] = [
  {
    image: '/public/Reading.svg',
    title: 'Знания',
    description: 'База проверенных и достоверных статей',
  },
  {
    image: '/public/knowledge.svg',
    title: 'Разнообразие',
    description: 'Статьи на самые разные темы.',
  },
  {
    image: '/public/oc-project-development.svg',
    title: 'Авторство',
    description: 'Публикация своих исследований и опыта',
  },
  {
    image: '/public/Teamworks.svg',
    title: 'Сообщество',
    description: 'Обсуждение и обмен мнениями с другими.',
  },
  {
    image: '/public/oc-on-the-laptop.svg',
    title: 'Образование',
    description: 'Проходи курсы на нашей платформе.',
  },
];

function CardItem({ image, title, description }) {
  return (
    <div className="min-w-[200px] max-w-[200px] min-h-[200px] max-h-[200px] p-3 py-4 hover:text-second-100 bg-[white] border-2 border-[#eae8e885] hover:shadow-lg hover:shadow-second-100/30 hover:cursor-grab duration-300 hover:border-pc-200 rounded-md">
      <img src={image} alt="" className="h-20 mx-auto" />
      <h3 className="text-lg font-semibold my-1">{title}</h3>
      <p className="text-xs text-pc-500 font-medium">{description}</p>
    </div>
  );
}

export function IntroBlock() {
  return (
    <div className="my-10">
      <div className="hidden md:flex justify-between">
        {cards.map((card, index) => (
          <CardItem key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
