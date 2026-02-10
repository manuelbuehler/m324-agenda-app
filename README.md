# Agenda App

Eine Svelte-App, erstellt mit `sv`.

## Teamzusammenstellung und Rollenzuweisung

```mermaid
graph TD
    PO["<b>Product Owner</b><br/>Livio Dörig"]
    
    PO --> DEV["<b>Developer</b><br/>Manuel Bühler"]
    PO --> QA["<b>QA/Tester</b><br/>Kevin Döding"]

    DEV <--> QA

    style PO fill:#e1f5fe,stroke:#01579b,stroke-width:2px
    style DEV fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px
    style QA fill:#fff3e0,stroke:#ef6c00,stroke-width:2px
```

## Entwicklung

Nachdem die Abhängigkeiten mit `npm install` (oder `pnpm install` oder `yarn`) installiert wurde, kann Entwicklungsserver gestartet werden:

```sh
npm run dev

# oder starten Sie den Server und öffnen Sie die App in einem neuen Browser-Tab
npm run dev -- --open
```
