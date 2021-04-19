import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState
} from 'react';

interface asyncRequest<T, E> {
  asyncFn: (...args: [E]) => Promise<T>;
}

interface asyncRequestState<T> {
  error: string | null;
  isLoading: boolean;
  result: T | null | undefined;
}

export const useAsyncRequest = <T, E>({
  asyncFn,
}: asyncRequest<T, E>): [asyncRequestState<T>, Dispatch<SetStateAction<E>>] => {
  const [props, setProps] = useState<E>(null);
  const [state, setState] = useState<asyncRequestState<T>>({
    error: null,
    isLoading: false,
    result: null,
  });

  useEffect(() => {
    let isMounted = true;

    const getResult = async () => {
      setState({ error: null, isLoading: true, result: null });

      try {
        const asyncResult = await asyncFn(props);

        if (isMounted) {
          setState({ error: null, isLoading: false, result: asyncResult });
        }
      } catch (e) {
        if (isMounted) {
          setState({ error: e.message, isLoading: false, result: undefined });
        }
      }
    };

    if (props !== null) {
      getResult();
    }

    return () => {
      isMounted = false;
    };
  }, [asyncFn, props]);

  return [state, setProps];
};
