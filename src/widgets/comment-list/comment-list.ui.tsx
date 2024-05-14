import { Avatar, Button } from '@mui/material';

export function CommentList() {
  return (
    <div className="w-[95%] bg-[white] p-5">
      <h3 className="font-bold text-2xl">Комментарии</h3>
      <div className="border max-w-[380px] min-h-[100px] border-pc-300 rounded p-2 flex flex-col mb-5">
        <textarea
          className="w-full h-[50px] overflow-auto appearance-none border-none outline-none resize-none"
          placeholder="Комментарий"
        ></textarea>
        <div></div>
        <Button size="small" variant="contained" className="self-end mt-3">
          Отправить
        </Button>
      </div>
      <div className='flex flex-col gap-6'>
        <CommentItem/>
        <CommentItem/>
        <CommentItem/>
      </div>
    </div>
  );
}

function CommentItem() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Avatar
          alt="Maksat"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 27, height: 27 }}
        />
        <h5 className="font-bold">Maksat Kanybekov</h5>
        <div className="w-[1px] h-[15px] bg-pc-400"></div>
        <p className="text-sm">05.2022</p>
      </div>
      <p className="text-pc-400 mt-2">
        Actually, now that I try out the links on my message, above, none of
        them take me to the secure site. Only my shortcut on my desktop, which I
        created years ago.
      </p>
    </div>
  );
}
