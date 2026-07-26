// ===== FROZZY BIO =====

document.addEventListener("DOMContentLoaded", () => {

const card = document.querySelector(".card");

card.animate(

[
{
opacity:0,
transform:"translateY(50px)"
},
{
opacity:1,
transform:"translateY(0px)"
}
],

{
duration:900,
easing:"ease-out",
fill:"forwards"
}

);

// Glow effect

document.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth;
const y=e.clientY/window.innerHeight;

card.style.boxShadow=`
${(x-.5)*30}px ${(y-.5)*30}px 90px rgba(255,255,255,.08)
`;

});

// Background particles

const bg=document.getElementById("particles");

for(let i=0;i<45;i++){

const dot=document.createElement("span");

dot.style.position="absolute";

dot.style.width=Math.random()*3+2+"px";

dot.style.height=dot.style.width;

dot.style.background="rgba(255,255,255,.25)";

dot.style.borderRadius="50%";

dot.style.left=Math.random()*100+"%";

dot.style.top=Math.random()*100+"%";

dot.style.animation=`float${i} ${10+Math.random()*15}s linear infinite`;

bg.appendChild(dot);

const style=document.createElement("style");

style.innerHTML=`

@keyframes float${i}{

0%{

transform:translateY(0px);

opacity:.2;

}

50%{

opacity:.8;

}

100%{

transform:translateY(-120vh);

opacity:0;

}

}

`;

document.head.appendChild(style);

}

// Tilt card

document.addEventListener("mousemove",(e)=>{

const rx=(window.innerHeight/2-e.clientY)/40;

const ry=(e.clientX-window.innerWidth/2)/40;

card.style.transform=`rotateX(${rx}deg) rotateY(${ry}deg)`;

});

document.addEventListener("mouseleave",()=>{

card.style.transform="rotateX(0deg) rotateY(0deg)";

});

// Button hover sound imitation

document.querySelectorAll(".buttons a").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.letterSpacing="2px";

});

btn.addEventListener("mouseleave",()=>{

btn.style.letterSpacing="0px";

});

});

});

// Console

console.clear();

console.log("%cFROZZY BIO","font-size:30px;font-weight:bold;color:white;background:black;padding:10px;");
console.log("Developer: FROZZY");
console.log("Location: YERE");
console.log("Languages: Python | Batch | Rust | C++ | Java");
