"use strict";
// console.log("DISPLAY DATA JS IS DISPLAYING");

// // // // // REQUIRES \\ \\ \\ \\ \\ 
let db = require('./grabData'); 

// // // // // VARIABLES TO RENDER THE DOM  \\ \\ \\ \\ \\
var showRestaurantData = document.getElementById("inner-container");
var showCityData = document.getElementById("cities");
var ratingData = document.getElementById("ratings");
var list = document.getElementById("list-group");
var home = document.getElementById("home");
var restaurants;
var restaurant;
let restaurantName;
var cityArray = [];
var cities;
var ratingList = "";
var restaurantRating;
var ratings;
var ratingFromCity = "";
var cityID;
var cityIdArray = [];
var ids;
var sortByCity = "";



var home = document.getElementById("home");

// ****** FUNCTION TO DISPLAY RESTAURANTS AND RATINGS IN LIST ******
function displayRestaurants() {
    
    db.grabRestaurantData().then(

            (cityJsonData)=>{
                // console.log(cityJsonData);
                let sortedRestaurants = cityJsonData.restaurants.sort(function(a, b){
                    return b.my_rating - a.my_rating;
                });
                    console.log("sorted restaurants: ", sortedRestaurants);
                
                        for(var m = 0; m < sortedRestaurants.length; m++){
                            ids = sortedRestaurants[m].city_id;
                            // console.log("city id's: ", ids);
                            // return ids;
                        }

                    restaurant = cityJsonData;
                    // console.log(restaurant);
                    sortedRestaurants.forEach((restaurant) => {

                        
                        restaurantName = restaurant.restaurant;
                        restaurantRating = restaurant.my_rating;

                        // console.log("rating, ", restaurantRating);

                        // ratingList += ``;
                        ratingList += `<li class="list-group-item" style="text-align:left; max-height: 60%;"><a href="#">${restaurantName}</a> &nbsp;&nbsp;&nbsp; <span class="ratings">rating: <span class="rating-num">${restaurantRating}</span></span> </li>`;
                        // ratingList += `</ul>`;

                    });

            showRestaurantData.innerHTML = ratingList;
        },(reject)=>{
            });
}


// ******FUNCTION TO DISPLAY CITIES IN <SELECT> MENU ******
function displayCities() {
    db.grabCityData().then(
            (cityJsonData)=>{
                
                let cityData = Object.keys(cityJsonData);
                // console.log("city Data ", cityData);

                    cityData.forEach(function(location){

                //DECLARING VARIABLES FOR JSON DATA AND SETTING THE INFO INTO A STRING
                        var cityName = cityJsonData[location];
                        let cityDropList = "";
                        // let cityDropSelect = "";


                // LOOPING THROUGH THE CITY JSON
                        for(var j = 0; j < cityName.length; j++) {


                //GRABBING THE CITY NAME AND ID FROM CITIES.JSON
                            cities = cityName[j].city;
                            cityID = cityName[j].id;
                            cityIdArray.push(cityID);
                            cityArray.push(cities);


                // CREATING HTML <OPTION> TO POPULATE CITY NAMES IN A DROP DOWN MENU
                            cityDropList += `<option value="${cities}">${cities}</option>`;
                            console.log("city - ", cities);
                            console.log("cityID: ", cityID);

                        }

                // POPULATING THE SELECT OPTION TAGS ON THE HTML
                        showCityData.innerHTML = cityDropList;

                        
                    });
            },(reject)=>{
                });
}


// ****** FUNCTION TO MATCH CITY ID'S WITH RESTAURANT CITY_ID'S TO DISPLAY ONLY RESTAURANTS IN SELECTED CITY ******
function cityOption(){
//     displayCities().then()
//     let optionTag = document.getElementsByTagName("option");

//     //IF CITY SELECTED MATCHES A CITY ID, DISPLAY RESTAURANTS ONLY IN THAT CITY
//     if(cityID == [j]){
//         console.log("IF STATEMENT FOR CITYID IS WORKING");
//     }else {
//         console.log('error');
//     };

//     //IF NASHVILLE IS SELECTED AS CITY, DISPLAY 'HOME CITY' ABOVE LIST
//     if(cityID === 7){
//         console.log("YOU'RE HOME");
//         home = `You're home!`;
//     }else{
//         console.log("YOU'RE NOT HOME");
//     }
}



// console.log("city id's: ", ids);

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