const b = document.getElementsByClassName("output")[0];
const btn = document.getElementsByClassName("btn")[0];
var number = Math.floor(Math.random() * 100) + 1;
let count = 0;
console.log(number);
function reset() {
  var number = Math.floor(Math.random() * 100) + 1;
  console.log(number);
  b.innerHTML = "choose number between 1 and 100";

}
btn.addEventListener("click", function() {
  const a = document.getElementById("input").value;
  let egg = parseInt(a);

  if (egg == number) {
    b.innerHTML = "Your guess was right!";
    alert(`congratulation!!\nyou guess your number in ${count} count `);
  }  
  else{
    count++;
    if (egg < number) {
      b.innerHTML = "Your guess was less than the actual number.";
    }  if (egg > number) {
      b.innerHTML = "Your guess was greater than the actual number.";
    }
  }
  
});
