import { ChangeEventHandler, FC } from 'react';
declare type InputPropsType = {
    /**
     * Define button behavior. Default: text
     */
    type?: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';
    /**
     * Define button size. Default: normal
     */
    size?: 'normal' | 'small' | 'large';
    /**
     * Disable button. Default: false
     */
    disabled?: boolean;
    /**
     * Register change event handler.
     */
    onChange?: ChangeEventHandler;
    /**
     * Add a class name. Optional.
     */
    className?: string;
};
/**
 * An input element.
 */
declare const Input: FC<InputPropsType>;
export default Input;
