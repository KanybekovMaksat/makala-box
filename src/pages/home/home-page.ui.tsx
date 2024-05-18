import { ArticlesList } from '~widgets/articles-list';
import { IntroBlock } from '~widgets/intro-block';
import { Container } from '@mui/material';

export function HomePage() {
  return (
    <Container maxWidth="md" className="md:mx-auto my-20">
      <div className="w-[95%] md:w-[90%] mx-auto bg-[white] my-5  p-5 rounded-md flex flex-col-reverse md:flex-row items-center md:justify-center gap-5 translate-y-5 md:translate-y-px border-2 border-[#eae8e885]">
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
      <IntroBlock />
      <h2 className="mt-14 mb-5 text-center text-2xl font-bold">
        Новые статьи
      </h2>
      <ArticlesList />
    </Container>
  );
}
