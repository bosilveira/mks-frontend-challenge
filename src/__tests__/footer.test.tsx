import { render, screen } from '@testing-library/react'
import Footer from '@/components/footer'

describe('Footer', () => {

  it('renders copyright', () => {
    render(<Footer />)
    const copyright = screen.getByText(/MKS sistemas © Todos os direitos reservados./i);
    expect(copyright).toBeInTheDocument()
  })
  it('link cookies', () => {
    render(<Footer />)
    expect(screen.getByRole('link').getAttribute('href')).toMatch(/\/cookies/i);
  })
})