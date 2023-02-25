import { useEffect, useState } from "react";
import { Accordion, Col, Container, Image, Modal, Row } from "react-bootstrap";
import { classes, IClassTypes, IPlayer, playersA } from "../../assets/data";

type Props = {
	show: boolean
	close: any
	addPlayer: any
	teamName: string
}

export default function PlayersList({ show, close, addPlayer, teamName }: Props) {
	const [selectedClasses, setSelectedClasses] = useState([])

	useEffect(() => {
		const players_: IPlayer[] = JSON.parse(localStorage.getItem('teams')).find(team => team.name === teamName).players
		
		let selectedClassesAux = []
		for (const player of players_) {
			selectedClassesAux.push(player.class)
		}
		setSelectedClasses(selectedClassesAux)
	}, [show])

	const getPlayersByClass = (class_: IClassTypes) => {
		return playersA.filter((player) => {
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
							if (!selectedClasses.includes(class_.class))
							return (
								<Accordion.Item eventKey={`${index}`} key={'accordion-' + index}>
									<Accordion.Header>{class_.name}</Accordion.Header>

									<Accordion.Body>
										<Container>
											{
												getPlayersByClass(class_.class).map((player, index) => {
													const playersSelected: string[] = JSON.parse(localStorage.getItem('playersSelected'))
													if (!playersSelected.includes(player.name)) {
														return (
															<Row 
																className="player-option" 
																key={'player-option-' + index}
																onClick={() => addPlayer(player)}
															>
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
													}
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