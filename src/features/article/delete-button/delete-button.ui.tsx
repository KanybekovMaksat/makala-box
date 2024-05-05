import { IconButton, Tooltip, Modal, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { articleQueries } from '~entities/article';
import { useState } from 'react';

interface IDeleteButton {
  id: number;
}

const modalStyle = {
  position: 'absolute',
  width: '400px',
  backgroundColor: 'white',
  padding: '10px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export function DeleteButton({ id }: IDeleteButton) {
  const [isOpen, setIsOpen] = useState(false);
  const { mutate: deleteArticle } = articleQueries.useDeleteArticleQuery(id);

  const handleDelete = async () => {
    await deleteArticle();
    setIsOpen(false);
  };

  return (
    <>
      <Tooltip title="Удалить статью">
        <IconButton onClick={() => setIsOpen(true)}>
          <DeleteIcon className="hover:text-[red]" />
        </IconButton>
      </Tooltip>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div style={modalStyle}>
          <h2>Подтверждение удаления</h2>
          <p>Вы уверены, что хотите удалить эту статью?</p>
          <div style={{ display: 'flex', gap: 20, marginTop: 10 }}>
            <Button
              size="small"
              variant="contained"
              color="error"
              onClick={() => setIsOpen(false)}
            >
              Отмена
            </Button>
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={handleDelete}
            >
              Удалить
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
