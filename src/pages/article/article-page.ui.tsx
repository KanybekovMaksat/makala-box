import { CircularProgress, Container, Divider } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { articleQueries } from '~entities/article';
import { withSuspense } from '~shared/lib/react';
import { ArticleInfo } from '~widgets/article-info';
import { ArticleViewer } from '~widgets/article-viewer';
import { withErrorBoundary } from 'react-error-boundary';
import { ErrorHandler } from '~shared/ui/error';
import { CommentList } from '~widgets/comment-list';
import { CommentForm } from '~widgets/comment-form';
import { Helmet } from 'react-helmet-async';

function Page() {
  const { id } = useParams();
  const [preLoad, setPreLoad] = useState(true);

  useEffect(() => {
    setPreLoad(false);
  }, []);

  

  const {
    data: articleData,
    isLoading,
    isError,
  } = articleQueries.useGetArticleDetail(parseInt(id));

  articleQueries.useUpdateArticleView(Number(id));

  useEffect(() => {
    if (articleData) {
      document.title = articleData.data.title;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', articleData.data.subtitle);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = articleData.data.subtitle;
        document.head.appendChild(meta);
      }

      const scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      scriptTag.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": articleData.data.title,
        "description": articleData.data.subtitle,
        "image": articleData.data.photo,
        "author": {
          "@type": "Person",
          "name": articleData.data.author.fullName
        },
        "datePublished": articleData.data.created,
      });
      document.head.appendChild(scriptTag);

      return () => {
        document.head.removeChild(scriptTag);
      };
    }
  }, [articleData]);

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
  const { title, subtitle, id: articleId, photo } = articleData.data;
  return (
    <div>
      <Helmet
        htmlAttributes={{ lang: 'ru'}}
        title={title}
        base={{ target: '_blank', href: 'https://makalabox.com/' }}
        meta={[
          { property: 'og:title', content: title },
          { name: 'description', content: subtitle },
          { property: 'og:image', content: articleData.data.photo },
          { property: 'og:type', content: 'article' },
        ]}
        script={[
          {
            type: 'application/ld+json',
            innerHTML: `    {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "${title}",
              "description": "${articleData.data.subtitle}",
              "image": "${photo}"
              "author": {
                "@type": "Person",
                "name": "${articleData.data.author.fullName}"
              },
              "datePublished": "${articleData.data.created}",
            }`,
          },
        ]}
      />
      <Container maxWidth="md" className="mx-auto my-[65px] ">
        {articleData && (
          <div className="max-w-full md:max-w-[95%] bg-[white] px-2 md:px-5  mb-5">
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
        <div className="max-w-full md:max-w-[95%] bg-[white] px-2 py-5  md:p-5">
          <h3 className="font-bold text-2xl">Комментарии</h3>
          <CommentForm id={parseInt(id)} />
          <CommentList id={parseInt(id)} />
        </div>
      </Container>
    </div>
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
