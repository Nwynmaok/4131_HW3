function marquee() {
  let d = new Date();
  var n = d.getDay();
  if (n === 0 | n === 6) {
    document.getElementById('marquee').innerHTML="It is the weekend! No events today."
  } else if (n === 1 | n === 3) {
    let todayText = document.getElementById("day"+n+"class1").innerHTML;
    todayText += " : " + document.getElementById("day"+n+"time1").innerHTML;
    todayText += " : " + document.getElementById("day"+n+"location1").innerHTML;
    todayText += "  ||  " + document.getElementById("day"+n+"class2").innerHTML;
    todayText += " : " + document.getElementById("day"+n+"time2").innerHTML;
    todayText += " : " + document.getElementById("day"+n+"location2").innerHTML;
    todayText += "  ||  " + document.getElementById("day"+n+"class3").innerHTML;
    todayText += " : " + document.getElementById("day"+n+"time3").innerHTML;
    todayText += " : " + document.getElementById("day"+n+"location3").innerHTML;
    todayText += "  ||  " + document.getElementById("day"+n+"class4").innerHTML;
    todayText += " : " + document.getElementById("day"+n+"time4").innerHTML;
    todayText += " : " + document.getElementById("day"+n+"location4").innerHTML;
    document.getElementById('marquee').innerHTML=todayText;
  } else if (n === 2 | n === 4 | n === 5) {
    let todayText = document.getElementById("day"+n+"class1").innerHTML;
    todayText += " : " + document.getElementById("day"+n+"time1").innerHTML;
    todayText += " : " + document.getElementById("day"+n+"location1").innerHTML;
    document.getElementById('marquee').innerHTML=todayText;
  }
}
function showKeller() {
  document.getElementById("initPic").style.display = "none";
  document.getElementById("BruininksPic").style.display = "none";
  document.getElementById("FraserPic").style.display = "none";
  document.getElementById("KellerPic").style.display = "block";
}
function showBruininks() {
  document.getElementById("initPic").style.display = "none";
  document.getElementById("BruininksPic").style.display = "block";
  document.getElementById("FraserPic").style.display = "none";
  document.getElementById("KellerPic").style.display = "none";
}
function showFraser() {
  document.getElementById("initPic").style.display = "none";
  document.getElementById("BruininksPic").style.display = "none";
  document.getElementById("FraserPic").style.display = "block";
  document.getElementById("KellerPic").style.display = "none";
}
function eventClick() {
  let image1 = document.getElementById("Keller1").addEventListener('click', function (event) {
      showKeller();
  });
  let image2 = document.getElementById("Keller2").addEventListener('click', function (event) {
      showKeller();
  });
  let image3 = document.getElementById("Keller3").addEventListener('click', function (event) {
      showKeller();
  });
  let image4 = document.getElementById("Keller4").addEventListener('click', function (event) {
      showKeller();
  });
  let image5 = document.getElementById("Keller5").addEventListener('click', function (event) {
      showKeller();
  });
  let image6 = document.getElementById("Bruininks1").addEventListener('click', function (event) {
      showBruininks();
  });
  let image7 = document.getElementById("Bruininks2").addEventListener('click', function (event) {
      showBruininks();
  });
  let image8 = document.getElementById("Bruininks3").addEventListener('click', function (event) {
      showBruininks();
  });
  let image9 = document.getElementById("Bruininks4").addEventListener('click', function (event) {
      showBruininks();
  });
  let image10 = document.getElementById("Fraser1").addEventListener('click', function (event) {
      showFraser();
  });
  let image11 = document.getElementById("Fraser2").addEventListener('click', function (event) {
      showFraser();
  });
}

function validateForm() {
  var x = document.forms["myForm"]["eventname"].value;
  if (x == "") {
      alert("Event must have a name");
      return false;
  }
  if((/^[A-Za-z0-9 ]+$/.test(x)) == false) {
    alert("Name must be alphanumeric");
    return(false);
  }
  var z = document.forms["myForm"]["day"].value;
  if (z == "") {
      alert("Event must have a day of the week");
      return false;
  }
  var v = document.forms["myForm"]["starttime"].value;
  if (v == "") {
      alert("Event must have a start time");
      return false;
  }
  var w = document.forms["myForm"]["endtime"].value;
  if (w == "") {
      alert("Event must have a end time");
      return false;
  }
  var y = document.forms["myForm"]["location"].value;
  if (y == "") {
      alert("Event must have a location");
      return false;
  }
  if((/^[A-Za-z0-9 ]+$/.test(y)) == false) {
    alert("Event must be alphanumeric");
    return(false);
  }
}

