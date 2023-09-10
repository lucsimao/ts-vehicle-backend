import { AbstractController } from '../__protocols__/AbstractController';
import {
  GetVehicleUseCase,
  GetVehicleUseCaseInput,
  GetVehicleUseCaseOutput,
} from '../../enterprise-business-rules/use-cases/GetVehicleUseCase';

type GetVehicleControllerInput = GetVehicleUseCaseInput;
type GetVehicleControllerOutput = GetVehicleUseCaseOutput;

export class GetVehicleController extends AbstractController<GetVehicleControllerInput, GetVehicleControllerOutput> {
  constructor(private readonly getVehicleUseCase: GetVehicleUseCase) {
    super();
  }

  protected async handle(input: GetVehicleUseCaseInput): Promise<GetVehicleUseCaseOutput> {
    const result = await this.getVehicleUseCase.exec(input);

    return result;
  }
}
