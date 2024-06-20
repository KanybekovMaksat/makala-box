import ScrollTop from '~shared/lib/react-router/scroll-top';
import { Outlet } from 'react-router-dom';
import { getCookie } from 'typescript-cookie';
import { GuestBar } from '~widgets/guest-bar';
import { TopBar } from '~widgets/top-bar';
import { NavBar } from '~widgets/nav-bar';
import { Container } from '@mui/material';
import { Footer } from '~widgets/footer';

export function GenericLayout() {
  const isAuth = getCookie('access');
  return (
    <>
      <ScrollTop />
      {isAuth ? <TopBar /> : <GuestBar />}
      <Container maxWidth="lg" className="flex relative mt-14">
        <div className="w-[270px] hidden md:block">
          <NavBar />
        </div>
        <Outlet />
        <Footer/>
      </Container>
    </>
  );
}

export function IntroLayout() {
  return (
    <div className="intro relative flex justify-center">
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
