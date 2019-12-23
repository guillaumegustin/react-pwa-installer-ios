module.exports = {
  verbose: true,
  roots: ['<rootDir>/src'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/'],
  // testMatch: ['<rootDir>/src/**/>(*.)test.{js, jsx}'], // finds test
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?|js?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js'
  }
  // setupFilesAfterEnv: ["./src/test/polyfill/array.find.polyfill.js", "./tests.entry.js"]
};
