import React from 'react';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';

import PwaInstallPopupIOS from './index';

storiesOf('PwaInstallPopupIOS', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('display', () => (
    <PwaInstallPopupIOS force={true}>
      <div style={{
        padding: '15px 30px',
        backgroundColor: 'blue',
        color: 'white',
        textAlign: 'center',
      }}> 
        Hey ! I am the PwaInstallPopupIOS component.
        without the 'force=true' props, I will display only on iOS device,
        not in standalone mode.
      </div>
    </PwaInstallPopupIOS>
  ))
  .add('display only iOS', () => (
    <PwaInstallPopupIOS>
      <div style={{
        padding: '15px 30px',
        backgroundColor: 'blue',
        color: 'white',
        textAlign: 'center',
      }}> 
        Hey ! I am the PwaInstallPopupIOS component.
        I should display only on iOS device, not in standalone mode
      </div>
    </PwaInstallPopupIOS>
  ));
  
