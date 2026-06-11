import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Store from '../../src/pages/Store'
import Navbar from '../../src/components/Navbar'

// ─── Mock AuthContext ────────────────────────────────────────────────────────
vi.mock('../../src/context/AuthContext', () => ({
  useAuth: () => ({ user: null, logout: vi.fn() }),
}))

// ─── Mock useNotifications (FCM) ────────────────────────────────────────────
vi.mock('../../src/hooks/useNotifications', () => ({
  requestNotificationPermission: vi.fn(),
}))

// ─── Helper: wrap component in Router ────────────────────────────────────────
const renderWithRouter = (ui) =>
  render(<BrowserRouter>{ui}</BrowserRouter>)

// ─────────────────────────────────────────────────────────────────────────────
// Store Page Tests
// ─────────────────────────────────────────────────────────────────────────────
describe('Store Page', () => {
  it('renders all 6 products', () => {
    renderWithRouter(<Store />)
    expect(screen.getByText('Premium Whey Protein')).toBeDefined()
    expect(screen.getByText('Premium Yoga Mat')).toBeDefined()
    expect(screen.getByText('Complete Nutrition Guide')).toBeDefined()
    expect(screen.getByText('Performance Workout Set')).toBeDefined()
    expect(screen.getByText('Elev8 Sipper')).toBeDefined()
    expect(screen.getByText('Elev8 Cup')).toBeDefined()
  })

  it('shows prices in Indian Rupees (₹)', () => {
    renderWithRouter(<Store />)
    expect(screen.getByText('₹2,499')).toBeDefined()
    expect(screen.getByText('₹1,599')).toBeDefined()
    expect(screen.getByText('₹899')).toBeDefined()
  })

  it('cart starts empty — shows "Your cart is empty"', () => {
    renderWithRouter(<Store />)
    expect(screen.getByText('Your cart is empty')).toBeDefined()
  })

  it('adds a product to the cart when "Add to Cart" is clicked', () => {
    renderWithRouter(<Store />)
    const addButtons = screen.getAllByText('Add to Cart')
    fireEvent.click(addButtons[0]) // click first product

    // After adding, cart should no longer show empty message
    expect(screen.queryByText('Your cart is empty')).toBeNull()
  })

  it('shows subtotal after adding an item to cart', () => {
    renderWithRouter(<Store />)
    const addButtons = screen.getAllByText('Add to Cart')
    fireEvent.click(addButtons[0]) // Premium Whey Protein = ₹2499

    // Subtotal should appear
    expect(screen.getByText('Subtotal:')).toBeDefined()
  })

  it('quantity defaults to 1 for all products', () => {
    renderWithRouter(<Store />)
    const quantityInputs = screen.getAllByDisplayValue('1')
    // 6 products × 1 input each
    expect(quantityInputs.length).toBeGreaterThanOrEqual(6)
  })

  it('quantity increases when + button is clicked', () => {
    renderWithRouter(<Store />)
    const plusButtons = screen.getAllByText('+')
    fireEvent.click(plusButtons[0]) // increment first product qty
    expect(screen.getAllByDisplayValue('2').length).toBeGreaterThan(0)
  })

  it('quantity does not go below 1 when - is clicked at 1', () => {
    renderWithRouter(<Store />)
    const minusButtons = screen.getAllByText('-')
    fireEvent.click(minusButtons[0]) // try to go below 1
    // All quantities should still be 1 (no 0 values)
    expect(screen.queryByDisplayValue('0')).toBeNull()
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// Navbar Tests (logged-out state)
// ─────────────────────────────────────────────────────────────────────────────
describe('Navbar — Logged Out', () => {
  it('renders Login and Sign Up links when user is not authenticated', () => {
    renderWithRouter(<Navbar />)
    expect(screen.getByText('Login')).toBeDefined()
    expect(screen.getByText('Sign Up')).toBeDefined()
  })

  it('renders the Go Premium button', () => {
    renderWithRouter(<Navbar />)
    expect(screen.getByText(/Go Premium/i)).toBeDefined()
  })

  it('renders navigation links: Home, About, Store', () => {
    renderWithRouter(<Navbar />)
    expect(screen.getByText('Home')).toBeDefined()
    expect(screen.getByText('About')).toBeDefined()
    expect(screen.getByText('Store')).toBeDefined()
  })

  it('does NOT render user dropdown when logged out', () => {
    renderWithRouter(<Navbar />)
    expect(screen.queryByText(/Logout/i)).toBeNull()
    expect(screen.queryByText(/Enable Notifications/i)).toBeNull()
  })
})
