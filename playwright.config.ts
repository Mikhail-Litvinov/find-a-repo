import { defineConfig } from '@playwright/test';

export default defineConfig({
    timeout: 30 * 1000,
    expect: {
        timeout: 10000,
    },
    testDir: './src/tests',
    use: {
        baseURL: 'http://localhost:5173/',
        headless: true,
        viewport: { width: 1280, height: 720 },
        testIdAttribute: 'data-test'
    },
});