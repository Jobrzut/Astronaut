const menuToggle = document.querySelector('.toggle') //tworzymy w js const z classy toggle oraz showcase z htmla, potem możemy je wykorzystać w skrypcie
const showcase = document.querySelector('.showcase') 

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active') //po kliknięciu, do klasy dodane jest active, w css mamy toggle i toggle active, wiec po kliknieciu zmieni sie css ktory bedzie dzialal na to
    showcase.classList.toggle('active')
})