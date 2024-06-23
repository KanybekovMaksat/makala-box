import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Tooltip,
  CircularProgress,
  CardActionArea,
} from '@mui/material';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { Link, useNavigate } from 'react-router-dom';
import { pathKeys } from '~shared/lib/react-router';
import { articleQueries, articleTypes } from '~entities/article';
import { ShareButton } from '~features/article/share-button';
import { LikeButton } from '~features/article/like-button';
import { FavoriteButton } from '~features/article/favorite-button';

import VisibilityIcon from '@mui/icons-material/Visibility';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

dayjs.locale('ru');

export function ArticlesList() {
  const {
    data: articleData,
    isLoading,
    isSuccess,
    isError,
  } = articleQueries.useGetArticles();

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

  if (articles.length == 0) {
    return (
      <div className="text-center font-medium">
        К сожалению, у вас нет избранных статей📖
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center mx-auto gap-5 max-w-[100%] md:max-w-[90%] ">
      {isSuccess &&
        articles.map((article) => (
          <ArticleCard article={article} key={article.id} />
        ))}
      <Link
        className="flex justify-end underline text-pc-500 my-3"
        to={pathKeys.feed()}
      >
        Смотреть больше
        <NavigateNextIcon />
      </Link>
    </div>
  );
}

// Article Card Component
type ArticleCardProps = { article: articleTypes.Article };

function ArticleCard(props: ArticleCardProps) {
  const navigate = useNavigate();
  const handleNavigate = (id: number) => {
    navigate(pathKeys.article.byId({ id }));
  };
  return (
    <Card className="min-w-full max-w-full md:min-w-[650px] md:max-w-[650px] shadow-none border border-sc-100  ">
      <div className="flex flex-col">
        <CardContent className="md:p-5 p-3">
          <div className="flex justify-between items-center pb-3">
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <div className="flex items-center gap-4 cursor-pointer">
                <div className="flex items-center gap-2">
                  <Avatar
                    sizes="large"
                    className="duration-500 card-avatar border-2 border-[white] h-10 w-10"
                    alt={props.article.author.fullName}
                    src={props.article.author.photo}
                  />
                  <h5 className="flex text-base md:text-base font-bold">
                    {props.article.author.fullName}
                    {/* <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0)">
                        <path
                          d="M12.1113 2.39043C13.399 1.06162 15.6284 2.20735 15.2976 4.02792C15.0866 5.1888 15.9892 6.25299 17.1689 6.23446C19.0191 6.20538 19.7853 8.59198 18.2641 9.64539C17.2941 10.3171 17.1797 11.7078 18.0271 12.5289C19.3559 13.8166 18.2101 16.046 16.3896 15.7152C15.2287 15.5042 14.1645 16.4068 14.183 17.5865C14.2121 19.4366 11.8255 20.2029 10.7721 18.6817C10.1004 17.7116 8.7097 17.5973 7.8886 18.4446C6.60091 19.7735 4.37149 18.6277 4.7023 16.8072C4.91325 15.6463 4.01072 14.5821 2.83098 14.6006C0.980832 14.6297 0.214548 12.2431 1.7358 11.1897C2.70583 10.518 2.82015 9.12729 1.97283 8.3062C0.644027 7.0185 1.78976 4.78908 3.61032 5.1199C4.7712 5.33084 5.8354 4.42831 5.81686 3.24857C5.78779 1.39842 8.17439 0.632141 9.2278 2.15339C9.8995 3.12342 11.2902 3.23774 12.1113 2.39043Z"
                          fill="#3D85E1"
                        ></path>
                        <path
                          d="M6.34521 10.5007L8.42855 12.7923L12.5952 8.20898"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>   */}
                  </h5>
                </div>
                <div className="md:flex items-center gap-3 hidden">
                  <p className="text-md text-pc-400 text-sm">
                    {dayjs(props.article.created)
                      .format('MMMM D, YYYY')
                      .toUpperCase()}
                  </p>
                  <p className="text-md text-pc-400 flex items-center gap-1 text-sm">
                    <VisibilityIcon className="w-5" />
                    {props.article.viewCount}
                  </p>
                  <Tooltip title="Время чтения">
                    <p className="text-md text-pc-400 flex items-center gap-1 text-sm">
                      <AccessTimeFilledIcon className="w-4" />
                      {props.article.readTime} мин
                    </p>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 px-1 mb-2 md:hidden">
            <p className="text-md text-pc-400 text-sm">
              {dayjs(props.article.created)
                .format('MMMM D, YYYY')
                .toUpperCase()}
            </p>
            <p className="text-md text-pc-400 flex items-center gap-1 text-sm">
              <VisibilityIcon className="w-5" />
              {props.article.viewCount}
            </p>
            <Tooltip title="Время чтения">
              <p className="text-md text-pc-400 flex items-center gap-1 text-sm">
                <AccessTimeFilledIcon className="w-4" />
                {props.article.readTime} мин
              </p>
            </Tooltip>
          </div>
          <div
            className="hover:cursor-pointer"
            onClick={() => handleNavigate(props.article.id)}
          >
            <Link
              to={`article/${String(props.article.id)}`}
              className="font-bold text-lg md:text-xl title duration-300 block"
            >
              {props.article.title}
            </Link>
            <Link
              to={`article/${String(props.article.id)}`}
              className="text-[16px] md:text-md mt-2"
            >
              {props.article.subtitle}...
            </Link>
          </div>
        </CardContent>
        <CardActionArea onClick={() => handleNavigate(props.article.id)}>
          <CardMedia
            component="img"
            className="w-full  h-auto md:max-h-[550px] cursor-pointer"
            image={props.article.photo}
            alt={props.article.title}
            title={props.article.title}
          />
        </CardActionArea>
        <div className="md:px-5 py-2 md:py-3 px-1 flex items-center justify-between">
          <div className="flex gap-3">
            <LikeButton
              like={{
                id: props.article.id,
                likeCount: props.article.likeCount,
                likes: props.article.likes,
              }}
            />
            <FavoriteButton id={props.article.id} />
          </div>
          <ShareButton title={props.article.title} id={props.article.id} />
        </div>
      </div>
    </Card>
  );
}

// function ArticleCard(props: ArticleCardProps) {
//   return (
//     <Card className="min-w-full max-w-full  shadow-none border border-sc-100 p-2 card">
//       <div className="flex flex-col-reverse md:flex-row items-center md:justify-between">
//         <CardContent className="md:p-[12px] p-2">
//           <div className="flex justify-between items-center pb-3">
//             <div className="flex flex-col md:flex-row md:items-center gap-3">
//               <div className="flex items-center gap-4 cursor-pointer">
//                 <div className="flex items-center">
//                   <Avatar
//                     className="duration-500 card-avatar border-2 border-[white]"
//                     alt={props.article.author}
//                     src={props.article.authorPhoto}
//                   />
//                   <h5 className="flex text-sm md:text-base  font-bold duration-300">
//                     {props.article.author}
//                   </h5>
//                 </div>
//                 <Tooltip title="Время чтения">
//                   <p className="text-md text-pc-400 flex items-center md:hidden gap-1 text-sm">
//                     <AccessTimeFilledIcon className="w-4" />
//                     {props.article.readTime} мин
//                   </p>
//                 </Tooltip>
//               </div>
//               <div className="flex items-center gap-3">
//                 <p className="text-md text-pc-400 text-sm ">
//                   {dayjs(props.article.created)
//                     .format('MMMM D, YYYY')
//                     .toUpperCase()}
//                 </p>
//                 <p className="text-md text-pc-400 flex items-center gap-1 text-sm">
//                   <VisibilityIcon className="w-5" />
//                   {props.article.viewCount}
//                 </p>
//                 <Tooltip title="Время чтения">
//                   <p className="text-md text-pc-400 hidden md:flex items-center gap-1 text-sm">
//                     <AccessTimeFilledIcon className="w-4" />
//                     {props.article.readTime} мин
//                   </p>
//                 </Tooltip>
//               </div>
//             </div>
//           </div>
//           <div>
//             <Link
//               className="card-info"
//               to={pathKeys.article.byId({ id: props.article.id })}
//             >
//               <h4 className="font-bold text-xl title duration-300">
//                 {props.article.title}
//               </h4>
//               <p className="text-md text-pc-500 min-h-[70px]">
//                 {props.article.subtitle}...
//               </p>
//             </Link>
//             <div className="pt-2 flex items-center gap-1">
//               <LikeButton
//                 like={{
//                   id: props.article.id,
//                   likeCount: props.article.likeCount,
//                   likes: props.article.likes,
//                 }}
//               />
//               <FavoriteButton id={props.article.id} />
//               <ShareButton id={props.article.id} />
//             </div>
//           </div>
//         </CardContent>
//         <CardMedia
//           component="img"
//           className="w-[95%] md:max-w-[250px] min-h-[230px] max-h-[230px] rounded md:mr-[12px] cursor-pointer"
//           image={props.article.photo}
//           alt={props.article.title}
//           title={props.article.title}
//         />
//       </div>
//     </Card>
//   );
// }
