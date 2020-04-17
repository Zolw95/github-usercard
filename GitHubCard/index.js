/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
//const axios = require('axios').default;

// Make a request for a user with a given ID
  axios.get('https://api.github.com/users/Zolw95')
  .then(function (response) {
    // handle success
    // console.log(response);
    let card = createUser(response.data);
    let mainDiv = document.getElementsByClassName('cards')[0];
    mainDiv.appendChild(card);
    followersArray.forEach(el => {
      let newUserInfo = axios.get(`https://api.github.com/users/${el}`)
      .then(function (response) {
        let newCard = createUser(response.data)
        mainDiv.appendChild(newCard);
      })
    })
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>


*/ 

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

const createUser = (data) => {

  // Create Elements
  const newCard = document.createElement('div');
  const gitAvatar = document.createElement('img');
  const newCardInfo = document.createElement('div');
  const gitName = document.createElement('h3');
  const gitUsername = document.createElement('p');
  const gitLocation = document.createElement('p');
  const gitProfile = document.createElement('p');
  const gitAddress = document.createElement('a');
  const gitFollowers = document.createElement('p');
  const gitFollowing = document.createElement('p');
  const gitBio = document.createElement('p');

  // Add Classes to Elements

  newCard.classList.add('card');    
  newCardInfo.classList.add('card-info');    
  gitName.classList.add('name');
  gitUsername.classList.add('username');


  // Add Data to Elements

  gitAvatar.src = data['avatar_url'];
  gitName.textContent = data['name'];
  gitUsername.textContent = data['login'];
  gitProfile.textContent = 'Profile: ';
  gitLocation.textContent = data['location'];
  gitAddress.setAttribute('href', data['html_url']);
  gitFollowers.textContent = `Followers: ${data.followers}`;
  gitFollowing.textContent = `Following: ${data.following}`;
  gitBio.textContent = data['bio'];

  // Append Elements

  newCard.appendChild(gitAvatar);
  newCard.appendChild(newCardInfo);
  newCardInfo.appendChild(gitName);
  newCardInfo.appendChild(gitUsername);
  newCardInfo.appendChild(gitLocation);
  newCardInfo.appendChild(gitProfile);
  gitProfile.appendChild(gitAddress);
  newCardInfo.appendChild(gitFollowers);
  newCardInfo.appendChild(gitFollowing);
  newCardInfo.appendChild(gitBio);

  return newCard;

}




