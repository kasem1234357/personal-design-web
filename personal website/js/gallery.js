//---------------start color change code-------------------//
$(function()
{
'use strict';
$('.logo2 li').on('click', function (){
    $(':root').css('--maincolor',$(this).data('color'));
} );
});
$(function()
{
'use strict';
$('.logo2 li').on('click', function (){
    $(':root').css('--secondcolor',$(this).data('color2'));
} );
});
//---------------end color change code-------------------//
//---------------start menu slide code-------------------//
const header = document.getElementById('x');
  const nav = document.getElementById('nav');
  const btnx2 = document.getElementById('btnx2');
  btnx2.onclick = function (){
    header.classList.toggle('nav-active');
  }
//---------------end menu slide code-------------------//
// ----------------------start filter code-------------//
const el = document.querySelectorAll('.filter li');
const x =document.querySelectorAll('.projectsx .imgbox') ;
el.forEach((els)=>{
  els.addEventListener("click",()=>{
      let data = els.getAttribute('data-main');
      for(var i = 0 ; i<x.length;i++){
        x[i].classList.remove('none');
        if(data ==='all'){
          x[i].classList.remove('none');
        }
        else{
          if( x[i].getAttribute('data-type') === data){
            console.log('true');
          }
          else{
            console.log('false');
            x[i].classList.add('none');
          }
        }
      }
  })
})
//------------------- end filter code---------------------//
//-------------------start top btn code ------------------//
const btn2 = document.getElementById('top');
var that = this;
window.onscroll = function top()
{
  if(that.scrollY>= 1520)
  {
    btn2.classList.add('top-active');
    
  }
  else
  {
    btn2.classList.remove('top-active');
  }
};
setInterval (top,100);
btn2.addEventListener('click', ()=> {
  const bodya = document.querySelector('body');
  bodya.animate([
    // keyframes
    { },
  { transform: `translateY(0)` }

  ], {
    // timing options
    duration: 2000,
    fill : "forwards"
  });
})