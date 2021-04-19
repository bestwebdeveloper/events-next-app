import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

import { Event, getEvent } from '../../../api/events';
import { EventInfoScreen } from '../../../screens/EventInfoScreen';

interface EventPageProps {
  event: Event;
}

export default function EventPage({ event }: EventPageProps): JSX.Element {
  return <EventInfoScreen event={event} />;
}

export async function getServerSideProps({
  params: { id },
}: GetServerSidePropsContext): Promise<GetServerSidePropsResult<EventPageProps>> {
  const event: Event = await getEvent(`${id}`);

  return { props: { event } };
}
