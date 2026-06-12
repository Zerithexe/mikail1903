# script.js

```javascript
function login(){

let password = document.getElementById("password").value;

if(password === "1903"){

window.location.href = "home.html";

}else{

alert("Yanlış şifre!");

}

}

function downloadCard(){

html2canvas(document.getElementById("card")).then(canvas => {

let link = document.createElement("a");

link.download = "mikail-besiktas-kart.png";

link.href = canvas.toDataURL();

link.click();

});

}
```
