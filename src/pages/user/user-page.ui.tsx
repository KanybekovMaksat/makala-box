import { Avatar, Button, Container, Tooltip } from '@mui/material';
import { useParams } from 'react-router-dom';
import { userQueries } from '~entities/user';
import { ArticleCard } from '~features/article/article-card/article-card.ui';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

export function UserPage() {
  const { username } = useParams();

  const {
    data: userData,
    isLoading,
    isError,
  } = userQueries.useGetUserByUsername(username);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching user data.</div>;
  }
  const { role, photo, firstName, lastName, email, articles, official } =
    userData.data;


  return (
    <Container
      maxWidth="md"
      className="flex flex-col items-center mx-auto gap-5 max-w-[95%] md:max-w-[90%] my-10"
    >
      <div className="max-w-[650px] md:w-[650px] bg-[white] border-2 border-sc-100 rounded h-[380px]">
        <img
          src="/public/BG.png"
          alt=""
          className="w-full max-h-[140px] object-cover rounded"
        />
        <div className="flex relative w-[85px]  justify-center mx-auto ">
          <Avatar
            className=" relative top-[-60px] h-[95px] w-[95px] rounded-full  border-4 border-[white] "
            src={photo}
            alt={`${firstName} ${lastName}`}
          />
        </div>
        <div className="flex flex-col items-center gap-2 relative top-[-50px]">
          <div>
            <h2 className="text-xl font-bold text-primary-800 flex justify-center items-center gap-1 flex-wrap text-center">
              {`${firstName} ${lastName}`}
              {official ? (
                <Tooltip
                  title="Официальный аккаунт"
                  className="hover:cursor-pointer"
                >
                  <img src="/official.svg" alt="" className="h-[25px]" />
                </Tooltip>
              ) : null}
            </h2>
            <h2 className="text-center text-base text-pc-500">
              @{username}, Автор
            </h2>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="font-bold ">{articles.length}</h3>
            <p className="text-pc-500">Статьи</p>
          </div>
          <Tooltip title={email}>
            <a
              target="_blank"
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
              className="shadow-none relative top-2 flex items-center gap-2 p-2 bg-second-100/80 duration-100 rounded text-[white] hover:bg-second-100"
            >
              <EmailRoundedIcon />
              Связаться по email
            </a>
          </Tooltip>
        </div>
      </div>
      <h2 className="mt-10 mb-3 text-center text-2xl font-bold text-pc-500">
        Статьи
      </h2>
      {articles.length > 0 ? (
        articles.map((article) => (
          <ArticleCard article={article} key={article.id} />
        ))
      ) : (
        <p className="text-center text-lg text-gray-500">
          В настоящее время нет доступных статей от автора
        </p>
      )}
    </Container>
  );
}
