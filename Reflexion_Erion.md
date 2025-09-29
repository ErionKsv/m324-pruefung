# Reflexion Erion Spahiha

Das Ziel der Pipeline ist es, sicherzustellen dass ein Deployment nur dann erlaubt wird, wenn Linting und Tests erfolgreich sind. So verhindert die Pipeline, dass fehlerhafter Code weitergegeben wird.  

Die Pipline startet bei einem Push oder Pull Request auf den main Branch. Zuerst prüft der Lint-Job den Code-Stil, danach führen die Tests die Überprüfung mit Jest durch. Der Deploy-Job läuft nur, wenn beide erfolgreich abgeschlossen wurden und simuliert ein Deployment. Durch diese Aufteilung ist kann man sofort erkennen, wo ein Fehler liegt (wenns Einen gibt), und Lint und Test können parallel laufen.  

Ich habe mit für eine aktuelle Node Version entschieden da ich Probleme mit Npm hatte, die Installation mit npm ci und legacy peer deps, damit die Abhängigkeiten stabil bleiben. Die Echo Ausgaben helfen mir bei der Übersicht und zudem weiss ich dann direkt warum ein Workflow failed.  

Eine mögliche Verbesserung wäre, das Caching der Dependencies besser zu nutzen, damit die Pipeline schneller läuft. Ausserdem könnten Artefakte wie Testberichte oder Builds gespeichert werden, damit man die Ergebnisse auch nach dem Workflow noch einsehen kann.

Die Pipeline ist simpel aufgebaut. Fehler führen direkt zu einem Abbruch, und nur fehlerfreier Code wird weiter verarbeitet. Aber insgesamt funktioniert es gut und ich bin damit zufrieden.  




