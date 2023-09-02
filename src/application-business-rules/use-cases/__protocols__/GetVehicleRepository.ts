import {
  GetVehicleUseCaseInput,
  GetVehicleUseCaseOutput,
} from '../../../enterprise-business-rules/use-cases/GetVehicleUseCase';

export interface GetVehicleRepository {
  findAll(input: GetVehicleUseCaseInput): Promise<GetVehicleUseCaseOutput>;
}
