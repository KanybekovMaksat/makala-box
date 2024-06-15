import { CircularProgress, IconButton, Tooltip } from '@mui/material';
import { articleQueries, articleTypes } from '~entities/article';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { getCookie } from 'typescript-cookie';
import { userQueries } from '~entities/user';
import { useNavigate } from 'react-router-dom';
import { pathKeys } from '~shared/lib/react-router';

type LikeButtonProps = { like: articleTypes.ArticleLike };

export function LikeButton(props: LikeButtonProps) {
  const isAuth = getCookie('access');
  const navigate = useNavigate();

  const redirectToRegisterPage = () => {
    navigate(pathKeys.login());
  };
  const { data: userData } = userQueries.useLoginUserQuery();

  const userId = userData?.data?.id;

  const isLikedByUser = userId && props.like.likes.includes(userId);
  console.log(props.like.id ,props.like.likes);
  

  const { mutate: like, isPending } = articleQueries.useLikeArticle(
    props.like.id
  );

  const handleLike = async () => {
    await like();
  };

  if (isPending) {
    return (
      <div className="p-1 mr-4">
        <CircularProgress size={25} />
      </div>
    );
  }
  return (
    <div className="flex items-center">
      <Tooltip
        title={
          isAuth
            ? isLikedByUser
              ? 'Больше не нравится'
              : 'Нравится'
            : 'Нужна авторизация'
        }
      >
        <span>
          <IconButton
            aria-label="нравится"
            onClick={isAuth ? handleLike : redirectToRegisterPage}
          >
            {isLikedByUser ? (
              <ThumbUpIcon className="text-second-100" />
            ) : (
              <ThumbUpOutlinedIcon className="hover:text-second-100" />
            )}
          </IconButton>
        </span>
      </Tooltip>
      <p className="text-sm text-pc-400">{props.like.likeCount}</p>
    </div>
  );
}
