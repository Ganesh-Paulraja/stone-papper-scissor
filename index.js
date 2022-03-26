var stone = document.getElementsByClassName('my-box-one')[0];
var papper = document.getElementsByClassName('my-box-one')[1];
var scissor = document.getElementsByClassName('my-box-one')[2];
var list = document.getElementsByClassName('my-list-box')[0];
var listTwo = document.getElementsByClassName('my-list-two')[0];
var userOpt = document.getElementsByClassName('cc-box-two')[0];
var jsOpt = document.getElementsByClassName('cc-box-two')[1];
var res = document.getElementsByClassName('my-res')[0];
var userSelect;
stone.addEventListener('click', () => {
  userSelect = 1;
  list.style.display = 'none';
  listTwo.style.display = 'flex';
  run();
})
papper.addEventListener('click', () => {
  userSelect = 2;
  list.style.display = 'none';
  listTwo.style.display = 'flex';
  run();
})
scissor.addEventListener('click', () => {
  userSelect = 3;
  list.style.display = 'none';
  listTwo.style.display = 'flex';
  run();
})
var run = () => {
  var random = Math.ceil(Math.random() * 3);
  if(random == 1) {
    jsOpt.innerHTML = '<img src="sps/Frame88.png" alt="Stone-image"> <br> Stone';
  } else if(random == 2) {
    jsOpt.innerHTML = '<img src="sps/Frame90.png" alt="Stone-image"> <br> papper';
  } else if (random == 3) {
    jsOpt.innerHTML = '<img src="sps/Frame89.png" alt="Stone-image"> <br> Scissor';
  } else {
    alert('error jsopt.innerHTML');
  }
  
  if(userSelect == 1) {
    userOpt.innerHTML = '<img src="sps/Frame91.png" alt="Stone-image"> <br> Stone';
  } else if(userSelect == 2) {
    userOpt.innerHTML = '<img src="sps/Frame93.png" alt="Stone-image"> <br> papper';
  } else if (userSelect == 3) {
    userOpt.innerHTML = '<img src="sps/Frame92.png" alt="Stone-image"> <br> Scissor';
  } else {
    alert('err useropt.innerHTML');
  }
  if(userSelect == random) {
    res.innerText =  'DRAW';
    res.style.borderColor = '#d7d703';
  } else if ( userSelect == 1 && random == 2) {
    res.innerText = 'Lose';
    res.style.borderColor = 'red';
  } else if (userSelect == 1 && random == 3) {
    res.innerText = 'WIN';
    res.style.borderColor = 'green';
  } else if ( userSelect == 2 && random == 1) {
    res.innerText = 'WIN';
    res.style.borderColor = 'green';
  } else if (userSelect == 2 && random == 3) {
    res.innerText = 'Lose';
    res.style.borderColor = 'red';
  } else if (userSelect == 3 && random == 1) {
    res.innerText = 'Lose';
    res.style.borderColor = 'red';
  } else if (userSelect == 3 && random == 2) {
    res.innerText = 'Win';
    res.style.borderColor = 'green';
  } else {
    alert ('err Select');
  }
}
res.addEventListener('click', () => {
  listTwo.style.display = 'none';
  list.style.display = 'flex';
});