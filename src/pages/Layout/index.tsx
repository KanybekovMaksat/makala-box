import { Outlet } from 'react-router-dom';
import ScrollTop from '~shared/lib/react-router/scroll-top';
import { Footer } from '~widgets/footer';
import { TopBar } from '~widgets/top-bar';

const GenericLayout = () => {
  return (
    <>
    <ScrollTop/>
      <TopBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default GenericLayout;
