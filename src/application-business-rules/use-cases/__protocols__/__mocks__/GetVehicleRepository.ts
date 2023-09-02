import { makeVehicle } from '../../../../enterprise-business-rules/entities/__mocks__/Vehicle';
import { GetVehicleRepository } from '../GetVehicleRepository';

export const makeGetVehicleRepositoryStub = (): jest.Mocked<GetVehicleRepository> => ({
  findAll: jest.fn().mockResolvedValue([makeVehicle()]),
});
