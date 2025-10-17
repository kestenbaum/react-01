import Button from '../index';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Button test', () => {
  test('test children button', () => {
    render(<Button>test</Button>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  test('test onclick button', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('test disabled button', () => {
    render(<Button disabled>Disabled</Button>);
    const btn = screen.getByText('Disabled');
    expect(btn).toBeDisabled();
  });
});
