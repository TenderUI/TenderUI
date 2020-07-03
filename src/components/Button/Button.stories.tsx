import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { ReactComponent as ShareIcon } from '../../img/icons/icon-share.svg';
import '../../styles/init.scss';
import Button from './Button';

const environment = process.env.NODE_ENV;

export default {
  component: Button,
  title: 'Button',
  decorators: [
    environment === 'development' ? withA11y : null
  ],
};

const sizeVariants = ['small', 'normal', 'large'];

export const sizes = () => (
  <>
    {sizeVariants.map((size: any) => (
      <div key={size} style={{marginBottom: '2rem', display: 'flex', justifyContent: 'center'}}>
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
      <div key={size} style={{marginBottom: '2rem', display: 'flex', justifyContent: 'center'}}>
        <Button onClick={action('clicked')} size={size}>
          <ShareIcon /> {`Button ${size}`}
        </Button>
      </div>
    ))}
  </>
);