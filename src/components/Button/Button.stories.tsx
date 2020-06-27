import { action } from '@storybook/addon-actions';
import React from 'react';
import '../../styles/init.scss';
import Button from './Button';

export default {
  component: Button,
  title: 'Button',
};

export const sizes = () => (
  <>
    <div style={{marginBottom: "2rem", textAlign: 'center'}}>
      <Button onClick={action('clicked')} size='small'>
        Small
      </Button>
    </div>
    <div style={{marginBottom: "2rem", textAlign: 'center'}}>
      <Button onClick={action('clicked')} size='normal'>
        Normal
      </Button>
    </div>
    <div style={{marginBottom: "2rem", textAlign: 'center'}}>
      <Button onClick={action('clicked')} size='big'>
        Big
      </Button>
    </div>
  </>
);

export const disabled = () => (
  <>
    <div style={{marginBottom: "2rem", textAlign: 'center'}}>
      <Button onClick={action('clicked')} disabled size='small'>
        Small Disabled
      </Button>
    </div>
    <div style={{marginBottom: "2rem", textAlign: 'center'}}>
      <Button onClick={action('clicked')} disabled size='normal'>
        Normal Disabled
      </Button>
    </div>
    <div style={{marginBottom: "2rem", textAlign: 'center'}}>
      <Button onClick={action('clicked')} disabled size='big'>
        Big Disabled
      </Button>
    </div>
  </>
);
