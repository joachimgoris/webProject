function ReadPloegen () {
    var landen = JSON.parse("ploegen.json");
       document.getElementById("landenLijst").innerHTML = landen.forEach(element => {name +" "+flag});
}