const { createCjsPreset } = require('jest-preset-angular/presets');

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  ...createCjsPreset(),
  clearMocks: true,
  coverageDirectory: 'coverage',
  transformIgnorePatterns: ['node_modules/(?!(@angular|flat/|.*\\.mjs$))'],
  coverageProvider: 'v8',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/src/test\\.ts$'],
};
