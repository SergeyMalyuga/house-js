import type { Art } from '../models/Art.model.ts';
import { getArts } from '../data/arts.data.ts';
import type { Country } from '../constants/consts.ts';

export class ArtsService {
  private readonly arts: Art[] = [];

  constructor() {
    this.arts = getArts();
  }

  public getArts() {
    return this.arts;
  }

  public getByCountry(country: Country) {
    return this.arts.filter((art) => art.country === country);
  }
}
