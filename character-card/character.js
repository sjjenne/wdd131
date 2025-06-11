const character = {
      name: "Snortleblat",
      class: "Swamp Beat Diplomat",
      level: 5,
      health: 100,
      image: 'https://andejuli.github.io/img/snortleblat.png',
      attacked() {
        if (this.health >= 20) {
          this.level -= 1;
          this.health -= 20;
        } else {
            alert('Character Died');
        }
      },
      levelUp() {
        this.level += 1;
        this.health += 20;
      }
    };



function setCharacter(character) {
  let name = document.querySelector('.name').innerHTML = character.name;
  let image = document.querySelector('.image').src = character.image;

  let statClass = document.querySelector('#class').innerHTML = character.class;
  let statLevel = document.querySelector('#level').innerHTML = character.level;
  let statHealth = document.querySelector('#health').innerHTML = character.health;
}

document.querySelector('#attacked').addEventListener('click', function() {
    character.attacked()
    statHealth = document.querySelector('#health').innerHTML = (character.health);
    statLevel = document.querySelector('#level').innerHTML = (character.level);
})

document.querySelector('#levelup').addEventListener('click', function() {
    character.levelUp()
    statHealth = document.querySelector('#health').innerHTML = (character.health);
    statLevel = document.querySelector('#level').innerHTML = (character.level);
})

setCharacter(character);