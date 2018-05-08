function selectSide(side){
  var mLeft = document.getElementById("mLeft");
  var mRight = document.getElementById("mRight");
  if (side == 1) {
    toggleBB(0);
    mLeft.style.opacity = "1";
    mLeft.style.zIndex = "10";
  } else if (side == 2) {
    toggleBB(0);
    mRight.style.opacity = "1";
    mRight.style.zIndex = "10";
    document.getElementById("search").focus();
  } else if (side == 3) {
    toggleBB(1);
    mLeft.style.opacity = "0";
    mLeft.style.zIndex = "1";
    mRight.style.opacity = "0";
    mRight.style.zIndex = "1";
  }
}
function toggleBB(state){
  var bBCLeft = document.getElementById("bBCLeft");
  var bBCRight = document.getElementById("bBCRight");
  var bBack = document.getElementById("bBack");
  var background = document.getElementById("background");
  if (state == 0) {
    bBCLeft.style.opacity = "0";
    bBCRight.style.opacity = "0";
    bBCLeft.style.zIndex = "1";
    bBCRight.style.zIndex = "1";
    bBack.style.opacity = "1";
    bBack.style.zIndex = "11";
    background.style.filter = "blur(80px)";
  } else {
    bBCLeft.style.opacity = "1";
    bBCRight.style.opacity = "1";
    bBCLeft.style.zIndex = "10";
    bBCRight.style.zIndex = "10";
    bBack.style.opacity = "0";
    bBack.style.zIndex = "1";
    background.style.filter = "blur(0px)";
  }
}
function insertLinks() {
  var links = document.getElementsByClassName("links");
  for (g = 0; g < 20; g++) {
    links[g].innerHTML = nameB[g];
    links[g].href = linkB[g];
  }
}
function randomBg() {
  var randNum = Math.floor(Math.random() * 20);
  for (i = 0; i < 20; i++) {
    if (randNum == i) {
      document.getElementById("background").style.backgroundImage= "url('bgimg/" + background[i] + "')";
      document.getElementById("bBlur1").style.backgroundImage= "url('bgimg/" + background[i] + "')";
      document.getElementById("bBlur2").style.backgroundImage= "url('bgimg/" + background[i] + "')";
    }
  }
}
