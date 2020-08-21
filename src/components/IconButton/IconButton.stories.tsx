import { action } from '@storybook/addon-actions';
import React from 'react';
import { ReactComponent as FlagIcon } from '../../img/icons/icon-flag.svg';
import { ReactComponent as HeartIcon } from '../../img/icons/icon-heart.svg';
import { ReactComponent as MessageIcon } from '../../img/icons/icon-message.svg';
import { ReactComponent as PlusIcon } from '../../img/icons/icon-plus.svg';
import '../../styles/init.scss';
import styles from '../../styles/stories.module.scss';
import IconButton from './IconButton';

export default {
  component: IconButton,
  title: 'IconButton',
  disable: true
};

export const sizes = () => (
  <div className={styles.containerStyles}>
    <div className={styles.itemStyles}>
      <IconButton 
        onClick={action('clicked')} 
        size="small"
        ariaLabel="Like it"
      >
        <HeartIcon color="#EC7CDA" />
      </IconButton>
    </div>
    <div className={styles.itemStyles}>
      <IconButton 
        onClick={action('clicked')} 
        size="normal"
        ariaLabel="Send a message"
      >
        <MessageIcon color="#77BEFF" />
      </IconButton>
    </div>
    <div className={styles.itemStyles}>
      <IconButton 
        onClick={action('clicked')} 
        size="large"
        ariaLabel="Mark as favorite"
      >
        <FlagIcon color="#5081FF" />
      </IconButton>
    </div>
  </div>
);

export const shapes = () => (
  <div className={styles.containerStyles}>
    <div className={styles.itemStyles}>
      <IconButton 
        onClick={action('clicked')} 
        shape="rounded"
        ariaLabel="Add something"
      >
        <PlusIcon />
      </IconButton>
    </div>
    <div className={styles.itemStyles}>
      <IconButton 
        onClick={action('clicked')} 
        shape="circle"
        ariaLabel="Add something"
      >
        <PlusIcon />
      </IconButton>
    </div>
  </div>
);
