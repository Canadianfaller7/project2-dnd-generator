const newCharacter = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#char-name').value.trim();
  const race = document.querySelector('#race').value.trim();
  const character_class = document.querySelector('#class').value.trim();
  const gender = document.querySelector('#gender').value.trim();
  const level = document.querySelector('#level').value.trim();
  const exp = document.querySelector('#exp').value.trim();
  const build = document.querySelector('#build').value.trim();
  const strength = document.querySelector('#Strengthscore').value.trim();
  const dexterity = document.querySelector('#Dexterityscore').value.trim();
  const constitution = document
    .querySelector('#Constitutionscore')
    .value.trim();
  const wisdom = document.querySelector('#Wisdomscore').value.trim();
  const intelligence = document
    .querySelector('#Intelligencescore')
    .value.trim();
  const charisma = document.querySelector('#Charismascore').value.trim();
  if (
    name &&
    race &&
    character_class &&
    gender &&
    level &&
    exp &&
    build &&
    strength &&
    dexterity &&
    constitution &&
    wisdom &&
    intelligence &&
    charisma
  ) {
    const response = await fetch(`/api/characters`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        race,
        character_class,
        gender,
        level,
        exp,
        build,
        strength,
        dexterity,
        constitution,
        wisdom,
        intelligence,
        charisma,
      }),
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

document.querySelector('.create-form').addEventListener('submit', newCharacter);
