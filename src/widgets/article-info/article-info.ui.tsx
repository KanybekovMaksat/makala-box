import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Chip, Tooltip } from '@mui/material';
import { articleTypes } from '~entities/article';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
dayjs.locale('ru');

type ArticleInfoProps = { article: articleTypes.Article };

export function ArticleInfo(props: ArticleInfoProps) {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-3 py-6">
      <div className="md:min-w-[55%] md:max-w-[55%]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 hover:cursor-pointer">
            <p className="text-md font-bold hover:text-second-100">
              {props.article.author}
            </p>
          </div>
          <p className="text-md text-pc-400 text-sm ">
            {dayjs(props.article.created).format('DD.MM.YYYY').toUpperCase()}
          </p>
          <div className="flex gap-3">
            <p className="text-md text-pc-400 flex items-center gap-1 text-sm">
              <VisibilityIcon className="w-5" />
              {props.article.viewCount}
            </p>
            <Tooltip title="Время чтения">
              <p className="text-md text-pc-400 flex items-center gap-1 text-sm">
                <AccessTimeFilledIcon className="w-4" />
                {props.article.readTime} мин
              </p>
            </Tooltip>
          </div>
        </div>
        <h1 className="max-w-[100%] break-words my-2 text-[30px] font-bold leading-7">
          {props.article.title}
        </h1>
        <div className="flex gap-1 my-3">
          {props.article.categories.map((category, index) => (
            <Chip
              key={index}
              label={category}
              size="small"
              variant="outlined"
              className="text-second-100 border-second-100 font-medium  rounded"
            />
          ))}
        </div>
      </div>
      <img
        className="min-h-[300px] max-h-[320px] min-w-[45%] max-w[45%] object-cover rounded"
        src={props.article.photo}
        alt=""
      />
    </div>
  );
}
