 import { IconButton, Tooltip } from '@mui/material';
import { articleQueries, articleTypes } from '~entities/article';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { getCookie } from 'typescript-cookie';
import { userQueries } from '~entities/user';

type LikeButtonProps = { like: articleTypes.ArticleLike };

export function LikeButton(props: LikeButtonProps) {
  const isAuth = getCookie('access');

  const { data: userData } = userQueries.useLoginUserQuery();

  const userId = userData?.data?.id;

  const isLikedByUser = userId && props.like.likes.includes(userId);

  const { mutate: like } = articleQueries.useLikeArticle(props.like.id);

  const handleLike = async () => {
    await like();
  };

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
            disabled={!isAuth}
            aria-label="нравится"
            onClick={handleLike}
          >
            {isLikedByUser ? (
              <ThumbUpIcon className="text-second-100" />
            ) : (
              <ThumbUpOutlinedIcon />
            )}
          </IconButton>
        </span>
      </Tooltip>
      <p className="text-sm text-pc-400">{props.like.likeCount}</p>
    </div>
  );
}