interface ICard {
  image: string;
  title: string;
  description: string;
}

const cards: ICard[] = [
  {
    image: '/public/Reading.svg',
    title: 'Знания',
    description: 'Архив проверенных и достоверных статей',
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
    image: '/public/oc-puzzle.svg',
    title: 'Удобство',
    description: 'Продуманный и современный дизайн',
  },
];

function CardItem({ image, title, description }) {
  return (
    <div className="max-w-[180px] max-h-[220px] p-3 py-4 hover:text-second-100 bg-[white] border-2 border-[#eae8e885] hover:shadow-lg hover:shadow-second-100/30 hover:cursor-grab duration-300 hover:border-pc-200 rounded-md">
      <img src={image} alt="" className="h-20 mx-auto" />
      <h3 className="text-lg font-semibold my-1">{title}</h3>
      <p className="text-xs text-pc-500 font-medium">{description}</p>
    </div>
  );
}

export function IntroBlock() {
  return (
    <div className="my-10">
      <div className=" bg-[white] my-2  p-5 rounded-md flex flex-col-reverse md:flex-row items-center gap-5 translate-y-5 md:translate-y-px border-2 border-[#eae8e885]">
        <img
          src="/public/typing.svg"
          alt=""
          className="h-[150px] translate-y-px"
        />
        <div>
          <h2 className="text-[50px] font-bold text-center leading-10 text-pc-500">
            Читай, пиши, обсуждай.
          </h2>
          <p className="text-2xl font-bold text-center text-pc-500 mt-2">
            <strong className="font-bold text-second-100 ">Makala Box:</strong>{' '}
            Открой коробку знаний
          </p>
        </div>
      </div>
      <div className="hidden md:flex justify-between">
        {cards.map((card, index) => (
          <CardItem key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
