import { test, expect } from '@playwright/test'

test.describe('SearchPage', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('search by repository name', async ({ page }) => {
    const repoNameField = page.locator('input[placeholder="Enter a repo name"]')

    await expect(repoNameField).toBeVisible()

    await repoNameField.fill('facebook-check')

    const repoList = page.getByTestId('repo-list-item[0]')
    await expect(repoList).toBeVisible()
  });

  test('search by user name', async ({ page }) => {
    const userNameField = page.locator('input[placeholder="Enter user name"]')

    await expect(userNameField).toBeVisible()

    await userNameField.fill('mikhail-litvinov')

    const repoList = page.getByTestId('repo-list-item[0]')
    await expect(repoList).toBeVisible()
  });

  test('pagination buttons functionality', async ({ page }) => {
    const repoNameField = page.locator('input[placeholder="Enter a repo name"]')

    await expect(repoNameField).toBeVisible()

    await repoNameField.fill('facebook-check')
    
    const nextButton = page.getByTestId('next-button')
    const prevButton = page.getByTestId('prev-button')

    await expect(nextButton).toBeEnabled()

    await nextButton.click()

    await expect(prevButton).toBeEnabled()
  })

  test('repository name click functionality', async ({ page }) => {
    const userNameField = page.locator('input[placeholder="Enter user name"]')

    await expect(userNameField).toBeVisible()

    await userNameField.fill('mikhail-litvinov')

    const repoLink = page.locator('a', { hasText: 'mariole' })
    await expect(repoLink).toBeVisible()
    await repoLink.click()

    await page.waitForLoadState('domcontentloaded')

    const repositoryNameElement = page.getByTestId('mariole')
    await expect(repositoryNameElement).toBeVisible()
    await expect(repositoryNameElement).toHaveText('mariole')
  })
})