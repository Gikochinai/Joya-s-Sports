var img = document.querySelector('.mobile_app_img');
var images = ['1.png', '2.png', '3.png','4.png'];
var i = 0;

$("#prev").click(function(){
  if(i <= 0) i = images.length;
  i--;
  return setIMG();
});

$("#next").click(function(){
  if(i >= images.length-1) i = -1;
  i++;
  return setIMG();
});

function setIMG(){
  return img.setAttribute('src', 'app/' + images[i]);
}
