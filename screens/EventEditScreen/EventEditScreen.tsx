import Link from 'next/link';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { saveEvent } from '../../api/client';
import { Event, EventSaveResult } from '../../api/events';
import { Button } from '../../components/Button';
import { Input, Textarea } from '../../components/FormField';
import { LoadingIndicator } from '../../components/LoadingIndicator';
import { MessageBox } from '../../components/MessageBox';
import { MESSAGES, STATUSES } from '../../constants/constants';
import { useAsyncRequest } from '../../hooks/useAsyncRequest';
import * as Styled from './styles';

interface EventEditScreenProps {
  event: Event;
}

export function EventEditScreen({ event }: EventEditScreenProps): JSX.Element {
  const [eventData, setEventData] = useState<Event>(event);
  const [{ error, isLoading, result: eventSaveResponse }, setEventDataToSave] = useAsyncRequest<EventSaveResult, Event>(
    {
      asyncFn: saveEvent,
    }
  );
  const form = useRef(null);
  const handleEventSave = useCallback(
    (evt: React.FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
      setEventDataToSave(eventData);
    },
    [eventData, setEventDataToSave]
  );
  const handleChange = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (evt.target.name in eventData) {
        setEventData(
          Object.assign({}, eventData, {
            [evt.target.name]: evt.target.value,
          })
        );
      }
    },
    [eventData]
  );

  useEffect(() => {
    if (eventSaveResponse !== null) {
      window.scrollTo({ behavior: 'smooth', top: 0 });
    }
  }, [eventSaveResponse]);

  useEffect(() => {
    if (error !== '') {
      window.scrollTo(0, 0);
    }
  }, [error]);

  return (
    <>
      <Styled.Form ref={form} onSubmit={handleEventSave}>
        {error ? <MessageBox messages={[error]} type="error" /> : null}
        {eventSaveResponse != undefined ? (
          <MessageBox
            messages={[eventSaveResponse.message]}
            type={eventSaveResponse.status === STATUSES.ERROR ? 'error' : 'info'}
          />
        ) : null}
        <h1>
          <Link href={`/events/${eventData.id}`}>&laquo;</Link> Edit
        </h1>
        <Styled.Label>Title</Styled.Label>
        <Styled.InputWrapper>
          <Input disabled={isLoading} id="title" name="title" value={eventData.title} onChange={handleChange} />
        </Styled.InputWrapper>
        <Styled.Label>Image url</Styled.Label>
        <Styled.InputWrapper>
          <Input
            disabled={isLoading}
            id="promoImage"
            name="promoImage"
            value={eventData.promoImage}
            onChange={handleChange}
          />
        </Styled.InputWrapper>
        <Styled.Label>Date</Styled.Label>
        <Styled.InputWrapper>
          <Input
            disabled={isLoading}
            id="time"
            name="time"
            type="date"
            value={eventData.time}
            onChange={handleChange}
          />
        </Styled.InputWrapper>
        <Styled.Label>Location</Styled.Label>
        <Styled.InputWrapper>
          <Input
            disabled={isLoading}
            id="location"
            name="location"
            value={eventData.location}
            onChange={handleChange}
          />
        </Styled.InputWrapper>
        <Styled.Label>Organiser</Styled.Label>
        <Styled.InputWrapper>
          <Input
            disabled={isLoading}
            id="organiser"
            name="organiser"
            value={eventData.organiser}
            onChange={handleChange}
          />
        </Styled.InputWrapper>
        <Styled.Label>Description</Styled.Label>
        <Styled.InputWrapper>
          <Textarea
            disabled={isLoading}
            id="description"
            name="description"
            rows={10}
            value={eventData.description}
            onChange={handleChange}
          />
        </Styled.InputWrapper>
        <div>
          <Button disabled={isLoading} type="submit">
            {MESSAGES.SAVE}
          </Button>
        </div>
      </Styled.Form>
      {isLoading ? <LoadingIndicator withOverlay /> : null}
    </>
  );
}
