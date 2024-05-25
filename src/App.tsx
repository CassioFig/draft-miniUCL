import { useContext } from 'react';
import {Container, Form} from 'react-bootstrap';
import './assets/css/style.css'
import { Team } from './components';
import { TeamsContext } from './context/teams-context';
import { ChampContext } from './context/champ-context';
import { Champ } from './enum';

export default function App() { 
  const { teams } = useContext(TeamsContext)
  const { handleChangeChamp, champ } = useContext(ChampContext)

  return (
    <Container>
      <br />
      <Form.Select 
        value={champ}
        onChange={e => handleChangeChamp(e.target.value as Champ)}
      >
        <option value={Champ.A}>Série A</option>
        <option value={Champ.B}>Série B</option>
      </Form.Select>
      <br />
      { 
        !!teams.length && teams.map((team, index) => {
          return (
            <Team 
              key={'team-' + index}
              name={team.name}
              shield={team.image}
              height={team.height}
              width={team.width}
            />
          )
        })
      }
    </Container>
  )
}
