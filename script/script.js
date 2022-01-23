

// side bar 
const navEL = document.querySelector(".nav"),
      navList = navEL.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length

      

for(let i=0  ; i<totalNavList; i++){
    const a = navList[i].querySelector("a");
    a.addEventListener("click" , function(){
        // remove back-section
        for (let i =0 ; i< totalSection ; i++){
            allSection[i].classList.remove("back-section")
        }

        for (let j =0 ; j<totalNavList ; j++){
            if(navList[j].querySelector("a").classList.contains("active")){
                // add back-section
                allSection[i].classList.add("back-section")

            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);


    })

    function showSection(element){
        for (let i =0 ; i< totalSection ; i++){
            allSection[i].classList.remove("active")
        }
        const target = element.getAttribute("href").split("#")[1];

        document.querySelector("#"+target).classList.add("active")
    }
}

// run when minimize screen less than 1999
const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document .querySelector(".asidebar") ;

navTogglerBtn.addEventListener("click" , () => {
   asideSectionTogglerBtn();
})

function  asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");

    for (let i =0 ; i< totalSection ; i++){
        allSection[i].classList.toggle("open")
    }
}
// 
window.addEventListener("load", function(){
    document.querySelector(".preloader").classList.add("opacity-0");

    setTimeout( () => {
        document.querySelector(".preloader").style.display = "none" ;

    }, 1000)
})