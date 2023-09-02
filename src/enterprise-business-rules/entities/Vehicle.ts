import { SteeringType } from './enums/SteeringType';
import { VehicleType } from './enums/VehicleType';
import { Amount } from './shared/Amount';

export interface Specification {
  steering: SteeringType;
  doorNumber: number;
  airConditioning: boolean;
}

export interface Vehicle {
  price: Amount;
  type: VehicleType;
  specification: Specification;
}
