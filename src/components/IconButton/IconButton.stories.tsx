import { action } from '@storybook/addon-actions';
import React from 'react';
import { ReactComponent as FlagIcon } from '../../img/icons/icon-flag.svg';
import { ReactComponent as HeartIcon } from '../../img/icons/icon-heart.svg';
import { ReactComponent as MessageIcon } from '../../img/icons/icon-message.svg';
import { ReactComponent as PlusIcon } from '../../img/icons/icon-plus.svg';
import '../../styles/init.scss';
import IconButton from './IconButton';

export default {
  component: IconButton,
  title: 'IconButton',
  disable: true
};

const shapeVariants = ['circle', 'rounded'];

export const sizes = () => (
  <div className="story-container">
    <div className="story-item">
      <IconButton 
        onClick={action('clicked')} 
        size="large"
        ariaLabel="Mark as favorite"
      >
        <FlagIcon color="#5081FF" />
      </IconButton>
    </div>
    <div className="story-item">
      <IconButton 
        onClick={action('clicked')} 
        size="normal"
        ariaLabel="Send a message"
      >
        <MessageIcon color="#77BEFF" />
      </IconButton>
    </div>
    <div className="story-item">
      <IconButton 
        onClick={action('clicked')} 
        size="small"
        ariaLabel="Like it"
      >
        <HeartIcon color="#EC7CDA" />
      </IconButton>
    </div>
  </div>
);

export const disabled = () => (
  <div className="story-container">
    <div className="story-item">
      <IconButton 
        onClick={action('clicked')} 
        size="large"
        ariaLabel="Mark as favorite"
        disabled={true}
      >
        <FlagIcon color="#5081FF" />
      </IconButton>
    </div>
    <div className="story-item">
      <IconButton 
        onClick={action('clicked')} 
        size="normal"
        ariaLabel="Send a message"
        disabled={true}
      >
        <MessageIcon color="#77BEFF" />
      </IconButton>
    </div>
    <div className="story-item">
      <IconButton 
        onClick={action('clicked')} 
        size="small"
        ariaLabel="Like it"
        disabled={true}
      >
        <HeartIcon color="#EC7CDA" />
      </IconButton>
    </div>
  </div>
)

export const shapes = () => (
  <div className="story-container">
    {shapeVariants.map((shape: any) => (
      <div key={shape} className="story-item">
        <IconButton 
          onClick={action('clicked')} 
          shape={shape}
          ariaLabel="Add something"
        >
          <PlusIcon />
        </IconButton>
      </div>
    ))}
  </div>
)
