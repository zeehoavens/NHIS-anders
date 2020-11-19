# NHIS-anders
NHIS UI variaties

Dit is het verdeelpunt voor een paar kleine uitbreidingen op NHIS, die de weergave enigszins kunnen aanpassen.
Een gebruiker kan daarvoor de volgende redenen hebben.

- Verbeteren van de leesbaarheid.
- Een rustiger beeld in de Visit Monitor creëren, met minder posities die zijn verdeeld over twee regels.
- Visueel onderscheid maken tussen de normale werkomgeving en de acceptatieomgeving (alleen voor testers).

Om deze aanpassingen te kunnen gebruiken, moeten ze worden "geïnjecteerd" in NHIS.
Daarvoor is een invoegtoepassing voor de browser nodig: Stylus.
Deze kan worden geïnstalleerd via de standaardplek die de browsermakers daarvoor hebben ingericht:
- [Stylus voor Firefox](https://addons.mozilla.org/nl/firefox/addon/styl-us/)
- [Stylus voor Google Chrome](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne)

Bij installatie zal je moeten bevestigen dat de invoegtoepassing veel rechten krijgt.
In het algemeen is dat een beveiligingsrisico in een bedrijfsmatige omgeving, zeker als er vertrouwelijke informatie wordt verwerkt.
Deze invoegtoepassing heeft echter een goede reputatie en wordt door privacy activisten gevolgd en gecontroleerd.
Dit naar aanleiding van incidenten met een oudere invoegtoepassing met vergelijkbare functionaliteit, Stylish.
(Stylish wordt daarom sterk afgeraden in combinatie met NHIS.)

Na installatie van Stylus kunnen de volgende "user styles" worden toegevoegd door te klikken op de volgende links.

- [NHIS lettertype](https://raw.githubusercontent.com/zeehoavens/NHIS-anders/main/NHIS-lettertype.user.css)
- [NHIS acc lettertype](https://raw.githubusercontent.com/zeehoavens/NHIS-anders/main/NHIS-acc-lettertype.user.css)

Met deze aanpassingen kan een ander lettertype worden gekozen dan de standaard Arial van NHIS.
De beschikbare keuzen zijn geoptimaliseerd voor een letterbreedte waarmee de meeste wat langere namen in de Vessel kolom net passen.

Deze varianten verschillen alleen naar de webpagina waaraan ze zijn gekoppeld en het lettertype dat standaard wordt ingesteld 
als de gebruiker geen eigen keuze heeft gemaakt in de opties voor de gebruikersstijl binnen Stylus.
