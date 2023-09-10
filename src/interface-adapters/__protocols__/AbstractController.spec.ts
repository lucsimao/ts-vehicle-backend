import { internalServerError, ok } from '../helpers/httpResponses';
import { AbstractController } from './AbstractController';

const makeSut = (inputHandle?: CallableFunction) => {
  class ControllerStub extends AbstractController<string, string> {
    protected async handle(input: string): Promise<string> {
      return inputHandle?.(input) || `some output ${input}`;
    }
  }
  const sut = new ControllerStub();

  return { sut };
};

describe('controller', () => {
  const input = 'some input';

  describe('should return ok http response', () => {
    test('when success', async () => {
      const { sut } = makeSut();

      const result = await sut.exec(input);

      expect(result).toEqual(ok(`some output ${input}`));
    });
  });

  describe('should return error http response', () => {
    test('when fails', async () => {
      const error = new Error('controller error');
      const { sut } = makeSut(() => {
        throw error;
      });

      const result = await sut.exec(input);

      expect(result).toEqual(internalServerError([error]));
    });
  });
});
