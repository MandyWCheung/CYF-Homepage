var nouns, verbs, adjectives, animals;

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}



document.getElementById('madlibs-button').addEventListener('click', (event) => {
  nouns = ['elf', 'wizard', 'Natalie Portman', 'teacup', 'dwarf'];
  verbs = ['tickled', 'believed', 'chewed', 'yawned at', 'surprised'];
  adjectives = ['whimsical', 'adorable', 'handsome', 'quirky', 'flirtatious'];
  animals = ['monkey', 'unicorn', 'lizard', 'dragon', 'octopus'];
  let element_noun = document.getElementById('noun');
  element_noun.innerText = randomMember(nouns);
  let element_verb = document.getElementById('verb');
  element_verb.innerText = randomMember(verbs);
  let element_adjective = document.getElementById('adjective');
  element_adjective.innerText = randomMember(adjectives);
  let element_animal = document.getElementById('animal');
  element_animal.innerText = randomMember(animals);

});
'giraffe';

'duck';

'duck';

'giraffe';
