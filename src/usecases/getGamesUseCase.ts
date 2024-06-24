
import { getGamesFromRepository } from '../repositories/gameRepository';

export const getGames = async () => {
    return await getGamesFromRepository();
};
