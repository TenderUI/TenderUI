import { FC, MouseEventHandler, PropsWithChildren } from 'react';
declare type IconButtonPropsType = {
    /**
     * Define button behavior. Default: button
     */
    type?: 'button' | 'submit' | 'reset';
    /**
     * Define button size. Default: normal.
     */
    size?: 'normal' | 'small' | 'large';
    /**
     * Disable button. Default: false.
     */
    disabled?: boolean;
    /**
     * Register click event handler.
     */
    onClick?: MouseEventHandler;
    /**
     * Define the shape of the button (border radius). Default: rounded.
     */
    shape?: 'rounded' | 'circle';
};
declare type IconButtonPropsTypeWithChildren = PropsWithChildren<IconButtonPropsType>;
/**
 * A button with an icon.
 */
declare const IconButton: FC<IconButtonPropsTypeWithChildren>;
export default IconButton;
