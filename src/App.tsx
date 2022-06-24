import {Container} from 'react-bootstrap';
import './assets/css/style.css'
import { Team } from './components';

export default function App() { 
  const numberOfTeams = 12

  return (
    <Container>
      {
        Array.from(Array(numberOfTeams).keys()).map((item, index) => {
          return (
            <Team key={'team-' + index}/>
          )
        })
      }
    </Container>
  )
}
