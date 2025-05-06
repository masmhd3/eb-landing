///////// this object has all methids I created 
class Name {
    // method fetching data
    async fetchData(API){
        try{
            const response = await fetch(API)
            const data = await response.json()
            return data
        }
        catch(error){
            console.log(`error fetching data ${error}`)
        }
    }
    
}
const MAS = new Name()




///////////////////////// navBar && links ///////////////////

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



// border color of navBar
window.onscroll  = () =>{
    if(window.scrollY > 10){
        document.querySelector('.navBar nav').style.borderColor = '#f3f4f6';
    }else{
        document.querySelector('.navBar nav').style.borderColor = 'transparent';
    }
}



// //////////////////////// home setion //////////////////////
const backgroundSection = document.querySelector('.background')
async function homeSection(){
    const allData = await MAS.fetchData('./dataBase.json')
    const homeSectionData  = allData.home
    

    backgroundSection.innerHTML =`
        <div class="text">
                <h2>${homeSectionData.boldText}</h2>
                <p>${homeSectionData.text}</p>
                <button>request invite</button>
            </div>
            <div class="image">
                <img src="${homeSectionData.img.image}" alt="image">
        </div>
    `
}
homeSection()