import {render, screen} from '@testing-library/react'
import Form from'./Form';

test('placeholder text for card name', () => { 
    render(<Form/>);
    const CardName = screen.findByPlaceholderText(/e.g Jane Appleseed/i)
    expect(CardName).toBeDefined();
 })
test('test for card name to be empty', () => { 
    render(<Form/>);
    const CardName = screen.getByPlaceholderText(/e.g Jane Appleseed/i)
    expect(CardName.textContent).toBe('');
 })
test('test for card name label text to be defined', () => { 
    render(<Form/>);
    const CardName = screen.findByLabelText(/CARDHOLDER NAME/i)
    expect(CardName).toBeDefined();
 })
test('placeholder text for card number', () => { 
    render(<Form/>);
    const CardNumber = screen.findByPlaceholderText(/e.g 1234 5678 9123 0000/i)
    expect(CardNumber).toBeDefined();
 })
test('mm input', () => { 
    render(<Form/>);
    const CardMonthlyInput = screen.findByPlaceholderText(/MM/i)
    expect(CardMonthlyInput).toBeDefined();
 })
test('yy input', () => { 
    render(<Form/>);
    const CardYearlyInput = screen.findByPlaceholderText(/yy/i)
    expect(CardYearlyInput).toBeDefined();
 })
test('button input test', () => { 
    render(<Form/>);
    const btn = screen.findByRole('button')
    expect(btn).toBeDefined();
 })



