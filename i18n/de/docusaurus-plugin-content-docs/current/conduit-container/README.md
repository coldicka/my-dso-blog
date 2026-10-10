---
title: Conduit Container
slug: /conduit-container
---

*Bestehende Anwendung · Weiterbildungsprojekt*

## Aufgabe

Vorhandenes Frontend, Backend und Datenbank in Containern zusammenführen.

## Mein Beitrag

Ich ergänzte Dockerfiles, einen Nginx-API-Proxy und die PostgreSQL-Anbindung und konfigurierte Compose, Netzwerke und Volumes.

## Ergebnis

Die drei Dienste sind in einem Setup mit Datenbank-Healthcheck und persistenter Speicherung beschrieben.

## Technische Entscheidungen und Umfang

Angular- und Django-Anwendung waren vorgegeben. Mein Beitrag ist die Container-Integration. Das Frontend-Image nutzt einen mehrstufigen Build; Nginx liefert das Frontend aus und leitet API-Anfragen weiter. PostgreSQL ist mit Volume und Healthcheck konfiguriert. Es handelt sich um ein Weiterbildungsprojekt ohne Anspruch auf produktionsreife Absicherung.

## Dokumentation

- [Quellcode und Konfiguration](https://github.com/coldicka/Conduit-Container)
- [Ausführliche Projektdokumentation auf Englisch](https://coldicka.github.io/my-dso-blog/docs/conduit-container/)
