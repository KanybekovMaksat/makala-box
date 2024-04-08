import { Outlet } from 'react-router-dom';
import { Footer } from '~widgets/footer';
import { TopBar } from '~widgets/top-bar';

const GenericLayout = () => {
  return (
    <>
      <TopBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default GenericLayout;
