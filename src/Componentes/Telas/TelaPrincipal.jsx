import { Container } from "react-bootstrap";
import Pagina from "../layouts/Pagina";
import DetalhesCandidato from "./DetalhesCandidato";
import GridCandidatos from "./GridCandidatos";
import { useState } from "react";
import {listaCandidatos} from "../../dados/candidatos";
import PropostasCandidato from "../PropostasCandidato";

export default function TelaPrincipal(props) {
    const [detalharCandidato, setDetalharCandidato]=useState(false)
    const [exibirPropostas, setExibirPropostas] = useState(false);
    const [proposta, setProposta] = useState({}); 

    return (

        <Pagina>
            {
                detalharCandidato ? (
                    <DetalhesCandidato />
                ) : (exibirPropostas ? <PropostasCandidato setExibirPropostas={setExibirPropostas} proposta={proposta} setProposta={setProposta}/>:
                    <GridCandidatos listaCandidatos={listaCandidatos} setExibirPropostas={setExibirPropostas} proposta={proposta} setProposta={setProposta} />
                )
            }
        </Pagina>
    );
}