import { Col, Image, Row } from 'react-bootstrap';
import PlayerDefault from '../../assets/images/player-default.png'
import { IPlayer } from '../../assets/data';
import PlayersList from '../PlayersList';
import { useContext, useEffect, useState } from 'react';
import { TeamsContext } from '../../context/teams-context';
import { PlayersContext } from '../../context/players-context';
import { ChampContext } from '../../context/champ-context';

type Props = {
    shield  : string
    name    : string
    width   : number;
    height  : number;
}

export default function Team({ name, shield, height, width}: Props) {
    const { teams, setTeams } = useContext(TeamsContext)
    const { champ } = useContext(ChampContext)
    const { selectedPlayers, setSelectedPlayers } = useContext(PlayersContext)
    const [players, setPlayers] = useState<IPlayer[]>([])
    const [showPlayersList, setShowPlayersList] = useState(false)
    const numberOfPlayers = 11

    useEffect(() => {
        const players_: IPlayer[] = teams.find(team => team.name === name).players
        setPlayers(players_)
    }, [champ])

    const openPlayersList = () => setShowPlayersList(true)
    const closePlayersList = () => setShowPlayersList(false)

    const addPlayer = (player: IPlayer) => {
        players.push(player)
        setPlayers(players)

        teams.find(team => team.name === name).players = players
        setTeams(teams)
        
        selectedPlayers.push(player.name)
        setSelectedPlayers(selectedPlayers)

        closePlayersList()
    }

    const removePlayer = (player: IPlayer) => {
        const players_ = players.filter((player_) => player_.name !== player.name)
        setPlayers(players_)

        teams.find(team => team.name === name).players = players_
        setTeams(teams)

        const selectedPlayers_ = selectedPlayers.filter((player_) => player_ !== player.name)
        setSelectedPlayers(selectedPlayers_)
    }

    return (
        <div className='team'>
            <Row>
                <Col><Image src={shield} width={width} height={height} className='team-image'/></Col>

                { players &&
                    players.map((player, index) => {
                        return (
                            <Col key={'player-' + index}>
                                {
                                    player.name.includes('sf-') ? (
                                        <div 
                                            className='player-name'
                                            onClick={() => removePlayer(player)}
                                        >
                                                { player.name.replace('sf-', '')}
                                        </div>
                                    ) :
                                    (
                                        <Image
                                            width={110}
                                            height={110}
                                            className='player-image'
                                            src={player.image}
                                            onClick={() => removePlayer(player)}
                                        />
                                    )
                                }
                                
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