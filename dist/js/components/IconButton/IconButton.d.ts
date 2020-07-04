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
    /**
     * Define 'aria-label' attribute for screen readers.
     * Required for icon buttons because they don't have any other descriptive text.
     */
    ariaLabel: string;
};
declare type IconButtonPropsTypeWithChildren = PropsWithChildren<IconButtonPropsType>;
/**
 * A square button with an icon.
 * Please note the children should be a single icon. In any other cases,
 * use Button instead.
 */
declare const IconButton: FC<IconButtonPropsTypeWithChildren>;
export default IconButton;
