import { test, expect } from '@playwright/test';

test.describe('Agenda System Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('should create a new appointment with a selected category', async ({ page }) => {
        const testTask = 'M324 Projekt abschliessen';
        
        await page.locator('.agenda-input').fill(testTask);
        
        await page.locator('.category-select').selectOption('Schule');
        
        await page.locator('.add-button').click();

        const agendaItem = page.locator('.agenda-item').first();
        await expect(agendaItem).toContainText(testTask);
        
        const badge = agendaItem.locator('.category-badge');
        await expect(badge).toBeVisible();
        await expect(badge).toHaveText('Schule');
    });

    test('should check whether the default label "Privat" is set', async ({ page }) => {
        await page.locator('.agenda-input').fill('Einkaufen gehen');
        await page.locator('.add-button').click();

        const badge = page.locator('.agenda-item').first().locator('.category-badge');
        await expect(badge).toHaveText('Privat');
    });

    test('should remove an appointment from the list', async ({ page }) => {
        await page.locator('.agenda-input').fill('Zu löschender Termin');
        await page.locator('.add-button').click();
        
        await expect(page.locator('.agenda-item')).toHaveCount(1);

        await page.locator('.remove-button').click();

        await expect(page.locator('.agenda-item')).toHaveCount(0);
    });

    test('should not add an empty field to the list', async ({ page }) => {
        await page.locator('.add-button').click();

        await expect(page.locator('.agenda-item')).toHaveCount(0);
    });

    test('should ensure backward compatibility', async ({ page }) => {
        await page.locator('.agenda-input').fill('Stabilitätstest');
        await page.locator('.category-select').selectOption('Arbeit');
        await page.locator('.add-button').click();
        
        await expect(page.locator('.agenda-item')).toBeVisible();
        await expect(page.locator('.category-badge')).toHaveText('Arbeit');
    });
});