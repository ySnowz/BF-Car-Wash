/////////////////////////////////////////////////////////////
/////////////////// SCROLL ANIMATION ///////////////////////
///////////////////////////////////////////////////////////
const buttonNavBar = document.querySelectorAll('.navbar-nav a[href^="#"]')

// adicionando a função do click para cada elemento
buttonNavBar.forEach((item)=>{
  item.addEventListener('click', scrollToIdOnClick);
})

// pegando o id do elemento e a distância do topo
function scrollToIdOnClick(_){
  _.preventDefault()
  const element = _.target
  const id = element.getAttribute('href')
  const DistanceOffTop = document.querySelector(id).offsetTop
  window.scroll({
    top: DistanceOffTop - 60,
    behavior: "smooth"
  })
}

const sectionsReaveal = document.querySelectorAll('section')

sectionsReaveal.forEach((section)=>{
  ScrollReveal({reset: true}).reveal(section)
})