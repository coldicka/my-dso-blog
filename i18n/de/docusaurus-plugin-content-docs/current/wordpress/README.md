---
title: WordPress
slug: /wordpress
---

*Software-Setup · Weiterbildungsprojekt*

## Aufgabe

WordPress mit Datenbank und persistenter Speicherung konfigurieren.

## Mein Beitrag

Ich stellte ein Compose-Setup für WordPress, MySQL und phpMyAdmin mit Netzwerk, Volumes und dateibasierten Secrets zusammen.

## Ergebnis

Die Dienstkonfiguration ist zusammengeführt; Datenbank und WordPress-Inhalte nutzen getrennte Volumes.

## Technische Entscheidungen und Umfang

WordPress, MySQL und phpMyAdmin sind vorhandene Software. Mein Projekt führt deren Konfiguration zusammen. Dateibasierte Compose-Secrets sind eingebundene Dateien und kein verschlüsselter Secret-Vault. Das WordPress-Volume speichert wp-content.

## Dokumentation

- [Quellcode und Konfiguration](https://github.com/coldicka/wordpress/tree/feature/setup_wordpress)
- [Ausführliche Projektdokumentation auf Englisch](https://coldicka.github.io/my-dso-blog/docs/wordpress/)
