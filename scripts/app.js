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

// console.table( await deleteContato(394))

async function pegarNovoContato () {

  const nome = document.getElementById("nome").value
  const foto = document.getElementById("foto").value
  const celular = document.getElementById("contato").value
  const endereco = document.getElementById("endereco").value
  const email = document.getElementById("email").value
  const cidade = document.getElementById("cidade").value

  const contato = {
    nome,
    celular,
    foto,
    email,
    endereco,
    cidade
  }

document.getElementById("btn_salvar").addEventListener("click", await pegarNovoContato(await postContato(contato)))

}
pegarNovoContato()
// function mostrarTabela () {

// }

// function criarTabela () {

//   const corpoTabela = document.getElementById("table_body")

//   let linhaPrincipal = document.createElement("tbody")

//   let celulaNome = createElement("tr")
//   celulaNome.textContent = contato.nome

//   /*
//   const tableBody = document.getElementById('table-body')
//     let linha = document.createElement('tr')
//     linha.className = 'linha'


//     let nomeCell = document.createElement('td')
//     nomeCell.textContent = contato.nome

//     let picture = document.createElement('img')
//     picture.src = contato.foto
//     picture.width = '40'

//     let pictureCell = document.createElement('td')
//     pictureCell.appendChild(picture)

//     let phoneCell = document.createElement('td')
//     phoneCell.textContent = contato.celular

//     let emailCell = document.createElement('td')
//     emailCell.textContent = contato.email

//     let enderecoCell = document.createElement('td')
//     enderecoCell.textContent = contato.endereco

//     let cidadeCell = document.createElement('td')
//     cidadeCell.textContent = contato.cidade

//     let editAction = document.createElement('button')
//     editAction.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4Z"/></svg>`
//     editAction.addEventListener('click', () => atualizarContato(contato.id))

//     let deleteAction = document.createElement('button')
//     deleteAction.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>`
//     deleteAction.addEventListener('click', () => excluirContato(contato.id))

//     let actionCell = document.createElement('td')
//     actionCell.appendChild(editAction)
//     actionCell.appendChild(deleteAction)


//     linha.appendChild(nomeCell)
//     linha.appendChild(pictureCell)
//     linha.appendChild(phoneCell)
//     linha.append(emailCell)
//     linha.append(enderecoCell)
//     linha.append(cidadeCell)
//     linha.appendChild(actionCell)


//     return linha*/
// }