import { Server } from 'http';

import express from 'express';

let server: Server;

export default async (): Promise<void> => {
  const app = express();

  // Your Express app setup here...
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  // Start the server
  server = app.listen(3000, () => {
    // eslint-disable-next-line no-console
    console.log('Server is running on http://localhost:3000');
  });

  // Save the server instance to the global object so it can be accessed in other scripts
  (global as any).__SERVER__ = server;
};
