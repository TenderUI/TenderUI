import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { ReactComponent as FlagIcon } from '../../img/icons/icon-flag.svg';
import { ReactComponent as HeartIcon } from '../../img/icons/icon-heart.svg';
import { ReactComponent as MessageIcon } from '../../img/icons/icon-message.svg';
import { ReactComponent as PlusIcon } from '../../img/icons/icon-plus.svg';
import '../../styles/init.scss';
import IconButton from './IconButton';
import { a11yIconHiddenProps } from '../../lib/helpers';

export default {
  component: IconButton,
  title: 'IconButton',
  decorators: [withA11y]
};

export const sizes = () => (
  <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
    <div style={{margin: '1rem', textAlign: 'center'}}>
      <IconButton 
        onClick={action('clicked')} 
        size="small"
        ariaLabel="Like it"
      >
        <HeartIcon color="#EC7CDA" {...a11yIconHiddenProps} />
      </IconButton>
    </div>
    <div style={{margin: '1rem', textAlign: 'center'}}>
      <IconButton 
        onClick={action('clicked')} 
        size="normal"
        ariaLabel="Send a message"
      >
        <MessageIcon color="#77BEFF" {...a11yIconHiddenProps} />
      </IconButton>
    </div>
    <div style={{margin: '1rem', textAlign: 'center'}}>
      <IconButton 
        onClick={action('clicked')} 
        size="large"
        ariaLabel="Mark as favorite"
      >
        <FlagIcon color="#5081FF" {...a11yIconHiddenProps} />
      </IconButton>
    </div>
  </div>
);

export const shapes = () => (
  <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
    <div style={{margin: '1rem', textAlign: 'center'}}>
      <IconButton 
        onClick={action('clicked')} 
        shape="rounded"
        ariaLabel="Add something"
      >
        <PlusIcon {...a11yIconHiddenProps} />
      </IconButton>
    </div>
    <div style={{margin: '1rem', textAlign: 'center'}}>
      <IconButton 
        onClick={action('clicked')} 
        shape="circle"
        ariaLabel="Add something"
      >
        <PlusIcon {...a11yIconHiddenProps} />
      </IconButton>
    </div>
  </div>
);
