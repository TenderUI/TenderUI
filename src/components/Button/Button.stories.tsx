import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { ReactComponent as ShareIcon } from '../../img/icons/icon-share.svg';
import { a11yIconHiddenProps } from '../../lib/helpers';
import '../../styles/init.scss';
import Button from './Button';

export default {
  component: Button,
  title: 'Button',
  decorators: [withA11y]
};

const sizeVariants = ['small', 'normal', 'large'];

export const sizes = () => (
  <>
    {sizeVariants.map((size: any) => (
      <div key={size} style={{marginBottom: '1.5rem', display: 'flex', justifyContent: 'center'}}>
        <Button onClick={action('clicked')} size={size}>
          {`Button ${size}`}
        </Button>
      </div>
    ))}
  </>
);

export const withIcon = () => (
  <>
    {sizeVariants.map((size: any) => (
      <div key={size} style={{marginBottom: '1.5rem', display: 'flex', justifyContent: 'center'}}>
        <Button onClick={action('clicked')} size={size}>
          <ShareIcon {...a11yIconHiddenProps} /> {`Button ${size}`}
        </Button>
      </div>
    ))}
  </>
);

export const newStates = () => (
  <>
    <div style={{marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', width: '100%'}}>
      <div style={{marginRight: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Default + Hover 1</div>
      <Button onClick={action('clicked')} size="large" className="default hover1">
        Button
      </Button>
    </div>
    <hr />
    <div style={{margin: '1.5rem 0', display: 'flex', justifyContent: 'space-between', width: '100%'}}>
      <div style={{marginRight: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Disabled 1</div>
      <Button onClick={action('clicked')} size="large" className="default disabled" disabled={true}>
        Button
      </Button>
    </div>
  </>
)
