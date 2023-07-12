const Btn = document.querySelector('.hamburger');
const popupmenu = document.querySelector(".popup_menu");

function activate() {
	Btn.classList.toggle('hamburger-active');
	popupmenu.classList.toggle('active');
}

Btn.addEventListener('click', activate);
