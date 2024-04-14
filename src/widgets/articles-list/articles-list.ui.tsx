// import components
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Tooltip,
} from '@mui/material';

// import icons
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShareIcon from '@mui/icons-material/Share';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { Link } from 'react-router-dom';
import { pathKeys } from '~shared/lib/react-router';

export function ArticlesList() {
  return (
    <div className="flex flex-col items-center gap-5">
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </div>
  );
}

// Article Card Component
function ArticleCard() {
  return (
    <Card className="max-w-full hover:shadow-xl shadow-none border border-sc-100 p-2 card">
      <div className="flex flex-col-reverse md:flex-row items-center md:justify-between">
        <CardContent className="md:p-[12px] p-2">
          <div className="flex justify-between items-center pb-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Avatar
                  alt="Remy Sharp"
                  src="https://comtehno.kg/wp-content/uploads/2019/11/cropped-cropped-1789_oooo.plus_-2-300x300.png"
                />
                <p className="text-md font-bold">Comtehno College</p>
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
                <AccessTimeFilledIcon className="w-4" />
                12 мин
              </p>
              </Tooltip>
            </div>
          </div>
          <div>
            <Link to={pathKeys.article.root()}>
              <h4 className="font-bold text-xl title">
                Как дизайнеру и любителю технологий жить после Apple Vision Pro
              </h4>
              <p className="text-md text-pc-500">
                После релиза Apple Vision Pro интерфейсы перестают быть
                концептами из фантастических фильмов и формируют новую
                реальность. Какой она будет? Информации пока немного, а купить
                очки от Apple могут пока лишь единицы....
              </p>
            </Link>
            <div className="pt-2 flex items-center gap-1">
              <div className="flex items-center ">
                <Tooltip title="Нравится">
                  <IconButton aria-label="нравится">
                    <ThumbUpIcon />
                  </IconButton>
                </Tooltip>
                <p className="text-sm text-pc-400">66</p>
              </div>
              <Tooltip title="В Избранное">
                <IconButton aria-label="В Избранное">
                  <BookmarkAddIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Поделиться">
                <IconButton aria-label="поделиться">
                  <ShareIcon />
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </CardContent>

        <CardMedia
          component="img"
          className="w-full md:max-w-[300px] h-[200px] md:max-h-[200px] md:min-h-[200px] rounded md:rounded-md md:mr-[12px]"
          image="https://i.pinimg.com/564x/b4/1a/8a/b41a8acccf85813efcddf1d93061ecc6.jpg"
          alt="Live from space album cover"
          title="Makala Box"
        />
      </div>
    </Card>
  );
}
