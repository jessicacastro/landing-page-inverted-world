import { subscribeToHellfireClub } from './firebase/hellfire-club.js';

const nameTxt = document.getElementById('name');
const email = document.getElementById('email');
const level = document.getElementById('level');
const character = document.getElementById('character');
const buttonSubscribe = document.getElementById('btnSubscribe');

const clearFields = () => {
  nameTxt.value = '';
  email.value = '';
  level.value = '';
  character.value = '';
}

buttonSubscribe.addEventListener('click', async () => {
  if (!!nameTxt || !!email || !!level || !!character) {
    alert('Please fill all the fields');
    return;
  }

  const subscription = {
    name: nameTxt.value,
    email: email.value,
    level: Number(level.value),
    character: character.value
  }

  const subscriptionId = await subscribeToHellfireClub(subscription);
  
  if (subscriptionId)  {
    alert('You have been subscribed to the Hellfire Club');
    clearFields();
  } else {
    alert('Something went wrong, please try again later');
  } 
});
