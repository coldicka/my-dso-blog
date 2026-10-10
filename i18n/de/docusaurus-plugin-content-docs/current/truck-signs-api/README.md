---
title: Truck Signs API
slug: /truck-signs-api
---

*Bestehende Anwendung · Weiterbildungsprojekt*

## Aufgabe

Ein fehlerhaftes Container-Setup einer vorhandenen API untersuchen und überarbeiten.

## Mein Beitrag

Ich korrigierte Dockerfile, Compose-Konfiguration und Entrypoint einschließlich Datenbankmigrationen und Superuser-Anlage.

## Ergebnis

Der überarbeitete Startablauf wartet auf PostgreSQL, führt Migrationen aus und startet Gunicorn.

## Technische Entscheidungen und Umfang

Die API stammt aus der Kursvorlage. Mein Beitrag ist die Reparatur und Anpassung der Container-Konfiguration. Das aktuelle Compose-Setup enthält Backend und PostgreSQL. Eine nginx.conf ist vorhanden, Nginx ist aber nicht als Dienst eingebunden. Zahlungen sind nicht implementiert.

## Dokumentation

- [Quellcode und Konfiguration](https://github.com/coldicka/truck-signs-api/tree/feature/truckSignsApi)
- [Ausführliche Projektdokumentation auf Englisch](https://coldicka.github.io/my-dso-blog/docs/truck-signs-api/)
