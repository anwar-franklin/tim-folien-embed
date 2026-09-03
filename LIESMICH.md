# Playground · Interaktive Folien im Miro-Frame

Versuch vom 3. September 2026. Drei TIM-Folien laufen als HTML-Seiten in
Miro-Frames und bleiben dort bedienbar.

- Board: https://miro.com/app/board/uXjVHrQY1UA=/
- Seiten: https://anwar-franklin.github.io/tim-folien-embed/

## Der Trick

Miro rahmt eine fremde Adresse nur dann als rohen iframe ein, wenn sein
Auflöser sie **nicht lesen kann**. Liest er sie, baut er eine tote Link-Karte.

Deshalb liegen die Folien unter `/s/NN`. Diesen Pfad gibt es nicht, GitHub
Pages liefert dafür `404.html` mit Status 404 aus. Miros Auflöser bekommt den
Fehler und fällt auf `<iframe src="...">` zurück; der Browser rendert die
Seite trotzdem, weil `404.html` die richtige Folie in einen iframe hängt.

| Adresse | Antwort von Miro |
|---|---|
| `/03.html` | Link-Karte, tot |
| `/s/03` | roher iframe, läuft |

Weitere Sackgassen: `data.html` lehnt die API mit 400 ab, oEmbed-Discovery
ignoriert sie, `prototype_create` zerlegt HTML in native Miro-Objekte.

## Maße

Rohe iframes haben in Miro ein festes Seitenverhältnis 1:1. Die API nimmt
deshalb nur Breite **oder** Höhe an. Bei Breite 1280 entsteht ein Quadrat
1280×1280; `fit.js` zentriert die 1280×720-Folie darin, und der 16:9-Frame
schneidet in der Präsentation genau die Folie heraus.

## Aufbau

    01.html   Titelfolie, dunkler Hausstand
    02.html   Dreischritt des Versuchs
    03.html   Wissensprüfung, Quiz in JavaScript
    404.html  reicht /s/NN an die passende Folie durch
    deck.css  deck-basis.css plus Embed-Schicht und Quiz-Layout
    fit.js    skaliert die 1280×720-Folie auf den Rahmen des Embeds
    oembed/   oEmbed-Dokumente, von Miro ungenutzt

Rendern: `zsh ../../_template/render.sh`
