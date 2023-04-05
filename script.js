
  document.addEventListener('DOMContentLoaded', function() {

    //navli

    const navSlide = () => {
      const icon = document.querySelector(".icon");
      const nav = document.querySelector(".links");
      const navLinks = document.querySelectorAll(".links li")
      //toggle nav
      icon.addEventListener("click", () => {
        nav.classList.toggle("nav-active")
      })
    }
    navSlide()

    //------

let desnoIde1 = document.getElementById("desno-ide1")
let desnoIde2 = document.getElementById("desno-ide2")
let desnoIde3 = document.getElementById("desno-ide3")
let slika1 = document.getElementById("slika1")
let slika2 = document.getElementById("slika2")
let slika3 = document.getElementById("slika3")



window.addEventListener('scroll', function() {
    var value = this.window.scrollY;
    //console.log(value)
    value = value - 1200;
    //console.log(value)

    desnoIde1.style.marginLeft = value * 0.5 +'px';
    desnoIde2.style.marginLeft = value * 0.2 +'px';
    desnoIde3.style.marginLeft = value * 0.12 +'px';
    

    value = value -100;
    //console.log(value);


    slika1.style.transform = 'scale(' + (1 + value * 0.001) + ')'; //jedinica je scale = 1
    slika2.style.transform = 'scale(' + (1 + value * -0.0005) + ')'; //jedinica je scale = 1
    slika3.style.transform = 'scale(' + (1 + value * 0.001) + ')'; //jedinica je scale = 1
    

   
});

//-------------------------

/*let box = document.querySelector(".box")

let observer = new IntersectionObserver(enteries => {
    enteries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity =1;
            entry.target.style.transform ="translateX(0)"
        }
    })
})
observer.observe(box)


//----------------
window.addEventListener('scroll', function() {
    var box2 = document.getElementById('#box2');
    var distance = box2.getBoundingClientRect().top + window.scrollY;
    if (window.scrollY > distance) {
      element.classList.add('animate');
    }
  });*/
  

  
  });