import { Container } from '@mui/material';

import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';

export function Footer() {
  return (
    <footer className="bg-pc-100 border-t-2 border-pc-200">
      <Container maxWidth="lg" className="py-6 flex justify-between ">
        <div>
          <p className="font-bold">
            © {new Date().getFullYear()} Comtehno
          </p>
          <p className="text-sm font-semibold">Legacy by Usta Soft</p>
        </div>
        <ul className="flex gap-5">
          <li>
            <a href="">
              <InstagramIcon className=' hover:text-second-100' />
            </a>
          </li>
          <li>
            <a href="">
              <EmailIcon className='hover:text-second-100' />
            </a>
          </li>
          <li>
            <a href="">
              <TelegramIcon className='hover:text-second-100' />
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
