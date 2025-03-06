import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Ride } from '../../rides/entities/ride.entity';

@Entity()
export class Rating {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  score: number; // Pontuação de 1 a 5

  @Column({ nullable: true })
  comment: string; // Comentário opcional

  @ManyToOne(() => User, (user) => user.ratingsGiven)
  @JoinColumn({ name: 'rater_id' })
  rater: User; // Usuário que está avaliando

  @ManyToOne(() => User, (user) => user.ratingsReceived)
  @JoinColumn({ name: 'rated_id' })
  rated: User; // Usuário sendo avaliado

  @ManyToOne(() => Ride, (ride) => ride.ratings)
  @JoinColumn({ name: 'ride_id' })
  ride: Ride; // Corrida relacionada à avaliação

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}