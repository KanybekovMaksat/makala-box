import { ArticlesList } from '~widgets/articles-list';
import { FilterSide } from '~widgets/filter-side';

export function FeedPage() {
  return (
    <div className='flex flex-col-reverse md:flex-row md:w-[80%] my-24 mx-4 md:mx-auto gap-10'>
      <div className=''>
      <ArticlesList />
      </div>
      <div className='min-w-[300px]'>
      <FilterSide />
      </div>
    </div>
  );
}
