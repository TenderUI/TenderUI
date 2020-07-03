import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import { ReactComponent as Icon } from '../../img/icons/icon-flag.svg';
import IconButton from './IconButton';

// @fixme Review tests and adapt them to IconButton.

const testLabel = <Icon />;

describe('IconButton', () => {
  afterEach(cleanup);

  it('displays the label', () => {
    const { container } = render(<IconButton>{testLabel}</IconButton>);
    // const element = getByText(testLabel);
    expect(container.firstChild).toMatch('testLabel');
    // expect(element).toBeInTheDocument();
  });

  it('can be of the type submit', () => {
    const { getByText } = render(<IconButton type='submit'>{testLabel}</IconButton>);
    const element = getByText(testLabel);
    expect(element.closest('IconButton')).toHaveAttribute('type', 'submit');
  });

  it('can be of the type reset', () => {
    const { getByText } = render(<IconButton type='reset'>{testLabel}</IconButton>);
    const element = getByText(testLabel);
    expect(element.closest('IconButton')).toHaveAttribute('type', 'reset');
  });

  it('can be of the type IconButton', () => {
    const { getByText } = render(<IconButton type='IconButton'>{testLabel}</IconButton>);
    const element = getByText(testLabel);
    expect(element.closest('IconButton')).toHaveAttribute('type', 'IconButton');
  });

  it('is of the type IconButton by default', () => {
    const { getByText } = render(<IconButton>{testLabel}</IconButton>);
    const element = getByText(testLabel);
    expect(element.closest('IconButton')).toHaveAttribute('type', 'IconButton');
  });

  it('handles clicks', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<IconButton onClick={handleClick}>{testLabel}</IconButton>);
    const element = getByText(testLabel);
    fireEvent.click(element);
    expect(handleClick).toHaveBeenCalled();
  });

  it('ignores clicks when disabled', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<IconButton onClick={handleClick} disabled>{testLabel}</IconButton>);
    const element = getByText(testLabel);
    fireEvent.click(element);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('supports small size', () => {
    const { getByText } = render(<IconButton size='small'>{testLabel}</IconButton>);
    const element = getByText(testLabel);
    expect(element.closest('IconButton')).toHaveClass('small');
  });
});
