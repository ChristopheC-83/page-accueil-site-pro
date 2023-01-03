const img1 = document.querySelector(".img1")
const img2 = document.querySelector(".img2")
const img3 = document.querySelector(".img3")

const text1 = document.querySelector(".text1")
const text2 = document.querySelector(".text2")
const text3 = document.querySelector(".text3")

const overlay1 = document.querySelector(".overlay1")
const overlay2 = document.querySelector(".overlay2")
const overlay3 = document.querySelector(".overlay3")

img1.addEventListener("click", ()=>{
    console.log("clickée !")
})

function openURL(url, time) {
    setTimeout(function() {
        window.location.href=url;
    }, time);
  }

//   openURL("https://christophe-cuisine.vercel.app/", 1000)