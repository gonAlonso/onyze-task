import {Place} from './place';
import {Passenger} from './passenger';

export class Journey {
  public id: number;
  public passenger: Passenger;
  public origin: Place;
  public destination: Place;
  public distance: number;
  public time: number;
  public price: number;
  public energy: number;
}
