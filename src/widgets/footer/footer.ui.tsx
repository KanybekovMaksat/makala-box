// import { Container } from '@mui/material';

// import InstagramIcon from '@mui/icons-material/Instagram';
// import EmailIcon from '@mui/icons-material/Email';
// import TelegramIcon from '@mui/icons-material/Telegram';

// export function Footer() {
//   return (
//     <footer className="bg-pc-100 border-t-2 border-pc-200">
//       <Container maxWidth="lg" className="py-6 flex justify-between ">
//         <div>
//           <p className="font-bold">{new Date().getFullYear()} Comtehno</p>
//           <p className="text-sm font-semibold">© Legacy by Usta Soft</p>
//         </div>
//         <ul className="flex gap-5">
//           <li>
//             <a target="_blank" href="https://www.instagram.com/comtehno.kg/">
//               <InstagramIcon className=" hover:text-second-100" />
//             </a>
//           </li>
//           <li>
//             <a
//               target="_blank"
//               href="https://mail.google.com/mail/?view=cm&fs=1&to=comtehno.kg@gmail.com"
//             >
//               <EmailIcon className="hover:text-second-100" />
//             </a>
//           </li>
//           <li>
//             <a target="_blank" href="https://t.me/Gulnurs777">
//               <TelegramIcon className="hover:text-second-100" />
//             </a>
//           </li>
//         </ul>
//       </Container>
//     </footer>
//   );
// }

import { useState } from 'react';
import { Paper } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { useNavigate } from 'react-router-dom';

export function Footer() {
  const [value, setValue] = useState(0);

  const navigate = useNavigate();

  const handleNavigation = (newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/feed');
        break;
      case 2:
        navigate('/rating');
        break;
      case 3:
        navigate('/favorites');
        break;
      default:
        break;
    }
  };
  return (
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={5}
        className="shadow-none md:hidden"
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            handleNavigation(newValue);
          }}
        >
          <BottomNavigationAction icon={<HomeRoundedIcon />} />
          <BottomNavigationAction icon={<ExploreRoundedIcon />} />
          <BottomNavigationAction icon={<BarChartRoundedIcon />} />
          <BottomNavigationAction icon={<FavoriteRoundedIcon />} />
        </BottomNavigation>
      </Paper>
  );
}
