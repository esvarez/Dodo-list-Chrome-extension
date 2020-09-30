const dodoText = document.getElementById('dodoText')
      dodoList = document.getElementById('dodoList'),
      btnDodoDone = document.getElementsByClassName('btnDodoDone'),
      btnAddDodo = document.getElementById('btnAddDodo');

dodoText.addEventListener('keyup', e => { if (event.keyCode === 13) addDodo() })
btnAddDodo.addEventListener('click', addDodo);

for (let i = 0; i < btnDodoDone.length; i++) {
   btnDodoDone[i].addEventListener('click', markDone);
}

function addDodo() {
   if (dodoText.value != '') {
      const item = document.createElement('li'),
            btndone = document.createElement('button')
      btndone.innerHTML = 'Done'   
      btndone.addEventListener('click', markDone)   
      item.innerHTML = dodoText.value
      item.appendChild(btndone)
      dodoList.appendChild(item)
      dodoText.value = ''   
   }
}

function markDone(e) {
   const dodo = e.path[1]   
   dodo.parentNode.removeChild(dodo);
}