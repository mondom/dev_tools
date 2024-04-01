const dogs = [
	{ name: 'Snickers', age: 2 },
	{ name: 'Hugo', age: 8 },
]

function makeGreen() {
	const p = document.querySelector('p')
	p.style.color = '#BADA55'
	p.style.fontSize = '50px'
}

// Regular
console.log('hello')

// Interpolated
console.log('hello I am a %s string', '🐰')
console.log(`hello I am a ${'🐰'} string`)

// Styled

console.log('%c I am so great text', 'font-style: italic; color: green; text-shadow: 2px 2px 0 black')

// warning!

console.warn('oh nooo')

// Error :|
console.error('fuck')
// Info
console.info('Tomato is not a vegetable!')

// Testing

// assert - zapewnienie, twierdzenie

console.assert(1 === 1, 'That is wrong!')
console.assert(1 === 2, 'That is wrong!')

const p = document.querySelector('p')
console.assert(p.classList.contains('ouch'), 'that is not true!')

// clearing

// console.clear(); - czyści całą konsolę

// Viewing DOM Elements

console.log(p)
console.dir(p)
// console.dir(p) - pokazuje nam element plus wszystkie dostępne dla niego metody

// Grouping together

dogs.forEach(dog => {
	console.group(`${dog.name}`)
	console.log(`This is ${dog.name}`)
	console.log(`${dog.name} is ${dog.age} years old.`)
	console.log(`${dog.name} is ${dog.age * 7} human years old.`)
	console.groupEnd(`${dog.name}`)
})

// console.groupEnd(`${dog.name}`); - zamknięcie danej grupy w konsoli
// console.groupCollapsed(`${dog.name}`); - grupuje nam dane w konsoli, ale domyślnie podgrupy są zwinięte i jest to bardziej przejrzyste

// counting

console.count('flower')
console.count('flower')
console.count('Bee')
console.count('Bee')
console.count('Bee')
console.count('flower')
console.count('flower')
console.count('Bee')
console.count('Bee')
console.count('Bee')
console.count('flower')
// timing

console.time('fetching data')
fetch('https://api.github.com/users/wesbos')
	.then(data => data.json())
	.then(data => {
		console.timeEnd('fetching data')
		console.log(data)
	})


// table

console.table(dogs);