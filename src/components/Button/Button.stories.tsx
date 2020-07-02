import { action } from '@storybook/addon-actions';
import React from 'react';
import '../../styles/init.scss';
import Button from './Button';

export default {
  component: Button,
  title: 'Button'
};

const sizeVariants = ['small', 'normal', 'large'];

export const sizes = () => (
  <>
    {sizeVariants.map((size: any) => (
      <div key={size} style={{marginBottom: '2rem', textAlign: 'center'}}>
        <Button onClick={action('clicked')} size={size}>
          {`Button ${size}`}
        </Button>
      </div>
    ))}
  </>
);
