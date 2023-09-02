import { Vehicle } from '../entities/Vehicle';

export type GetVehicleUseCaseInput = { filter: string };
export type GetVehicleUseCaseOutput = Vehicle[];

export interface GetVehicleUseCase {
  exec(input: GetVehicleUseCaseInput): Promise<GetVehicleUseCaseOutput>;
}
