import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useCallback, useEffect, useRef, useState } from 'react';

import { addEvent } from '../../api/client';
import { EventSaveResult, NewEvent } from '../../api/events';
import { Button } from '../../components/Button';
import { Input, Textarea } from '../../components/FormField';
import { MessageBox } from '../../components/MessageBox';
import { MESSAGES, STATUSES } from '../../constants/constants';
import { useAsyncRequest } from '../../hooks/useAsyncRequest';
import * as Styled from './styles';

export function EventAddScreen(): JSX.Element {
  const [eventData, setEventData] = useState<NewEvent>({
    description: '',
    location: '',
    organiser: '',
    promoImage: '',
    time: '',
    title: '',
  });
  const [{ error, isLoading, result: eventSaveResponse }, setEventDataToSave] = useAsyncRequest<
    EventSaveResult,
    NewEvent
  >({
    asyncFn: addEvent,
  });
  const form = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (eventSaveResponse?.event?.id) {
      router.push(`events/${eventSaveResponse.event.id}`);
    }
  }, [eventSaveResponse, router]);

  const handleEventSave = useCallback(
    (evt: FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
      setEventDataToSave(eventData);
    },
    [eventData, setEventDataToSave]
  );

  const handleChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const handleBack = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <Styled.Form ref={form} onSubmit={handleEventSave}>
      {error ? <MessageBox messages={[error]} type="error" /> : null}
      {eventSaveResponse != undefined && eventSaveResponse.status === STATUSES.OK ? (
        <MessageBox messages={[eventSaveResponse.message]} type="info" />
      ) : null}
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
        <Input disabled={isLoading} id="time" name="time" type="date" value={eventData.time} onChange={handleChange} />
      </Styled.InputWrapper>
      <Styled.Label>Location</Styled.Label>
      <Styled.InputWrapper>
        <Input disabled={isLoading} id="location" name="location" value={eventData.location} onChange={handleChange} />
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
        <Button disabled={isLoading} type="button" onClick={handleBack}>
          {MESSAGES.CANCEL}
        </Button>
      </div>
    </Styled.Form>
  );
}
