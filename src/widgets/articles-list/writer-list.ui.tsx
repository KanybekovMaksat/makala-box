import {
  Card,
  CardContent,
  CardMedia,
  Tooltip,
  CircularProgress,
  IconButton,
} from '@mui/material';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { Link, useNavigate } from 'react-router-dom';
import { pathKeys } from '~shared/lib/react-router';
import { articleQueries, articleTypes } from '~entities/article';
import { ShareButton } from '~features/article/share-button';
import { LikeButton } from '~features/article/like-button';
import { FavoriteButton } from '~features/article/favorite-button';
import { StatusMenu } from '~features/article/status-menu';
import { ArchiveButton } from '~features/article/archive-button';

import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

dayjs.locale('ru');

export function WriterArticlesList() {
  const {
    data: articleData,
    isLoading,
    isSuccess,
    isError,
  } = articleQueries.useGetWriterArticle();

  if (isLoading) {
    return (
      <div>
        <CircularProgress className="w-[50px] mx-auto flex justify-center" />
        <p className="text-center mt-2">Загрузка статей...</p>
      </div>
    );
  }

  if (isError) {
    return <div className="my-20">Error fetching user data.</div>;
  }

  const articles = articleData?.data?.results;

  return (
    <div className="flex flex-col mx-auto gap-5 w-full">
      {isSuccess &&
        articles.map((article) => (
          <ArticleCard article={article} key={article.id} />
        ))}
    </div>
  );
}

type ArticleCardProps = { article: articleTypes.Article };

function ArticleCard(props: ArticleCardProps) {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/article/edit/${props.article.id}/`);
  };
  return (
    <Card className="min-w-full max-w-full  shadow-none border border-sc-100 p-2 card">
      <div className="flex flex-col-reverse md:flex-row items-center md:justify-between">
        <CardContent className="md:p-[12px] p-2">
          <div className="flex justify-between items-center pb-3">
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <div className="flex items-center gap-4 cursor-pointer">
                <StatusMenu initialStatus={props.article.status} />
                <Tooltip title="Время чтения">
                  <p className="text-md text-pc-400 flex items-center md:hidden gap-1 text-sm">
                    <AccessTimeFilledIcon className="w-4" />
                    {props.article.readTime} мин
                  </p>
                </Tooltip>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-md text-pc-400 text-sm ">
                  {dayjs(props.article.created)
                    .format('MMMM D, YYYY')
                    .toUpperCase()}
                </p>
                <p className="text-md text-pc-400 flex items-center gap-1 text-sm">
                  <VisibilityIcon className="w-5" />
                  {props.article.viewCount}
                </p>
                <Tooltip title="Время чтения">
                  <p className="text-md text-pc-400 hidden md:flex items-center gap-1 text-sm">
                    <AccessTimeFilledIcon className="w-4" />
                    {props.article.readTime} мин
                  </p>
                </Tooltip>
              </div>
            </div>
          </div>
          <div>
            {/* <Link
              className="card-info"
              to={pathKeys.article.byId({ id: props.article.id })}
            > */}
            <h4 className="font-bold text-xl title duration-300">
              {props.article.title}
            </h4>
            {/* </Link> */}
            <div className="pt-2 flex items-center gap-1">
              <LikeButton
                like={{
                  id: props.article.id,
                  likeCount: props.article.likeCount,
                  likes: props.article.likes,
                }}
              />
              <FavoriteButton id={props.article.id} />
              <ShareButton id={props.article.id} />
              <ArchiveButton id={props.article.id} />
              <Tooltip title="Редактировать">
                <IconButton onClick={handleEdit}>
                  <EditIcon/>
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </CardContent>
        <CardMedia
          component="img"
          className="w-[95%] md:max-w-[250px] min-h-[130px] max-h-[130px] rounded md:mr-[12px] cursor-pointer"
          image={props.article.photo}
          alt={props.article.title}
          title={props.article.title}
        />
      </div>
    </Card>
  );
}
