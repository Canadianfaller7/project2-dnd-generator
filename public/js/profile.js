const newCharacter = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#char-name').value.trim();
  // const race = document.querySelector('#race').value.trim();
  // const strength = document.querySelector('#Strengthscore').value.trim();
  // const dexterity = document.querySelector('#Dexterityscore').value.trim();
  // const constitution = document.querySelector('#Constitutionscore').value.trim();
  // const wisdom = document.querySelector('#Wisdomscore').value.trim();
  // const intelligence = document.querySelector('#Intelligencescore').value.trim();
  // const charisma = document.querySelector('#Charismascore').value.trim();
  if(name) {

  // if (name && race && strength && dexterity && constitution && wisdom && intelligence && charisma) {
    const response = await fetch(`/api/characters`, {
      method: 'POST',
      // body: JSON.stringify({ name, race, strength, dexterity, constitution, wisdom, intelligence, charisma }),
      body: JSON.stringify({ name }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/characters/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete character');
    }
  }
};

document
    .querySelector('.submit-character')
    .addEventListener('submit', newCharacter);

// document
//   .querySelector('.project-list')
//   .addEventListener('click', delButtonHandler);

        
  
