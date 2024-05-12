import { Avatar, Container } from '@mui/material';
import { userQueries } from '~entities/user';
import { WriterArticlesList } from '~widgets/articles-list';

export function ProfilePage() {
  const {
    data: userData,
    isLoading,
    isError,
  } = userQueries.useLoginUserQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching user data.</div>;
  }

  const { email, firstName, lastName, role, photo } = userData.data;

  return (
    <Container maxWidth="md" className="my-20">
      <div className="w-[50%] mx-auto bg-[white] border-2 border-sc-100 rounded flex flex-col items-center  p-10">
        <Avatar
          className="h-[100px] w-[100px] rounded"
          src={photo}
          alt={`${firstName} ${lastName}`}
        />
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-bold text-primary-800">{`${firstName} ${lastName}`}</h1>
          <h2 className="text-sm text-gray-600">{email}</h2>
        </div>
      </div>
      {role === 'writer' ? (
        <>
          <h2 className="my-2 font-bold text-xl">Мои статьи</h2>
          <WriterArticlesList />
        </>
      ) : null}
    </Container>
  );
}
