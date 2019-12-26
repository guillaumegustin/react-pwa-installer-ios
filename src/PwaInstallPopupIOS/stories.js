import React from 'react';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import PwaInstallPopupIOS from './index';

storiesOf('PwaInstallPopupIOS', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .addDecorator(withKnobs)
  .add('display default', () => (
    <PwaInstallPopupIOS 
      force 
      delay={number('delay', 1)}
      lang={text('lang', 'en')}
      appIcon={text('appIcon', 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png')}>
    </PwaInstallPopupIOS>
  ))
  .add('custom display', () => (
    <PwaInstallPopupIOS force={true}>
      <div 
        delay={0}
        style={{
          padding: '15px 30px',
          backgroundColor: 'blue',
          color: 'white',
          textAlign: 'center',
        }}
      > 
        Hey ! I am the PwaInstallPopupIOS component.
        without the 'force=true' props, I will display only on iOS device,
        not in standalone mode.
      </div>
    </PwaInstallPopupIOS>
  ))
  
