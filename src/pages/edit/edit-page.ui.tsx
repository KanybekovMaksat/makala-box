import {
  Button,
  CircularProgress,
  Container,
  Step,
  StepLabel,
  Stepper,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { CreateArticle } from '~widgets/create-article';
import { CoverCropper } from './../../features/editor/cover-cropper/cover-cropper.ui';
import { StatusSelect } from '~features/editor/status-select';
import { useParams } from 'react-router-dom';
import { articleQueries } from '~entities/article';
import { URLtoFile, calculateReadingTime } from '~shared/utils/editor';

export function EditPage() {
  const { id } = useParams();
  const {
    data: articleData,
    isSuccess,
    isLoading,
    isError,
  } = articleQueries.useGetArticleDetail(Number(id));

  const articleId: number = parseInt(id);

  const [activeStep, setActiveStep] = useState(0);
  const [update, setUpdate] = useState(true);
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    if (isSuccess && articleData) {
      setTitle(articleData.data.title);
    }
  }, [isSuccess]);

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const { mutate: updateArticle, isPending } =
    articleQueries.useUpdateArticle();

  const handleSubmit = async () => {
    try {
      const blocksString = localStorage.getItem('editorContent');
      const blocks = blocksString ? JSON.parse(blocksString) : [];

      let firstParagraphText = '';
      for (const block of blocks) {
        if (
          block.type === 'paragraph' &&
          block.content &&
          block.content.length > 0 &&
          block.content[0].text
        ) {
          firstParagraphText = block.content[0].text;
          break;
        }
      }

      const trimmedSubtitle = firstParagraphText.substring(0, 250).toString();
      const formData = new FormData();
      formData.append('title', title);
      formData.append('subtitle', trimmedSubtitle);
      formData.append('body', JSON.stringify(blocks));
      formData.append('status', status);
      formData.append('readTime', calculateReadingTime(blocks).toString());
      const options = {
        data: formData,
      };
  
      await updateArticle(articleId, options);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitPhoto = async () => {
    try {
      const imageBlob = localStorage.getItem('savedImage');
      const file = await URLtoFile(imageBlob, imageBlob);
      const formData = new FormData();
      formData.append('status', status);
      formData.append('photo', file);
      const options = {
        data: formData,
      };
  
      await updateArticle(articleId, options);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return (
      <div>
        <CircularProgress className="w-[50px] mt-20 mx-auto flex justify-center" />
        <p className="text-center mt-2">Загрузка статьи.</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="my-20">
        <p className="text-center mt-2">Ошибка</p>
      </div>
    );
  }

  return (
    <Container maxWidth="md" className="my-20 bg-[white] ">
      {isSuccess && articleData && (
        <>
          <StepperView activeStep={activeStep} />
          <div className="p-5">
            {activeStep === 0 && (
              <>
                <h2 className="text-center font-bold">
                  Редактирование метаданных
                </h2>
                <StatusSelect
                  status={status}
                  handleStatusChange={handleStatusChange}
                />
                <textarea
                  className="w-full font-bold mb-3 text-[32px] text-pc-500 resize-none leading-8  outline-none max-h-[300px]"
                  placeholder="ЗАГОЛОВОК"
                  value={title}
                  onChange={handleChangeTitle}
                />
                <CreateArticle />
                <div className="flex justify-end gap-5">
                  {isPending ? (
                    <Button
                      variant="outlined"
                      className="cursor-wait flex gap-2"
                    >
                      <CircularProgress size={20} />
                      Отправка данных...
                    </Button>
                  ) : (
                    <Button variant="contained" onClick={handleSubmit}>
                      Отправить
                    </Button>
                  )}
                  <Button
                    className="self-end mt-5"
                    variant="outlined"
                    onClick={handleNext}
                  >
                    Далее
                  </Button>
                </div>
              </>
            )}
            {activeStep === 2 && (
              <>
                <CoverCropper
                  update={update}
                  setUpdate={setUpdate}
                  data={articleData?.data?.photo || ''}
                />
                <div className="flex justify-end gap-5">
                  {isPending ? (
                    <Button
                      variant="outlined"
                      className="cursor-wait flex gap-2"
                    >
                      <CircularProgress size={20} />
                      Отправка данных...
                    </Button>
                  ) : (
                    <Button variant="contained" onClick={handleSubmitPhoto}>
                      Отправить
                    </Button>
                  )}
                  <Button
                    className="self-end mt-5"
                    variant="outlined"
                    onClick={handleBack}
                  >
                    Назад
                  </Button>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </Container>
  );
}

interface StepperViewProps {
  activeStep: number;
}

const steps = ['Редактирование содержания', 'Редактирование обложки'];

const StepperView: React.FC<StepperViewProps> = ({ activeStep }) => {
  return (
    <Stepper className="bg-[white] p-3 pt-7" activeStep={activeStep}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
