import { Outlet } from 'react-router-dom';
import { Footer } from '~widgets/footer';
import { GuestBar } from '~widgets/guest-bar';

const GenericLayout = () => {
  return (
    <>
      <GuestBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default GenericLayout;
