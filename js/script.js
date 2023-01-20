const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const mdMenu = document.getElementById('md-menu')
const mdBtn = document.getElementById('md-btn')
btn.addEventListener('click', navToggle)
mdBtn.addEventListener('click', menuToggle)

function navToggle() {
	btn.classList.toggle('open')
	menu.classList.toggle('flex')
	menu.classList.toggle('hidden')
}

function menuToggle() {
	console.log('pouet')
	mdBtn.classList.add('md:hidden')
	mdMenu.classList.add('md:flex')
}
