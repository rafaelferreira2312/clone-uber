import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rating } from './entities/rating.entity';

@Injectable()
export class RatingsService {
  constructor(
    @InjectRepository(Rating)
    private ratingsRepository: Repository<Rating>,
  ) {}

  async create(rating: Partial<Rating>): Promise<Rating> {
    const newRating = this.ratingsRepository.create(rating);
    return this.ratingsRepository.save(newRating);
  }
}