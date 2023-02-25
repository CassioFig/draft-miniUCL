import { Col, Image, Row } from 'react-bootstrap';
import PlayerDefault from '../../assets/images/player-default.png'
import { IPlayer, ITeams } from '../../assets/data';
import PlayersList from '../PlayersList';
import { useEffect, useState } from 'react';

type Props = {
    shield  : string
    name    : string
    width   : number;
    height  : number;
}

export default function Team({ name, shield, height, width}: Props) {
    const [players, setPlayers] = useState([])
    const [showPlayersList, setShowPlayersList] = useState(false)
    const numberOfPlayers = 11

    useEffect(() => {
        const teams: ITeams[] = JSON.parse(localStorage.getItem('teams'))
        const players_: IPlayer[] = teams.find(team => team.name === name).players
        setPlayers(players_)
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

    const removePlayer = (player: IPlayer) => {
        const players_ = players.filter((player_) => player_.name !== player.name)
        setPlayers(players_)

        const teams: ITeams[] = JSON.parse(localStorage.getItem('teams'))
        teams.find(team => team.name === name).players = players_
        localStorage.setItem('teams', JSON.stringify(teams))

        let playersSelected: any[] = JSON.parse(localStorage.getItem('playersSelected'))
        playersSelected = playersSelected.filter(player_ => player_ !== player.name)
        localStorage.setItem('playersSelected', JSON.stringify(playersSelected))
    }

    return (
        <div className='team'>
            <Row>
                <Col><Image src={shield} width={width} height={height} className='team-image'/></Col>

                { players &&
                    players.map((player, index) => {
                        return (
                            <Col key={'player-' + index}>
                                <div 
                                    className='player-name'
                                    onClick={() => removePlayer(player)}
                                >
                                        { player.name }
                                </div>
                                {/* <Image
                                    width={110}
                                    height={110}
                                    className='player-image'
                                    src={player.image}
                                    onClick={() => removePlayer(player)}
                                /> */}
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
                teamName={name}
            />
        </div>
    )
}