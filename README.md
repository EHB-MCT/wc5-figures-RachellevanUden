[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=7347994&assignment_repo_type=AssignmentRepo)

We beginnen met een aanmaken van onze klassen, in totaal maken we 4 verschillende klasses aan:

- Figure
- Circle
- Rectangle
- Square

Verschillende van deze klassen erven over van andere klassen. Kan je bedenken welke?

Daarna werken we het form object uit. Zodra de gebruiker een bepaald figuur selecteert worden er nieuwe input fields toegevoegd afhankelijk van de geselecteerde figuur. Wanneer je circle selecteert wordt er bijvoorbeeld een input field radius toegevoegd. Zodra de gebruiker op add figure klikt, wordt de waarde van dit input field gebruikt om een nieuwe instantie van circle aan te maken.

Git clone de starter code via de volgende link:
https://classroom.github.com/a/45cPhSLH (Koppelingen naar een externe site.)

Lets' go!


1. Klassen
terwijl je alle volgende functionaliteiten implementeert test je steeds alle code! Je maakt instanties aan van iedere klasse, voert elke functie uit en logt het resultaat in de console!

Maak een Figure klasse, deze klasse heeft maar één klasse attribuut "name".
Maak een Rectangle klasse, deze klasse erft over van de Figure klasse. Voeg de volgende extra klasse attributen toe: width en height 
Voeg de get method area toe aan de Rectangle klasse, de oppervlakte van een rechthoek kan je berekenen met de volgende formule: width x height
Voeg de get method circumference toe aan de Rectangle klasse, de omtrek van een rechthoek kan je berekenen met de volgende formule: (width + height) * 2
Voeg een get methode htmlString toe aan de Rectangle klasse. Deze returnt de volgende HTML:
<div class="result">
  <div class="figure rectangle" style="width: WIDTHpx; height: HEIGHTpx;"></div>
  <div class="infoBox">
    <h3>${this.name}</h3>
    <dl>
      <dt>Height</dt>
      <dd>HEIGHT px</dd>

      <dt>Width</dt>
      <dd>WIDTH px</dd>

      <dt>Area</dt>
      <dd>AREA px</dd>

      <dt>Circumference</dt>
      <dd>CIRCUMFERENCE px</dd>
    </dl>
  </div>
</div>
6. Maak een Circle klasse, deze klasse erft over van de Figure klasse. Voeg de volgende extra klasse attribuut toe: radius
7. Voeg de get method diameter toe aan de Circle klasse, de diameter van een cirkel kan je berekenen met de volgende formule: radius x 2
8. Voeg de get method area toe aan de Circle klasse, de oppervlakte van een cirkel kan je berekenen met de volgende formule:  π x radius x radius. Pi is beschikbaar in de ingebouwde Math object (Math.PI)
9. Voeg de get method circumference toe aan de Circle klasse, de omtrek van een cirkel kan je berekenen met de volgende formule: 2 x  π x radius.
10. Voeg een get methode htmlString toe aan de Circle klasse. Deze returnt de volgende HTML:

<div class="result">
  <div class="figure circle" style="width: DIAMETERpx; height: DIAMETERpx;"></div>
  <div class="infoBox">
    <h3>Circle</h3>
    <dl>
      <dt>Radius</dt>
      <dd>RADIUS px</dd>

      <dt>Diameter</dt>
      <dd>DIAMETER px</dd>

      <dt>Area</dt>
      <dd>AREA px</dd>

      <dt>Circumference</dt>
      <dd>CIRCUMFERENCE px</dd>
    </dl>
  </div>
</div>

11. Maak een Square klasse, deze klasse erft over van de Rectangle klasse. Gebruik enkel een size eigenschap als parameter om zowel de width en height van de parent klasse Rectangle te bepalen.

 

2. Form
Zodra we hiermee klaar zijn gaan we de effectieve functionaliteit van onze HTML-pagina implementeren door het form object verder uit te werken.

1. Werk de init methode uit. Voeg een event listener toe aan het selectElement, deze luistert naar het change event en roep de changeSelect methode aan. Voeg daarnaast ook een event listener toe aan het formElement, deze luistert naar het submit event en roept de submitForm methode aan. 

2. In de changeSelect methode voeg je op basis van de geselecteerde figuur de juiste input elementen toe aan je HTML. Hiervoor is de div otherInputs voorzien. Je kan hiervoor de helper functie inputElementWithLabel gebruiken. De HTML voor dergelijke input ziet er zo uit: 

<label>
  YOUR LABEL NAME
  <input id="YOUR INPUT ID" type="number">
</label>

3. In de submitForm haal je de values van de otherInputs op en gebruik je deze om een instantie aan te maken van de juiste figure class. Roep de htmlString methode aan en voeg het resultaat toe aan je HTML in de div results.