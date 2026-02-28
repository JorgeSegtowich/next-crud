"use client";
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layouts";
import Tabela from "@/components/Tabela";
import useClientes from "@/hooks/useClientes";

export default function Home() {

  const { 
    cliente, 
    clientes, 
    tabelaVisivel, 
    formularioVisivel,
    exibirTabela,
    exibirFormulario,
    selecionarCliente, 
    excluirCliente, 
    salvarCliente, 
    novoCliente, 
    obterTodos 
  } = useClientes();

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <Layout titulo="Cadastro simples">
        {formularioVisivel ? (
          <Formulario 
            cliente={cliente} 
            clienteMudou={salvarCliente}
            cancelado={exibirTabela} />
        ) : (
          <>
            <div className="flex justify-end">
              <Botao cor="green" className="mb-4" onClick={novoCliente}> Novo Cliente </Botao>
            </div>
            <Tabela clientes={clientes} clienteSelecionado={selecionarCliente} clienteExcluido={excluirCliente}/>
          </>
        )}
      </Layout>
    </div>
  );
}