function Keller1Hover() {
  // console.log("Keller");
  document.getElementById("Keller1").style.backgroundImage = "url(images/Keller_Hall_plaza.jpg)";
  document.getElementById("day1class1").style.backgroundColor = "black";
  document.getElementById("day1class1").style.color = "white";
  document.getElementById("day1time1").style.backgroundColor = "black";
  document.getElementById("day1time1").style.color = "white";
  document.getElementById("day1location1").style.backgroundColor = "black";
  document.getElementById("day1location1").style.color = "white";
}

function Keller1Unhover() {
  // console.log("KellerUnhover");
  document.getElementById("Keller1").style.backgroundImage = "none";
  document.getElementById("day1class1").style.backgroundColor = "transparent";
  document.getElementById("day1class1").style.color = "#800000";
  document.getElementById("day1time1").style.backgroundColor = "transparent";
  document.getElementById("day1time1").style.color = "#800000";
  document.getElementById("day1location1").style.backgroundColor = "transparent";
  document.getElementById("day1location1").style.color = "#800000";
}

function Keller2Hover() {
  // console.log("Keller");
  document.getElementById("Keller2").style.backgroundImage = "url(images/Keller_Hall_plaza.jpg)";
  document.getElementById("day2class1").style.backgroundColor = "black";
  document.getElementById("day2class1").style.color = "white";
  document.getElementById("day2time1").style.backgroundColor = "black";
  document.getElementById("day2time1").style.color = "white";
  document.getElementById("day2location1").style.backgroundColor = "black";
  document.getElementById("day2location1").style.color = "white";
}

function Keller2Unhover() {
  // console.log("KellerUnhover");
  document.getElementById("Keller2").style.backgroundImage = "none";
  document.getElementById("day2class1").style.backgroundColor = "transparent";
  document.getElementById("day2class1").style.color = "#800000";
  document.getElementById("day2time1").style.backgroundColor = "transparent";
  document.getElementById("day2time1").style.color = "#800000";
  document.getElementById("day2location1").style.backgroundColor = "transparent";
  document.getElementById("day2location1").style.color = "#800000";
}

function Keller3Hover() {
  // console.log("Keller");
  document.getElementById("Keller3").style.backgroundImage = "url(images/Keller_Hall_plaza.jpg)";
  document.getElementById("day3class1").style.backgroundColor = "black";
  document.getElementById("day3class1").style.color = "white";
  document.getElementById("day3time1").style.backgroundColor = "black";
  document.getElementById("day3time1").style.color = "white";
  document.getElementById("day3location1").style.backgroundColor = "black";
  document.getElementById("day3location1").style.color = "white";
}

function Keller3Unhover() {
  // console.log("KellerUnhover");
  document.getElementById("Keller3").style.backgroundImage = "none";
  document.getElementById("day3class1").style.backgroundColor = "transparent";
  document.getElementById("day3class1").style.color = "#800000";
  document.getElementById("day3time1").style.backgroundColor = "transparent";
  document.getElementById("day3time1").style.color = "#800000";
  document.getElementById("day3location1").style.backgroundColor = "transparent";
  document.getElementById("day3location1").style.color = "#800000";
}

function Keller4Hover() {
  // console.log("Keller");
  document.getElementById("Keller4").style.backgroundImage = "url(images/Keller_Hall_plaza.jpg)";
  document.getElementById("day4class1").style.backgroundColor = "black";
  document.getElementById("day4class1").style.color = "white";
  document.getElementById("day4time1").style.backgroundColor = "black";
  document.getElementById("day4time1").style.color = "white";
  document.getElementById("day4location1").style.backgroundColor = "black";
  document.getElementById("day4location1").style.color = "white";
}

function Keller4Unhover() {
  // console.log("KellerUnhover");
  document.getElementById("Keller4").style.backgroundImage = "none";
  document.getElementById("day4class1").style.backgroundColor = "transparent";
  document.getElementById("day4class1").style.color = "#800000";
  document.getElementById("day4time1").style.backgroundColor = "transparent";
  document.getElementById("day4time1").style.color = "#800000";
  document.getElementById("day4location1").style.backgroundColor = "transparent";
  document.getElementById("day4location1").style.color = "#800000";
}

function Keller5Hover() {
  // console.log("Keller");
  document.getElementById("Keller5").style.backgroundImage = "url(images/Keller_Hall_plaza.jpg)";
  document.getElementById("day5class1").style.backgroundColor = "black";
  document.getElementById("day5class1").style.color = "white";
  document.getElementById("day5time1").style.backgroundColor = "black";
  document.getElementById("day5time1").style.color = "white";
  document.getElementById("day5location1").style.backgroundColor = "black";
  document.getElementById("day5location1").style.color = "white";
  document.getElementById("day5git").style.backgroundColor = "black";
  document.getElementById("day5git").style.color = "white";
}

