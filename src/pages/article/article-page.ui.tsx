import { ArticleInfo } from '~widgets/article-info';
import { ArticleViewer } from '~widgets/article-viewer';

export function ArticlePage() {
  return (
    <div className="max-w-[1000px] mx-auto my-20 bg-[white] px-10">
      <ArticleInfo/>
      <ArticleViewer />
    </div>
  );
}
