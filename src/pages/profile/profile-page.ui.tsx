import { Avatar, Container, Divider } from '@mui/material';
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

  const { email, firstName, lastName, username, role, photo } = userData.data;

  return (
    <Container maxWidth="md" className="my-20 flex flex-col items-center">
      <div className="w-auto mx-auto bg-[white] border-2 border-sc-100 rounded flex flex-col md:flex-row items-center gap-3 p-10">
        <Avatar
          className="h-20 w-20 rounded"
          src={photo}
          alt={`${firstName} ${lastName}`}
        />
        <div className='flex flex-col items-center md:items-start'>
          <h2 className="text-xl font-bold text-primary-800">{username}</h2>
          <h2 className="text-base text-pc-500">{`${firstName} ${lastName}`}</h2>
          <h2 className="text-base text-pc-500">{email}</h2>
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