function Keller5Unhover() {
  // console.log("KellerUnhover");
  document.getElementById("Keller5").style.backgroundImage = "none";
  document.getElementById("day5class1").style.backgroundColor = "transparent";
  document.getElementById("day5class1").style.color = "#800000";
  document.getElementById("day5time1").style.backgroundColor = "transparent";
  document.getElementById("day5time1").style.color = "#800000";
  document.getElementById("day5location1").style.backgroundColor = "transparent";
  document.getElementById("day5location1").style.color = "#800000";
  document.getElementById("day5git").style.backgroundColor = "transparent";
  document.getElementById("day5git").style.color = "#800000";
}

function Keller5Hover() {
  // console.log("Keller");
  document.getElementById("Keller5").style.backgroundImage = "url(images/Keller_Hall_plaza.jpg)";
  document.getElementById("day5class1").style.backgroundColor = "black";
  document.getElementById("day5class1").style.color = "white";
  document.getElementById("day5time1").style.backgroundColor = "black";
  document.getElementById("day5time1").style.color = "white";
  document.getElementById("day5location1").style.backgroundColor = "black";
  document.getElementById("day5location1").style.color = "white";
  document.getElementById("day5git").style.backgroundColor = "black";
  document.getElementById("day5git").style.color = "white";
}

function Keller5Unhover() {
  // console.log("KellerUnhover");
  document.getElementById("Keller5").style.backgroundImage = "none";
  document.getElementById("day5class1").style.backgroundColor = "transparent";
  document.getElementById("day5class1").style.color = "#800000";
  document.getElementById("day5time1").style.backgroundColor = "transparent";
  document.getElementById("day5time1").style.color = "#800000";
  document.getElementById("day5location1").style.backgroundColor = "transparent";
  document.getElementById("day5location1").style.color = "#800000";
  document.getElementById("day5git").style.backgroundColor = "transparent";
  document.getElementById("day5git").style.color = "#800000";
}

function Bruininks1Hover() {
  // console.log("Keller");
  document.getElementById("Bruininks1").style.backgroundImage = "url(images/Bruininks_Hall_Picture.jpg)";
  document.getElementById("day1class2").style.backgroundColor = "black";
  document.getElementById("day1class2").style.color = "white";
  document.getElementById("day1time2").style.backgroundColor = "black";
  document.getElementById("day1time2").style.color = "white";
  document.getElementById("day1location2").style.backgroundColor = "black";
  document.getElementById("day1location2").style.color = "white";
  document.getElementById("day1git1").style.backgroundColor = "black";
  document.getElementById("day1git1").style.color = "white";
}

function Bruininks1Unhover() {
  // console.log("KellerUnhover");
  document.getElementById("Bruininks1").style.backgroundImage = "none";
  document.getElementById("day1class2").style.backgroundColor = "transparent";
  document.getElementById("day1class2").style.color = "#800000";
  document.getElementById("day1time2").style.backgroundColor = "transparent";
  document.getElementById("day1time2").style.color = "#800000";
  document.getElementById("day1location2").style.backgroundColor = "transparent";
  document.getElementById("day1location2").style.color = "#800000";
  document.getElementById("day1git1").style.backgroundColor = "transparent";
  document.getElementById("day1git1").style.color = "#800000";
}

function Bruininks2Hover() {
  // console.log("Keller");
  document.getElementById("Bruininks2").style.backgroundImage = "url(images/Bruininks_Hall_Picture.jpg)";
  document.getElementById("day1class4").style.backgroundColor = "black";
  document.getElementById("day1class4").style.color = "white";
  document.getElementById("day1time4").style.backgroundColor = "black";
  document.getElementById("day1time4").style.color = "white";
  document.getElementById("day1location4").style.backgroundColor = "black";
  document.getElementById("day1location4").style.color = "white";
  document.getElementById("day1git2").style.backgroundColor = "black";
  document.getElementById("day1git2").style.color = "white";
}

function Bruininks2Unhover() {
  // console.log("KellerUnhover");
  document.getElementById("Bruininks2").style.backgroundImage = "none";
  document.getElementById("day1class4").style.backgroundColor = "transparent";
  document.getElementById("day1class4").style.color = "#800000";
  document.getElementById("day1time4").style.backgroundColor = "transparent";
  document.getElementById("day1time4").style.color = "#800000";
  document.getElementById("day1location4").style.backgroundColor = "transparent";
  document.getElementById("day1location4").style.color = "#800000";
  document.getElementById("day1git2").style.backgroundColor = "transparent";
  document.getElementById("day1git2").style.color = "#800000";
}

