const navbar = document.getElementById('navbar')
const ulcontent = document.getElementById('content')
const logoimg = document.getElementById('logoimg')
function navbaranimation(){
    if(navbar.classList.contains('playanimation')){
        navbar.classList.remove('playanimation')
        navbar.classList.add('removeanmation')
        ulcontent.classList.add('removecontent')
        ulcontent.classList.remove('showcontent')
                logoimg.src='./imgs/white-removebg-preview.png'
    }else{
        navbar.classList.add('playanimation')
        navbar.classList.remove('removeanmation')
        ulcontent.classList.remove('removecontent')
        ulcontent.classList.add('showcontent')
        logoimg.src='./imgs/black-removebg-preview.png'
    }
}
