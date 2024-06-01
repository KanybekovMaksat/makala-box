import { Container } from '@mui/material';

import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';

export function Footer() {
  return (
    <footer className="bg-pc-100 border-t-2 border-pc-200">
      <Container maxWidth="lg" className="py-6 flex justify-between ">
        <div>
          <p className="font-bold">{new Date().getFullYear()} Comtehno</p>
          <p className="text-sm font-semibold">© Legacy by Usta Soft</p>
        </div>
        <ul className="flex gap-5">
          <li>
            <a target="_blank" href="https://www.instagram.com/comtehno.kg/">
              <InstagramIcon className=" hover:text-second-100" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=comtehno.kg@gmail.com"
            >
              <EmailIcon className="hover:text-second-100" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://t.me/Gulnurs777">
              <TelegramIcon className="hover:text-second-100" />
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
