import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

import { getWeather } from '../../api/client';
import { Event } from '../../api/events';
import { WeatherDetails } from '../../api/weather';
import { Button } from '../../components/Button';
import { DateBlock } from '../../components/DateBlock';
import { LoadingIndicator } from '../../components/LoadingIndicator';
import { MessageBox } from '../../components/MessageBox';
import { MESSAGES } from '../../constants/constants';
import { useAsyncRequest } from '../../hooks/useAsyncRequest';
import * as Styled from './styles';

interface EventInfoScreenProps {
  event: Event;
}

export function EventInfoScreen({
  event: { description, id, location, organiser, promoImage, time, title },
}: EventInfoScreenProps): JSX.Element {
  const router = useRouter();
  const handleEventEditClick = useCallback(() => {
    router.push(`/events/${id}/edit`);
  }, [id, router]);
  const [{ error: weatherError, isLoading: isWeatherLoading, result: weatherInfo }, setLocation] = useAsyncRequest<WeatherDetails, string>(
    {
      asyncFn: getWeather,
    }
  );

  useEffect(() => {
    if (location !== '') {
      setLocation(location);
    }
  }, [location, setLocation]);

  return (
    <div>
      <Styled.EventTitle>
        <Link href="/">&laquo;</Link> {title}
        <Button onClick={handleEventEditClick}>{MESSAGES.EDIT_EVENT}</Button>
      </Styled.EventTitle>
      {promoImage !== '' ? (
        <p>
          <Styled.EventImage alt="" src={promoImage} />
        </p>
      ) : null}
      <p>
        <strong>{`${MESSAGES.EVENT_INFO_DATE}:`}</strong> <DateBlock dateString={time} />
      </p>
      <p>
        <strong>{`${MESSAGES.EVENT_INFO_LOCATION}:`}</strong> {location === '' ? 'Online' : location}
      </p>
      {location !== '' ? (
        <p>
          <strong>{`${MESSAGES.EVENT_INFO_WEATHER}:`}</strong>
          <div>
            {isWeatherLoading ? <LoadingIndicator /> : null}
            {weatherError ? <MessageBox messages={[weatherError]} type="error" /> : null}
            {!isWeatherLoading && !weatherError && weatherInfo ? (
              <dl>
                <dt>{MESSAGES.WEATHER_TEMPERATURE}</dt>
                <dd>{`${weatherInfo.air_temperature} C`}</dd>
                <dt>{MESSAGES.WEATHER_PRESSURE}</dt>
                <dd>{`${weatherInfo.air_pressure_at_sea_level} hPa`}</dd>
                <dt>{MESSAGES.WEATHER_CLOUD_AREA_FRACTION}</dt>
                <dd>{`${weatherInfo.cloud_area_fraction} %`}</dd>
                <dt>{MESSAGES.WEATHER_HUMIDITY}</dt>
                <dd>{`${weatherInfo.relative_humidity} %`}</dd>
                <dt>{MESSAGES.WEATHER_WIND}</dt>
                <dd>{`${weatherInfo.wind_speed} m/s from ${weatherInfo.wind_from_direction}`}</dd>
              </dl>
            ) : null}
          </div>
        </p>
      ) : null}
      <p>
        <strong>{`${MESSAGES.EVENT_INFO_ORGANISER}:`}</strong> {organiser === '' ? 'Anonymous' : organiser}
      </p>
      <p>{description}</p>
    </div>
  );
}
