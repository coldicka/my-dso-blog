---
title: Portfolio – Development and Automated Deployment
sidebar_label: Portfolio
slug: /portfolio
---

## Ausgangslage

Mein Portfolio basiert auf Docusaurus. Das Framework stellt die Dokumentations- und Website-Infrastruktur bereit. Mein Beitrag umfasst die individuellen React-Komponenten, responsive Gestaltung, zweisprachige Inhalte und den Workflow zur Veröffentlichung.

## Mein Beitrag

- Eigene Komponenten für Hero, Navigation, Projektkarten und Kontaktbereich.
- Responsive Layouts mit SCSS-Modulen.
- Inhalte auf Deutsch und Englisch.
- Hero-Animationen, die außerhalb des sichtbaren Bereichs pausieren und die Einstellung „Bewegung reduzieren“ berücksichtigen.
- GitHub-Actions-Konfiguration zum Erstellen und Veröffentlichen der Website.

## Deployment-Ablauf

Ein Push auf `main` startet `.github/workflows/main.yml`. Dieser Workflow ruft `deploy.yaml` auf, richtet Node.js 22 ein, installiert Abhängigkeiten, kopiert die Beispielkonfiguration und führt den Docusaurus-Build aus. Anschließend wird die erzeugte Website als Pages-Artefakt hochgeladen und auf GitHub Pages veröffentlicht.

Ein separater Workflow versucht bei einem Push auf einen Feature-Branch, einen Pull Request anzulegen. Der Deployment-Workflow enthält aktuell keinen automatisierten Anwendungstest.

## Nachweise

- [Live-Portfolio](https://coldicka.github.io/my-dso-blog/de/)
- [Quellcode](https://github.com/coldicka/my-dso-blog)
- [Workflow-Läufe](https://github.com/coldicka/my-dso-blog/actions)

Die Workflow-Konfiguration belegt die Umsetzung. Erfolgreiche Läufe und Prüfungen der veröffentlichten Website belegen die Ausführung. Als Kartenbild dient mein Porträt; es kann später durch einen Website-Screenshot ersetzt werden.
