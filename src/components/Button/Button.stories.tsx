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
    <Button onClick={action('clicked')} size='normal'>
      Normal
    </Button>
    <br/>
    <Button onClick={action('clicked')} size='small'>
      Small
    </Button>
    <br/>
    <Button onClick={action('clicked')} size='big'>
      Big
    </Button>
  </>
);

export const disabled = () => (
  <>
    <Button onClick={action('clicked')} disabled size='normal'>
      Normal Disabled
    </Button>
    <br/>
    <Button onClick={action('clicked')} disabled size='small'>
      Small Disabled
    </Button>
    <br/>
    <Button onClick={action('clicked')} disabled size='big'>
      Big Disabled
    </Button>
  </>
);
