import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import Button from './Button';

const testLabel = 'A button';

describe('Button', () => {
  afterEach(cleanup);

  it('displays the label', () => {
    const { getByText } = render(<Button>{testLabel}</Button>);
    const element = getByText(testLabel);
    expect(element).toBeInTheDocument();
  });

  it('can be of the type submit', () => {
    const { getByText } = render(<Button type='submit'>{testLabel}</Button>);
    const element = getByText(testLabel);
    expect(element.closest('button')).toHaveAttribute('type', 'submit');
  });

  it('can be of the type reset', () => {
    const { getByText } = render(<Button type='reset'>{testLabel}</Button>);
    const element = getByText(testLabel);
    expect(element.closest('button')).toHaveAttribute('type', 'reset');
  });

  it('can be of the type button', () => {
    const { getByText } = render(<Button type='button'>{testLabel}</Button>);
    const element = getByText(testLabel);
    expect(element.closest('button')).toHaveAttribute('type', 'button');
  });

  it('is of the type button by default', () => {
    const { getByText } = render(<Button>{testLabel}</Button>);
    const element = getByText(testLabel);
    expect(element.closest('button')).toHaveAttribute('type', 'button');
  });

  it('handles clicks', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>{testLabel}</Button>);
    const element = getByText(testLabel);
    fireEvent.click(element);
    expect(handleClick).toHaveBeenCalled();
  });

  it('ignores clicks when disabled', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick} disabled>{testLabel}</Button>);
    const element = getByText(testLabel);
    fireEvent.click(element);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('supports small size', () => {
    const { getByText } = render(<Button size='small'>{testLabel}</Button>);
    const element = getByText(testLabel);
    expect(element.closest('button')).toHaveClass('small');
  });

  it('supports aria-label attribute', () => {
    const { container } = render(<Button ariaLabel={testLabel}></Button>);
    expect(container.firstChild).toHaveAttribute('aria-label', testLabel);
  });
});
