import { Event, EventSaveResult, NewEvent } from './events';
import { WeatherDetails } from './weather';

export function addEvent(newEvent: NewEvent): Promise<EventSaveResult> {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`, {
    body: JSON.stringify(newEvent),
    method: 'POST',
  }).then(result => result.json());
}

export function saveEvent(event: Event): Promise<EventSaveResult> {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/events/${event.id}`, {
    body: JSON.stringify(event),
    method: 'POST',
  }).then(result => result.json());
}

export function getWeather(place: string): Promise<WeatherDetails> {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/weather/${place}`).then(result => result.json());
}
