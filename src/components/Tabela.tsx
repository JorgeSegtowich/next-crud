// "use client";
import Cliente from "@/core/Cliente";
import { IconeEdicao, IconeLixo } from "./Icones";

interface TabelaProps {
    clientes: Cliente[];
    clienteSelecionado?: (cliente: Cliente) => void;
    clienteExcluido?: (cliente: Cliente) => void;
}

export default function Tabela({ clientes, clienteSelecionado, clienteExcluido }: TabelaProps) {

    const exibirAcoes = clienteSelecionado || clienteExcluido;

    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-4">Codigo</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {exibirAcoes && <th className="text-center p-4">Ações</th>}
            </tr>
        );
    }

    function renderizarTabela() {
        return clientes?.map((cliente, i) => (
            <tr key={cliente._id} className={`${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}`}>
                <td className="text-left p-4">{cliente._id}</td>
                <td className="text-left p-4">{cliente._nome}</td>
                <td className="text-left p-4">{cliente._idade}</td>
                {exibirAcoes && renderizarAcoes(cliente)}
            </tr>
        ));
    }

    function renderizarAcoes(cliente: Cliente) {

        const styles = `flex justify-center items-center hover:bg-purple-50 rounded-full p-2 m-1 cursor-pointer`;

        return (
            <td className="flex justify-center p-4">
                {clienteSelecionado && <button onClick={() => clienteSelecionado?.(cliente)} className={`text-green-600 ${styles}`}>{IconeEdicao()}</button>}
                {clienteExcluido && <button onClick={() => clienteExcluido?.(cliente)} className={`text-red-500 ${styles}`}>{IconeLixo()}</button>}
            </td>
        );
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-linear-to-r from-purple-500 to-purple-800
                `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarTabela()}
            </tbody>
        </table>
    );
}