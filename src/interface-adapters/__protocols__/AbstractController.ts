import { internalServerError, ok } from '../helpers/httpResponses';
import { ApiHttpResponse } from './ApiHttpResponse';

export abstract class AbstractController<Input, Output> {
  protected abstract handle(input: Input): Promise<Output>;

  public async exec(input: Input): Promise<ApiHttpResponse<Output>> {
    try {
      const result = await this.handle(input);

      return ok(result);
    } catch (error) {
      return internalServerError([error as Error]);
    }
  }
}
