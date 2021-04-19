import { format, parseISO } from 'date-fns';

interface DateBlockProps {
  dateString: string;
}

export function DateBlock({ dateString }: DateBlockProps): JSX.Element {
  const date = parseISO(dateString);

  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
