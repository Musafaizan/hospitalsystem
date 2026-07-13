import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import RequestDemoSection from './index';

describe('RequestDemoSection', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({ ok: true });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('submits the form details to the email endpoint', async () => {
    render(<RequestDemoSection />);

    fireEvent.change(screen.getByLabelText(/full name/i), {
      target: { value: 'Musa Ali' },
    });
    fireEvent.change(screen.getByLabelText(/official work email/i), {
      target: { value: 'musa@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/hospital\/clinic name/i), {
      target: { value: 'MediCore' },
    });
    fireEvent.change(screen.getByLabelText(/number of beds/i), {
      target: { value: 'Under 20 beds / <500 patients per month' },
    });
    fireEvent.change(screen.getByLabelText(/message \/ core challenges/i), {
      target: { value: 'We need faster patient check-ins.' },
    });

    fireEvent.click(
      screen.getByRole('button', { name: /schedule my live architecture preview/i })
    );

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        'https://formsubmit.co/ajax/iammusa182@gmail.com',
        expect.objectContaining({
          method: 'POST',
          headers: expect.objectContaining({
            'Content-Type': 'application/x-www-form-urlencoded',
          }),
        })
      );
    });

    const [, options] = global.fetch.mock.calls[0];
    expect(options.body.toString()).toContain('name=Musa+Ali');
    expect(options.body.toString()).toContain('email=musa%40example.com');
    expect(screen.getByText(/thanks/i)).toBeInTheDocument();
  });
});