import { Outlet } from 'react-router-dom';
import { sessionQueries } from '~entities/session';
import ScrollTop from '~shared/lib/react-router/scroll-top';
import { Footer } from '~widgets/footer';
import { TopBar } from '~widgets/top-bar';

export function GenericLayout() {
  const { data: userData, isLoading } = sessionQueries.useloginUserQuery();
  const { role } = userData.data;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ScrollTop />
      <TopBar />
      <Outlet />
      <Footer />
    </>
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
