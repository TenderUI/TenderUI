import { action } from '@storybook/addon-actions';
import React from 'react';
import '../../styles/init.scss';
import Button from './Button';
import {ReactComponent as ShareIcon} from '../../img/icons/icon-share.svg';

export default {
  component: Button,
  title: 'Button'
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