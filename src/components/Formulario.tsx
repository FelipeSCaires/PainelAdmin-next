import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from '../core/Cliente'

interface FormularioProps{
    cliente: Cliente
}
export default function Formulario(props: FormularioProps){
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome?? '')
    const [idade, setIdade] = useState(props.cliente?.idade?? 0)
    return (
        <div>
            {id ? (
                <Entrada somenteLeitura texto="Código" valor={id} />
            ): false}
            <Entrada texto="Nome" valor={nome} tipo="text" valorMudou={setNome} />
            <Entrada texto="Idade" valor={idade} tipo="number" valorMudou={setIdade} />
        </div>
    )
}