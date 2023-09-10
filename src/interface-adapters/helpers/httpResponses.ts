import { ApiHttpResponse } from '../__protocols__/ApiHttpResponse';

export const ok = <T>(input: T): ApiHttpResponse<T> => {
  const result = {
    status: 200,
    statusCodeAsString: 'OK',
    data: input,
  };

  return result;
};

export const internalServerError = <T>(input: Error[]): ApiHttpResponse<T> => {
  const result = {
    status: 500,
    statusCodeAsString: 'INTERNAL SERVER ERROR',
    data: JSON.stringify(input.map((e) => e.message)),
  };

  return result;
};
