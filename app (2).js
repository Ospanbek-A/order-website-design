const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo')
//DisplayMobileMenu
const mobileMenu = () => {
	menu.classList.toggle('is-active');
	menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// Showactivemenuwhenscrolling
const highLightMenu = () => {
	const elem = document.querySelector('.highlight')
	const homeMenu = document.querySelector('#home-page')
	const aboutMenu = document.querySelector('#about-page')
	let scrollPos = window.scrollY
	console.log(scrollPos);

	//Adds'highlightclasstomymenuitems
	if (window.innerWidth > 960 && scrollPos < 600) {
		homeMenu.classList.add('highlight')
		aboutMenu.classList.remove('highlight')
		return
	} else if (window.innerWidth > 960 && scrollPos < 2345) {
		aboutMenu.classList.remove('highlight')
		return
	}
	if ((elem && window.innerWirth < 960 && scrollPos < 600) || elem) {
		elem.classList.remove('highlight')
	}
}
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

const hideMobileMenu = () => {
	const menuBars = document.querySelector('.is-active')
	if (window.innerWidth <= 768 && menuBars) {
		menu.classList.toogle('.is-active')
		menuLinks.classList, remove('active')
	}
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
