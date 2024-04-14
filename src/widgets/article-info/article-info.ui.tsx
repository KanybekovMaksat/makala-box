import Avatar from '@mui/material/Avatar';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Chip,  Tooltip } from '@mui/material';

export function ArticleInfo() {
  return (
    <div className="flex gap-3 py-10">
      <div className="max-w-[60%]">
        <AvatarCard />
        <h1 className="my-4 text-[30px] font-bold leading-9 font-extrabold">
          Как дизайнеру и любителю технологий жить после Apple Vision Pro
        </h1>
        <div className="flex gap-1 my-3">
          <Chip
            label="Программирование"
            size="small"
            variant="outlined"
            className="text-pc-400 font-bold"
          />
          <Chip
            label="Дизайн "
            size="small"
            variant="outlined"
            className="text-pc-400 font-bold"
          />
          <Chip
            label="Советы "
            size="small"
            variant="outlined"
            className="text-pc-400 font-bold"
          />
        </div>
      </div>
      <img
        className="h-[250px] w-[40%] object-cover rounded"
        src="https://i.pinimg.com/564x/b4/1a/8a/b41a8acccf85813efcddf1d93061ecc6.jpg"
        alt=""
      />
    </div>
  );
}

function AvatarCard() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1 hover:cursor-pointer">
        <Avatar
          alt="Maksat"
          src="https://comtehno.kg/wp-content/uploads/2019/11/cropped-cropped-1789_oooo.plus_-2-300x300.png"
        />
        <p className="text-md font-bold hover:text-[green]">Максат Каныбеков</p>
      </div>
      <p className="text-md text-pc-400 text-sm hidden md:block">
        Апрель 2, 2024
      </p>
      <p className="text-md text-pc-400 flex items-center gap-1 text-sm">
        <VisibilityIcon className="w-5" />
        566
      </p>
      <Tooltip title="Время чтения">
        <p className="text-md text-pc-400 flex items-center gap-1 text-sm">
          <AccessTimeFilledIcon className="w-4" />5 мин
        </p>
      </Tooltip>
    </div>
  );
}
