import { makeVehicle } from '../../enterprise-business-rules/entities/__mocks__/Vehicle';
import { makeGetVehicleRepositoryStub } from './__protocols__/__mocks__/GetVehicleRepository';
import { GetVehicle } from './GetVehicle';

const makeSut = () => {
  const getVehicleRepository = makeGetVehicleRepositoryStub();
  const sut = new GetVehicle(getVehicleRepository);

  return { sut, getVehicleRepository };
};

describe('get vehicle', () => {
  const input = { filter: 'some_filter' };

  describe('should return vehicles', () => {
    test('when success', async () => {
      const { sut } = makeSut();

      const result = await sut.exec(input);

      expect(result).toEqual([makeVehicle()]);
    });
  });

  describe('should return empty', () => {
    test('when there are none vehicles', async () => {
      const { sut, getVehicleRepository } = makeSut();
      getVehicleRepository.findAll.mockResolvedValueOnce([]);

      const result = await sut.exec(input);

      expect(result).toEqual([]);
    });
  });

  describe('should not return vehicles', () => {
    test('when vehicle fetch fails', async () => {
      const { sut, getVehicleRepository } = makeSut();
      getVehicleRepository.findAll.mockRejectedValueOnce(new Error('fetch error'));

      const promise = sut.exec(input);

      await expect(promise).rejects.toThrow(new Error('fetch error'));
    });
  });
});
