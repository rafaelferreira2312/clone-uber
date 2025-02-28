import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class MapsService {
  private readonly apiKey = process.env.GOOGLE_MAPS_API_KEY;

  async getDistance(origin: string, destination: string) {
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${this.apiKey}`;
    const response = await axios.get(url);
    return response.data;
  }
}