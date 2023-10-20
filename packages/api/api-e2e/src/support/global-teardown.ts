export default async (): Promise<void> => {
  const server = (global as any).__SERVER__;
  if (server) {
    // Close the server
    await new Promise<void>((resolve, reject) => {
      server.close(err => {
        if (err) {
          // eslint-disable-next-line no-console
          console.error('Failed to close server:', err);
          reject(err);
        } else {
          // eslint-disable-next-line no-console
          console.log('Server closed');
          resolve();
        }
      });
    });
  }
};
