import { IconButton, Tooltip } from '@mui/material';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { getCookie } from 'typescript-cookie';
import { articleQueries } from '~entities/article';
import { userQueries } from '~entities/user';
import { useCallback } from 'react';

type FavoriteButtonProps = { id: number };

export function FavoriteButton(props: FavoriteButtonProps) {
  const isAuth = getCookie('access');

  const { mutate: saveFavorite } = articleQueries.useFavoriteArticle(props.id);

  const { data: userData } = userQueries.useLoginUserQuery();
  const favoritePosts = userData?.data?.favoritePosts;

  if (!userData || !favoritePosts) {
    return (
      <Tooltip title={'Нужна авторизация'}>
        <span>
          <IconButton disabled aria-label="В Избранное">
            <BookmarkAddIcon />
          </IconButton>
        </span>
      </Tooltip>
    );
  }

  const isFavoritedPosts = favoritePosts.some((post) => post.id === props.id);

  const handleSaveFavorite = useCallback(async () => {
    await saveFavorite();
  }, [saveFavorite]);

  return (
    <Tooltip
      title={
        isAuth
          ? isFavoritedPosts
            ? 'Удалить из избранных'
            : 'Сохранить в избранные'
          : 'Нужна авторизация'
      }
    >
      <IconButton
        disabled={!isAuth}
        onClick={handleSaveFavorite}
        aria-label="В Избранное"
      >
        {isFavoritedPosts ? (
          <BookmarkAddedIcon className="text-second-100" />
        ) : (
          <BookmarkAddIcon />
        )}
      </IconButton>
    </Tooltip>
  );
}
