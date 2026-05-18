'use script'
import { getContatos, getContato, postContato, putContato, deleteContato } from "./contatos.js"

const novoContato = {
    "nome": "Francisco Wala Noronha Macedo ATUALIZADO",
    "celular": "11 9 0000-0000",
    "foto": "https://img.freepik.com/psd-gratuitas/renderizacao-3d-do-estilo-de-cabelo-para-o-design-do-avatar_23-2151869121.jpg",
    "email": "franschesco@gmail.com",
    "endereco": "Av. São Joaquim, 234",
    "cidade": "Barueri bla bla bla"
  }

//Testando função 1 get lista de contatos
// console.table( await getContatos());

//Testando função 2 get 1 contato
// console.table( await getContato(29));

//Testando função 3 cria um novo contato
// console.table( await postContato(novoContato))

//Testando função 4 atualiza contato
// console.table( await putContato(2, novoContato))

console.table( await deleteContato(394))