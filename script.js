var randNum = Math.floor(Math.random() * 100) + 1;
var versuche = 0;

const input = document.getElementById("userInput");
const ratebutton = document.querySelector(".button");
const hint = document.getElementById("hint");


function main(){
    
    function displaywinnmessg(){
       const gewinn = document.createElement("div");
        gewinn.classList.add("gewinn");
        
       const nachricht = document.createElement("h2");
       nachricht.classList.add("nachricht");
        
       nachricht.innerHTML = "Du hast gewonnen!<br> Meine Zahl war " + randNum +"!<br> Versuche: " + versuche;
        
       gewinn.appendChild(nachricht);
        
       const nochmalSpielbutton = document.createElement("button");
        nochmalSpielbutton.classList.add("play-again");
        nochmalSpielbutton.innerHTML ="Nochmal Spielen";
        nochmalSpielbutton.addEventListener('click',function(){ location.reload()})
        
        gewinn.appendChild(nochmalSpielbutton);
        document.body.appendChild(gewinn);
        ratebutton.style.pointerEvents = "none";
    }
    
    function geClickt(){
      versuche++;
      
     if(parseInt(input.value) > randNum){
        hint.innerHTML = "Die Zahl ist kleiner als " + input.value;
        } else if(parseInt(input.value) < randNum){
           hint.innerHTML = "Die Zahl ist größer als " + input.value;
        } else if (input.value === "" ){
                   alert("Du musst schon eine Zahl eingeben");
                   } else{
            displaywinnmessg();    
        }
    }
    
    ratebutton.addEventListener("click",geClickt);
    
}

main();

//Wenn man schummelt...
console.log("%c Die Zahl ist " + randNum,"font-size: 30px; color:white; text-shadow: 0px 0px 20px ;font-family: fantasy;");
