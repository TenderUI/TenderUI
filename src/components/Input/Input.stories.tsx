import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import React from 'react';
import '../../styles/init.scss';
import Input from './Input';

export default {
  component: Input,
  title: 'Input',
  decorators: [withA11y]
};

const sizeVariants = ['small', 'normal', 'large'];

export const sizes = () => (
  <>
    {sizeVariants.map((size: any) => (
      <div key={size} style={{marginBottom: '2rem', display: 'flex', justifyContent: 'center'}}>
        <Input 
          onChange={action('change')} 
          size={size} 
          placeholder={`Button ${size}`} 
          aria-label={`Button ${size}`} 
        />
      </div>
    ))}
  </>
);

export const disabled = () => (
  <div style={{marginBottom: '2rem', display: 'flex', justifyContent: 'center'}}>
    <Input 
      placeholder="Disabled text input" 
      aria-label="Disabled text input" 
      disabled={true} 
    />
  </div>
);
