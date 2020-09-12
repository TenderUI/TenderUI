import { cleanup, render, fireEvent } from '@testing-library/react';
import React from 'react';
import { ReactComponent as Icon } from '../../img/icons/icon-flag.svg';
import IconButton from './IconButton';

const childIcon = <Icon />;
const ariaLabel = 'Test label';

describe('IconButton', () => {
  afterEach(cleanup);

  it('displays the icon', () => {
    const { container } = render(<IconButton ariaLabel={ariaLabel}>{childIcon}</IconButton>);
    expect(container.firstChild).toContainHTML("icon-flag.svg")
  });

  it('cannot include text', () => {
    const { container } = render(<IconButton ariaLabel={ariaLabel}>{ariaLabel}</IconButton>);
    expect(container.firstChild.firstChild.firstChild).toBeNull();
  });

  it('adds accessibility attributes to the child icon', () => {
    const { container } = render(<IconButton ariaLabel={ariaLabel}>{childIcon}</IconButton>);

    expect(container.firstChild.firstChild.firstChild).toHaveAttribute('aria-hidden', 'true');
    expect(container.firstChild.firstChild.firstChild).toHaveAttribute('focusable', 'false');
  });

  it('can be of the type submit', () => {
    const { container } = render(<IconButton type='submit' ariaLabel={ariaLabel}>{childIcon}</IconButton>);
    expect(container.firstChild.firstChild).toHaveAttribute('type', 'submit');
  });

  it('can be of the type reset', () => {
    const { container } = render(<IconButton type='reset' ariaLabel={ariaLabel}>{childIcon}</IconButton>);
    expect(container.firstChild.firstChild).toHaveAttribute('type', 'reset');
  });

  it('can be of the type button', () => {
    const { container } = render(<IconButton type='button' ariaLabel={ariaLabel}>{childIcon}</IconButton>);
    expect(container.firstChild.firstChild).toHaveAttribute('type', 'button');
  });

  it('is of the type button by default', () => {
    const { container } = render(<IconButton ariaLabel={ariaLabel}>{childIcon}</IconButton>);
    expect(container.firstChild.firstChild).toHaveAttribute('type', 'button');
  });

  it('handles clicks', () => {
    const handleClick = jest.fn();
    const { container } = render(<IconButton onClick={handleClick} ariaLabel={ariaLabel}>{childIcon}</IconButton>);
    const element = container.firstChild.firstChild;
    fireEvent.click(element);
    expect(handleClick).toHaveBeenCalled();
  });

  it('ignores clicks when disabled', () => {
    const handleClick = jest.fn();
    const { container } = render(<IconButton onClick={handleClick} ariaLabel={ariaLabel} disabled>{childIcon}</IconButton>);
    const element = container.firstChild.firstChild;
    fireEvent.click(element);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('supports small size', () => {
    const { container } = render(<IconButton size='small' ariaLabel={ariaLabel}>{childIcon}</IconButton>);
    expect(container.firstChild).toHaveClass('small');
  });

  it('supports aria-label attribute', () => {
    const { container } = render(<IconButton ariaLabel={ariaLabel}>{childIcon}</IconButton>);
    expect(container.firstChild.firstChild).toHaveAttribute('aria-label', ariaLabel);
  });
});
