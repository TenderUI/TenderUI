import { AllHTMLAttributes, FC } from 'react';
declare type InputPropsType = {
    /**
     * Define button behavior. Default: text
     */
    type?: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';
    /**
     * Define input size. Default: normal
     */
    size?: 'normal' | 'small' | 'large';
    /**
     * Add a class name. Optional.
     */
    className?: string;
} & AllHTMLAttributes<HTMLInputElement>;
/**
 * An input element.
 */
declare const Input: FC<InputPropsType>;
export default Input;
