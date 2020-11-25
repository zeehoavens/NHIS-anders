# NHIS-anders
NHIS UI variaties

Dit is het verdeelpunt voor een paar kleine uitbreidingen op NHIS, die de weergave enigszins kunnen aanpassen.
Een gebruiker kan daarvoor onder meer de volgende redenen hebben.

- Verbeteren van de leesbaarheid.
- Een rustiger beeld in de Visit Monitor creëren, met minder posities die zijn verdeeld over twee regels.
- Visueel onderscheid maken tussen de normale werkomgeving en de acceptatieomgeving (alleen voor testers).

Om deze aanpassingen te kunnen gebruiken, moeten ze worden "geïnjecteerd" in NHIS.
Daarvoor is een invoegtoepassing voor de browser nodig: Stylus.

Stylus kan worden geïnstalleerd via de standaardplek die de browsermakers daarvoor hebben ingericht:
- [Stylus voor Firefox](https://addons.mozilla.org/nl/firefox/addon/styl-us/)
- [Stylus voor Google Chrome](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne)

Bij installatie zal je moeten bevestigen dat de invoegtoepassing veel rechten krijgt.
In het algemeen is dat een beveiligingsrisico in een bedrijfsmatige omgeving, zeker als er vertrouwelijke informatie wordt verwerkt.
Deze invoegtoepassing heeft echter een goede reputatie en wordt door privacy activisten gevolgd en gecontroleerd.
Dit naar aanleiding van incidenten met een oudere invoegtoepassing met vergelijkbare functionaliteit, Stylish.
(Stylish wordt daarom sterk afgeraden in combinatie met NHIS.)

Na installatie van Stylus kunnen de volgende gebruikersstijlen worden toegevoegd door te klikken op de links.

## Aangepast lettertype

Met deze aanpassingen kan een ander lettertype worden gekozen dan de standaard Arial van NHIS.
De beschikbare keuzen zijn geoptimaliseerd voor een letterbreedte waarmee de meeste wat langere namen in de Vessel kolom net passen.

Het is mogelijk voor producie en acceptatie omgeving afzonderlijke keuzen te maken.

- [NHIS lettertype](https://raw.githubusercontent.com/zeehoavens/NHIS-anders/main/NHIS-lettertype.user.css)

Een eigen keuze voor het lettertype kan worden gecombineerd met aanpassingen aan de kolombreedtes in de Visit Monitor.
Door eliminatie van een paar pixels scheidingsruimte en verkleining van de pictogrammen komt er dan meer ruimte voor tekst beschikbaar.
Dit kan naar keuze worden in- en uitgeschakeld.

## Alternatief kleurschema

Voor herkenbaarheid van de acceptatieomgeving kan worden gewerkt met iets gewijzigde achtergrondkleuren.
In het bijzonder gaat het hier om minder blauw in de grijstinten.

- [NHIS kleuren](https://raw.githubusercontent.com/zeehoavens/NHIS-anders/main/NHIS-kleuren.user.css)

## Lay-out aanpassing

Het is mogelijk de opgave van aantallen containers voor binnenvaart onder de ladingdetails te plaatsen.
Dat effect is echter alleen visueel.
Logisch gezien verandert de volgorde niet.
Dat kun je merken in de tabvolgorde bij navigatie via het toetsenbord.

- [NHIS containers onderaan](https://raw.githubusercontent.com/zeehoavens/NHIS-anders/main/NHIS-containers-onderaan.user.css)
