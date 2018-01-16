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
];

let nome = '';

let booleana = true;


window.onload = () => {
  _odRepeat();
  _refreshModel();
  alteraNome();
  alteraBoleana();

  setInterval(() => {
    _refreshModel();
  }, 50);
}


function alteraNome() {
  setTimeout(() => {
    nome = 'Gabriel';
    // _refreshModel();
  }, 100);

    setTimeout(() => {
    nome = 'Gabriel de Paula';
    // _refreshModel();
  }, 200);

    setTimeout(() => {
    nome = 'Gabriel de Paula Ferreira';
    // _refreshModel();
  }, 300);
}

function alteraBoleana() {
  booleana = !booleana;
}

function _odRepeat() {
  var odRepeat = document.querySelectorAll('[od-repeat]'); // Pegando todo os atributos od-repeat
  odRepeat.forEach((item) => { // Pegando cada um dos atributos od-repeat
    // console.log(item);
    let listaArray = eval(item.getAttribute('od-repeat')); // Pegando o eval do od-repeat
    let odRepeatValue = item.querySelectorAll('[od-repeat-value]'); // Pegando todos os od-repeat-value
    listaArray.forEach((listaItem) => { // Acessando cada item do array
      let newItem =  item.cloneNode(true); // Clonando
      // console.log(newItem);
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


function _refreshModel() {
  _odModel();
  _odHide();
}


function _odModel() {
    var allmodels = document.querySelectorAll('[od-model]');
  allmodels.forEach((item) => {
    let valueAtt = eval(item.getAttribute('od-model'));
    if(item.innerHTML != valueAtt) {
      item.innerHTML = valueAtt;
    }
  });
}

function _odHide() {
  var allmodels = document.querySelectorAll('[od-hide]');
  allmodels.forEach((item) => {
    let valueAtt = eval(item.getAttribute('od-hide'));
    if(valueAtt) {
      if(!item.classList.contains('od-hide')) {
        item.classList.add('od-hide');
      }
    } else {
      if(item.classList.contains('od-hide')) {
        item.classList.remove('od-hide');
      }
    }


  })
}
