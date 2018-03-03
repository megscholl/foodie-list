"use strict";

console.log("FORM DATA IN THE HOUSE");



//   function restaurantForm(restaurant, restaurantId) {
//     return new Promise(function (resolve, reject) {
//       let restaurantItem = {
//         Restaurant: restaurant ? restaurant.name : "",
//         City: restaurant ? restaurant.city : "",
//         Rating: restaurant ? restaurant.rating : "",
//         formTitle: restaurant ? `Edit "${restaurant.name}"` : "Add a new restaurant",
//         btnText: restaurant ? "save changes" : "save restaurant",
//         btnId: restaurant ? "save_edit_btn" : "save_new_btn"
//       },
//       form =
//         `<h3>${restaurantItem.formTitle}</h3>
//         <input type="text" id="form--name" placeholder="Restaurant" value="${restaurantItem.name}"></input>
//         <input type="text" id="form--artist" placeholder="City" value="${restaurantItem.city}"></input>
//         <input type="text" id="form--album" placeholder="Your Rating" value="${restaurantItem.rating}"></input>
//         <button id="${restaurantId}" class=${restaurantItem.btnId}>${restaurantItem.btnText}</button>`;
//       resolve(form);
//     });
//   }


//   module.export = {restaurantForm};