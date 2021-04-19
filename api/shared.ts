export function delay(ms: number): Promise<void> {
  if (process.env.NODE_ENV !== 'test') {
    return new Promise(resolve => setInterval(() => resolve(), ms));
  } else {
    return Promise.resolve();
  }
}
