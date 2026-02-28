import firebase from "@/backend/config";
import Cliente from "@/core/Cliente";
import ClienteRepositorio from "../ClienteRepositorio";

export default class ColecaoCliente implements ClienteRepositorio {

    private conversor = {
        toFirestore(cliente: Cliente) {
            return {
                nome: cliente._nome,
                idade: cliente._idade
            }
        },
        fromFirestore(
            snapshot: firebase.firestore.QueryDocumentSnapshot, 
            options: firebase.firestore.SnapshotOptions
        ): Cliente {
            const data = snapshot.data(options);
            return new Cliente(data.nome, data.idade, snapshot.id);
        }
    }

    async salvar(cliente: Cliente): Promise<Cliente> {
        if (cliente?._id) {
            await this.colecao().doc(cliente._id).set(cliente);
            return cliente;
        } else {
            const docRef = await this.colecao().add(cliente);
            const doc = await docRef.get();
            return doc.data() as Cliente;
        }
    }

    async excluir(cliente: Cliente): Promise<void> {
        console.log('Excluindo cliente', cliente);
        return this.colecao().doc(cliente._id).delete();
    }

    async obterTodos(): Promise<Cliente[]> {
        console.log('Obtendo todos os clientes');
        const query = await this.colecao().get();
        return query.docs.map(doc => doc.data() as Cliente) ?? [];
    }

    private colecao() {
        return firebase.firestore().collection('clientes').withConverter(this.conversor);
    }

}