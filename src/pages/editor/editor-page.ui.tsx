import { useState } from 'react';
import { CreateArticle } from '~widgets/create-article';
import { Container, Stepper, Step, StepLabel, Button } from '@mui/material';
import { sessionQueries } from '~entities/session';
import { pathKeys } from '~shared/lib/react-router';
import { useNavigate } from 'react-router-dom';

interface StepperViewProps {
  activeStep: number;
}

const steps = ['Оформление статьи', 'Составление статьи', 'Публикация статьи'];

export function EditorPage() {
  const { data: userData } = sessionQueries.useloginUserQuery();

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

  return (
    <div className="my-20">
      <Container maxWidth="lg" className="h-[700px]">
        <StepperView activeStep={activeStep} />
        {activeStep === 0 && (
          <div className="w-full my-5 flex flex-col bg-[white] border border-sc-100 p-5 rounded">
            <div>
              <h3 className="font-bold text-xl">Введите заголовок</h3>
              <input type="text" />
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
          <div className="my-5 flex flex-col">
            <CreateArticle />
            <div className="flex justify-between">
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
            <h3 className="text-xl font-bold">Публикация</h3>
            <input type="text" />
            <div className="flex justify-between">
              <Button variant="contained" onClick={handleBack}>
                Назад
              </Button>
              <Button variant="contained" onClick={handleNext}>
                Далее
              </Button>
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
