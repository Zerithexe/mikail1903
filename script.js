function checkPassword(){

const pass = document.getElementById("password").value;

const messages = [
"Mikail'e yakalandın!",
"Kartal seni izliyor!",
"Yanlış şifre!",
"Sadece gerçek Beşiktaşlılar girebilir!"
];

if(pass === "1903"){
window.location.href="home.html";
}
else{
document.getElementById("error").innerText =
messages[Math.floor(Math.random()*messages.length)];
}
}

function updateCounter(){

const founded = new Date("1903-03-03");
const now = new Date();

const diff = now - founded;

const years =
Math.floor(diff / (1000*60*60*24*365));

const days =
Math.floor(diff / (1000*60*60*24));

const counter =
document.getElementById("counter");

if(counter){
counter.innerHTML=
`
${years} Yıllık Efsane<br>
${days} Günlük Tarih
`;
}

}

setInterval(updateCounter,1000);

function createCard(){

let name=document.getElementById("name").value;

if(name=="") name="Mikail";

document.getElementById("cardName").innerText=name;

document.getElementById("cardNo").innerText=
"1903"+Math.floor(Math.random()*999999);

let file=
document.getElementById("photo").files[0];

if(file){

let reader=new FileReader();

reader.onload=function(e){

document.getElementById("preview").src=
e.target.result;

};

reader.readAsDataURL(file);

}

}

function downloadCard(){

html2canvas(document.querySelector("#card"))
.then(canvas=>{

let a=document.createElement("a");

a.download="Mikail_BJK_Kart.png";

a.href=canvas.toDataURL();

a.click();

});

}
