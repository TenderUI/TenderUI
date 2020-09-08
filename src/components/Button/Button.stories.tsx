import { action } from '@storybook/addon-actions';
import React from 'react';
import { ReactComponent as ShareIcon } from '../../img/icons/icon-share.svg';
import { a11yIconHiddenProps, sizeVariants, shapeVariants } from '../../config';
import '../../styles/init.scss';
import Button from './Button';

export default {
  component: Button,
  title: 'Button'
};

export const sizes = () => (
  <div className="story-container">
    {sizeVariants.map((size: any) => (
      <div key={size} className="story-item">
        <Button onClick={action('clicked')} size={size}>
          Button
        </Button>
      </div>
    ))}
  </div>
);

export const disabled = () => (
  <div className="story-container">
    {sizeVariants.map((size: any) => (
      <div key={size} className="story-item">
        <Button size={size} disabled={true}>
          Button
        </Button>
      </div>
    ))}
  </div>
)

export const withIcon = () => (
  <div className="story-container">
    {sizeVariants.map((size: any) => (
      <div key={size} className="story-item">
        <Button onClick={action('clicked')} size={size}>
          <ShareIcon {...a11yIconHiddenProps} /> Button
        </Button>
      </div>
    ))}
   </div>
)

export const shapes = () => (
  <div className="story-container">
    {shapeVariants.map((shape: any) => (
      <div key={shape} className="story-item">
        <Button onClick={action('clicked')} shape={shape}>
          Button
        </Button>
      </div>
    ))}
  </div>
)
