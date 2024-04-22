import getPeruLandmarks from '../database.js';

export const landmarks = peruData.landmarks.map(landmark => ({ ...landmark }));
