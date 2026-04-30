const { createCjsPreset } = require('jest-preset-angular/presets');

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  ...createCjsPreset(),
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['json-summary', 'lcov'],
  coverageProvider: 'v8',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/src/test\\.ts$'],
};
