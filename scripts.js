const words = [
  "driven",
  "dedicated",
  "creative",
  "enthusiastic",
  "ambitious",
  "motivated",
  "visionary",
  "inspired",
  "fervent",
  "ardent"
];

let i = 0; 
let j = 0; 
let currentWord = "";
let isDeleting = false;
const span = document.getElementById("word");

function type() {
  currentWord = words[i];
  
  if (!isDeleting && j < currentWord.length) {
    span.textContent = currentWord.substring(0, j + 1);
    j++;
    setTimeout(type, 100); 
  } 
  else if (isDeleting && j > 0) {
    span.textContent = currentWord.substring(0, j - 1);
    j--;
    setTimeout(type, 60); 
  } 
  else if (!isDeleting && j === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 3000);
  } 
  else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length; 
    setTimeout(type, 500); 
  }
}

type();