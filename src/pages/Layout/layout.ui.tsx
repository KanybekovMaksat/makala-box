import { Outlet } from 'react-router-dom';
import { sessionQueries } from '~entities/session';
import ScrollTop from '~shared/lib/react-router/scroll-top';
import { Footer } from '~widgets/footer';
import { GuestBar } from '~widgets/guest-bar';
import { TopBar } from '~widgets/top-bar';

export function GenericLayout() {
  const { data: userData } = sessionQueries.useloginUserQuery();
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow">
        <ScrollTop />
        {userData ? <TopBar /> : <GuestBar />}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export function IntroLayout() {
  return (
    <div className="intro relative  flex justify-center">
      <video
        className="object-cover w-full h-full"
        src="/public/intro.mp4"
        autoPlay
        muted
        loop
      ></video>
      <div className="absolute ">
        <Outlet />
      </div>
    </div>
  );
}
