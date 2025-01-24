import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  CircularProgress,
  Container,
  Tooltip,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { articleQueries } from '~entities/article';

export const BoxesPage = () => {
  const {
    data: boxesData,
    isLoading,
    isError,
  } = articleQueries.useGetAllBoxes();

  if (isLoading) {
    return (
      <Container
        maxWidth="md"
        className="mx-auto my-[65px] px-2 md:px-5 mb-5 flex flex-col items-center"
      >
        <CircularProgress className="w-[50px] mt-20 mx-auto" />
        <p className="text-center mt-2">Загрузка коробок...</p>
      </Container>
    );
  }
  if (isError || !boxesData) {
    return (
      <div className="my-20 text-center">Error fetching article data.</div>
    );
  }

  return (
    <Container maxWidth="md" className="mx-auto mb-[65px]">
      <Box className="w-full px-4 py-6 bg-[white] rounded-lg">
        <h2 className="mt-10 mb-5 text-center text-2xl font-bold text-pc-500">
          Лента коробок
        </h2>
        <div className="flex flex-col gap-4 items-center">
          {boxesData?.data?.results?.map((box) => (
            <Link to={`/boxes/${box.id}`} key={box.id}>
              <Card className="flex flex-col md:flex-row shadow-none border-2 border-[gray]/50 p-4 gap-4  md:w-[650px] w-[320px] hover:shadow-xl hover:border-second-100 hover:cursor-pointer">
                <CardMedia
                  component="img"
                  image={box.photo || '/placeholder.png'}
                  alt={box.name}
                  className="md:w-[150px] md:h-[150px] h-[150px] w-full object-cover rounded-md border border-[gray]/50 mb-4 md:mb-0"
                />
                <CardContent className="flex-1 flex flex-col gap-2 p-0">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Avatar
                        src={box.author.photo || '/placeholder.png'}
                        alt={box.author.fullName}
                        className="w-8 h-8"
                      />
                      <div>
                        <Typography
                          variant="body2"
                          className="font-semibold flex gap-1 m-0"
                        >
                          {box.author.fullName}
                          {box.author.official ? (
                            <Tooltip
                              title="Официальный аккаунт"
                              className="hover:cursor-pointer"
                            >
                              <img
                                src="/official.svg"
                                alt=""
                                className="h-[20px]"
                              />
                            </Tooltip>
                          ) : null}
                        </Typography>
                        <Link
                          to={`/${box.author.username}`}
                          className="text-[14px] mt-[-3px] text-[gray] block underline"
                        >
                          @{box.author.username}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <Typography variant="h6" className="font-semibold">
                    {box.name}
                  </Typography>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[gray]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 0H4v10h12V5zM6 8h8v2H6V8z" />
                    </svg>
                    <Typography variant="body2" className="text-[gray]">
                      Количество статей:
                      <span className="text-blue-500">
                        {box.articles.length === 0
                          ? 'Нет статей'
                          : `${box.articles.length}`}
                      </span>
                    </Typography>
                  </div>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {box.categories?.map((category) => (
                      <Chip
                        key={category}
                        className="rounded font-semibold bg-second-100 text-[white] text-[10px] h-[20px]"
                        label={category}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Box>
    </Container>
  );
};
