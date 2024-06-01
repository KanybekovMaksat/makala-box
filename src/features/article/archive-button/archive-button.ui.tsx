import { IconButton, Tooltip } from '@mui/material';
import ArchiveIcon from '@mui/icons-material/Archive';
import { articleQueries } from '~entities/article';

interface IDeleteButton {
  id: number;
}

export function ArchiveButton({ id }: IDeleteButton) {
  const { mutate: archivedArticle } =
    articleQueries.useArchivedArticleQuery(id);

  const handleArchived = async () => {
    await archivedArticle();
  };

  return (
    <Tooltip title="Архивировать статью">
      <IconButton onClick={handleArchived}>
        <ArchiveIcon className="hover:text-[#ff7c5b]" />
      </IconButton>
    </Tooltip>
  );
}
