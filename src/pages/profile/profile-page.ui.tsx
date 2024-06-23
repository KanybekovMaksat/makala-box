import { Avatar, Button, Container, Divider } from '@mui/material';
import { useState } from 'react';
import { userQueries } from '~entities/user';
import { WriterArticlesList } from '~widgets/articles-list';
import { ProfileCard } from '~widgets/profile-card';

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

  const { role } = userData.data;


  return (
    <Container maxWidth="md" className="my-10 flex flex-col items-center">
      <ProfileCard />
      {role === 'writer' ? (
        <>
          <h2 className="my-2 font-bold text-xl text-center">Мои статьи</h2>
          <WriterArticlesList />
        </>
      ) : null}

    </Container>
  );
}
