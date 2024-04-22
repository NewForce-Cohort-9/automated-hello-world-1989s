import getPeruCities from '../database.js';

export const cities = peruData.cities.map(city => ({ ...city }));