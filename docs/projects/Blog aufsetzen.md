# Erste Schritte

<!--INSERT YOUR BRIEF DESCRIPTION HERE -->
Hier geht es darum, wie ich meinen Blog und meine lokale Repositorie aufgesetzt habe.

## Hilfestellung
um den Blog und die Repositorie aufsetzen zu können, wurden  
* den Praxis Motivation im DevSecops
* die Dokumentation in der Developer-akademie

zur Orientierung und Hilfe genommen.


## SSH Einrichtung
### SSH für Github Einrichtung
folgendes wurde verwendet, um die SSH zu erstellen: 

`ssh-keygen -t ed25519 -C "my_email@myEmail.com"`

**Hier wurde auf Passwort verzichtet.**

Das public Key wurde dann im github hinzugefügt, um eine reibungslose Anmeldung zu ermöglichen. 

### SSH für die VM Einrichtung
Ziel hier ist ein SSH zur erstellen, den man für die Anmeldung in der VM verwenden kann. 

Da ich unter Windows bin, habe ich folgendes verwenden und mein Key umbenannt:

`C:\Users\meinName> ssh-keygen -t ed25519 -f C:\Users\meinName\.ssh\demo-ed25519`

Dadurch wurden zwei Keys erstellt: **public key** und **privat Key**.

Der public Key wird dann in die VM hinzugefügt. Momentan warte ich auf meinen Zugang Daten der VM.

## Repositorie lokal
import GithubLinkAdmonition from '@site/src/components/GithubLinkAdmonition';

<GithubLinkAdmonition 
    link="https://github.com/spmse/dev-blog-template"
    title="Github Basis" 
    type="tip"
>
Originale Repositorie, die geklont wird.
</GithubLinkAdmonition>

In dieser Repositorie befindet sich ein *README.md* Datei. Diese Datei erklärt, wie man seine eigene Repositorie lokal aufsetzen kann.

<GithubLinkAdmonition 
    link="https://nodejs.org/en"
    title="Nodejs" 
    type="warning"
>
Um die Abhängigkeit aus der package.json installieren zu können, **MUSS** erstmal nodejs installiert werden.
</GithubLinkAdmonition>

Nodejs wurde erfolgreich installiert. Laut Dokumention, Node installiert automatisch **NPM** zusätzlich.

Da war mein Problem. Ich konnte die node Version sehen aber bei der Anfrage der NPM-Version bekam ich einen Fehler: 

```
npm : Die Datei C:\Program Files\nodejs\npm.ps1 kann nicht geladen werden, da die Ausführung von Skripts auf diesem System deaktiviert ist. Für

weitere Informationen siehe about_Execution_Policies unter https:/go.microsoft.com/fwlink/?LinkID=135170.
```

Ich verstand, dass ich mich als Root in meinem Computer anmelden musste, aber trotzdem ging es nicht. Nach der Recherche im Internet, fand ich [Diese Seite mit mögliche Lösung.](https://www.reddit.com/r/node/comments/1h6wer2/npm_not_working_on_windows_after_install_and/?tl=de)

Folgende Befehl konnte mein Problem lösen: 

```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser 
```

Dann konnte ich mein nodejs erneut installieren und diese ausführen.

Ergebnis: meine Repositorie konnte aufgesetzt werden und die Seite ist lokal aufrufbar.