import { CircularProgress, Container, Divider } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { articleQueries } from '~entities/article';
import $api from '~shared/api';
import { withSuspense } from '~shared/lib/react';
import { ArticleInfo } from '~widgets/article-info';
import { ArticleViewer } from '~widgets/article-viewer';
import { withErrorBoundary } from 'react-error-boundary';
import { ErrorHandler } from '~shared/ui/error';
import { CommentList } from '~widgets/comment-list';
function Page() {
  const { id } = useParams();
  const [preLoad, setPreLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreLoad(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const {
    data: articleData,
    isLoading,
    isError,
  } = articleQueries.useGetArticleDetail(parseInt(id));

  // const [articleData, setArticleData] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchArticle = async () => {
  //     try {
  //       const response = await $api.get(`articles/${id}/`);
  //       setArticleData(response);
  //       setIsLoading(false);
  //     } catch (error) {
  //       setError(error);
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchArticle();
  // }, []);

  articleQueries.useUpdateArticleView(Number(id));

  if (isLoading) {
    return (
      <div>
        <CircularProgress className="w-[50px] mt-20 mx-auto flex justify-center" />
        <p className="text-center mt-2">Загрузка статьи.</p>
      </div>
    );
  }

  if (isError || !articleData) {
    return (
      <div className="my-20 text-center">Error fetching article data.</div>
    );
  }

  return (
    <Container maxWidth="md" className="mx-auto my-[65px]">
      {articleData && (
        <div className="max-w-[95%] bg-[white] px-5 mb-5">
          <ArticleInfo article={articleData.data} />
          <Divider />
          {preLoad ? (
            <div className="flex flex-col items-center gap-3 my-20">
              <CircularProgress />
              Загрузка...
            </div>
          ) : (
            <ArticleViewer body={articleData.data.body} />
          )}
        </div>
      )}
      <CommentList/>
    </Container>
  );
}

function Loader() {
  return <div className="my-20">loading...</div>;
}
const SuspensedPage = withSuspense(Page, {
  fallback: <Loader />,
});

export const ArticlePage = withErrorBoundary(SuspensedPage, {
  fallbackRender: ({ error }) => <ErrorHandler error={error} />,
});
