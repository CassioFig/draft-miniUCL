import { Accordion, Col, Container, Figure, Image, Modal, Row } from "react-bootstrap";
import { classes, IClassTypes, IPlayer, players } from "../../assets/data";
import Player from '../../assets/images/goleiro.jpg'

type Props = {
	show: boolean
	close: any
}

export default function PlayersList({ show, close }: Props) {

	const getPlayersByClass = (class_: IClassTypes) => {
		return players.filter((player) => {
			return player.class === class_
		})
	}

	return (
		<Modal
			show={show}
			onHide={close}
			backdrop='static'
			keyboard={false}
		>
			<Modal.Header closeButton>
				<Modal.Title>Lista de Jogadores</Modal.Title>
			</Modal.Header>
			<Modal.Body>

				<Accordion>

					{
						classes.map((class_, index) => {
							return (
								<Accordion.Item eventKey={`${index}`} key={'accordion-' + index}>
									<Accordion.Header>{class_.name}</Accordion.Header>

									<Accordion.Body>
										<Container>
											{
												getPlayersByClass(class_.class).map((player, index) => {
													return (
														<Row className="player-option" key={'player-option-' + index}>
															<Col md={4}>
																<Image
																	src={player.image}
																	width={70}
																	height={70}
																	className='player-image-option'
																/>
															</Col>
															<Col md={8}><p>{player.name}</p></Col>
														</Row>
													)
												})
											}
										</Container>
									</Accordion.Body>
								</Accordion.Item>
							)
						})
					}
				</Accordion>
			</Modal.Body>
		</Modal>
	)
}