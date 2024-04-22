import { Avatar, Container } from '@mui/material';
import { sessionQueries } from '~entities/session';

export function ProfilePage() {
  const {
    data: userData,
    isLoading,
    isError,
  } = sessionQueries.useloginUserQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching user data.</div>;
  }

  const { email, firstName, lastName, role, photo } = userData.data;

  
  return (
    <Container maxWidth="lg" className="my-20">
      <div className="w-full mx-auto h-20 bg-[white] border-2 border-sc-100 rounded flex items-center justify-between px-6">
        <div>
          <h1 className="text-xl font-bold text-primary-800">{`${firstName} ${lastName}`}</h1>
          <h2 className="text-sm text-gray-600">{email}</h2>
          <h2 className="text-sm text-gray-600">{role.toLocaleUpperCase()}</h2>
        </div>
        <Avatar sizes="lg" src={photo} alt={`${firstName} ${lastName}`} />
      </div>
    </Container>
  );
}
