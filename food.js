function show1() {
    toggleDropdown('dropdown-1');
}

function show2() {
    toggleDropdown('dropdown-2');
}

function show3() {
    toggleDropdown('dropdown-3');
}

function show4() {
    toggleDropdown('dropdown-4');
}

function show5() {
    toggleDropdown('dropdown-5');
}

function toggleDropdown(dropdownClass) {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        if (dropdown.classList.contains(dropdownClass)) {
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        } else {
            dropdown.style.display = 'none';
        }
    });
}
document.addEventListener('click', function(event) {
    const isClickInside = document.querySelector('.menu ').contains(event.target) || document.querySelector('.all-btn').contains(event.target);
    if (!isClickInside) {
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            dropdown.style.display = 'none';
        });
    }
});

const images = document.querySelectorAll(".image-continer img")
let i = 0;
let j = images.length;

function next1(){
	document.getElementById("image" + (i+1)).classList.remove("active");
	i = (j + i + 1) % j;
	document.getElementById("image" + (i+1)).classList.add("active");
}

function prev1(){
	document.getElementById("image" + (i+1)).classList.remove("active");
	i = (j + i - 1) % j;
	document.getElementById("image" + (i+1)).classList.add("active");
}

var tab1 = document.getElementById("image4").style;
var tab2 = document.getElementById("image5").style;
var tab3 = document.getElementById("image6").style;

function home(){
   tab1.display="block";
   tab2.display = "none";
   tab3.display = "none";
}

function service(){
   tab2.display="block";
   tab1.display = "none";
   tab3.display = "none";
}

function contact(){
   tab3.display="block";
   tab2.display = "none";
   tab1.display = "none";
}


	function ShowFood(category) {
		document.querySelectorAll('.tabing').forEach(tab => {
			tab.classList.remove('active');
		});
		document.getElementById(category).classList.add('active');
	}



function validateForm(){
	var value1=document.getElementById("name").value;
	var value2=document.getElementById("email").value;
	var value3=document.getElementById("pwd").value;
	var value4=document.getElementById("description").value;

	if (value1 == "") {
		document.getElementById("error1").innerHTML="please fill the field";
		return false;
	}


	if (value1.length<="2") {
		document.getElementById("error1").innerHTML="minimum character length is 2";
		return false;
	}

	if (value2 == "") {
		document.getElementById("error2").innerHTML="please fill the field";
		return false;
	}

	if(value2.replace(/\s/g,"").length<=0){
        document.getElementById("error2").innerHTML="** White Space Are Not Allowed";
        return false;
    }

	if (value2<="2" && value2>="30") {
		document.getElementById("error2").innerHTML="Length Shoud be beetween 3 and 30 ";
		return false;
	}

	if (value2.indexOf('@') <=0) {
		document.getElementById("error2").innerHTML="emailid is not Ok ";
		return false;
	}
    
     if((value2.charAt(value2.length-4)!='.') && (value2.charAt(value2.length-3)!='.')){
        document.getElementById("error2").innerHTML="dot is not available";
        return false;
    }

    if (value3 == "") {
    	document.getElementById("error3").innerHTML ="please fill the field";
    	return false;
    }

    if (value3.length<="8" && value3.length>="15") {
    	document.getElementById("error3").innerHTML ="character should be 8 to 15";
    	return false;
    }

    if (value4 == "") {
    	document.getElementById("error4").innerHTML ="please fill the field";
    	return false;
    }
}

function loginshow(){
	var pre = document.querySelector(".login-modal").style;

	if (pre.display=="block") {
		pre.display = "none";
		pre.width = "0%";
	}
	else{
		pre.display = "block";
		pre.width = "100%";
	}
}

function hide(){
	var pre1 = document.querySelector(".login-modal").style;

	if (pre1.display=="block") {
		pre1.display = "none";
		pre1.width = "0%";
	}
	else{
		pre1.display = "block";
		pre1.width = "100%";
	}
	
}


var lg_error = document.getElementById("login-error");
var patten = /\s/g;
var patten1 = "@";

 
function first(){
	var p = document.getElementById("email1").value;

	if (p == "") {
        lg_error.innerHTML="please fill the field";
        return false;
	}

	if (p.match(patten)) {
		lg_error.innerHTML ="white space is not allowd";
		return false;
	}

    if (p.indexOf("@")<=0) {
    	lg_error.innerHTML = "Email id is not Ok";
    	return false;
    }

    if (p.length<="2" || p.length>="25") {
    	lg_error.innerHTML ="character should be beetween 3 to 25";
    	return false;
    }

    if ((p.charAt(p.length-4) !=".") && (p.charAt(p.length-3) !=".")){
    	lg_error.innerHTML="Email Id is not valid";
    	return false;
    }

    lg_error.innerHTML ="";
	return true;
}

function last(){
	var s = document.getElementById("pwd1").value;
	var special = /^[A-Za-z]\w{7,14}$/


	if (s =="") {
		lg_error.innerHTML ="please fill the field";
		return false;
	}

	if (s.match(patten)) {
		lg_error.innerHTML = "white space is not allowed";
		return false;
	}

	if (s.length<=8 ){
		lg_error.innerHTML = "please write at least 8 character";
		return false;
	}

	if (s.match(special)) {
		lg_error.innerHTML = "write at least 8 character, 1 numeric, 1 uppercase, 1 lowercase and 1 special character";
		return false;
	}

	lg_error.innerHTML ="";
	return true;
}

function validate(){
	if (!first() || !last()) {
		lg_error.innerHTML = "please fill all the details";
		return false;
	}
}

var mouse = document.querySelector(".about1").style;
var mouse1 = document.querySelector(".about2").style;
var mouse2 = document.querySelector(".about3").style;

function story(){
	if(mouse.display =="block"){
          mouse.display = "none";
          mouse1.display = "block";
          mouse2.display = "block";
	}
}


function mission(){
	if(mouse1.display =="none"){
          mouse1.display = "block";
           mouse.display= "none";
          mouse2.display = "none";
	}
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Save the user's preference in local storage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
}

// Check for saved user preference on page load
window.onload = function() {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode === "enabled") {
        document.body.classList.add("dark-mode");
        document.getElementById("darkModeToggle").checked = true;
    }
};








