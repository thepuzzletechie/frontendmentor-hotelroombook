const toggleButton = document.querySelector('.bar')
const navbar = document.querySelector('.menu')
const secondNavbar = document.querySelector('.secondMenu')
const closecart = document.querySelector('.closeCart')

const getintouch = document.querySelector('#touchbutton')
const formcontain =  document.querySelector(".formcontainer")

getintouch.addEventListener("click", () => {
  formcontain.classList.add("bringingform")
})



toggleButton.addEventListener("click", () => {
  secondNavbar.classList.add("show")
  secondNavbar.classList.add("overlay")
 

})

closecart.addEventListener("click", () => {
  secondNavbar.classList.remove("show")
})