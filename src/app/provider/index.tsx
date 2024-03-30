import '~shared/index.css';
import { TopBar } from '~widgets/top-bar';
import { ArticlesList } from '~widgets/articles-list';

const Provider = () => {
  return (
    <>
      <TopBar />
      <div className="flex flex-col items-center m-10 mt-20">
        <ArticlesList />
      </div>
    </>
  );
};

export default Provider;
