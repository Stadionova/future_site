import _ from 'lodash';
import "./styles.less";

// function component() {
//   const element = document.createElement('div');

//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }

// document.body.appendChild(component());

// let modal = document.getElementById("modal");
// let modalClose = document.getElementById("modal-close");
// let bookingBtn = document.getElementById("booking-btn");



function showModal(mouseEvent) {
  console.log("showModal");
  let modal = document.getElementById("modal");
  modal.style.display = "block";
}

function hideModal(mouseEvent) {
  console.log("hideModal");
  let modal = document.getElementById("modal");
  modal.style.display = "none";
}

setTimeout(showModal, 2000);
// setTimeout(hideModal, 6000);

function init() {
  console.log("init");

  let modal = document.getElementById("modal");
  modal.onclick = hideModal;

  let bookingBtn = document.getElementById("booking-btn");
  bookingBtn.onclick = showModal;
}

document.addEventListener("DOMContentLoaded", function(event) { 
  console.log("DOMContentLoaded");
  init();
});