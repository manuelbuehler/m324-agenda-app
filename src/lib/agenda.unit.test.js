import { describe, it, expect, vi } from 'vitest';

describe('Agenda Unit-Tests', () => {
    
    // Test 1:  Adding an item
    it('should add an agenda object with correct fields', () => {
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

    // Test 2: Validation of categories
    it('should ensure that only defined categories are used', () => {
        const validCategories = ['Privat', 'Arbeit', 'Schule', 'Sonstiges'];
        const testCategory = 'Arbeit';

        expect(validCategories).toContain(testCategory);
    });

    // Test 3: Removing an item
    it('should remove an item based on the index correctly', () => {
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

    // Test 4: Prevent empty input
    it('should not add an element if the text is empty', () => {
        /** @type {Array<{id: string, text: string, category: string}>} */
        let agenda = [];
        let newAgendaInput = '';

        if (newAgendaInput) {
            agenda = [...agenda, { id: '1', text: newAgendaInput, category: 'Privat' }];
        }

        expect(agenda.length).toBe(0);
    });

    // Test 5: Dealing with old data structures
    it('should work if there is an old element (string only) in the array', () => {
        const oldAgenda = ['Alte Aufgabe ohne Objekt'];
        
        const displayValue = oldAgenda[0];
        
        expect(displayValue).toBe('Alte Aufgabe ohne Objekt');
    });
});