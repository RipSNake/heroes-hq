# SuperHeroes's HQ

Manage your own Team of Heroes !!

In this API you can combine your most beloved heroes together an recruit the team of your dreams

We use https://superheroapi.com/api.php for fetching our list of heroes.

# Login Screen

<img src="https://github.com/RipSNake/heroes-hq/blob/main/src/DemoImgs/Login.png"/>

Displays a form with the needed information in order to login:

- Email
- Password

In this demo version the only accepted user is:

- Email: challenge@alkemy.org 
- Password: 'react'

# Home Screen

<img src="https://github.com/RipSNake/heroes-hq/blob/main/src/DemoImgs/Home_1.png"/>
<img src="https://github.com/RipSNake/heroes-hq/blob/main/src/DemoImgs/Home_2.png"/>

In the Main Screen you can see all the heroes that are included into your team,

and the sum of all their attributes, emphasizing the strongest one.

Each Hero Tile has 2 options: 

- Details: Redirects to Detail Page of the selected hero

- Delete: removes the Hero from your Team's formation, after confirmation.

# Search Screen

<img src="https://github.com/RipSNake/heroes-hq/blob/main/src/DemoImgs/Search.png" />

Perform a name Search for the Heroes that contains the search parameter string into thier names.

Then displays all available results and allows you to add them to your Team.

If no results a obtained or an error ocurred, an Alert wll display and notificy what happened.

# Details Screen

<img src="https://github.com/RipSNake/heroes-hq/blob/main/src/Details.png" />

Shows the Hero's most relevant Personal Information:

- Full Name
- Aliases
- Weight
- Height
- Eye-color
- Hair-color
- Place of Work/Base

# Tecnologies Used

- <a href="https://github.com/axios/axios">Axios</a>
- <a href="https://formik.org/docs/overview">Formik</a> + <a href="https://github.com/jquense/yup">Yup</a>
- <a href="https://es.reactjs.org/docs/getting-started.html">React</a>
- <a href="https://reactrouter.com/web/guides/quick-start">React Router Dom</a>
- <a href="https://redux.js.org/introduction/getting-started">Redux</a> + <a href="https://redux-toolkit.js.org/tutorials/quick-start">Redux Toolkit</a>
- <a href="https://sweetalert2.github.io/">Sweet Alert 2</a>