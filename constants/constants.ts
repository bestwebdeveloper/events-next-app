export const MESSAGES = {
  ALL_EVENTS: 'All events',
  /*AGREEMENT_IS_NOT_CHECKED: 'You must promise that typed account is yours',
  COMMENT: 'Comment',
  COMMENTS: 'Comments',
  INVALID_CREDENTIALS: 'Invalid credentials',
  LIKES: 'Likes',*/
  LOADING: 'Loading... Please wait',
  // NO_COMMENTS: 'No Comments',
  NO_EVENTS: 'No events so far.',
  /*PASSWORD_IS_EMPTY: 'Password is empty',
  PASSWORD_IS_SHORT: 'Password should be at least 6 symbols',
  STARTS_AT: 'Starts at',
  USERNAME_IS_EMPTY: 'Username is empty',
  USER_EXISTS: 'User with this name already exists',
  USER_DOES_NOT_EXIST: 'User with this name does not exist',
  INVALID_ACCESS_TOKEN: 'Invalid access token',*/
  INVALID_EVENT_ID: 'Event not found',
  EVENT_INFO_DATE: 'Date',
  EVENT_INFO_LOCATION: 'Location',
  EVENT_INFO_ORGANISER: 'Organiser',
  EVENT_INFO_WEATHER: 'Weather in location',
  SAVE: 'Save',
  CANCEL: 'Cancel',
  EVENT_SAVE_SUCCESSFUL: 'Event successfully saved',
  EVENT_CREATE_SUCCESSFUL: 'Event successfully created',
  NEW_EVENT: 'New',
  EDIT_EVENT: 'Edit',
  EMPTY_REQUEST: 'Empty request',
  WEATHER_TEMPERATURE: 'Temperature',
  WEATHER_PRESSURE: 'Pressure',
  WEATHER_CLOUD_AREA_FRACTION: 'Cloud area fraction',
  WEATHER_HUMIDITY: 'Humidity',
  WEATHER_WIND: 'Wind',
} as const;

export enum STATUSES {
  OK = 'ok',
  ERROR = 'error',
}
