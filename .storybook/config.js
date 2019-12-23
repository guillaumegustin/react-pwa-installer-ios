import { addDecorator, configure } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';

import results from '../jest-test-results.json';

// Add tests for each story (wee need to run jest tests after)
addDecorator(
  withTests({
    results,
    filesExt: ".test.js"
  })
);

// Import all *.stories.js files
const req = require.context('../src', true, /[^/]+\/stories.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
