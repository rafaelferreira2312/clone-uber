import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Ride } from '../../rides/entities/ride.entity';
import { Rating } from '../../ratings/entities/rating.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 'passenger' }) // Tipo de usuário: 'passenger' ou 'driver'
  type: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Ride, (ride) => ride.passenger)
  ridesAsPassenger: Ride[];

  @OneToMany(() => Ride, (ride) => ride.driver)
  ridesAsDriver: Ride[];

  @OneToMany(() => Rating, (rating) => rating.rater)
  ratingsGiven: Rating[]; // Avaliações feitas pelo usuário

  @OneToMany(() => Rating, (rating) => rating.rated)
  ratingsReceived: Rating[]; // Avaliações recebidas pelo usuário
}