import { CircularProgress, Container, Divider } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { articleQueries } from '~entities/article';
import $api from '~shared/api';
import { ArticleInfo } from '~widgets/article-info';
import { ArticleViewer } from '~widgets/article-viewer';

export function ArticlePage() {
  const { id } = useParams();
  const [articleData, setArticleData] = useState(null); 
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await $api.get(`articles/${id}/`); 
        setArticleData(response);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchArticle(); 
  }, []);


  articleQueries.useUpdateArticleView(Number(id));

  if (isLoading) {
    return (
      <div>
        <CircularProgress className="w-[50px] mt-20 mx-auto flex justify-center" />
        <p className="text-center mt-2">Загрузка статьи.</p>
      </div>
    );
  }

  if (error || !articleData) {
    return (
      <div className="my-20 text-center">Error fetching article data.</div>
    );
  }


  
  return (
    <Container maxWidth="md" className="mx-auto my-[65px]">
      {articleData && (
        <div className="max-w-[95%] bg-[white] px-5">
          <ArticleInfo article={articleData.data} />
          <Divider />
          <ArticleViewer body={articleData.data.body} />
        </div>
      )}
    </Container>
  );
}
