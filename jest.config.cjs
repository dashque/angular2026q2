const { createCjsPreset } = require('jest-preset-angular/presets');

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  ...createCjsPreset(),
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/src/test\\.ts$'],
};
