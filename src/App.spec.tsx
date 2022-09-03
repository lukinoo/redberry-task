import {screen, render, waitFor} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'
import App from './App'


describe('[Component] App', () => {
  it('should render router component', () => {
    render(<App />)
  
    expect(screen.getByTestId('application')).toBeInTheDocument();
  })

  it('should render home page', () => {
    render(<App />)

    expect(screen.getByText('ჩანაწერის დამატება')).toBeInTheDocument()
    expect(screen.getByText('ჩანაწერის სია')).toBeInTheDocument()
  })
}) 