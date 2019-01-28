function reveal(event){
    console.log("hej")
    let sak = document.querySelector("nav.start")
    let sak2 = document.querySelector(".blurr")
    let sak3 = document.querySelector("header, main")
    
    
    
    sak.classList.toggle("active")
    sak2.classList.toggle("active")
    sak3.classList.toggle("blur")  
}

function reveal2(event){
    
    let sak4 = document.querySelector(".box")
    
    
    sak4.classList.toggle("active2")
    
}

function reveal3(event){
    let sak5 = document.querySelector("aside")

    sak5.classList.toggle("active3")
    
}

function reveal4(event){
    let sak6 = document.querySelector("aside")

    sak6.classList.toggle("active4")
    
    
}