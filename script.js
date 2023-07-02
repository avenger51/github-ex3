

//Empty place to put 'stuff'
const memeContainer = document.getElementById('meme-container');  


const memeForm = document.getElementById('meme-form');
const topText = document.getElementById('top-text');
const bottomText = document.getElementById('bottom-text');
const imageUrl = document.getElementById('image-url');
const submitButton = document.querySelector('button[type="submit"]');

memeForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  console.log("Yes...the design is bad..I know");
  

//Removed the empty values
//topText.value = '';
//bottomText.value = '';
//imageUrl.value = '';
  

//Start creating new items
const image = document.createElement('img');

image.src= imageUrl.value;  // now pulls with .value

const memeConstruct = document.createElement('div');
  memeConstruct.classList.add('meme');

const topTextElement = document.createElement('div');
  topTextElement.classList.add('top-text');
  topTextElement.innerText = topText.value;  

const bottomTextElement = document.createElement('div');
  bottomTextElement.classList.add('bottom-text');
  bottomTextElement.innerText = bottomText.value;

//Resetting @  <form id="meme-form">
memeForm.reset();  
//Adding the selections  (append for bottom but not top.....)
memeConstruct.appendChild(image ).width = 500;  //how to be smarter about this...maybe declare the size?
  memeConstruct.prepend(topTextElement);  
  memeConstruct.appendChild(bottomTextElement);
  memeContainer.appendChild(memeConstruct);
});


const removeButton = document.getElementById('memeremove');
//ORG if statement
removeButton.addEventListener('click', function(evt) {
  const memes = memeContainer.querySelectorAll('.meme');
  //no loop then?
  if (memes.length > 0) {
    const lastMemeElement = memes[memes.length - 1];
    lastMemeElement.remove();
  }
});




  
  