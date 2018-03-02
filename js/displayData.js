"use strict";
// console.log("DISPLAY DATA JS IS DISPLAYING");

// // // // // REQUIRES \\ \\ \\ \\ \\
// let jsonData = require('./grabData'); 
let db = require('./grabData'); 

// // // // // VARIABLES TO RENDER THE DOM  \\ \\ \\ \\ \\
let showRestaurantData = document.getElementById("inner-container");
let showCityData = document.getElementById("cities");
let restaurants;
// let restaurantName;
let restaurantArray = [];
let restaurantList;
let restName;
let restData;
let rating;
let cityArray = [];
let cities;
// let rating;
// let ratingArray = [];



function displayRestaurants() {
    // console.log("DISPLAY RESTAURANTS HERE: ",  db.grabRestaurantData);
    db.grabRestaurantData().then(

            (resolve)=>{
                let restaurant = resolve;
                // console.log("resolve", resolve);
                restData = Object.keys(resolve);
                    // console.log("restData: ", restData);
                    restData.forEach((location) => {
                        restName = resolve[location];
                        restaurantList = "";
                        for(var i = 0; i < restName.length; i++) {
                            restaurants = restName[i].restaurant;
                            rating = restName[i].my_rating;
                            restaurantArray.push(restaurants);
                            restaurantList += `<ul class="list-group">`;
                            restaurantList += `<li class="list-group-item" style="text-align:left;"><a href="#">${restaurants}</a> &nbsp;&nbsp;&nbsp; <span class="ratings">rating: <span class="rating-num">${rating}</span></span> </li>`;
                            // restaurantList += `<p>Rating: ${restaurants[i].my_rating} </p>`;
                            restaurantList += `</ul>`;

                            // console.log("restaurants - ", restaurants);
                            }
                            showRestaurantData.innerHTML = restaurantList;
                        });
        },(reject)=>{
            });
}


function displayCities() {
    db.grabCityData().then(
            (resolve)=>{
                let city = resolve;
                
                let cityData = Object.keys(resolve);
                    
                    cityData.forEach(function(location){

                        var cityName = resolve[location];
                        let cityDropList = "";

                        for(var j = 0; j < cityName.length; j++) {

                            cities = cityName[j].city;
                            cityArray.push(cities);
                            cityDropList += `<option value="${cities}">${cities}</option>`;
                            console.log("city - ", cities);

                                if(cities[j] === "Nashville"){
                                    console.log("NASHVILLE IS HOME");
                                }else{
                                    //NO ICON DISPLAY
                                }

                        }
                        showCityData.innerHTML = cityDropList;
                    });
            },(reject)=>{
            }
    );
}

displayCities();

// let cityDropList = 
// `
// <form>
//     <div class="selections">Select a City: 
//         <select>
//             <option value="${cities}">${cities}</option> // grabRestaurantData will be replaced with the results from the loops through the City Data array
//         </select> 
//     </div>
// </form>
// `;



// let formInput = document.getElementById("user-input-form");

// let form = `<div id="formData"><form><input id="user-rAdd" type="text" size="12" placeholder="What restaurant would you like to add to your library?"></form></div>`;

// formInput.innerHTML = form;



module.exports = {displayRestaurants, displayCities};