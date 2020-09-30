const dodoText = document.getElementById('dodoText')
      dodoList = document.getElementById('dodoList'),
      btnAddDodo = document.getElementById('btnAddDodo');

dodoText.addEventListener('keyup', e => { if (event.keyCode === 13) addDodo() })
btnAddDodo.addEventListener('click', addDodo);

function addDodo() {
   const item = document.createElement('li')
   item.innerHTML = dodoText.value
   dodoList.appendChild(item)
   dodoText.value = ''   
}