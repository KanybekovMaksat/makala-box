import { Avatar, CircularProgress } from '@mui/material';
import dayjs from 'dayjs';
import { commentQueries, commentTypes } from '~entities/comment';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);
type CommentListProps = {
  id: number;
};

export function CommentList({ id }: CommentListProps) {
  const {
    data: commentData,
    isLoading,
    isSuccess,
    isError,
  } = commentQueries.useGetCommentsQuery(id);

  if (isLoading) {
    return (
      <div>
        <CircularProgress className="w-[50px] mx-auto flex justify-center" />
        <p className="text-center mt-2">Загрузка комментариев...</p>
      </div>
    );
  }

  if (isError) {
    return <p>Ошибка при загрузке комментариев!</p>;
  }

  if (commentData.data.length == 0) {
    return (
      <div className="font-medium text-pc-400">
        Ваш комментарий будет первым😀
      </div>
    );
  }

  return (
    isSuccess && (
      <div className="flex flex-col gap-6">
        {commentData?.data.map((comment) => (
          <CommentItem comment={comment} key={comment.id} />
        ))}
      </div>
    )
  );
}

type CommentItemProps = { comment: commentTypes.Comment };

function CommentItem({ comment }: CommentItemProps) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Avatar
          variant="rounded"
          alt={comment.author.fullName}
          src={comment.author.photo}
          className="w-[24px] h-[24px]"
        />
        <h5 className="font-medium">{comment.author.fullName}</h5>
        <div className="w-[1px] h-[15px] bg-pc-400"></div>
        <p className="text-[14px] text-pc-400">
          {dayjs().to(dayjs(comment.created))}
        </p>
      </div>
      <p className="mt-2">{comment.content}</p>
      <div className="w-full h-[1px]"></div>
    </div>
  );
}
