import { Col, Image, Row } from 'react-bootstrap';
import PlayerDefault from '../../assets/images/player-default.png'
import ImagemTeste from '../../assets/images/escudo-brasil-teste.jpeg'

export default function Team() {
    return (
        <div className='team'>
            <Row>
                <Col><Image src={ImagemTeste} width={110} height={110}/></Col>
                <Col><Image src={PlayerDefault} width={110} height={110}/></Col>
                <Col><Image src={PlayerDefault} width={110} height={110}/></Col>
                <Col><Image src={PlayerDefault} width={110} height={110}/></Col>
                <Col><Image src={PlayerDefault} width={110} height={110}/></Col>
                <Col><Image src={PlayerDefault} width={110} height={110}/></Col>
                <Col><Image src={PlayerDefault} width={110} height={110}/></Col>
                <Col><Image src={PlayerDefault} width={110} height={110}/></Col>
                <Col><Image src={PlayerDefault} width={110} height={110}/></Col>
                <Col><Image src={PlayerDefault} width={110} height={110}/></Col>
                <Col><Image src={PlayerDefault} width={110} height={110}/></Col>
                <Col><Image src={PlayerDefault} width={110} height={110}/></Col>
            </Row>
        </div>
    )
}