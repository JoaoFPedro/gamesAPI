
import { promises as fs } from 'fs';
import { join } from 'path';

const filePath = join(__dirname, '../data/games.json');

export const getGamesFromRepository = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await fs.readFile(filePath, 'utf-8');
            resolve(JSON.parse(data));
        } catch (error) {
            reject(new Error('Could not read games data'));
        }
    });
};
