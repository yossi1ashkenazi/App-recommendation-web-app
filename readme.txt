# Best Apps for YOU!

A personal project I created
This project is a web-recommendation app that will return the most relevant applications based on the user’s specific request.
the system is written and build using ReactJs and node.JS technologies.

The user to enter his date of birth, the minimum required app rating as well as choose from a list of categories 3 that interest him.
The client will send the information to the server, which will filter from the list of apps the ones that are irrelevant, and return 3 relevant applications to the client.
The client must show the selected applications to the user.

the system flow:
<img src="flow/main_menu.jpeg">     


<h3> Client side</h3>
The client gather the required information from the user:
<ul>
  <li>Birthdate</li>
  <li>3 Preferred categories</li>
  <li> Minimum rating of apps (a number between 1 to 5)</li>
</ul>
Once all the data is entered by the user, it send to the server in order to get the recommended apps.
Once the server response is received, the apps should be displayed to the user.
If the user clicks on one of the apps, all the app’s (extended) information displayed (React HOOK).

<img src="readme_images/main_menu.jpeg">     

<img src="readme_images/result_menu.jpeg">     


<h3> Server side</h3>
Once the data from the client is received on the server, the server should filter all the irrelevant
apps (based on the user data), and then randomly choose 3 apps from the remaining apps.
The filters are:<ul>
  <li>Category - each app has a category - the user shouldn’t get apps in categories he didn’t
choose.</li>
  <li> Age - each app has a minimum age - the user shouldn’t get apps with minimum age
higher than his age.</li>
  <li> Rank - each app has a rank - the user shouldn’t get apps with ranking lower than the
min ranking set by the user.</li>
</ul>



<h3>Main menu</h3>
The first menu that pop when you open the application, Some of them will open submenus when selected, I will explain about those submenus later.
<ul>
  <li>Your birhday</li>
  <li>3 categories</li>
  <li>Raiting apps (1-5)</li>
</ul>
<img src="readme_images/main_menu.jpeg">     // לשנות את זה


## Technologies
Project is created with:
* Nodejs: 18.7.0
* reacte: 18.2.0
	
## Setup
To run this project, install it locally using npm:

for the client side:
	$ cd ../client
	$ npm install
	$ npm start

for the server side:
	$ cd ../server
	$ node server.js





