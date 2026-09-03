# Playground · Interaktive Folien im Miro-Frame

Versuch vom 3. September 2026. Drei TIM-Folien laufen als eigenständige
HTML-Seiten und werden in Miro-Frames eingebettet.

- Board: https://miro.com/app/board/uXjVHrQY1UA=/
- Seiten: https://anwar-franklin.github.io/tim-folien-embed/

## Befund

| Weg | Live-HTML im Frame | JavaScript |
|---|---|---|
| Embed-API mit URL | nein — fremde Domains werden Link-Karten | — |
| Embed-Code in der Miro-Oberfläche | ja | ja |
| `prototype_create` (MCP) | nein — Miro zerlegt die Seite in eigene Objekte | nein |

Die REST-API nimmt kein `data.html` an und ignoriert oEmbed-Discovery.
Der Embed-Code muss einmal je Folie von Hand in die Oberfläche.

## Aufbau

    01.html  Titelfolie, dunkler Hausstand
    02.html  Dreischritt des Versuchs
    03.html  Wissensprüfung, Quiz in JavaScript
    deck.css deck-basis.css plus Embed-Schicht und Quiz-Layout
    fit.js   skaliert die 1280×720-Folie auf den Rahmen des Embeds
    oembed/  oEmbed-Dokumente, von Miro ungenutzt

Rendern: `zsh ../../_template/render.sh`
