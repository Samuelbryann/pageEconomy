const item1 = document.querySelector("#l1")
const item2 = document.querySelector("#l2")
const item3 = document.querySelector("#l3")
const item4 = document.querySelector("#l4")
const item5 = document.querySelector("#l5")

const numb1 = document.querySelector("#n1")
const numb2 = document.querySelector("#n2")
const numb3 = document.querySelector("#n3")
const numb4 = document.querySelector("#n4")
const numb5 = document.querySelector("#n5")


function start(){
    
    setInterval(() => {
        setTimeout(() => {
            item1.style.margin = "14% 0px 0px 0px";
            item2.style.margin = "7% 0px 0px 0px";
        },5500);
        setTimeout(() => {
            numb1.innerHTML="2"
            numb2.innerHTML="1"
        },7500);
    
    
        setTimeout(() => {
            item3.style.margin = "35% 0px 0px 0px";
            item5.style.margin = "21% 0px 0px 0px";
        },3500);
    
        setTimeout(() => {
            numb3.innerHTML="5"
            numb5.innerHTML="3"
        },5500);
    
        setTimeout(() => {
            item1.style.margin = "21% 0px 0px 0px";
            item5.style.margin = "14% 0px 0px 0px";
        },9500);
    
        setTimeout(() => {
            numb1.innerHTML="3"
            numb5.innerHTML="2"
    
        },10500);
    
        setTimeout(() => {
            item1.style.margin = "7% 0px 0px 0px";
            item2.style.margin = "14% 0px 0px 0px";
            item3.style.margin = "21% 0px 0px 0px";
            item4.style.margin = "28% 0px 0px 0px";
            item5.style.margin = "35% 0px 0px 0px";
        }, 13000);
    
        setTimeout(() => {
            numb1.innerHTML="1"
            numb2.innerHTML="2"
            numb3.innerHTML="3"
            numb4.innerHTML="4"
            numb5.innerHTML="5"
        },14000);
    
    }, 15000);
    
}


const photoinf1 = document.querySelector("#guiardd")
const photoinf2 = document.querySelector("#keyhome")
const photoinf3 = document.querySelector("#depphot")

function sliders(){

    setInterval(() => {
        setTimeout(() => {
            photoinf1.classList.toggle("frame")
        }, 3000);
        setTimeout(() => {
            photoinf1.style.display = "none"
        }, 5000);
    
        setTimeout(() => {
            photoinf2.classList.toggle("frame")
        }, 8000);
        setTimeout(() => {
            photoinf2.style.display = "none"
        }, 10000);
    
        setTimeout(() => {
            photoinf1.style.display = "block"
            photoinf1.classList.toggle("frame")
    
            photoinf2.style.display = "block"
            photoinf2.classList.toggle("frame")
    
            photoinf3.style.display = "block"
            photoinf3.classList.toggle("frame")
    
        }, 13000);  
    }, 15000);


}

sliders()

//menu mobile

const menu = document.querySelector("#open-menu-mobile").addEventListener("click", ()=>{
    const nav = document.querySelector("nav")
    if(nav.style.display != "block"){
        nav.style.display = "block"
    }else{
        nav.style.display = "none"
    }
})







