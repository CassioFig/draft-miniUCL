import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TeamsProvider } from './context/teams-context';
import { PlayersProvider } from './context/players-context';
import { ChampProvider } from './context/champ-context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChampProvider>
      <TeamsProvider>
        <PlayersProvider>
          <App />
        </PlayersProvider>
      </TeamsProvider>
    </ChampProvider>
  </React.StrictMode>
);
