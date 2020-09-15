import { FC } from 'react';
declare type TextFieldPropsType = {
    /**
     * Define button behavior. Default: text
     */
    type?: 'text' | 'password';
    /**
     * Define input size. Default: normal
     */
    size?: 'normal' | 'small' | 'large';
    /**
     * Define the shape of the button (border radius). Default: rounded.
     */
    shape?: 'rounded' | 'circle';
    /**
     * Disable button. Default: false
     */
    disabled?: boolean;
    /**
     * Add a class name. Optional.
     */
    className?: string;
    /**
     * Add a placeholder text. Optional.
     */
    placeholder?: string;
    /**
     * Add a tabindex attribute. Optional.
     */
    tabIndex?: number;
};
/**
 * A text field.
 */
declare const TextField: FC<TextFieldPropsType>;
export default TextField;
