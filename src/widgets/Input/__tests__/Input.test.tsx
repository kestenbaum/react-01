import Input from '../index';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

describe('testing custom input', () => {
  test('test onchange in input', () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Test' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect((input as HTMLInputElement).value).toBe('Test');
  });

  test('test disabled checkbox', () => {
    render(<Input disabled />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });
});
