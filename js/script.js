const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const mdMenu = document.getElementById('md-menu')
const mdBtn = document.getElementById('md-btn')
const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')
btn.addEventListener('click', navToggle)
mdBtn.addEventListener('click', menuToggle)

// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener('click', onTabClick))

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

function onTabClick(e) {
	// Deactivate all tabs
	tabs.forEach((tab) => {
		tab.children[0].classList.remove(
			'border-orange',
			'border-b-4',
			'md:border-b-0'
		)
	})

	// Hide all panels
	panels.forEach((panel) => panel.classList.add('hidden'))

	// Activate a new tab and panel based on the target
	e.target.classList.add('border-orange', 'border-b-4')
	const classString = e.target.getAttribute('data-target')
	document
		.getElementById('panels')
		.getElementsByClassName(classString)[0]
		.classList.remove('hidden')
}
