"use client";
import Cliente from "@/core/Cliente";
import Entrada from "./Entrada";
import { useState } from "react";
import Botao from "./Botao";

interface FormularioProps {
    cliente: Cliente;
    clienteMudou?: (cliente: Cliente) => void;
    cancelado?: () => void;
}

export default function Formulario({ cliente, clienteMudou, cancelado }: FormularioProps) {

    const id = cliente?._id;
    const [nome, setNome] = useState(cliente?._nome ?? '');
    const [idade, setIdade] = useState(cliente?._idade ?? 0);

    return (
        <div>
            {id && <Entrada texto="Código" valor={id} className="mb-4" somenteLeitura/>}
            <Entrada 
                tipo="text" 
                texto="Nome" 
                valor={nome} 
                valorMudou={setNome}
                className="mb-4"/>
            <Entrada 
                tipo="number" 
                texto="Idade" 
                valor={idade} 
                valorMudou={setIdade}
                />
            <div className="flex justify-end mt-7">
                <Botao 
                    cor="blue" 
                    className="mr-2" 
                    onClick={() => clienteMudou?.(new Cliente(nome, +idade, id))}>
                        {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao cor="gray" onClick={cancelado}>Cancelar</Botao>
            </div>
        </div>
    );
}