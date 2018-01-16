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
    let odRepeat = document.querySelectorAll('[od-repeat]');
    odRepeat.forEach((item) => {

      let cloneOfItem = item.cloneNode(true);
      let fatherCloneOfItem = item.parentNode;
      fatherCloneOfItem.removeChild(item);

      let itemModel = [];
      let models = cloneOfItem.querySelectorAll('[od-repeat-value]');
      models.forEach((model) => {
        itemModel.push(model.getAttribute('od-repeat-value'));
      });
      eval(cloneOfItem.getAttribute('od-repeat')).forEach((itemList) => {
        let newItem = cloneOfItem.cloneNode(true);
        itemModel.forEach((itemModelList) => {
          let searchQuery = `[od-repeat-value=${itemModelList}]`;
          newItem.querySelector(searchQuery).innerHTML = itemList[itemModelList] || '';
          
        });
          fatherCloneOfItem.appendChild(newItem);
      });
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