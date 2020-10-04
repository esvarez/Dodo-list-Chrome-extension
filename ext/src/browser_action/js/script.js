const dodoText = document.getElementById('dodoText')
      dodoList = document.getElementById('dodoList'),
      btnDodoDone = document.getElementsByClassName('btnDodoDone'),
      btnAddDodo = document.getElementById('btnAddDodo'),
      eventsRemove = new Map();

dodoText.addEventListener('keyup', e => { if (event.keyCode === 13) addDodo() })
btnAddDodo.addEventListener('click', addDodo);

(function() {   
   chrome.storage.sync.get('dodos', function(result) {
      result.dodos.forEach(dodo => {
         insertDodoDOM(dodo.id, dodo.dodo)
      })
   });
   for (let i = 0; i < btnDodoDone.length; i++) {
      btnDodoDone[i].addEventListener('change', markDone);
   }
 }());

function addDodo() {
   if (dodoText.value != '') {
      let dodo = dodoText.value,
         id = Date.now()
      insertDodoDOM(id, dodo)
      storageDodo(id, dodo)
      dodoText.value = ''
   }      
}

function insertDodoDOM(id, dodo) {
   const item = document.createElement('li'),
         label = document.createElement('label'),
         checkbox = document.createElement('input'),
         span = document.createElement('span'),
         div = document.createElement('div')      
   item.className = 'dodo'
   label.className = 'dodo_label'
   checkbox.type = 'checkbox'
   checkbox.className = 'btnDodoDone'
   checkbox.addEventListener('change', markDone);
   checkbox.id = id
   span.innerText = dodo
   div.className = 'dodo_mark'
   label.appendChild(checkbox)
   label.appendChild(span)
   label.appendChild(div)
   item.appendChild(label)
   dodoList.appendChild(item)
}

function markDone(e) {   
   let id = this.id
   if(this.checked) {
      let event = setTimeout(function() {         
         removeDodoStoage(id)
         const dodo = e.path[2]   
         dodo.parentNode.removeChild(dodo);
      }, 1000)
      eventsRemove.set(id, event)
   } else {
      clearTimeout(eventsRemove.get(id))      
   }
}

function storageDodo(id, dodoName) {
   let dodo = { id: id, dodo: dodoName }
   chrome.storage.sync.get('dodos', function(result) {
      console.log(result.dodos);      
      if (result.dodos === undefined) {
         result.dodos = [{dodo}]
      } else {
         result.dodos.push(dodo)
      }
      chrome.storage.sync.set({'dodos': result.dodos}, function() {
         console.log('Value is set to ' + result.dodos);
         console.log(result.dodos);
         });
   });   
}

function removeDodoStoage(id) {
   chrome.storage.sync.get('dodos', function(result) {      
      for (let i = 0; i < result.dodos.length; i++) { 
         if(result.dodos[i]['id'] == id) {                        
            result.dodos.splice(i, 1)
            break
         }         
      }
      chrome.storage.sync.set({'dodos': result.dodos}, function() {
         console.log('Value is set to ' + result.dodos);
         console.log(result.dodos);
      });
   });
}