var images, descriptions;

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}

// Describe this function...
function getImage() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_image_carousel = document.getElementById('image-carousel');
  element_image_carousel.setAttribute("src", images[0]);
  let element_description = document.getElementById('description');
  element_description.innerText = randomMember(descriptions);
}


images = ['https://c.tenor.com/3aprEaHFOjMAAAAC/anime-aesthetic.gif', 'https://i.pinimg.com/originals/bb/e7/15/bbe71537e79d0eb061ae4ef1691841a4.gif', 'https://s12.favim.com/gif_previews/6/660/6603/66030/6603064.gif', 'https://c.tenor.com/17K76r82jfAAAAAC/train-ride-train.gif', 'https://i.gifer.com/1DNi.gif', 'https://pa1.narvii.com/8301/fe365c5467bab949f02bf9a4a11e16bfc84fedf4r1-540-320_hq.gif', 'https://c.tenor.com/0XEcmuuZ_kAAAAAd/arrietty-ghibli.gif', 'https://i.pinimg.com/originals/d8/ce/bb/d8cebb08384bb2ef04f18c2029794186.gif'];
descriptions = ['“Failure is not falling down but refusing to get up.”', ' “In a dark place we find ourselves, and a little more knowledge lights our way.”', '"All we have to decide is what to do with the time that is given to us."', '“The dark does not destroy the light; it defines it. It\'s our fear of the dark that casts our joy into the shadows.”', '"Every action you take is a vote for the type of person you wish to become."', '"I\'ve heard it said // That people come into our lives // For a reason // Bringing something we must learn."', '“Your job is not to figure out how it’s going to happen for you, but to open the door in your head. And when the door opens in real life, just walk through it.”', '“Everything you gain in life will rot and fall apart, and all that will be left of you is what was in your heart.”', '"The Only Thing I Do Know Is That We Have To Be Kind. Please, Be Kind. Especially When We Don\'t Know What\'s Going On."', '"I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times."', '"Two little mice fell into a bucket of cream. The first mouse quickly gave up and drowned. The second mouse, wouldn’t quit. He struggled so hard that eventually he churned that cream into butter and crawled out. Gentlemen, as of this moment, I am that second mouse."'];
getImage();


document.getElementById('next').addEventListener('click', (event) => {
  images.push(images.shift());
  getImage();

});

document.getElementById('previous').addEventListener('click', (event) => {
  images.unshift(images.pop());
  getImage();

});
let element_image_carousel2 = document.getElementById('image-carousel');
element_image_carousel2.setAttribute("src", images[0]);
let element_description2 = document.getElementById('description');
element_description2.innerText = randomMember(descriptions);
