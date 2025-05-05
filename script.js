







//////////// style when clicking on navBar links 

const navBarLinks = document.querySelectorAll('.listOfLinks li a')

// default style
navBarLinks[0].style.borderImage = 'linear-gradient(to right, var(--LimeGreen), var(--BrightCyan)) 1'

navBarLinks.forEach(link => {
    link.addEventListener('click', () =>{

        navBarLinks.forEach(link => {
            link.style.borderColor = 'transparent'
            link.style.borderImage = 'none'
        })

        link.style.borderImage = 'linear-gradient(to right, var(--LimeGreen), var(--BrightCyan)) 1'
        if (BtnIconNav.src.includes('icon-close.svg')){
            BtnIconNav.src = './images/icon-hamburger.svg'; // icon
            document.querySelector('.listOfLinks').style.display = 'none'
            document.querySelector('.listOfLinks').classList.remove('opacity0To1')
        }
    })
})




////////// btn of nav
const BtnIconNav = document.querySelector('.icon-hamburger')

BtnIconNav.onclick = () => {
    if (BtnIconNav.src.includes('icon-close.svg')){
        BtnIconNav.src = './images/icon-hamburger.svg'; // icon
        document.querySelector('.listOfLinks').style.display = 'none'
        document.querySelector('.listOfLinks').classList.remove('opacity0To1')
    }else{
        BtnIconNav.src = './images/icon-close.svg';
        document.querySelector('.listOfLinks').style.display = 'block'
        document.querySelector('.listOfLinks').classList.add('opacity0To1')
    }
};

