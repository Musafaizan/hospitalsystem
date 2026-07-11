import { fireEvent, render, screen } from '@testing-library/react';
import RequestDemoSection from './index';

describe('RequestDemoSection', () => {
  it('opens a mailto link with the form details when submitted', () => {
    const originalLocation = window.location;
    delete window.location;
    window.location = { href: '' };

    render(<RequestDemoSection />);

    fireEvent.change(screen.getByLabelText(/full name/i), {
      target: { value: 'Musa Ali' },
    });
    fireEvent.change(screen.getByLabelText(/setup name/i), {
      target: { value: 'MediCore' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'musa@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/phone number/i), {
      target: { value: '3001234567' },
    });
    fireEvent.change(screen.getByLabelText(/primary requirement/i), {
      target: { value: 'Hospital Management' },
    });

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(window.location.href).toContain('mailto:iammusa182@gmail.com');
    expect(window.location.href).toContain('Musa%20Ali');
    expect(window.location.href).toContain('musa%40example.com');

    window.location = originalLocation;
  });
});
