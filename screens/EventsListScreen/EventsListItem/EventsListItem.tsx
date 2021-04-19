import Link from 'next/link';

import { Event } from '../../../api/events';
import { DateBlock } from '../../../components/DateBlock';
import * as Styled from './styles';

interface EventsListItemProps {
  event: Event;
}

export function EventsListItem({ event: { id, title, time } }: EventsListItemProps): JSX.Element {
  return (
    <Link href={`/events/${id}`} passHref>
      <Styled.EventLink>
        <Styled.DateWrapper>
          <DateBlock dateString={time} />
        </Styled.DateWrapper>
        <Styled.EventLinkTitle>{title}</Styled.EventLinkTitle>
      </Styled.EventLink>
    </Link>
  );
}
