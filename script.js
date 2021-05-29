const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

// Athlete arrays
const m100 = ['Usain Bolt','Tyson Gay','Yohan Blake','Asafa Powell','Justin Gatlin','Christian Coleman','Nesta Carter','Maurice Greene','Steve Mullings', 'Richard Thompson'];
const m200 = ['Usain Bolt','Yohan Blake','Michael Johnson','Noah Lyles','Walter Dix','Justin Gatlin','Tyson Gay','Xavier Carter','Wallace Spearmon','Frank Fredericks'];
const m400 = ['Wayde van Niekerk','Michael Johnson','Butch Reynolds','Jeremy Wariner','Michael Norman','Steven Gardiner','Quincy Watts','Fred Kerley','LaShawn Merritt','Isaac Makwala'];
const m800 = ['David Rudisha','Wilson Kipketer','Sebastian Coe','Nijel Amos','Joaquim Cruz','Emmanuel Korir','Abubaker Kaki Khamis','Sammy Koskei','Wilfred Bungei','Donavan Brazier'];
const w100 = ['Florence Griffith-Joyner','Carmelita Jeter','Marion Jones','Shelly-Ann Fraser-Pryce','Elaine Thompson',"Sha'Carri Richardson",'Christine Arron','Merlene Ottey','English Gardner','Kerron Stewart'];
const w200 = ['Florence Griffith-Joyner','Marion Jones','Dafne Schippers','Merlene Ottey','Elaine Thompson','Allyson Felix','Marita Koch','Heike Drechsler','Grace Jackson','Gwen Torrence'];
const w400 = ['Marita Koch','Jarmila Kratochvílová','Salwa Eid Naser','Marie-José Pérec','Olga Bryzgina','Shaunae Miller-Uibo','Taťána Kocembová','Cathy Freeman','Sanya Richards','Valerie Brisco-Hooks'];
const w800 = ['Jarmila Kratochvílová','Nadezhda Olizarenko','Pamela Jelimo','Caster Semenya','Ana Fidelia Quirot','Olga Mineyeva','Taťána Kocembová','Doina Melinte','Maria de Lurdes Mutola','Jolanda Čeplak'];

// Store listitems
const listItems = [];

let dragStartIndex;

const selectEventButton = document.querySelector('#select-event');
const selectList = document.querySelector('#events');

// Determine which array has been selected
selectEventButton.onclick = (event) => {
  event.preventDefault();
  // show the selected index
  if (selectList.value == 'm100'){
    createList(m100);
  }
  if (selectList.value == 'm200'){
    createList(m200);
  }
  if (selectList.value == 'm400'){
    createList(m400);
  }
  if (selectList.value == 'm800'){
    createList(m800);
  }
  if (selectList.value == 'w100'){
    createList(w100);
  }
  if (selectList.value == 'w200'){
    createList(w200);
  }
  if (selectList.value == 'w400'){
    createList(w400);
  }
  if (selectList.value == 'w800'){
    createList(w800);
  }
  selectEventButton.style.display='none';
  selectList.style.display='none';
};


// Insert list items into DOM
function createList(list) {
  while (draggable_list.firstChild) {
    draggable_list.removeChild(draggable_list.firstChild);
  }
  [...list]
    .map(a => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((person, index) => {
      const listItem = document.createElement('li');

      listItem.setAttribute('data-index', index);

      listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
          <p class="person-name">${person}</p>
          <i class="fas fa-grip-lines"></i>
        </div>
      `;

      listItems.push(listItem);

      draggable_list.appendChild(listItem);
    });

  addEventListeners();
}

function dragStart() {
  // console.log('Event: ', 'dragstart');
  dragStartIndex = +this.closest('li').getAttribute('data-index');
}

function dragEnter() {
  // console.log('Event: ', 'dragenter');
  this.classList.add('over');
}

function dragLeave() {
  // console.log('Event: ', 'dragleave');
  this.classList.remove('over');
}

function dragOver(e) {
  // console.log('Event: ', 'dragover');
  e.preventDefault();
}

function dragDrop() {
  // console.log('Event: ', 'drop');
  const dragEndIndex = +this.getAttribute('data-index');
  swapItems(dragStartIndex, dragEndIndex);

  this.classList.remove('over');
}

// Swap list items that are drag and drop
function swapItems(fromIndex, toIndex) {
  const itemOne = listItems[fromIndex].querySelector('.draggable');
  const itemTwo = listItems[toIndex].querySelector('.draggable');

  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}

// Check the order of list items
function checkOrder() {
  listItems.forEach((listItem, index) => {
    const personName = listItem.querySelector('.draggable').innerText.trim();
    if (selectList.value == 'm100'){
      if (personName !== m100[index]) {
        listItem.classList.add('wrong');
      } else {
        listItem.classList.remove('wrong');
        listItem.classList.add('right');
      }
    }
    if (selectList.value == 'm200'){
      if (personName !== m200[index]) {
        listItem.classList.add('wrong');
      } else {
        listItem.classList.remove('wrong');
        listItem.classList.add('right');
      }
    }
    if (selectList.value == 'm400'){
      if (personName !== m400[index]) {
        listItem.classList.add('wrong');
      } else {
        listItem.classList.remove('wrong');
        listItem.classList.add('right');
      }
    }
    if (selectList.value == 'm800'){
      if (personName !== m800[index]) {
        listItem.classList.add('wrong');
      } else {
        listItem.classList.remove('wrong');
        listItem.classList.add('right');
      }
    }
    if (selectList.value == 'w100'){
      if (personName !== w100[index]) {
        listItem.classList.add('wrong');
      } else {
        listItem.classList.remove('wrong');
        listItem.classList.add('right');
      }
    }
    if (selectList.value == 'w200'){
      if (personName !== w200[index]) {
        listItem.classList.add('wrong');
      } else {
        listItem.classList.remove('wrong');
        listItem.classList.add('right');
      }
    }
    if (selectList.value == 'w400'){
      if (personName !== w400[index]) {
        listItem.classList.add('wrong');
      } else {
        listItem.classList.remove('wrong');
        listItem.classList.add('right');
      }
    }
    if (selectList.value == 'w800'){
      if (personName !== w800[index]) {
        listItem.classList.add('wrong');
      } else {
        listItem.classList.remove('wrong');
        listItem.classList.add('right');
      }
    }
  });
}

function addEventListeners() {
  const draggables = document.querySelectorAll('.draggable');
  const dragListItems = document.querySelectorAll('.draggable-list li');

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
  });

  dragListItems.forEach(item => {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);
  });
}

check.addEventListener('click', checkOrder);