function Bruininks3Hover() {
  // console.log("Keller");
  document.getElementById("Bruininks3").style.backgroundImage = "url(images/Bruininks_Hall_Picture.jpg)";
  document.getElementById("day3class2").style.backgroundColor = "black";
  document.getElementById("day3class2").style.color = "white";
  document.getElementById("day3time2").style.backgroundColor = "black";
  document.getElementById("day3time2").style.color = "white";
  document.getElementById("day3location2").style.backgroundColor = "black";
  document.getElementById("day3location2").style.color = "white";
  document.getElementById("day3git1").style.backgroundColor = "black";
  document.getElementById("day3git1").style.color = "white";
}

function Bruininks3Unhover() {
  // console.log("KellerUnhover");
  document.getElementById("Bruininks3").style.backgroundImage = "none";
  document.getElementById("day3class2").style.backgroundColor = "transparent";
  document.getElementById("day3class2").style.color = "#800000";
  document.getElementById("day3time2").style.backgroundColor = "transparent";
  document.getElementById("day3time2").style.color = "#800000";
  document.getElementById("day3location2").style.backgroundColor = "transparent";
  document.getElementById("day3location2").style.color = "#800000";
  document.getElementById("day3git1").style.backgroundColor = "transparent";
  document.getElementById("day3git1").style.color = "#800000";
}

function Bruininks4Hover() {
  // console.log("Keller");
  document.getElementById("Bruininks4").style.backgroundImage = "url(images/Bruininks_Hall_Picture.jpg)";
  document.getElementById("day3class4").style.backgroundColor = "black";
  document.getElementById("day3class4").style.color = "white";
  document.getElementById("day3time4").style.backgroundColor = "black";
  document.getElementById("day3time4").style.color = "white";
  document.getElementById("day3location4").style.backgroundColor = "black";
  document.getElementById("day3location4").style.color = "white";
  document.getElementById("day3git2").style.backgroundColor = "black";
  document.getElementById("day3git2").style.color = "white";
}

function Bruininks4Unhover() {
  // console.log("KellerUnhover");
  document.getElementById("Bruininks4").style.backgroundImage = "none";
  document.getElementById("day3class4").style.backgroundColor = "transparent";
  document.getElementById("day3class4").style.color = "#800000";
  document.getElementById("day3time4").style.backgroundColor = "transparent";
  document.getElementById("day3time4").style.color = "#800000";
  document.getElementById("day3location4").style.backgroundColor = "transparent";
  document.getElementById("day3location4").style.color = "#800000";
  document.getElementById("day3git2").style.backgroundColor = "transparent";
  document.getElementById("day3git2").style.color = "#800000";
}

function Fraser1Hover() {
  // console.log("Keller");
  document.getElementById("Fraser1").style.backgroundImage = "url(images/Fraser_Hall.jpg)";
  document.getElementById("day1class3").style.backgroundColor = "black";
  document.getElementById("day1class3").style.color = "white";
  document.getElementById("day1time3").style.backgroundColor = "black";
  document.getElementById("day1time3").style.color = "white";
  document.getElementById("day1location3").style.backgroundColor = "black";
  document.getElementById("day1location3").style.color = "white";
}

function Fraser1Unhover() {
  // console.log("KellerUnhover");
  document.getElementById("Fraser1").style.backgroundImage = "none";
  document.getElementById("day1class3").style.backgroundColor = "transparent";
  document.getElementById("day1class3").style.color = "#800000";
  document.getElementById("day1time3").style.backgroundColor = "transparent";
  document.getElementById("day1time3").style.color = "#800000";
  document.getElementById("day1location3").style.backgroundColor = "transparent";
  document.getElementById("day1location3").style.color = "#800000";
}
function Fraser2Hover() {
  // console.log("Keller");
  document.getElementById("Fraser2").style.backgroundImage = "url(images/Fraser_Hall.jpg)";
  document.getElementById("day3class3").style.backgroundColor = "black";
  document.getElementById("day3class3").style.color = "white";
  document.getElementById("day3time3").style.backgroundColor = "black";
  document.getElementById("day3time3").style.color = "white";
  document.getElementById("day3location3").style.backgroundColor = "black";
  document.getElementById("day3location3").style.color = "white";
}

function Fraser2Unhover() {
  // console.log("KellerUnhover");
  document.getElementById("Fraser2").style.backgroundImage = "none";
  document.getElementById("day3class3").style.backgroundColor = "transparent";
  document.getElementById("day3class3").style.color = "#800000";
  document.getElementById("day3time3").style.backgroundColor = "transparent";
  document.getElementById("day3time3").style.color = "#800000";
  document.getElementById("day3location3").style.backgroundColor = "transparent";
  document.getElementById("day3location3").style.color = "#800000";
}
