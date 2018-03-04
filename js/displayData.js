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
let restaurantName = {};
var cityArray = [];
var cities;
var restaurantListDisplayed = "";
var showSelectedCityRestaurants = "";
var restaurantRating;
var cityIdArray = [];
var ids = [];
var sortByCity = [];
var restaurantIdArray = [];
var cityDropList = [];
var cityID = "";
var cityNameArray = [];
var sortedRestaurants = [];
var restId = [];



var home = document.getElementById("home");

// ****** FUNCTION TO DISPLAY RESTAURANTS AND RATINGS IN LIST ******
function displayRestaurants() {
    
    db.grabRestaurantData().then(

            (cityJsonData)=>{
                // console.log(cityJsonData);
                 sortedRestaurants = cityJsonData.restaurants.sort(function(a, b){
                    return b.my_rating - a.my_rating;
                });
                    // console.log("sorted restaurants: ", sortedRestaurants);
                        ids = "";
                        for(var m = 0; m < sortedRestaurants.length; m++){
                            ids = sortedRestaurants[m].city_id;
                            restaurantIdArray.push(ids);
                            // return ids;
                        }

                    restaurant = cityJsonData;
                    // console.log(restaurant);
                    sortedRestaurants.forEach((restaurant) => {

                        
                        restaurantName = restaurant.restaurant;
                        restaurantRating = restaurant.my_rating;


                        // console.log("rating, ", restaurantRating);

                        // restaurantListDisplayed += ``;
                        restaurantListDisplayed += `<li id="${ids}" class="list-group-item" style="text-align:left; max-height: 60%;"><a href="#">${restaurantName}</a> &nbsp;&nbsp;&nbsp; <span class="ratings">rating: <span class="rating-num">${restaurantRating}</span></span> </li>`;
                        // restaurantListDisplayed += `</ul>`;

                    });

            showRestaurantData.innerHTML = restaurantListDisplayed;
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
                        // console.log("cityName", cityName);
                        // console.log("nashville cityName id", cityName[6].id, cityName[6].city);
                        let cityDropList = "";
                        // let cityDropSelect = "";


                // LOOPING THROUGH THE CITY JSON
                        for(var j = 0; j < cityName.length; j++) {
                                // console.log("city id inside the loop: ", cityName[j].id);

                //GRABBING THE CITY NAME AND ID FROM CITIES.JSON
                            cities = cityName[j].city;
                            cityID = cityName[j].id;
                            cityIdArray.push(cityID);
                            cityArray.push(cities);

                // CREATING HTML <OPTION> TO POPULATE CITY NAMES IN A DROP DOWN MENU
                            cityDropList += `<option value="${cityID}">${cities}</option>`;
                        }
                        // console.log("cityID: ", cityID);
                        // console.log("cityNames: ", cityIdArray);
                        
                        // console.log("cityIdArray: ", cityIdArray[6]);
                // POPULATING THE SELECT OPTION TAGS ON THE HTML
                        showCityData.innerHTML = cityDropList;
                        // console.log("cityDropList", cityDropList);

                        
                    });
            },(reject)=>{
                });
}

// ****** FUNCTION TO SELECT NASHVILLE AS HOME AND MATCH CITY ID'S WITH RESTAURANT CITY_ID'S TO DISPLAY ONLY RESTAURANTS IN SELECTED CITY ******
var cityName = [];
let selectCity = document.getElementById("cities");
selectCity.addEventListener("change", (select) => {
    // console.log("selection has been made!", select.target.value);

    let homeSelected = "";
    // console.log("cityIdArray: ", cityIdArray);
    // console.log("nashville, ",  cityIdArray[6]);

    // console.log("city selected: ", cityID);
    
            if(select.target.value == 7){
                // console.log("nashville selected");
                homeSelected = `<span class="home">You're home!</span>`;
                home.innerHTML = homeSelected;
            }else {
                // console.log("you fucked up");
                homeSelected = `<span class="home"></span>`;
                home.innerHTML = homeSelected;
            }
            var sortSelectedCity = "";
            var sortSelectedRating = "";
            showSelectedCityRestaurants = [];
            // console.log("ids in array: ", sortedRestaurants);
            for(let r = 0; r < sortedRestaurants.length; r++){
                // console.log("r: ", r);
                if(select.target.value == sortedRestaurants[r].city_id){
                    // console.log("you've selected the city!");
                    sortSelectedCity = sortedRestaurants[r].restaurant;
                    sortSelectedRating = sortedRestaurants[r].my_rating;
                    console.log("restaurant selected", sortSelectedCity);

                    showSelectedCityRestaurants += `<li value="${ids}" class="list-group-item" style="text-align:left; max-height: 60%;"><a href="#">${sortSelectedCity}</a> &nbsp;&nbsp;&nbsp; <span class="ratings">rating: <span class="rating-num">${sortSelectedRating}</span></span> </li>`;

                }else{
                    // console.log("your city selection isn't right");
                    
                }
            }

                showRestaurantData.innerHTML = showSelectedCityRestaurants;
            // console.log("restaurant 1", sortedRestaurants);
            // if(select.target.value == )
});

// console.log(cityIdArray);

// console.log("city - ", cityArray, cityIdArray);
// console.log("cityID: ", cityIdArray);
// console.log("city id's: ", restaurantIdArray);




function selectNashville() {
    console.log("select nashville as home function is working");
   
}


// let formInput = document.getElementById("user-input-form");

// let form = `<div id="formData"><form><input id="user-rAdd" type="text" size="12" placeholder="What restaurant would you like to add to your library?"></form></div>`;

// formInput.innerHTML = form;



module.exports = {displayRestaurants, displayCities};