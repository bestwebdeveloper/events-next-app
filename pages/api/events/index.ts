import { NextApiRequest, NextApiResponse } from 'next';

import { addEvent, listEvents } from '../../../api/events';
import { STATUSES } from '../../../constants/constants';

export default async function handlePosts(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { body, method } = req;

  try {
    switch (method) {
      case 'GET': {
        const events = await listEvents();

        res.status(200).json(events);
        break;
      }
      case 'POST': {
        const event = await addEvent(JSON.parse(body));

        res.status(200).json(event);
        break;
      }
      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ message: error.message, status: STATUSES.ERROR });
  }
}
