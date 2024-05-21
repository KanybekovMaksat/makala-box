import { ArticlesList } from '~widgets/articles-list';
import { IntroBlock } from '~widgets/intro-block';
import { Container } from '@mui/material';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  return (
    <>
      <Helmet>
        <meta
          property="og:title"
          content="MakalaBox - платформа для обмена знаниями между преподавателями и студентами колледжей. Здесь они могут публиковать статьи по различным темам."
        />
        <meta
          property="og:description"
          content="Платформа Makalabox предоставляет удобное решение для публикации научных статей. Присоединяйтесь к нашему сообществу и делитесь своими исследованиями."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.makalabox.com/" />
        <meta
          property="og:image"
          content="https://api.makalabox.com/media/article/photos/2024/05/14/33bd14ef-220b-450c-99df-c92da7f7c540.png"
        />
      </Helmet>
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
              <strong className="font-bold text-second-100 ">
                Makala Box:
              </strong>{' '}
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
    </>
  );
}
