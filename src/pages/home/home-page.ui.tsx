import ArticlesList from '~widgets/articles-list/articles-list.ui';
import { SliderBanner } from '~widgets/slider-banner';

export function HomePage() {
  return (
    <div className="mt-20">
      <SliderBanner />
      <ArticlesList />
    </div>
  );
}
