//EndPoint


import { Router, Request, Response } from 'express';
import { getGames } from '../usecases/getGamesUseCase';

const router = Router();

router.get('/games', async (req: Request, res: Response) => {
    try {
        const games = await getGames();
        res.json(games);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;

// import { Router, Request, Response } from 'express';
// import { getGames } from '../usecases/getGamesUseCase';

// const router = Router();

// router.get('/games', (req: Request, res: Response) => {
//     getGames()
//         .then((games) => {
//             res.json(games);
//         })
//         .catch((error) => {
//             res.status(500).json({ message: 'Internal Server Error' });
//         });
// });

// export default router;