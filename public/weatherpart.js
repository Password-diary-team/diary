/*to play the project, typing in "node app.js" in the terminal, and type in "localhost:3000" in any browser*/
var toggleWeather = false;

function weather(){
    if (toggleWeather == false){
        document.getElementById("todayT").innerHTML="Daily forcast";
        document.getElementById("todayT").style.display="inline";
        document.getElementById("todayI").src="images/daily.png";
        document.getElementById("todayI").style.display="inline";

        document.getElementById("weeklyT").innerHTML="Weekly forcast";
        document.getElementById("weeklyT").style.display="inline";
        document.getElementById("weeklyI").src="images/weekly.png";
        document.getElementById("weeklyI").style.display="inline";

        document.getElementById("provinceT").innerHTML="Province wide forcast";
        document.getElementById("provinceT").style.display="inline";
        document.getElementById("provinceI").src="images/province.jpg";
        document.getElementById("provinceI").style.display="inline";

        document.getElementById("countryT").innerHTML="Country wide forcast";
        document.getElementById("countryT").style.display="inline";
        document.getElementById("countryI").src="images/country.jpg";
        document.getElementById("countryI").style.display="inline";

        toggleWeather = true;
    } 
    else{
        document.getElementById("todayT").style.display="none";
        document.getElementById("weeklyT").style.display="none";
        document.getElementById("provinceT").style.display="none";
        document.getElementById("countryT").style.display="none";
        document.getElementById("todayI").style.display="none";
        document.getElementById("weeklyI").style.display="none";
        document.getElementById("provinceI").style.display="none";
        document.getElementById("countryI").style.display="none";

        toggleWeather = false;
    }

}
function colours(num){
    if (num==1){
        document.body.style.backgroundColor="LightCoral";
        document.getElementById("red").checked=false;
    }
    else if (num==2){
        document.body.style.backgroundColor="Aqua";
        document.getElementById("blue").checked=false;
    }
    else if (num==3){
        document.body.style.backgroundColor="LightPink";
        document.getElementById("pink").checked=false;
    }
    else if (num==4){
        document.body.style.backgroundColor="LightYellow";
        document.getElementById("yellow").checked=false;
    }
    else if (num==5){
        document.body.style.backgroundColor="ForestGreen";
        document.getElementById("green").checked=false;
    }
    else if (num==6){
        document.body.style.backgroundColor="LawnGreen";
        document.getElementById("lime").checked=false;
    }
    else if (num==7){
        document.body.style.backgroundColor="White";
        document.getElementById("reset").checked=false;
    }
}