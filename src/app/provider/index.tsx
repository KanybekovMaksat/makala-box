import '~shared/index.css';
import { ArticlesList } from '~widgets/articles-list';

const Provider = () => {
  return (
    <div className="flex flex-col items-center m-10">
      <ArticlesList />
    </div>
  );
};

export default Provider;
