import { SteeringType } from '../enums/SteeringType';
import { VehicleType } from '../enums/VehicleType';
import { Vehicle } from '../Vehicle';

export const makeVehicle = (input?: Partial<Vehicle>): Vehicle => ({
  price: { value: 10000 },
  specification: {
    airConditioning: true,
    doorNumber: 4,
    steering: SteeringType.HYDRAULIC,
  },
  type: VehicleType.CAR,
  ...input,
});
