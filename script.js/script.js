let toggleMenu = document.querySelector('.toggle-menu');
let navbar = document.getElementById('navbar');
toggleMenu.onclick = () =>{
    navbar.classList.toggle('active')
}

// -----------  Select Header Links ----------- 
const allLinks = document.querySelectorAll('#navbar a');
allLinks.forEach( link =>{
    link.addEventListener('click', ele =>{
       ele.preventDefault();
        let removeActive = document.querySelectorAll('a.active');
       if(removeActive){
            removeActive.forEach(a=>{a.classList.remove('active')})
            ele.target.classList.add('active')
        };
        document.querySelector(ele.target.dataset.section).scrollIntoView({
            behavior:"smooth"
        });
    }); // ./AddEvent
});
// ----------- Select Background home -----------
const landingPage = document.querySelector('.landing');
let bulletChangeBack = document.querySelectorAll(".change-background");
let imageArray = ["bg2.jpg","bg3.jpg"];
// Some Styling
landingPage.style.backgroundSize = 'cover';
// landingPage.style.background = 'url("../img/bg3.jpg")'
bulletChangeBack.forEach(bullet=>{
    bullet.addEventListener("click", () => {
        let randomNumber = Math.floor(Math.random()*imageArray.length);
        landingPage.style.background = `url("../img/${imageArray[randomNumber]}")`
        landingPage.style.backgroundSize = 'cover';
    })
})
//-----------  SCROLL-X IN WIDTH SCREEN ----------- 

let elScrollX =document.querySelector(".scroll-x");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", () => {
    let scrollTop =document.documentElement.scrollTop;
    elScrollX.style.width = `${(scrollTop/height)*100}%`;
});
//-----------  Select Skills Section -----------
const skillsSection = document.querySelector('.testimonials-skills');
let skills = document.querySelector('.skills')
let testimonials = document.querySelector('.testimonials')
let progress = document.querySelectorAll('.progrees-holder span');
//-----------  Select about Section -----------
const section = document.querySelector('.statistics');
let nums = document.querySelectorAll('.statistics .number');
let started = true; // Function Started ? => No
window.onscroll =()=>{
    if(window.scrollY > skillsSection.offsetTop - 400){
        testimonials.classList.add('active');
        skills.classList.add('active');
    }
    if(window.scrollY > skillsSection.offsetTop){
        progress.forEach(prog => {
            prog.style.width=prog.dataset.progress;
            prog.style.transition ="1s"   
        })
    }
    if(window.scrollY >= section.offsetTop - 200){
        if(started){
            nums.forEach(num=> startCount(num));
        }
        started = false;
    }
}
function startCount(el){
    let goal = el.dataset.goal;
    let count =  setInterval(() => {
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count)
        }
    }, 10 / goal);
}
let mm = false;
if(!mm){
    console.log(mm);
}