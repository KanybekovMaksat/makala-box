import styles from './error.module.css';

type Json =
  | null
  | undefined
  | boolean
  | string
  | number
  | Json[]
  | { [k: string]: Json };

type GenericError<T extends string> = {
  errorType: T;
  explanation: string;
};

const HTTP = 'HTTP';

interface HttpError<Status extends number = number>
  extends GenericError<typeof HTTP> {
  status: Status;
  statusText: string;
  response: string | Json | null;
}


function isHttpError(error: GenericError<any>): error is HttpError {
  return error?.errorType === HTTP;
}

function isHttpErrorCode<Code extends number>(code: Code | Code[]) {
  return function isExactHttpError(
    error: GenericError<any>
  ): error is HttpError<Code> {
    if (!isHttpError(error)) {
      return false;
    }

    const codes = Array.isArray(code) ? code : [code];

    return codes.includes(error.status as any);
  };
}

type ErrorHandlerProps = {
  error: GenericError<any>;
  size?: 'small' | 'medium' | 'large' | 'full';
};

type UnexpectedErrorDto = {
  errors: {
    body: string[];
  };
};

export function ErrorHandler(props: ErrorHandlerProps) {
  const { error, size = 'medium' } = props;
  const className = `${styles.wrapper} ${styles[`loader-${size}`]}`;

  if (isHttpErrorCode(422)(error)) {
    const data = JSON.parse(error.response as string) as UnexpectedErrorDto;
    const errors: string[] = [];

    Object.entries(data.errors).forEach(([key, explanations]) => {
      explanations.forEach((explanation) => {
        errors.push(key.concat(' ', explanation));
      });
    });

    return (
      <div className={className}>
        <ul className="error-messages">
          {errors.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={className}>
      <ul className="error-messages">
        <li key={error.errorType}>{error.explanation}</li>
      </ul>
    </div>
  );
}
