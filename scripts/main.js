let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/runner.png') {
      myImage.setAttribute('src','images/runner2.png');
    } else {
      myImage.setAttribute('src','images/runner.png');
    }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to the running site, ' + storedName + '!';
}

myButton.onclick = function() {
  setUserName();
}

 function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `Welcome to the running site, ${myName}!`;
//    myHeading.textContent = 'Welcome to the running site, ' + myName + '!';
  }
}
