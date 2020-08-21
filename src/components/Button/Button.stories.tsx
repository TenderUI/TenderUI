import { action } from '@storybook/addon-actions';
import React from 'react';
import { ReactComponent as ShareIcon } from '../../img/icons/icon-share.svg';
import { a11yIconHiddenProps } from '../../lib/helpers';
import '../../styles/init.scss';
import styles from '../../styles/stories.module.scss';
import Button from './Button';

export default {
  component: Button,
  title: 'Button'
};

const sizeVariants = ['large', 'normal', 'small'];

export const sizes = () => (
  <div className={styles.containerStyles}>
    {sizeVariants.map((size: any) => (
      <div key={size} className={styles.itemStyles}>
        <Button onClick={action('clicked')} size={size}>
          Button
        </Button>
      </div>
    ))}
  </div>
);

export const disabled = () => (
  <div className={styles.containerStyles}>
    {sizeVariants.map((size: any) => (
      <div key={size} className={styles.itemStyles}>
        <Button size={size} disabled={true}>
          Button
        </Button>
      </div>
    ))}
  </div>
)

export const withIcon = () => (
  <div className={styles.containerStyles}>
    {sizeVariants.map((size: any) => (
      <div key={size} className={styles.itemStyles}>
        <Button onClick={action('clicked')} size={size}>
          <ShareIcon {...a11yIconHiddenProps} /> Button
        </Button>
      </div>
    ))}
   </div>
)
