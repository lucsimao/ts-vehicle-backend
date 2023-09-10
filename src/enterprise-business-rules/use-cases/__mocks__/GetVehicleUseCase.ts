import { makeVehicle } from '../../entities/__mocks__/Vehicle';
import { GetVehicleUseCase } from '../GetVehicleUseCase';

export const makeGetVehicleUseCaseStub = (): jest.Mocked<GetVehicleUseCase> => ({
  exec: jest.fn().mockResolvedValue([makeVehicle()]),
});
