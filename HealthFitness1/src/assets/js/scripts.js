window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("psbar").style.width = scrolled + "%";
  
};




//rotation


var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

//dashboard

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var dayId="1";
var w="mo";
function displayList(q){ 

   document.getElementById(dayId).style.display="none";
   document.getElementById(w).style.backgroundColor="#ddd";
   document.getElementById(w).style.color="black";
   w=q;
   if(q == "mo") dayId="1";
   else if(q == "tu") dayId="2";
   else if(q == "we") dayId="3";
   else if(q == "th") dayId="4";
   else if(q == "fr") dayId="5";  
   else if(q == "sa") dayId="6";
   else dayId="7"
   document.getElementById(dayId).style.display="block";
   document.getElementById(q).style.color="white";
   
   document.getElementById(q).style.backgroundColor="#404040";
   

}


// Create a new list item when clicking on the "Add" button
function newElement() {
      var item=dayId+dayId;
    var li = document.createElement("li");
    li.className="pl-3";
    var inputValue = document.getElementById("item").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById(item).appendChild(li);
    }
    document.getElementById("item").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("X");
    span.className = "close";
    span.addEventListener("click",function(){this.parentElement.style.display="none";});
    span.appendChild(txt);
    li.appendChild(span);

    
}  

function close()
{
  this.style.display="none";
}


// scroll top

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//change tab

// function changeTab(s1,s2)
// {
//   document.getElementById(q).innerHTML=s1;
//   s1='#'+s1;
//   s2='#'+s2;
//   document.getElementById(q).innerHTML=s1;
//   document.getElementById(s1).style.display='block';
//   document.getElementById(s2).style.display='none';
// }