module.exports = {
  setupFiles: ['<rootDir>/enzyme.setup'],
  roots: [
    '<rootDir>/src',
  ],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },

  testMatch: ['**/?(*.)test.js?(x)'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/__dumb__/**',
    '!<rootDir>/jest.config.js',
    '!<rootDir>/jest.config.js',
    '!**/chrome/webpack.config.js',
    '!**/coverage/**',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/coverage/',
  ],
  "moduleDirectories": ["node_modules", "src"],
  coverageReporters: ['json-summary', 'lcov'],
  coverageDirectory: 'coverage',
};
