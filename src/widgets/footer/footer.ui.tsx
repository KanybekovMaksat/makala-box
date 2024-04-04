import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

export function Footer() {
  return (
    <footer className="flex justify-between bg-slate-700 px-20 py-7 mt-20 text-white">
      <p>© 2024–{new Date().getFullYear()}, Makala Box</p>
      <p>Legacy from Usta Soft</p>
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
      </ul>
    </footer>
  );
}
