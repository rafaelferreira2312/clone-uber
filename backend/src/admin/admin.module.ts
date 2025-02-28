import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Ride } from '../rides/entities/ride.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Ride])],
  providers: [AdminService],
  controllers: [AdminController],
})
export class AdminModule {}