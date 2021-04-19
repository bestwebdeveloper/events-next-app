import { GetServerSidePropsResult } from 'next';

import { Event, listEvents } from '../api/events';
import { EventsListScreen } from '../screens/EventsListScreen';

interface IndexPageProps {
  events: Event[];
}

export default function IndexPage({ events }: IndexPageProps): JSX.Element {
  return <EventsListScreen events={events} />;
}

export async function getServerSideProps(): Promise<GetServerSidePropsResult<IndexPageProps>> {
  const events: Event[] = await listEvents();

  return { props: { events } };
}
