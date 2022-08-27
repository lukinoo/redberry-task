import {PhotoUpload} from './PhotoUpload'
import {render, screen, fireEvent } from "@testing-library/react"

describe("[Component] PhotoUpload", () => {
  it("should render component", () => {
    render(<PhotoUpload onUpload={jest.fn()}/>)

    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })

  it.skip("should render image when file is uploaded", async () => {
      const mockUpload = jest.fn()
      const file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });
      render(<PhotoUpload onUpload={mockUpload}/>)
  
      
      fireEvent.change(screen.getByText('Upload'),{
        target: { files: [file] }
      })

      expect(screen.getByRole('img')).toBeInTheDocument()
  })
})