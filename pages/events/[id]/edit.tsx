import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

import { Event, getEvent } from '../../../api/events';
import { EventEditScreen } from '../../../screens/EventEditScreen';

interface EventEditPageProps {
  event: Event;
}

export default function EventEditPage({ event }: EventEditPageProps): JSX.Element {
  return <EventEditScreen event={event} />;
}

export async function getServerSideProps({
  params: { id },
}: GetServerSidePropsContext): Promise<GetServerSidePropsResult<EventEditPageProps>> {
  const event: Event = await getEvent(`${id}`);

  return { props: { event } };
}
