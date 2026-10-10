---
title: Minecraft Server
slug: /minecraft-server
---

*Container-Setup · Weiterbildungsprojekt*

## Aufgabe

Einen Minecraft-Server mit persistenter Spielwelt konfigurieren.

## Mein Beitrag

Ich konfigurierte Docker und Compose und erstellte ein Startskript für Servereinstellungen und Java-Speicherparameter.

## Ergebnis

Servereinstellungen sind über Umgebungsvariablen konfigurierbar; die Spielwelt liegt in einem eigenen Volume.

## Technische Entscheidungen und Umfang

Die Serversoftware stammt von Minecraft. Mein Projekt betrifft Container-Konfiguration und Startablauf. Das Volume trennt die Spielwelt vom Container; es ist kein automatisiertes Backup.

## Dokumentation

- [Quellcode und Konfiguration](https://github.com/coldicka/minecraft-server)
- [Ausführliche Projektdokumentation auf Englisch](https://coldicka.github.io/my-dso-blog/docs/minecraft-server/)
