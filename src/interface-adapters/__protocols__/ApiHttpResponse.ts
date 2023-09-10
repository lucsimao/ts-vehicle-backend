export interface ApiHttpResponse<T> {
  status: number;
  statusCodeAsString: string;
  data: T | string;
}
