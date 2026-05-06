import { test, expect } from '@playwright/test';

test.describe('Next.js Labs App E2E', () => {
  test('1. Home page loads and displays title', async ({ page }) => {
    await page.goto('/');
    
    // Check for the specific heading on the homepage
    const heading = page.locator('h1', { hasText: 'NextJS Labs' }).first();
    await expect(heading).toBeVisible();
    
    // Verify the subtitle or description text
    await expect(page.locator('text=Laboratory project exploring Next.js')).toBeVisible();
  });

  test('2. Navigation to Articles page works', async ({ page }) => {
    await page.goto('/');
    
    // Find the 'Browse Articles' link
    const articlesLink = page.locator('a', { hasText: 'Browse Articles' }).first();
    await articlesLink.click();

    // Verify URL changed to /articles
    await expect(page).toHaveURL(/.*\/articles/);
  });

  test('3. Navigation to Register page works from Login', async ({ page }) => {
    await page.goto('/login');
    
    // Find link to register page ("Sign Up")
    const registerLink = page.locator('a', { hasText: 'Sign Up' }).first();
    await registerLink.click();

    // Verify URL changed to /register
    await expect(page).toHaveURL(/.*\/register/);
  });
});

