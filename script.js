const Btn = document.querySelector('.hamburger');
// const Nav = document.querySelector('nav');

function active() {
	Btn.classList.toggle('hamburger-active');
	// Nav.classList.toggle('active');
}

Btn.addEventListener('click', active);




function CheckPalindrom (samplestring) {
    let samplestringToLowerCase = samplestring.toLowerCase();
   
    let newarr = samplestringToLowerCase.toLowerCase().split("").reverse().join("");

    console.log(newarr);

    if (newarr === samplestringToLowerCase) {
        console.log(`Podany string: ${samplestring} jest palindromem`)
    } else {console.log(`Podany string: ${samplestring} nie jest palindromem`)}    

};



