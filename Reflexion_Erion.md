# Reflexion Erion Spahiha

Die Pipeline hat das Ziel, die Codequalität sicherzustellen und ein Deployment nur dann zu erlauben, wenn Linting und Tests erfolgreich sind. So wird verhindert, dass fehlerhafter Code weitergegeben wird.  

Die Pipline startet bei einem Push oder Pull Request auf den main Branch. Zuerst prüft der Lint-Job den Code-Stil, danach führen die Tests die Überprüfung mit Jest durch. Der Deploy-Job läuft nur, wenn beide erfolgreich abgeschlossen wurden und simuliert ein Deployment. Durch diese Aufteilung ist sofort sichtbar, wo ein Fehler liegt (wenns Einen gibt), und Lint und Test können parallel laufen.  

Entschieden habe ich mich für eine aktuelle Node-Version und die Installation mit npm ci und legacy peer deps, damit die Abhängigkeiten stabil bleiben. Die Echo Ausgaben machen alles Debugging Freundlicher.  

Die Pipeline ist einfach, aber wirkungsvoll. Fehler führen direkt zu einem Abbruch, und nur fehlerfreier Code wird weiter verarbeitet. Für die Zukunft wäre es sinnvoll, noch Testberichte oder ein echtes Deployment zu ergänzen. Insgesamt erfüllt die Pipeline die Anforderungen und ist gut wartbar.  
