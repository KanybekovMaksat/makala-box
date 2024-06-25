import {
  Container,
  Typography,
  Box,
  Link,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { IntroBlock } from '~widgets/intro-block';

export function AboutPage() {
  // useEffect(() => {
  //   const { title, subtitle, photo, author, created } = articleData.data;
  //   document.title = title;
  //   let metaDescription = document.querySelector('meta[name="description"]');
  //   if (metaDescription) {
  //     metaDescription.setAttribute('content', subtitle);
  //   } else {
  //     metaDescription = document.createElement('meta');
  //     metaDescription.name = 'description';
  //     metaDescription.content = subtitle;
  //     document.head.appendChild(metaDescription);
  //   }
  //   const ogTags = [
  //     { property: 'og:title', content: title },
  //     { property: 'og:description', content: subtitle },
  //     { property: 'og:image', content: photo },
  //     { property: 'og:type', content: 'article' },
  //     { property: 'og:url', content: window.location.href },
  //     { property: 'article:published_time', content: created },
  //     { property: 'article:author', content: author.fullName },
  //   ];
  //   ogTags.forEach((tag) => {
  //     let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
  //     if (metaTag) {
  //       metaTag.setAttribute('content', tag.content);
  //     } else {
  //       metaTag = document.createElement('meta');
  //       metaTag.setAttribute('property', tag.property);
  //       metaTag.content = tag.content;
  //       document.head.appendChild(metaTag);
  //     }
  //   });

  //   return () => {
  //     ogTags.forEach((tag) => {
  //       const metaTag = document.querySelector(
  //         `meta[property="${tag.property}"]`
  //       );
  //       if (metaTag) {
  //         document.head.removeChild(metaTag);
  //       }
  //     });
  //   };
  // }, []);

  return (
    <Container
      maxWidth="md"
      className="flex flex-col items-center mt-5 gap-8 mb-10"
    >
      <Helmet prioritizeSeoTags>
        <title>Makalabox - О проекте</title>
        <meta
          name="description"
          content="Makalabox.com — это инновационная платформа для публикации и обмена статьями на самые разнообразные темы."
        />
        <meta property="og:title" content="Makalabox - О Проекте" />
        <meta
          property="og:description"
          content="Makalabox.com — это инновационная платформа для публикации и обмена статьями на самые разнообразные темы."
        />
        <meta property="og:locale" content="ru_Ru" />
      </Helmet>
      <Box className="w-full px-4 py-6 bg-[white] rounded-lg">
        <Typography
          variant="h4"
          component="h1"
          className="mb-4 text-center sm:text-left"
        >
          О Makalabox
        </Typography>
        <Typography variant="body1" component="p" className="mb-4 text-justify">
          <strong>Makalabox (Коробка Статей)</strong> — это университетский
          веб-сайт, организованный в формате системы тематических блогов,
          называемых боксами, и включающий элементы новостного портала.
          Платформа предназначена для публикации новостей, аналитических статей
          и размышлений на темы, связанные с информационными технологиями,
          бизнесом, интернетом и другими дисциплинами, представленными в
          Международном Университете Инновационных Технологий в Кыргызстане.
        </Typography>
        <IntroBlock />
        <Typography variant="body1" component="p" className="mb-4 text-justify">
          Контент сайта создается пользователями-добровольцами, которые ведут
          персональные блоги. Эта инновационная платформа позволяет публиковать
          и обмениваться статьями на самые разнообразные темы. Все статьи перед
          публикацией проходят обязательную модерацию экспертами.
        </Typography>
        <Box className="mt-8 w-full">
          <Typography
            variant="h5"
            component="h2"
            className="mb-2 text-center sm:text-left"
          >
            Руководство по текстовому редактору Makala Box
          </Typography>
          <Link
            href="https://makalabox.com/article/6/"
            className="no-underline"
          >
            <Card className="flex flex-col sm:flex-row mb-4 border border-pc-200 shadow-none hover:shadow-lg hover:shadow-second-100/30">
              <CardMedia
                component="img"
                alt="Makala Box Editor Guide"
                height="140"
                image="/image.png"
                className="w-full sm:w-[100px] object-cover"
              />
              <CardContent className="w-full sm:w-2/3">
                <Typography variant="h6" component="h5" className="text-base">
                  Руководство по текстовому редактору Makala Box
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className="mb-2"
                >
                  Узнайте, как использовать текстовый редактор Makala Box для
                  создания и редактирования статей.
                </Typography>
                <Link
                  href="https://makalabox.com/article/6/"
                  className="text-blue-500"
                >
                  https://makalabox.com/article/6/
                </Link>
              </CardContent>
            </Card>
          </Link>
        </Box>
        <Typography
          variant="body1"
          component="p"
          className="mt-4 text-center sm:text-left"
        >
          Присоединяйтесь к Makalabox.com и станьте частью нашего динамичного и
          творческого сообщества! Публикуйте свои статьи, делитесь знаниями и
          узнавайте новое каждый день.
        </Typography>
      </Box>
    </Container>
  );
}
