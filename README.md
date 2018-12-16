## Projekt des Moduls "Aktuelle Webtechnologien und Frameworks" im Wintersemester 18/19

###  **Seiteninhalt:**
1. [Gegebene JSON Datei](#gegebene-json-datei)
2. [Unser eigenes Modul](#unser-eigenes-modul-(awt-json-parser))
    1. [Aufbau](#aufbau)
    2. [Import](#import)
    3. [Verwendung](#verwendung)
3. [Tilesjs Grid Library](#tilesjs-grid-library)
    1. [Wofür überhaupt?](#wofür-überhaupt?)
    2. [Import](#tilesjs-import)
    3. [Verwendung](#tilesjs-verwendung)


## **Gegebene JSON Datei**

Diese ist in einer separaten Datei `awt-jsonstring-example-1.js` als String abgespeichert, welcher exportiert wird. Wir importieren diesen String dann mittels Node.js eigener `require()` Funktion und speichern ihn als Konstante zur weiteren Verwendung ab.
```javascript
const JSON_STRING = require('./awt-jsonstring-example-1');
```

## **Unser eigenes Modul (awt-json-parser)**

## *Aufbau*
Das Modul `awt-json-parser.js` besteht lediglich aus einer Funktion mit dem Namen `parse()`, die aus einem übergebenen String im JSON Format ein für unsere Zwecke angepasstes Javscript Object erzeugt.  
Diese Funktion `parse()` wird mittels
```javascript
export default parse;
```
exportiert und steht nun nach einem Import auch in anderen Dateien zur Verfügung.

## *Import*
Um unser Modul in anderen Dateien nutzen zu können, muss dieses importiert werden. Das geht unter anderem mit der Node.js eigenen Funktion `require()` folgendermaßen:
```javascript
const parse = require('./awt-json-parser');
```
Sollte die Datei, in der das Modul verwendet werden soll, nicht im selben Verzeichnis liegen wie unser Modul, so muss der Pfad entsprechend angepasst werden.

## *Verwendung*
Nachdem unser Modul wie oben beschrieben importiert wurde, hält die Konstante
```javascript
const parse = require('./awt-json-parser');
```
eine Referenz auf die `parse()` Funktion aus unserem Modul.

Zum Aufrufen dieser Funktion benötigen wir als Argument nun das JSON als String. Diesen können wir nun mit unserem Modul parsen und unser neu entstehendes Objekt speichern.
```javascript
const parsedObject = parse(JSON_STRING);
```

## **Tilesjs Grid Library**

## *Wofür überhaupt?*
Die Tilesjs Library ist dafür da, auf einfache Art und Weise ein Gridlayout umzusetzen. So müssen wir uns nicht damit herumschlagen, wie groß (in Pixeln) die einzelnen Kacheln genau sein müssen, damit die richtige Anzahl an Kacheln perfekt in der Breite und Höhe und mit dem korrekten Zwischenabstand richtig angezeigt werden können und so. Auch kleinere Animationen beim Ändern der Aufteilung des Grids übernimmt Tilesjs.

## <p id="tilesjs-import">*Import*<p/>
Um Tilesjs verwenden zu können, so muss es in der index.html Datei mittels
```html
<script src="./tilesjs-library/tiles.js"></script>
```
eingebunden werden. Außerdem muss man es zusätzlich noch per
```
npm install tilesjs --save
```
installieren.

Bei Vue.js habe ich zur Zeit noch das Problem, dass ich trotzdem nicht mit der Library arbeiten kann, da man sie wohl noch an anderer Stelle einbinden/konfigurieren muss. Das gucke ich mir morgen mal genauer an, hat aber wahrscheinlich irgendwas mit Webpack zu tun. Ob das bei euch auch der Fall sein wird weiß ich nicht. 

## <p id="tilesjs-verwendung">*Verwendung*<p/>
TODO