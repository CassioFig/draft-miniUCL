import { Col, Image, Row } from 'react-bootstrap';
import PlayerDefault from '../../assets/images/player-default.png'
import { IPlayer, ITeams } from '../../assets/data';
import PlayersList from '../PlayersList';
import { useEffect, useState } from 'react';

type Props = {
    shield: string
    name: string
}

export default function Team({ name, shield }: Props) {
    const [players, setPlayers] = useState([])
    const [showPlayersList, setShowPlayersList] = useState(false)
    const numberOfPlayers = 11

    useEffect(() => {
        const teams: ITeams[] = JSON.parse(localStorage.getItem('teams'))
        setPlayers(teams.find(team => team.name === name).players)
    }, [])

    const openPlayersList = () => setShowPlayersList(true)
    const closePlayersList = () => setShowPlayersList(false)

    const addPlayer = (player: IPlayer) => {
        players.push(player)
        setPlayers(players)

        const teams: ITeams[] = JSON.parse(localStorage.getItem('teams'))
        teams.find(team => team.name === name).players = players
        localStorage.setItem('teams', JSON.stringify(teams))
        
        const playersSelected: any[] = JSON.parse(localStorage.getItem('playersSelected'))
        playersSelected.push(player.name)
        localStorage.setItem('playersSelected', JSON.stringify(playersSelected))

        closePlayersList()
    }

    return (
        <div className='team'>
            <Row>
                <Col><Image src={shield} width={110} height={110}/></Col>

                { players &&
                    players.map((player, index) => {
                        return (
                            <Col key={'player-' + index}>
                                <Image
                                    width={110}
                                    height={110}
                                    className='player-image'
                                    src={player.image}
                                />
                            </Col>
                        )
                    })
                }
                { players &&
                    Array.from(Array(numberOfPlayers - players.length).keys()).map((item, index) => {
                        return (
                            <Col key={'playerDefault-' + index}>
                                <Image 
                                    src={PlayerDefault} 
                                    width={110} 
                                    height={110} 
                                    className='player-image'
                                    onClick={openPlayersList}
                                />
                            </Col>
                        )
                    })
                }
            </Row>

            <PlayersList 
                show={showPlayersList} 
                close={closePlayersList}
                addPlayer={addPlayer}
            />
        </div>
    )
}