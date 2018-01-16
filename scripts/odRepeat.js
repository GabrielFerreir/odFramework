const lista = [
  {nome: 'Gabriel', idade: 18, hobby: 'Futebol'},
  {nome: 'João', idade: 18, hobby: 'Futebol'},
  {nome: 'S', idade: 18, hobby: 'Futebol'},
  {nome: 'Muller', idade: 30, hobby: 'Futebol'},
  {nome: 'Mario', idade: 23}
]
const lista2 = [
  {nome: 'Gabriel', idade: 18, hobby: 'Futebol'},
  {nome: 'João', idade: 18},
  {nome: 'Mario', idade: 23},
  {nome: 'S', idade: 18},
  {nome: 'Muller', idade: 30},

]
window.onload = () => {
  _odRepeat();
}

function _odRepeat() {
  var odRepeat = document.querySelectorAll('[od-repeat]'); // Pegando todo os atributos od-repeat
  odRepeat.forEach((item) => { // Pegando cada um dos atributos od-repeat
    // console.log(item);
    let listaArray = eval(item.getAttribute('od-repeat')); // Pegando o eval do od-repeat
    let odRepeatValue = item.querySelectorAll('[od-repeat-value]'); // Pegando todos os od-repeat-value
    listaArray.forEach((listaItem) => { // Acessando cada item do array
      let newItem =  item.cloneNode(true); // Clonando
      console.log(newItem);
        newItem.innerHTML = ''; // Limpando novo elemento
        odRepeatValue.forEach((valueRepeat) => {
        let newodRepeatValue = valueRepeat.cloneNode(true); // Clonando o elemento para que possamos trabalhar em elementos diferentes
        let value = listaItem[valueRepeat.getAttribute('od-repeat-value')]; // Salvando o valor dentro da variavel
        value = value ? value : ''; // Verifica se é undefined
        newodRepeatValue.innerHTML = value; // Salvando o valor dentro do elemento
        newItem.appendChild(newodRepeatValue); // Adicionando os elementos dentro do item
      });
      item.parentNode.appendChild(newItem); // Adicionando itens
    });
    item.parentNode.removeChild(item); // Tirando o item desnecessario que fica no topo
});
}
