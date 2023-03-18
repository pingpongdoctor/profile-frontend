module.exports = {
  moduleNameMapper: {
    "\\(scss)$": "<rootDir>/src/_mocks/styleMock.js",
    "\\(svg)$": "<rootDir>/src/_mocks/fileMock.js",
  },
  testEnvironment: "jsdom",
  setupFileAfterEnv: ["<rootDir>/src/setupTests.js"],
};
