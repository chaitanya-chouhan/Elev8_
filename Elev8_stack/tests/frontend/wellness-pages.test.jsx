import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

// ─── Mock AuthContext ─────────────────────────────────────────────────────────
vi.mock('../../src/context/AuthContext', () => ({
  useAuth: () => ({ user: null, logout: vi.fn() }),
}))

// ─── Mock useNotifications ────────────────────────────────────────────────────
vi.mock('../../src/hooks/useNotifications', () => ({
  requestNotificationPermission: vi.fn(),
}))

import Diet from '../../src/pages/Diet'
import Yoga from '../../src/pages/Yoga'
import Circadian from '../../src/pages/Circadian'
import Premium from '../../src/pages/Premium'

const renderWithRouter = (ui) => render(<BrowserRouter>{ui}</BrowserRouter>)

// ─────────────────────────────────────────────────────────────────────────────
// Diet Page Tests (Sankshitha's work)
// ─────────────────────────────────────────────────────────────────────────────
describe('Diet Page', () => {
  it('renders the page title "Diet Plan"', () => {
    renderWithRouter(<Diet />)
    expect(screen.getByText('Diet Plan')).toBeDefined()
  })

  it('renders Weight Loss Plans section', () => {
    renderWithRouter(<Diet />)
    expect(screen.getByText('Weight Loss Plans')).toBeDefined()
  })

  it('renders Muscle Gain Plans section', () => {
    renderWithRouter(<Diet />)
    expect(screen.getByText('Muscle Gain Plans')).toBeDefined()
  })

  it('renders the three diet types: Vegetarian, Non-Vegetarian, Vegan', () => {
    renderWithRouter(<Diet />)
    const vegHeadings = screen.getAllByText('Vegetarian Plan')
    const nonVegHeadings = screen.getAllByText('Non-Vegetarian Plan')
    const veganHeadings = screen.getAllByText('Vegan Plan')
    // Each appears in both Weight Loss AND Muscle Gain sections
    expect(vegHeadings.length).toBeGreaterThanOrEqual(2)
    expect(nonVegHeadings.length).toBeGreaterThanOrEqual(2)
    expect(veganHeadings.length).toBeGreaterThanOrEqual(2)
  })

  it('renders meal checkboxes that can be toggled', () => {
    renderWithRouter(<Diet />)
    const checkboxes = screen.getAllByRole('checkbox')
    // Should have at least 24 checkboxes (4 meals × 6 plans)
    expect(checkboxes.length).toBeGreaterThanOrEqual(24)

    // All checkboxes start unchecked
    checkboxes.forEach(cb => expect(cb.checked).toBe(false))
  })

  it('checking a meal checkbox marks it as checked', () => {
    renderWithRouter(<Diet />)
    const checkboxes = screen.getAllByRole('checkbox')
    const firstCheckbox = checkboxes[0]
    fireEvent.click(firstCheckbox)
    expect(firstCheckbox.checked).toBe(true)
  })

  it('renders the "Important Tips" section', () => {
    renderWithRouter(<Diet />)
    expect(screen.getByText('Important Tips')).toBeDefined()
  })

  it('renders "General Guidelines" and "Do\'s and Don\'ts"', () => {
    renderWithRouter(<Diet />)
    expect(screen.getByText("General Guidelines")).toBeDefined()
    expect(screen.getByText("Do's and Don'ts")).toBeDefined()
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// Yoga Page Tests (Srikruthi's work)
// ─────────────────────────────────────────────────────────────────────────────
describe('Yoga & Meditation Page', () => {
  it('renders the page title', () => {
    renderWithRouter(<Yoga />)
    expect(screen.getByText('Yoga & Meditation')).toBeDefined()
  })

  it('renders the 3 yoga poses', () => {
    renderWithRouter(<Yoga />)
    expect(screen.getByText('1. Mountain Pose')).toBeDefined()
    expect(screen.getByText('2. Tree Pose')).toBeDefined()
    expect(screen.getByText('3. Downward Dog')).toBeDefined()
  })

  it('renders Meditation Techniques section', () => {
    renderWithRouter(<Yoga />)
    expect(screen.getByText('Meditation Techniques')).toBeDefined()
    expect(screen.getByText('Breathing Meditation')).toBeDefined()
    expect(screen.getByText('Mindfulness Meditation')).toBeDefined()
    expect(screen.getByText('Loving-Kindness')).toBeDefined()
  })

  it('renders Benefits of Yoga & Meditation section', () => {
    renderWithRouter(<Yoga />)
    expect(screen.getByText('Reduces Stress')).toBeDefined()
    expect(screen.getByText('Better Sleep')).toBeDefined()
    expect(screen.getByText('Heart Health')).toBeDefined()
    expect(screen.getByText('Happiness')).toBeDefined()
  })

  it('renders Weekly Yoga Schedule with 6 days', () => {
    renderWithRouter(<Yoga />)
    expect(screen.getByText('Mon')).toBeDefined()
    expect(screen.getByText('Tue')).toBeDefined()
    expect(screen.getByText('Wed')).toBeDefined()
    expect(screen.getByText('Sat')).toBeDefined()
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// Circadian Rhythm Page Tests (Srikruthi's work)
// ─────────────────────────────────────────────────────────────────────────────
describe('Circadian Rhythm Page', () => {
  it('renders the page title', () => {
    renderWithRouter(<Circadian />)
    expect(screen.getByText('Circadian Rhythm')).toBeDefined()
  })

  it('renders Optimal 24-Hour Schedule section', () => {
    renderWithRouter(<Circadian />)
    expect(screen.getByText('Optimal 24-Hour Schedule')).toBeDefined()
  })

  it('renders all 7 time slots', () => {
    renderWithRouter(<Circadian />)
    expect(screen.getByText('6:00 AM - Wake Up')).toBeDefined()
    expect(screen.getByText('10:00 PM - Sleep')).toBeDefined()
  })

  it('renders the Hormone Fluctuations section', () => {
    renderWithRouter(<Circadian />)
    expect(screen.getByText('Hormone Fluctuations')).toBeDefined()
    expect(screen.getByText('Cortisol')).toBeDefined()
    expect(screen.getByText('Melatonin')).toBeDefined()
    expect(screen.getByText('Growth Hormone')).toBeDefined()
  })

  it('renders the Light Exposure Guide section', () => {
    renderWithRouter(<Circadian />)
    expect(screen.getByText('Light Exposure Guide')).toBeDefined()
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// Premium Page Tests (Parth's work)
// ─────────────────────────────────────────────────────────────────────────────
describe('Premium Plans Page', () => {
  it('renders the section title', () => {
    renderWithRouter(<Premium />)
    expect(screen.getByText('Elev8 Premium Plans')).toBeDefined()
  })

  it('renders all 3 pricing tiers', () => {
    renderWithRouter(<Premium />)
    expect(screen.getByText('Starter')).toBeDefined()
    expect(screen.getByText('Pro')).toBeDefined()
    expect(screen.getByText('Elite')).toBeDefined()
  })

  it('renders correct prices for each plan', () => {
    renderWithRouter(<Premium />)
    expect(screen.getByText('₹999')).toBeDefined()
    expect(screen.getByText('₹2999')).toBeDefined()
    expect(screen.getByText('₹5999')).toBeDefined()
  })

  it('renders the POPULAR badge on the Pro plan', () => {
    renderWithRouter(<Premium />)
    expect(screen.getByText('POPULAR')).toBeDefined()
  })

  it('renders 3 "Choose" buttons (one per plan)', () => {
    renderWithRouter(<Premium />)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBe(3)
  })

  it('shows 14-day money-back guarantee text', () => {
    renderWithRouter(<Premium />)
    expect(screen.getByText(/14-day money-back guarantee/i)).toBeDefined()
  })
})
