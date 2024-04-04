import { Container } from '@mui/material';

import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';

export function Footer() {
  return (
    <footer className="bg-zinc-100">
      <Container
        maxWidth="lg"
        sx={{
          p: 3,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <p className="font-bold">
            © 2024–{new Date().getFullYear()}, Comtehno
          </p>
          <p className="text-sm font-semibold">Legacy by Usta Soft</p>
        </div>
        <ul className="flex gap-5">
          <li>
            <a href="">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="">
              <EmailIcon />
            </a>
          </li>
          <li>
            <a href="">
              <TelegramIcon />
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
