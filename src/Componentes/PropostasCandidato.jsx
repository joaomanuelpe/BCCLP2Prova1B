import { Alert, Card, ListGroup, Button } from "react-bootstrap";

export default function PropostasCandidato(props) {

    return (
        <>
            <Alert>
                <h1 className="text-center">{"Informações do Candidato " + props.proposta.nome}</h1>
            </Alert>
            <div className="d-flex justify-content-center mt-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                        <Card.Text>
                            <ListGroup>
                                <ListGroup.Item><img src={props.proposta.avatar} alt="foto do candidato" width={100} height={100} /></ListGroup.Item>
                                <ListGroup.Item>Email: {props.proposta.email}</ListGroup.Item>
                                <ListGroup.Item>Propostas: <ul>{

                                    props.proposta.propostas.length ? (
                                        props.proposta.propostas.map((propostaAux) => {
                                            return <li key={propostaAux}>{propostaAux}</li>;
                                        })

                                    ) : (<li>Não há propostas</li>)



                                } </ul></ListGroup.Item>
                                <ListGroup.Item>Curtidas: {props.proposta.curtidas}</ListGroup.Item>
                                <ListGroup.Item>Descurtidas: {props.proposta.descurtidas}</ListGroup.Item>
                                <ListGroup.Item>Questionamentos: <ul>{

                                    props.proposta.questionamentos.length ? (
                                        props.proposta.propostas.map((questionamentoAux) => {
                                            return <li key={questionamentoAux}>{questionamentoAux}</li>;
                                        })

                                    ) : (<li>Não há questionamentos</li>)



                                } </ul></ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className="d-flex justify-content-center mt-3">
                <Button variant="primary" onClick={() => props.setExibirPropostas(false)}>
                    Voltar
                </Button>
            </div>
        </>
    );
}