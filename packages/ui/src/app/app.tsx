// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';

export function App() {
  console.log('HERE');
  return (
    <div>
      <NxWelcome title="evpilot" />
    </div>
  );
}

export default App;
