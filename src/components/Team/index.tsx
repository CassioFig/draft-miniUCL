import { Button, Col, Figure, Image, Modal, Row } from 'react-bootstrap';
import PlayerDefault from '../../assets/images/player-default.png'
import { IPlayer } from '../../assets/data';
import { useState } from 'react';
import PlayersList from '../PlayersList';

type Props = {
    shield: string
    players: IPlayer[]
}

export default function Team({ shield, players }: Props) {
    const [showPlayersList, setShowPlayersList] = useState(false)
    const numberOfPlayers = 11

    const openPlayersList = () => setShowPlayersList(true)
    const closePlayersList = () => setShowPlayersList(false)

    return (
        <div className='team'>
            <Row>
                <Col><Image src={shield} width={110} height={110}/></Col>

                {
                    players.map((player, index) => {
                        return (
                            <Col key={'player-' + index}>
                                <Figure>
                                    <Figure.Image
                                        width={110}
                                        height={110}
                                        src={PlayerDefault}
                                    />
                                    <Figure.Caption>
                                        { player.name }
                                    </Figure.Caption>
                                </Figure>
                            </Col>
                        )
                    })
                }
                {
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

            <PlayersList show={showPlayersList} close={closePlayersList} />
        </div>
    )
}