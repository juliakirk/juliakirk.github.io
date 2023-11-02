const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
const storyText = 'It was a dark, windy day the temperature was 22 fahrenheit so :insertx: went cross country skiing. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, and watched in horror as the transformation occured. :insertx: weighs 50 pounds, and it was a dark and stormy day.';
const insertX = ['Rumpelstiltskin', 'The Muffin Man', 'Thumbelina'];
const insertY = ['the Enchanted Forest', 'The Gingerbread House', 'The Labyrinth'];
const insertZ = ['sprouted bunny ears and a fluffy tail', 'grew an extra pair of arms and danced the cha-cha', 'transformed into a talking teapot'];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    const xItem = randomValueFromArray(insertX)
    const yItem = randomValueFromArray(insertY)
    const zItem = randomValueFromArray(insertZ)

    newStory = newStory.replaceAll(':insertx:',xItem);
    newStory = newStory.replaceAll(':inserty:',yItem);
    newStory = newStory.replaceAll(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob',name)

  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(50/14)} stone`;
    const temperature =  `${Math.round((22-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('22 fahrenheit', temperature);
    newStory = newStory.replaceAll('50 pounds', weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}