import { CircularProgress, Divider } from '@mui/material';
import { useParams } from 'react-router-dom';
import { articleQueries } from '~entities/article';
import { ArticleInfo } from '~widgets/article-info';
import { ArticleViewer } from '~widgets/article-viewer';

export function ArticlePage() {
  const { id } = useParams();
  const {
    data: articleData,
    isSuccess,
    isLoading,
    isError,
  } = articleQueries.useGetArticleDetail(Number(id));

  articleQueries.useUpdateArticleView(Number(id));

  if (isLoading) {
    return (
      <div>
        <CircularProgress className="w-[50px] mt-20 mx-auto flex justify-center" />
        <p className="text-center mt-2">Загрузка статьи.</p>
      </div>
    );
  }

  if (isError || !isSuccess || !articleData) {
    return (
      <div className="my-20 text-center">Error fetching article data.</div>
    );
  }

  return (
    <div className="max-w-[890px] mx-auto my-[65px] bg-[white] px-10">
      {isSuccess && articleData && (
        <>
          <ArticleInfo article={articleData.data} />
          <Divider />
          <ArticleViewer body={articleData.data.body} />
        </>
      )}
    </div>
  );
}
