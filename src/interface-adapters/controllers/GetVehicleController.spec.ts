import { makeVehicle } from '../../enterprise-business-rules/entities/__mocks__/Vehicle';
import { makeGetVehicleUseCaseStub } from '../../enterprise-business-rules/use-cases/__mocks__/GetVehicleUseCase';
import { GetVehicleUseCaseInput } from '../../enterprise-business-rules/use-cases/GetVehicleUseCase';
import { internalServerError, ok } from '../helpers/httpResponses';
import { GetVehicleController } from './GetVehicleController';

const makeSut = () => {
  const getVehicleUseCase = makeGetVehicleUseCaseStub();
  const sut = new GetVehicleController(getVehicleUseCase);

  return { sut, getVehicleUseCase };
};

describe('get vehicle controller', () => {
  const input: GetVehicleUseCaseInput = { filter: 'some input' };

  describe('should return vehicles', () => {
    test('when success', async () => {
      const { sut } = makeSut();

      const result = await sut.exec(input);

      expect(result).toEqual(ok([makeVehicle()]));
    });
  });

  describe('should not return vehicles', () => {
    test('when fails', async () => {
      const { sut, getVehicleUseCase } = makeSut();
      const error = new Error('use case error');
      getVehicleUseCase.exec.mockRejectedValueOnce(error);

      const result = await sut.exec(input);

      expect(result).toEqual(internalServerError([error]));
    });
  });
});
