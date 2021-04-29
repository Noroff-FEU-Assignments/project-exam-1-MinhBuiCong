// import { getUrl } from "./get-post-url";

// function createCarousel(posts) {
//   const slides = document.querySelector(".carousel-slide");
//   for (var i = 0; i < posts.length; i++) {
//     var imgUrl = posts[i].image;
//     var itemDiv = `
//                             <a href="${posts.link}">
//     <div class="carousel-item" id="${posts[i].id}" >
//                             <img src="${imgUrl}" alt="${posts[i].slug}" />
//                             <p>${posts[i].title["rendered"]}</p>
//                             </div>
//                             </a>
//                             `;
//     if (i === pageItem) {
//       count += pageItem;

//       return;
//     } else {
//       slides.innerHTML += itemDiv;
//     }
//   }
// }
// document
//   .getElementById("carousel-button-next")
//   .addEventListener("click", function () {
//     if (count > pageItem) {
//       moveToNextSlide(count, posts);
//     }
//   });
// document
//   .getElementById("carousel-button-prev")
//   .addEventListener("click", function () {
//     if (count === pageItem) {
//       moveToPrevSlide(count, posts);
//       return;
//     }
//   });

// //Next slide function

// function moveToNextSlide(count, posts) {
//   if (count === 16) {
//     nextButton.style.opacity = 0.2;
//   } else {
//     prevButton.style.opacity = 1;
//     nextButton.style.opacity = 1;
//   }
//   removeCarouselItems(count, posts, pageItem);
// }

// //Remove content, when clicking on Next Slide

// function removeCarouselItems(count, posts, pageItem) {
//   const slides = document.querySelector(".carousel-slide");
//   slides.innerHTML = "";
//   getNextCarouselItems(count, posts, pageItem);
// }

// //Refresh content when next slide click

// function getNextCarouselItems(itemIndex, posts, itemPerSlide) {
//   console.log("posts :>> ", posts);
//   const slides = document.querySelector(".carousel-slide");
//   for (var i = itemPerSlide; i < posts.length; i++) {
//     var imgUrl = posts[i].image;
//     var itemDiv = `
//                               <a href="${posts.link}">
//       <div class="carousel-item" id="${posts[i].id}" >
//                               <img src="${imgUrl}" alt="${posts[i].slug}" />
//                               <p>${posts[i].title["rendered"]}</p>
//                               </div>
//                               </a>
//                               `;

//     if (i === itemIndex + itemPerSlide) {
//       itemIndex = itemPerSlide;
//       console.log("itemIndex :>> ", itemIndex);
//       console.log("itemPerSlide :>> ", itemPerSlide);
//     } else {
//       slides.innerHTML += itemDiv;
//       console.log(" false ");
//     }
//   }
// }

// //Prev function

// function moveToPrevSlide(count, posts) {
//   var newCount = count - pageItem;
//   removePrevCarouselItems(newCount, posts, pageItem);
// }

// //Remove content, when clicking on prev slide

// function removePrevCarouselItems(newCount, posts, pageItem) {
//   const slides = document.querySelector(".carousel-slide");
//   slides.innerHTML = "";
//   getPrevCarouselItems(newCount, posts, pageItem);
// }

// //Refresh content when click on prev slide

// function getPrevCarouselItems(newCount, posts, pageItem) {
//   const slides = document.querySelector(".carousel-slide");
//   console.log("newCount before loop:>> ", newCount);
//   for (var i = newCount - pageItem; i < posts.length; i++) {
//     console.log("newCount :>> ", newCount);
//     var imgUrl = posts[i].image;
//     var itemDiv = `
//                                           <a href="${posts.link}">
//                   <div class="carousel-item" id="${posts[i].id}" >
//                                           <img src="${imgUrl}" alt="${posts[i].slug}" />
//                                           <p>${posts[i].title["rendered"]}</p>
//                                           </div>
//                                           </a>
//                                           `;
//     if (i < newCount) {
//       slides.innerHTML += itemDiv;
//     } else {
//       return;
//     }
//     // if (i === newCount + pageItem) {
//     //   count += pageItem;
//     //   slides.innerHTML += itemDiv;
//     // }
//   }
// }
