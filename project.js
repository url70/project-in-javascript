const car = document.getElementById('car');
car.style.left='200%';


// for (let i=0; i<=90;i++){
//     car.style.right = i +'%'
// }
(function() {
   // don't leak variables into the global scope - think "variable = carbon dioxide"
   var elem = document.getElementById('car'), pos = 0,
   timer = setInterval(function() {
       pos++;
       elem.style.left = pos+"px";
       if( pos == 200) clearInterval(timer);
   },25);
})();