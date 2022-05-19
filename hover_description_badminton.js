var dis  = document.getElementById("container_des");
var dis1  = document.getElementById("container_des1");
var dis2  = document.getElementById("container_des2");
var dis3  = document.getElementById("container_des3");
var dis4  = document.getElementById("container_des4");

document.getElementById("details").style.display = "none";
document.getElementById("details1").style.display = "none";
document.getElementById("details2").style.display = "none";
document.getElementById("details3").style.display = "none";
document.getElementById("details4").style.display = "none";

dis.addEventListener('mouseenter', () => document.getElementById("details").style.display = "block");
dis.addEventListener('mouseleave', () => document.getElementById("details").style.display = "none");

dis1.addEventListener('mouseenter', () => document.getElementById("details1").style.display = "block");
dis1.addEventListener('mouseleave', () => document.getElementById("details1").style.display = "none");

dis2.addEventListener('mouseenter', () => document.getElementById("details2").style.display = "block");
dis2.addEventListener('mouseleave', () => document.getElementById("details2").style.display = "none");

dis3.addEventListener('mouseenter', () => document.getElementById("details3").style.display = "block");
dis3.addEventListener('mouseleave', () => document.getElementById("details3").style.display = "none");

dis4.addEventListener('mouseenter', () => document.getElementById("details4").style.display = "block");
dis4.addEventListener('mouseleave', () => document.getElementById("details4").style.display = "none");
