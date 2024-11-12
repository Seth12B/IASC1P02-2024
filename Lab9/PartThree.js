
function AddNumbers(){
  let f = parseInt(document.getElementById("FirstInput").value);
  let s = parseInt(document.getElementById("SecondInput").value);
  f+=s;
  document.getElementById("output").innerHTML=f;
}
