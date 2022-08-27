import {PhotoUpload} from './PhotoUpload'
import {render, screen} from "@testing-library/react"

describe("[Component] PhotoUpload", () => {
  it("should render component", () => {
    render(<PhotoUpload onUpload={jest.fn()}/>)

    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })
  
})