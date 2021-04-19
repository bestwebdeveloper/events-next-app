import { NextApiRequest, NextApiResponse } from 'next';

import { getWeather } from '../../../api/weather';
import { STATUSES } from '../../../constants/constants';

export default async function handlePosts(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const {
    method,
    query: { place },
  } = req;

  try {
    switch (method) {
      case 'GET': {
        const weather = await getWeather(`${place}`);

        res.status(200).json(weather);
        break;
      }
      default:
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ message: error.message, status: STATUSES.ERROR });
  }
}
