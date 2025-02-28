import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ride } from './entities/ride.entity';

@Injectable()
export class RidesService {
  constructor(
    @InjectRepository(Ride)
    private ridesRepository: Repository<Ride>,
  ) {}

  async requestRide(ride: Partial<Ride>): Promise<Ride> {
    const newRide = this.ridesRepository.create(ride);
    return this.ridesRepository.save(newRide);
  }

  async findActiveRides(): Promise<Ride[]> {
    return this.ridesRepository.find({ where: { status: 'active' } });
  }
}