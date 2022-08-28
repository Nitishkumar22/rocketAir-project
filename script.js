gsap.registerPlugin(ScrollTrigger);


function locomotivejs() {
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    smartphone: { smooth: true },
    getDirection: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

// document.querySelector("#links>i").addEventListener("click",function(){
//     document.querySelector("#sidebar").style.right = '3%'

// })

function heroscroll() {
  gsap.to("#hero", {
    scrollTrigger: {
      trigger: "#video",
      scroller: "#main",
      start: "top 45%",
      end: "top 10%",
      scrub: 2
    },
    opacity: 0,
  })
}

function textAnimationCode() {
  document.querySelectorAll(".rowtxts")
    .forEach(function (row) {
      row.innerHTML = `<div class="textwrapper">${row.innerHTML}</div>`;
    })



  document.querySelectorAll(".textwrapper")
    .forEach(text => {
      let clutter = "";
      text.textContent.split(" ").forEach(wrds => {
        clutter += `<span>${wrds}</span>`;
      })

      text.innerHTML = clutter;
    })

  gsap.set(".rowtxts span", { y: "200%" })

  document.querySelectorAll(".rowtxts")
    .forEach(function (elem) {
      gsap.from(elem, {
        scrollTrigger: {
          scroller: "#main",
          trigger: elem,
          start: "top 50%"
        },
        onStart: function () {
          gsap.to(elem.children[0].children, {
            y: 0,
            ease: Power4,
            duration: .3,
            stagger: .2
          })
        }
      })
    })
}


function slide() {
  let allSlides = document.querySelectorAll(".sld");
  allSlides = [...allSlides];

  var isHovered = null;

  allSlides.forEach(function (elem) {
    elem.addEventListener("mouseover", function (dets) {
      isHovered = "#opener" + dets.target.dataset.index;
      document.querySelector(isHovered).style.width = "100%";
    })

    elem.addEventListener("mouseleave", function (dets) {
      isHovered = "#opener" + dets.target.dataset.index;
      document.querySelector(isHovered).style.width = "0%";
    })
  });
}

gsap.from("#line",{
  width:0,
  duration:1
})





function cardanimation() {
  gsap.to("#work>#cards", {
    scrollTrigger: {
      trigger: "#work",
      scroller: "#main",
      pin: true,
      scrub: 1
    },
    y: "-250vh",
    stagger: .1
  })
}


function bglook() {
  var tl = gsap.timeline();
  tl.to("#allwork", {
    scrollTrigger: {
      trigger: "#takelook",
      scroller: "#main",
      pin: true,
      scrub: true
    },
    y: "-170%",
    backgroundColor: "yellow",
    color: "black"
  })

}


slide()
locomotivejs();
heroscroll();
cardanimation();
bglook();
textAnimationCode()