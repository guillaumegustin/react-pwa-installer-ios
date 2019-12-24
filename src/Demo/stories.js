import React from 'react';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';

import Demo from './demo';

storiesOf('Demo', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('display', () => (
    <Demo>
    </Demo>
  ));
