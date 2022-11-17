console.log('я вижу этот дж')
let images = [{
  url: "https://img1.akspic.ru/attachments/crops/3/2/2/2/0/102223/102223-puteshestvie-priroda-gora-otrazhenie-voshod_solnca-3840x2160.jpg",
  title: "Rostov-on-Don, Admiral",
  description: "Only a small part of the work performed by our company is presented on the site. For 14 years on in the construction  market we have made happy more than 1000 families",
  city: "Rostov-on-Don LCD admiral",
  repair: "3.5 months",
  area: "81 m2",
  cost: 'Upon request'
}, {
  url: "https://catherineasquithgallery.com/uploads/posts/2021-02/1612678074_74-p-kartinka-fon-zelenii-lug-125.jpg",
  title: "Sochi Thieves",
  description: "Sochi is presented on the site. For 14 years on in the construction  market we have made happy more than 1000 families",
  city: "Sochi Thieves",
  repair: "4 months",
  area: "105 m2",
  cost: 'Upon request'
}, {
  url: "https://w-dog.ru/wallpapers/2/9/304378601614637/gorod-franciya-parizh-ejfeleva-bashnya-arxitektura-pod-ejfelevoj.jpg",
  title: "Rostov-on-Don Patriotic",
  description: "Rostov-on-Don Patriotic Only a small part of the work performed by our company is presented on the site.",
  city: "Rostov-on-Don Patriotic",
  repair: "3 months",
  area: "93 m2",
  cost: '100500 dollars'
}];

function initSlider(options) { //если нет картинок
if (!images || !images.length) return;


let sliderImages = document.querySelector(".slider");


initImages();


//для фотографий
function initImages() {
  images.forEach((image, index) => {
    let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
    sliderImages.innerHTML += imageDiv;
  });
}


function moveSlider(num) {
  sliderImages.querySelector(".active").classList.remove("active");
  sliderImages.querySelector(".n" + num).classList.add("active");

}



function initAutoplay() {
  setInterval(() => {
    let curNumber = +sliderImages.querySelector(".active").dataset.index;
    let nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
    moveSlider(nextNumber);
  }, options.autoplayInterval);
}
initAutoplay()
}

let sliderOptions = {
dots: true,
titles: true,
autoplay: true,
autoplayInterval: 5000
};

document.addEventListener("DOMContentLoaded", function() {
initSlider(sliderOptions);
});