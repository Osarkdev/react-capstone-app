import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/booking/BookingForm';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Render Label for booking date', () => {
  render(<BookingForm/>);
  const labelElement = screen.getByText('Choose Time');
  expect(labelElement).toBeInTheDocument();
})