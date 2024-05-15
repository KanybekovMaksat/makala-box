import { Button } from '@mui/material';
import {
  commentContracts,
  commentQueries,
  commentTypes,
} from '~entities/comment';
import { ErrorMessage, Formik, Form, useFormikContext, useField } from 'formik';
import { formikContract } from '~shared/lib/zod';
import { getCookie } from 'typescript-cookie';
import { redirect, useNavigate } from 'react-router-dom';

type CommentFormProps = {
  id: number;
};
type MyTextFieldProps = {
  name: string;
  type?: string;
};

const MyTextField: React.FC<MyTextFieldProps> = ({ name, ...props }) => {
  const [field, meta] = useField({ ...props, name });
  return (
    <>
      <textarea
        {...field}
        {...props}
        placeholder="Комментарий"
        className="w-full h-[50px] overflow-auto mb-3 appearance-none border-none outline-none resize-none"
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export function CommentForm({ id }: CommentFormProps) {
  const {
    mutate: createComment,
    isPending,
    isError,
  } = commentQueries.useCreateCommentMutation(id);

  const initialData: commentTypes.CreateComment = {
    content: '',
    article: id,
  };

  const isAuth = getCookie('access');

  const redirect = useNavigate();
  const handleNavigate = () => {
    redirect('/login');
  };

  return (
    <div className="relative border max-w-[380px] min-h-[100px] border-pc-300 rounded p-2 flex flex-col mb-5">
      {isAuth ? null : (
        <div className="w-[380px] h-[100%] absolute bg-pc-400/90 left-0 top-0 z-10 flex flex-col items-center justify-center font-bold">
          <Button onClick={handleNavigate} variant="contained" size="small">
            Авторизоваться
          </Button>
        </div>
      )}
      <Formik
        initialValues={initialData}
        validate={validateForm}
        onSubmit={(comment) => createComment({ comment })}
      >
        {() => (
          <Form className="flex flex-col">
            <fieldset disabled={isPending}>
              <MyTextField name="content" type="text" />
              <ErrorMessage
                name="content"
                component="div"
                className="text-xs text-[red]"
              />
            </fieldset>
            <SubmitButton isPending={isPending} />
          </Form>
        )}
      </Formik>
      {isError && (
        <p className="text-center text-xs text-[red]">
          Ошибка при выполнении запроса
        </p>
      )}
    </div>
  );
}

function SubmitButton({ isPending }) {
  const { isValidating, isValid } = useFormikContext();
  return (
    <Button
      variant="contained"
      size="small"
      type="submit"
      className="mb-2 bg-second-100 self-end"
      disabled={!isValid || isValidating || isPending}
    >
      {isPending ? 'Отправка...' : 'Отправить'}
    </Button>
  );
}

const validateForm = formikContract(commentContracts.CreateCommentSchema);
