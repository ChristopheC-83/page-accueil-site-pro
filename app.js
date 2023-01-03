const img1 = document.querySelector(".img1")
const img2 = document.querySelector(".img2")
const img3 = document.querySelector(".img3")

const text1 = document.querySelector(".text1")
const text2 = document.querySelector(".text2")
const text3 = document.querySelector(".text3")

const overlay = document.querySelectorAll(".overlay")
// const overlay2 = document.querySelector(".overlay2")
// const overlay3 = document.querySelector(".overlay3")

img1.addEventListener("click", ()=>{
    console.log("clickée !")
})

function openURL(url, time) {
    setTimeout(function() {
        window.location.href=url;
    }, time);
  }

//   openURL("https://christophe-cuisine.vercel.app/", 1000)

const TL = gsap.timeline()

TL
.to (img1, {x:0, duration:1.5, left:0, scale:1, opacity:1, ease: "power4.out"})
.to (img2, {x:0, duration:1.5, left:0, scale:1, opacity:1, ease: "power4.out"}, ">-0.5")
.to (img3, {x:0, duration:1.5, left:0, scale:1, opacity:1, ease: "power4.out"}, ">-0.5")
.to(overlay, {opacity:0.5, duration:1.5}, ">-0.5")
.to(text2, {x:0, opacity:1, duration:1.25, ease: "back.out(1.25)"})
.to(text3, {x:0, opacity:1, duration:1.25, ease: "back.out(1.25)"})
.to(text1, {y:0, opacity:1, duration:1.25, ease: "back.out(1.7)"})
.to(text2, {y:0, opacity:1, duration:0.5}, ">-0.95")
.addLabel("end")
  .call(() => {
    gsap.to(document.body, {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, null, "end")
  .call(() => {
    openURL("https://christophe-cuisine.vercel.app/", 1000)
  });
TL.play()