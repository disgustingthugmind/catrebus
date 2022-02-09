 var imp1 = document.querySelector('.p1')
 var imp2 = document.querySelector('.p2')
 var imp3 = document.querySelector('.p3')
 var imp4 = document.querySelector('.p4')
 var imp5 = document.querySelector('.p5')
 var imp6 = document.querySelector('.p6')
 var imp7 = document.querySelector('.p7')
 var imp8 = document.querySelector('.p8')
 var imp9 = document.querySelector('.p9')
 var btn = document.querySelector('button')
 var box1 = document.querySelector('.b1')
 var box2 = document.querySelector('.b2')
 var box3 = document.querySelector('.b3')
 var box4 = document.querySelector('.b4')
 var box5 = document.querySelector('.b5')
 var box6 = document.querySelector('.b6')
 var box7 = document.querySelector('.b7')
 var box8 = document.querySelector('.b8')
 var box9 = document.querySelector('.b9')

 btn.onmousedown = function () {
     if (imp1.value == 1) {
         box1.style.backgroundImage = 'url("1.jpg")'
     }
     if (imp2.value == 2) {
         box2.style.backgroundImage = 'url("2.jpg")'
     }
     if (imp3.value == 3) {
         box3.style.backgroundImage = 'url("3.jpg")'
     }
     if (imp4.value == 4) {
         box4.style.backgroundImage = 'url("4.jpg")'
     }
     if (imp5.value == 5) {
         box5.style.backgroundImage = 'url("5.jpg")'
     }
     if (imp6.value == 6) {
         box6.style.backgroundImage = 'url("6.jpg")'
     }
     if (imp7.value == 7) {
         box7.style.backgroundImage = 'url("7.jpg")'
     }
     if (imp8.value == 8) {
         box8.style.backgroundImage = 'url("8.jpg")'
     }
     if (imp9.value == 9) {
         box9.style.backgroundImage = 'url("9.jpg")'
     }

 }

 document.onkeydown = function (event) {
     console.log(event)
     if (event.keyCode == 13) {
         if (imp1.value == 1) {
             box1.style.backgroundImage = 'url("1.jpg")'
         }
         if (imp2.value == 2) {
             box2.style.backgroundImage = 'url("2.jpg")'
         }
         if (imp3.value == 3) {
             box3.style.backgroundImage = 'url("3.jpg")'
         }
         if (imp4.value == 4) {
             box4.style.backgroundImage = 'url("4.jpg")'
         }
         if (imp5.value == 5) {
             box5.style.backgroundImage = 'url("5.jpg")'
         }
         if (imp6.value == 6) {
             box6.style.backgroundImage = 'url("6.jpg")'
         }
         if (imp7.value == 7) {
             box7.style.backgroundImage = 'url("7.jpg")'
         }
         if (imp8.value == 8) {
             box8.style.backgroundImage = 'url("8.jpg")'
         }
         if (imp9.value == 9) {
             box9.style.backgroundImage = 'url("9.jpg")'
         }
     }
 }
