let images = [{
  url: "/Users/Jewel/Desktop/Slider4maket/img/slide1.png",
  ttitle: "Rostov-on-Don, Admiral",
  description: "Only a small part of the work performed by our company is presented on the site. For 14 years on in the construction  market we have made happy more than 1000 families",
  city: "Rostov-on-Don LCD admiral",
  repair: "3.5 months",
  area: "81 m2",
  cost: 'Upon request'
}, {
  url: "/Users/Jewel/Desktop/Slider4maket/img/slide2.png",
  title: "Sochi Thieves",
  description: "Sochi is presented on the site. For 14 years on in the construction  market we have made happy more than 1000 families",
  city: "Sochi Thieves",
  repair: "4 months",
  area: "105 m2",
  cost: 'Upon request'
}, {
  url: "/Users/Jewel/Desktop/Slider4maket/img/slide3.jpg",
  title: "Rostov-on-Don Patriotic",
  description: "Rostov-on-Don Patriotic Only a small part of the work performed by our company is presented on the site.",
  city: "Rostov-on-Don Patriotic",
  repair: "3 months",
  area: "93 m2",
  cost: '100500 dollars'
}];

function initSlider(options) { //если нет картинок
if (!images || !images.length) return;

options = options || { // подключаем опции
  titles: false,
  dots: true,
  autoplay: false,
  description:true,
  city:true,
  repair:true,
  area:true,
  cost:true,
  hrefs:true
};

let sliderImages = document.querySelector(".slider__images");
let sliderArrows = document.querySelector(".slider__arrows");
let sliderDots = document.querySelector(".slider__dots");
let sliderDescr = document.querySelector(".descr");
let sliderCity = document.querySelector(".city");
let sliderArea = document.querySelector(".area");
let sliderRepair = document.querySelector(".repairTime");
let sliderCost = document.querySelector(".cost");
let sliderHrefs = document.querySelector(".complWrapper");


initImages();
initArrows();


if (options.dots) {
  initDots();
}

if (options.titles) {
  initTitles();
}


if (options.autoplay) {
  initAutoplay();
}

function initImages() {
  images.forEach((image, index) => {
    let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
    sliderImages.innerHTML += imageDiv;
  });
}

function initArrows() {
  sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
    arrow.addEventListener("click", function() {
      let curNumber = +sliderImages.querySelector(".active").dataset.index;
      let nextNumber;
      if (arrow.classList.contains("left")) {
        nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
      } else {
        nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
      }
      moveSlider(nextNumber);
    });
  });
}

function initDots() {
  images.forEach((image, index) => {
    let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
    sliderDots.innerHTML += dot;
  });
  sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
    dot.addEventListener("click", function() {
      moveSlider(this.dataset.index);
    })
  })
}



function moveSlider(num) {
  sliderImages.querySelector(".active").classList.remove("active");
  sliderImages.querySelector(".n" + num).classList.add("active");
  if (options.dots) {
    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");
  }
  if (options.titles) changeTitle(num);
  if (options.description) changeDescription(num);
  if (options.city) changeCity(num);
  if (options.area) changeArea(num);
  if (options.repair) changeRepair(num);
  if (options.cost) changeCost(num);
  if (options.hrefs) changeHrefs(num);
}

function initTitles() {
  let titleDiv = `<div class="slider__images-title">${images[0].title}</div>`;
  sliderImages.innerHTML += cropTitle(titleDiv, 50);
}


function changeTitle(num) {
  if (!images[num].title) return;
  let sliderTitle = sliderImages.querySelector(".slider__images-title");
  sliderTitle.innerText = cropTitle(images[num].title, 50);
}

function changeHrefs(num) {
 if (!images[num].title) return;
 let sliderHref = sliderHrefs.querySelector(".proj"); 
 sliderHref.innerText = images[num].title; 
}



function changeDescription(num) {
  if (!images[num].description) return;
  sliderDescr.innerText = cropDescr(images[num].description, 200);
}

function changeCity(num) {
  if (!images[num].city) return;
  sliderCity.innerText = cropCity(images[num].city, 200);
}

function changeArea(num) {
  if (!images[num].area) return;
  sliderArea.innerText = cropArea(images[num].area, 50);
}

function changeRepair(num) {
  if (!images[num].repair) return;
  sliderRepair.innerText = cropRepair(images[num].repair, 50);
}

function changeCost(num) {
  if (!images[num].cost) return;
  sliderCost.innerText = images[num].cost;
}

function cropDescr(description, size) {
  if (description.length <= size) {
    return description
  } else {
    return description.substr(0, size) + "...";
  }
}

function cropCity(city, size) {
  if (city.length <= size) {
    return city
  } else {
    return city.substr(0, size) + "...";
  }
}

function cropArea(area, size) {
  if (area.length <= size) {
    return area
  } else {
    return area.substr(0, size) + "...";
  }
}

function cropRepair(repair, size) {
  if (repair.length <= size) {
    return repair
  } else {
    return repair.substr(0, size) + "...";
  }
}

function cropTitle(title, size) {
  if (title.length <= size) {
    return title;
  } else {
    return title.substr(0, size) + "...";
  }
}

function initAutoplay() {
  setInterval(() => {
    let curNumber = +sliderImages.querySelector(".active").dataset.index;
    let nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
    moveSlider(nextNumber);
  }, options.autoplayInterval);
}
}

let sliderOptions = {
dots: true,
titles: true,
autoplay: true,
description:true,
city:true,
area:true,
repair:true,
cost:true,
hrefs:true,
autoplayInterval: 5000
};

document.addEventListener("DOMContentLoaded", function() {
initSlider(sliderOptions);
});