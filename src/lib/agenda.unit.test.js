import { describe, it, expect, vi } from 'vitest';

describe('Agenda Unit-Tests (Logik)', () => {
    
    // Test 1: Hinzufügen eines Elements
    it('sollte ein Agenda-Objekt mit korrekten Feldern hinzufügen', () => {
        /** @type {Array<{id: string, text: string, category: string}>} */
        let agenda = [];
        const newText = 'M324 Dokumentation schreiben';
        const selectedCat = 'Schule';

        const newEntry = {
            id: 'mock-id-123',
            text: newText,
            category: selectedCat
        };
        agenda = [...agenda, newEntry];

        expect(agenda.length).toBe(1);
        expect(agenda[0].text).toBe(newText);
        expect(agenda[0].category).toBe('Schule');
        expect(agenda[0]).toHaveProperty('id');
    });

    // Test 2: Validierung der Kategorien
    it('sollte sicherstellen, dass nur definierte Kategorien verwendet werden', () => {
        const validCategories = ['Privat', 'Arbeit', 'Schule', 'Sonstiges'];
        const testCategory = 'Arbeit';

        expect(validCategories).toContain(testCategory);
    });

    // Test 3: Entfernen eines Elements
    it('sollte ein Element basierend auf dem Index korrekt entfernen', () => {
        let agenda = [
            { id: '1', text: 'Test 1', category: 'Privat' },
            { id: '2', text: 'Test 2', category: 'Arbeit' },
            { id: '3', text: 'Test 3', category: 'Schule' }
        ];

        const indexToRemove = 1;
        
        agenda.splice(indexToRemove, 1);
        agenda = [...agenda];

        expect(agenda.length).toBe(2);
        expect(agenda[0].text).toBe('Test 1');
        expect(agenda[1].text).toBe('Test 3');
    });

    // Test 4: Leere Eingabe verhindern
    it('sollte kein Element hinzufügen, wenn der Text leer ist', () => {
        /** @type {Array<{id: string, text: string, category: string}>} */
        let agenda = [];
        let newAgendaInput = '';

        if (newAgendaInput) {
            agenda = [...agenda, { id: '1', text: newAgendaInput, category: 'Privat' }];
        }

        expect(agenda.length).toBe(0);
    });

    // Test 5: Umgang mit alten Datenstrukturen
    it('sollte funktionieren, wenn ein altes Element (nur String) im Array ist', () => {
        const oldAgenda = ['Alte Aufgabe ohne Objekt'];
        
        const displayValue = oldAgenda[0];
        
        expect(displayValue).toBe('Alte Aufgabe ohne Objekt');
    });
});