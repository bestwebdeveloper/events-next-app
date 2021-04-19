import { NextApiRequest, NextApiResponse } from 'next';

import { getEvent, saveEvent } from '../../../api/events';
import { STATUSES } from '../../../constants/constants';

export default async function handlePost(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const {
    body,
    method,
    query: { id },
  } = req;

  try {
    switch (method) {
      case 'GET': {
        const event = await getEvent(`${id}`);

        res.status(200).json(event);
        break;
      }
      case 'POST': {
        const event = await saveEvent(JSON.parse(body));

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
