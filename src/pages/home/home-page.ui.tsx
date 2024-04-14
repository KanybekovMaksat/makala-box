import { SliderBanner } from '~widgets/slider-banner';
import { ArticlesList } from '~widgets/articles-list';
import { Link } from 'react-router-dom';
import { pathKeys } from '~shared/lib/react-router';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export function HomePage() {
  return (
    <div className="max-w-[1000px] mx-5 md:mx-auto my-24">
      <SliderBanner />

      <h2 className="my-3 text-2xl font-bold">Популярные статьи </h2>
      <ArticlesList />
      <Link
        className="flex justify-end underline text-pc-500 my-3"
        to={pathKeys.feed()}
      >
        Смотреть больше
        <NavigateNextIcon />
      </Link>
    </div>
  );
}
