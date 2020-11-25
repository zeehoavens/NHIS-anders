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

Zie de opties in Stylus.

## Alternatief kleurschema

Met deze gebruikersstijl kan voor de productie en/of acceptatieomgeving een nieuw kleurschema worden ingesteld.
De aanpassing betreft de achtergrondkleuren.
In het bijzonder gaat het hier om vervanging van de blauwzweem in de grijstinten door een zwak roodachtig accent.

- [NHIS kleuren](https://raw.githubusercontent.com/zeehoavens/NHIS-anders/main/NHIS-kleuren.user.css)

Deze aanpassing heeft effect op:

- alle grijze en witte achtergronden van de Visit Monitor in dagstand;
- alle grijze en witte achtergronden van pagina's zonder dag/nachtstand;
- de (bijna) witte achtergronden van de Visit Monitor in de nachtstand.

Standaard is de aanpassing alleen actief voor acceptatie, maar via de opties in Stylus kan dit worden aangepast.

## Lay-out aanpassing

Deze gebruikersstijl verplaatst de opgave van aantallen containers voor binnenvaart naar het einde van de positiegegevens, dus onder de goederendetails.
Dat effect is echter alleen visueel.
Logisch beschouwd verandert de volgorde niet.
Dat kun je merken aan de tabvolgorde bij navigatie via het toetsenbord.

- [NHIS containers onderaan](https://raw.githubusercontent.com/zeehoavens/NHIS-anders/main/NHIS-containers-onderaan.user.css)
