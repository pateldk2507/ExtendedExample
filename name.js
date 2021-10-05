function Country(name, iso, capital, population) {
    this.name = name;
    this.iso = iso;
    this.capital = capital;
    this.population = population;
}

(function(){

    var countries = [
        new Country("Bahamas","BS","Nassau", 301719),
        new Country("Canada","CA","Ottawa",33679000),
        new Country("Germany","DE","Berlin",81802257)
    ];

    countries.push(new Country("Spain","ES","Madrid",465059563));
    countries.push(new Country("United Kingdom","GB","London",62348447));

    for(var i=0; i<countries.length; i++){
        var c =countries[i];
        document.write("<div class='box'>");
        document.write("<img src='flags/" + c.iso + ".png' class='boxIMG'>");

        for(var propertyName in c){
            document.write("<strong>");
            document.write(propertyName + ":");
            document.write("</strong>");
            document.write(c[propertyName]);
            document.write("<br>");
        }

        document.write("</div>");
    }
})();