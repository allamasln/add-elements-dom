const listElDOM = document.getElementById('lista')
const buttonElDOM = document.getElementById('agregar')

buttonElDOM.addEventListener('click', function () {
	const newItem = prompt('Añade un nuevo elemento a la lista:')

	// listElDOM.innerHTML += `<li>${newItem}</li>`

	const itemEl = document.createElement('li')
	itemEl.textContent = newItem

	listElDOM.appendChild(itemEl)
})
