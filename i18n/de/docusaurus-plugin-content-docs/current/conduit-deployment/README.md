---
title: Conduit Deployment
slug: /conduit-deployment
---

*Bestehende Anwendung · Weiterbildungsprojekt*

## Aufgabe

Die Bereitstellung einer vorhandenen Angular-/Django-Anwendung automatisieren.

## Mein Beitrag

Ich implementierte Image-Builds, die Veröffentlichung in GHCR und das Deployment über SSH mit GitHub Actions.

## Ergebnis

Der Workflow verbindet den Build-Prozess mit der Aktualisierung der Container auf dem Server.

## Technische Entscheidungen und Umfang

Die Builds laufen in GitHub Actions und veröffentlichen Images in GHCR. Der Deployment-Job hängt von beiden Builds ab und aktualisiert die Dienste über SSH und Docker Compose. Der Workflow dokumentiert diesen Ablauf; eine Test- oder Security-Scan-Stufe ist darin nicht implementiert.

## Dokumentation

- [Quellcode und Konfiguration](https://github.com/coldicka/Conduit-Container)
- [Ausführliche Projektdokumentation auf Englisch](https://coldicka.github.io/my-dso-blog/docs/conduit-deployment/)
