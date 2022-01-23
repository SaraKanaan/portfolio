
// close and open ger

document.querySelector(".toggle-skin").addEventListener("click" , () =>{
   document.querySelector(".style-switcher").classList.toggle("open")
});

// body Skin
const bodySkin = document.querySelectorAll(".body-skin"),
      totalBodySkin = bodySkin.length;
    for(let i =0 ; i<totalBodySkin ; i++ ){
        bodySkin[i].addEventListener("change" , function(){
            if(this.value === "Dark"){
                document.body.className = "Dark";
            }else{
                document.body.className = ""
            }
        })
    }