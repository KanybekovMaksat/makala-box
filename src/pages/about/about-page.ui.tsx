import { Container } from '@mui/material';
import { IntroBlock } from '~widgets/intro-block';

export function AboutPage() {
  return (
    <Container
      maxWidth="md"
      className="flex flex-col items-center mt-5 gap-8 mb-10"
    >
      <IntroBlock />

      <div>
        <div>
          <h3>Руководство по текстовому редактору Makala Box.</h3>
          <a href="https://makalabox.com/article/6/">https://makalabox.com/article/6/</a>
        </div>
      </div>
    </Container>
  );
}
