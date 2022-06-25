import { useEffect, useState } from 'react';
import {Container} from 'react-bootstrap';
import './assets/css/style.css'
import { teams } from './assets/data';
import { Team } from './components';

export default function App() { 
  const [teams_, setTeams] = useState(teams)

  useEffect(() => {
    const teamsExist = localStorage.getItem('teams')
    if (!teamsExist) localStorage.setItem('teams', JSON.stringify(teams))
    else setTeams(JSON.parse(localStorage.getItem('teams')))
  }, [])

  return (
    <Container>
      {
        teams_.map((team, index) => {
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
