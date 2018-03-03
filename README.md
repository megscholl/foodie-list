# foodie-list


Your job is to build a a web page where a user can see all the restaurants they have been to and filter by city. They can also add additional restaurants.

***********The two JSON representations above should be in two files. Use Javascript's XMLHttpRequest() method with Promises to read the data from those files, and then build HTML representations of the data.


## MVP

***********When the user first visits the page, all restaurants should be listed in order of their rating(ratings are from 1 to 10). The restaurants are displayed from highest rated to lowest rated.

***********Keep the design and layout simple. Use cards, grid, ect.

***********There should be a <select> element on the page with the list of cities. 

When a user selects a city, the restaurants displayed should be filtered so that only the restaurants from the selected city are displayed. Make sure there is an option for All so that a user can go back to viewing all the restaurants.

If the user selects Nashville, there should an icon or text that appears on the page that shows the user that this is their hometown.

There should be a form for a user to add more restaurants with a <select> element for picking which city the new restaurant is in and all other required fields. When the user submits this form, the restaurant should appear on the page(unless the view is currently filtered to show a city where the newly restaurant is not in). All fields in the form should also be cleared so that the form is ready for the user to add the next restaurant.


## BONUS
Provide a way for the user to add new cities. You can either add another form on the page or incorporate it into the existing form for adding restaurants.
Add a way for a user to filter restaurants by rating.
