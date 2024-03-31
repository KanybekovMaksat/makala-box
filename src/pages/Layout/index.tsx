import { Outlet } from 'react-router-dom';
import { TopBar } from '~widgets/top-bar';

const GenericLayout = () => {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
};

export default GenericLayout;
