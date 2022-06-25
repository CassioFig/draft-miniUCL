import {Container} from 'react-bootstrap';
import './assets/css/style.css'
import { teams } from './assets/data';
import { Team } from './components';

export default function App() { 

  return (
    <Container>
      {
        teams.map((team, index) => {
          return (
            <Team 
              key={'team-' + index}
              shield={team.image}
              players={team.players}
            />
          )
        })
      }
    </Container>
  )
}
