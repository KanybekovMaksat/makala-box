import { useState } from 'react';
import { CreateArticle } from '~widgets/create-article';
import {
  Container,
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  CircularProgress,
} from '@mui/material';
import { userQueries } from '~entities/user';
import { pathKeys } from '~shared/lib/react-router';
import { useNavigate } from 'react-router-dom';
import { articleQueries } from '~entities/article';
import { CategorySelect } from '~features/editor/category-select';
import { OrganizationSelect } from '~features/editor/organization-select';
import { StatusSelect } from '~features/editor/status-select';
import { CoverCropper } from '~features/editor/cover-cropper';
import { URLtoFile, calculateReadingTime } from '~shared/utils/editor';

interface StepperViewProps {
  activeStep: number;
}

const steps = ['Оформление статьи', 'Составление статьи', 'Публикация статьи'];

export function EditorPage() {
  const { data: userData } = userQueries.useLoginUserQuery();
  const role = userData?.data?.role || '';
  const navigate = useNavigate();

  if (role === 'reader') {
    navigate(pathKeys.home());
  }

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const {
    mutate: createArticle,
    isPending,
    isError,
  } = articleQueries.useCreateArticleMutation();

  const [title, setTitle] = useState('');

  const [selectedValues, setSelectedValues] = useState([]);
  const [selectedOrg, setSelectedOrg] = useState();
  const [status, setStatus] = useState('published');

  console.log(selectedValues);

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
      console.log(trimmedSubtitle);
      
      const imageBlob = localStorage.getItem('savedImage');
      const file = await URLtoFile(imageBlob);
      const formData = new FormData();
      formData.append('photo', file);
      formData.append('title', title);
      formData.append('subtitle', trimmedSubtitle);
      formData.append('body', JSON.stringify(blocks));
      formData.append('status', status);
      formData.append('organization', selectedOrg);
      formData.append('readTime', calculateReadingTime(blocks));
      selectedValues.forEach((value) => formData.append('categories', value));
      await createArticle(formData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  const handleChange = (selectedOptions) => {
    if (selectedOptions.length <= 3) {
      setSelectedValues(selectedOptions);
    }
  };

  const handleChangeOrg = (selectedOptions) => {
    setSelectedOrg(selectedOptions);
  };
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  if (isError) {
    return <div className="my-20 text-center">Ошибка при отправке данных</div>;
  }

  return (
    <div className="my-20">
      <Container maxWidth="lg" className="min-h-[700px]">
        <StepperView activeStep={activeStep} />
        {activeStep === 0 && (
          <div className="w-full my-5 flex flex-col bg-[white] border border-sc-100 p-5 rounded">
            <div className="w-full px-[20px] mb-5">
              <h3 className="text-xl font-bold  mb-4">
                Оформление обложки вашей статьи
              </h3>
              <TextField
                className="w-full font-bold"
                placeholder="Введите заголовок статьи"
                value={title}
                onChange={handleChangeTitle}
              />
              <CoverCropper />
            </div>
            <Button
              className="self-end"
              variant="contained"
              onClick={handleNext}
            >
              Далее
            </Button>
          </div>
        )}
        {activeStep === 1 && (
          <div className="w-full h-auto my-5 flex flex-col bg-[white] border border-sc-100 p-5 rounded">
            <h3 className="text-xl font-bold pl-[20px]">Составление статьи</h3>
            <CreateArticle />
            <div className="flex justify-between ">
              <Button
                className="self-start"
                variant="contained"
                onClick={handleBack}
              >
                Назад
              </Button>
              <Button
                className="self-end"
                variant="contained"
                onClick={handleNext}
              >
                Далее
              </Button>
            </div>
          </div>
        )}
        {activeStep === 2 && (
          <div className="w-full my-5 flex flex-col bg-[white] border border-sc-100 p-5 rounded">
            <h3 className="text-xl font-bold text-center">Публикация</h3>
            <h4 className="text-lg font-medium mt-3">
              Статус для вашей статьи
            </h4>
            <em className="text-xs">
              Пока статья в статусе "черновик", она не доступна для модерации и
              публики.
            </em>
            <StatusSelect
              status={status}
              handleStatusChange={handleStatusChange}
            />
            <h4 className="text-lg font-medium mt-3">Выбор категорий</h4>
            <em className="text-xs">Можете выбрать только до 3 категорий</em>
            <CategorySelect
              selectCategory={selectedValues}
              handleChange={handleChange}
            />
            <h4 className="text-lg font-medium mt-3">Выбор организации</h4>
            <em className="text-xs">
              Выберите только одну организацию, от которой будете публиковать
              вашу статью
            </em>
            <OrganizationSelect
              selectOrg={selectedOrg}
              handleChange={handleChangeOrg}
            />
            <div className="mt-4 flex justify-between">
              <Button variant="contained" onClick={handleBack}>
                Назад
              </Button>
              {isPending ? (
                <Button variant="outlined" className="cursor-wait flex gap-2">
                  <CircularProgress size={20} />
                  Отправка данных...
                </Button>
              ) : (
                <Button variant="contained" onClick={handleSubmit}>
                  Завершить
                </Button>
              )}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

const StepperView: React.FC<StepperViewProps> = ({ activeStep }) => {
  return (
    <Stepper
      className="bg-[white] p-3 border border-sc-100 rounded"
      activeStep={activeStep}
    >
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
