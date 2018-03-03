"use strict";
// console.log("DISPLAY DATA JS IS DISPLAYING");

// // // // // REQUIRES \\ \\ \\ \\ \\ 
let db = require('./grabData'); 

// // // // // VARIABLES TO RENDER THE DOM  \\ \\ \\ \\ \\
var showRestaurantData = document.getElementById("inner-container");
var showCityData = document.getElementById("cities");
var ratingData = document.getElementById("ratings");
var list = document.getElementById("list-group");
var restaurants;
var restaurant;
let restaurantName;
var cityArray = [];
var cities;
var ratingList = "";
var restaurantRating;
var ratings;
var ratingFromCity = "";



var home = document.getElementById("home");


function displayRestaurants() {
    
    db.grabRestaurantData().then(

            (resolve)=>{
                console.log(resolve);
                let sortedRestaurants = resolve.restaurants.sort(function(a, b){
                    return b.my_rating - a.my_rating;
                });

                    restaurant = resolve;
                    sortedRestaurants.forEach((restaurant) => {

                        restaurantName = restaurant.restaurant;
                        restaurantRating = restaurant.my_rating;

                        console.log("rating, ", restaurantRating);

                        // ratingList += ``;
                        ratingList += `<li class="list-group-item" style="text-align:left; max-height: 60%;"><a href="#">${restaurantName}</a> &nbsp;&nbsp;&nbsp; <span class="ratings">rating: <span class="rating-num">${restaurantRating}</span></span> </li>`;
                        // ratingList += `</ul>`;

                        ratingFromCity += `<option value="${restaurantRating}">${restaurantRating}</option>`;

                    });
            showRestaurantData.innerHTML = ratingList;
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
                            cityDropList += `<br><option value="${cities}">${cities}</option>`;
                            // console.log("city - ", cities);

                        }
                        showCityData.innerHTML = cityDropList;
                    });
            },(reject)=>{
                });
}

displayCities();

// let nashville = cities.onSelect("Nashville");

// if(nashville == "Nashville"){
//     console.log("NASHVILLE IS HOME");
// }else{
//     console.log("you're not home!");
// }

// let formInput = document.getElementById("user-input-form");

// let form = `<div id="formData"><form><input id="user-rAdd" type="text" size="12" placeholder="What restaurant would you like to add to your library?"></form></div>`;

// formInput.innerHTML = form;



module.exports = {displayRestaurants, displayCities};