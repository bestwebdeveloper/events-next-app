import { useRouter } from 'next/router';
import React, { useCallback } from 'react';

import { Event } from '../../api/events';
import { Button } from '../../components/Button';
import { MessageBox } from '../../components/MessageBox';
import { MESSAGES } from '../../constants/constants';
import { EventsListItem } from './EventsListItem';
import * as Styled from './styles';

interface EventsListScreenProps {
  events: Event[];
}

export const EventsListScreen = ({ events }: EventsListScreenProps): JSX.Element => {
  const router = useRouter();

  const handleEventAddClick = useCallback(() => {
    router.push('/add');
  }, [router]);

  return (
    <Styled.Wrapper>
      <Styled.EventsHeader>Events <Button onClick={handleEventAddClick}>{MESSAGES.NEW_EVENT}</Button></Styled.EventsHeader>
      {events.length > 0 ? events.map(event => (
        <EventsListItem
          event={event}
          key={event.id}
        />
      )) : <MessageBox messages={[MESSAGES.NO_EVENTS]} />}
    </Styled.Wrapper>
  );
};
