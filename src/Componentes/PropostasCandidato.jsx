import { Alert, Card, ListGroup, Button, Table } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

export default function PropostasCandidato(props) {
    const [duvida, setDuvida] = useState('');

    function handleSubmit(evento) {
        evento.preventDefault(); 
        const form = evento.currentTarget;

        if (form.checkValidity()) {
            props.proposta.questionamentos.push(duvida);
            setDuvida('');
        }
    }

    function changeControl(evento) {
        setDuvida(evento.target.value);
    }

    return (
        <>
            <Alert>
                <h1 className="text-center">{"Informações do Candidato " + props.proposta.nome}</h1>
            </Alert>
            <div className="d-flex justify-content-center mt-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
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
                                }</ul></ListGroup.Item>
                                <ListGroup.Item>Questionamentos: <ul>{
                                    props.proposta.questionamentos.length ? (
                                        props.proposta.questionamentos.map((questionamentoAux) => {
                                            return <li key={questionamentoAux}>{questionamentoAux}</li>;
                                        })
                                    ) : (<li>Não há questionamentos</li>)
                                }</ul></ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <Form onSubmit={handleSubmit}>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Informe a sua dúvida: </InputGroup.Text>
                    <Form.Control
                        type="text"
                        id="duvida"
                        name="duvida"
                        placeholder="ex: Qual o intuito do projeto X?"
                        aria-label="Duvida"
                        aria-describedby="basic-addon1"
                        value={duvida}
                        onChange={changeControl} // Atualiza a dúvida no estado
                    />
                </InputGroup>
                <Row className='mt-2 mb-2'>
                    <Col md={1}>
                        <Button type="submit">Confirmar</Button>
                    </Col>
                </Row>
            </Form>

            <div className="d-flex justify-content-center mt-3">
                <Button variant="primary" onClick={() => props.setExibirPropostas(false)}>
                    Voltar
                </Button>
            </div>
            <Alert variant="primary">
                <h3>Tabela de Duvidas</h3>
            </Alert>
            <Table className="mt-4" striped bordered hover>
                <thead>
                    <tr><th>Duvidas</th></tr>
                </thead>
                <tbody>
                    {
                        props.proposta.questionamentos.length ? (
                            props.proposta.questionamentos.map((aux, index) => {
                                return (
                                    <tr key={index}><td>{aux}</td></tr>
                                )
                            })
                        ) : (<tr><td>Não há dúvidas</td></tr>)
                    }
                </tbody>
            </Table>
        </>
    );
}
