import { MESSAGES, STATUSES } from '../constants/constants';
import { eventsDB } from './db/eventsDB';

export type NewEvent = {
  description: string;
  location: string;
  organiser: string;
  promoImage: string;
  time: string;
  title: string;
};

export type Event = NewEvent & {
  id: number;
};

export type EventSaveResult = {
  event?: Event;
  status: STATUSES;
  message: string;
};

export async function listEvents(): Promise<Event[]> {
  return eventsDB.getAllData();
}

export async function getEvent(eventId: string): Promise<Event> {
  return eventsDB.getData(parseInt(eventId, 10));
}

export async function addEvent(eventData: NewEvent): Promise<EventSaveResult> {
  if (eventData == null) {
    throw new Error(MESSAGES.EMPTY_REQUEST);
  }

  const newEvent = eventsDB.addData(eventData);

  return {
    event: newEvent,
    message: MESSAGES.EVENT_CREATE_SUCCESSFUL,
    status: STATUSES.OK,
  };
}

export async function saveEvent(eventData: Event): Promise<EventSaveResult> {
  if (eventData == null) {
    throw new Error(MESSAGES.EMPTY_REQUEST);
  }

  const event = eventsDB.updateData(eventData['id'], eventData);

  return {
    event,
    message: MESSAGES.EVENT_SAVE_SUCCESSFUL,
    status: STATUSES.OK,
  };
}
