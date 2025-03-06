import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Rating } from '../../ratings/entities/rating.entity';

@Entity()
export class Ride {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  destination: string;

  @Column({ default: 'pending' }) // Status da corrida: 'pending', 'active', 'completed'
  status: string;

  @ManyToOne(() => User, (user) => user.ridesAsPassenger)
  @JoinColumn({ name: 'passenger_id' })
  passenger: User;

  @ManyToOne(() => User, (user) => user.ridesAsDriver)
  @JoinColumn({ name: 'driver_id' })
  driver: User;

  @OneToMany(() => Rating, (rating) => rating.ride)
  ratings: Rating[]; // Avaliações relacionadas à corrida

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}