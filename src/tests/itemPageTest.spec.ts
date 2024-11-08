import { test, expect } from '@playwright/test'

test.describe('SearchPage', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/mariole?id=MDEwOlJlcG9zaXRvcnkyODg5MTUxOTk=')
  })

  test('find repository name', async ({ page }) => {
    const repositoryNameElement = page.getByTestId('mariole')
    await expect(repositoryNameElement).toBeVisible()
    await expect(repositoryNameElement).toHaveText('mariole')
  })
})