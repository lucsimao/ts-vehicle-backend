import {
  GetVehicleUseCase,
  GetVehicleUseCaseInput,
  GetVehicleUseCaseOutput,
} from '../../enterprise-business-rules/use-cases/GetVehicleUseCase';
import { GetVehicleRepository } from './__protocols__/GetVehicleRepository';

export class GetVehicle implements GetVehicleUseCase {
  constructor(private readonly getVehicleRepository: GetVehicleRepository) {}

  public async exec(input: GetVehicleUseCaseInput): Promise<GetVehicleUseCaseOutput> {
    const result = await this.getVehicleRepository.findAll(input);

    return result;
  }
}
