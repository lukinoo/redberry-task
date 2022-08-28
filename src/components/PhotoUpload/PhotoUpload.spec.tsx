import {PhotoUpload} from './PhotoUpload'
import {render, screen, fireEvent } from "@testing-library/react"

describe("[Component] PhotoUpload", () => {
  it("should render component", () => {
    render(<PhotoUpload onUpload={jest.fn()} isError={false}/>)

    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })

  it.skip("should render image when file is uploaded", async () => {
      const mockUpload = jest.fn()
      const file = new File(["file"], "chucknorris.png", { type: "image/png" });
      render(<PhotoUpload onUpload={mockUpload} isError={false}/>)
  
      
      fireEvent.change(screen.getByText('Upload'),{
        target: { files: [file] }
      })

      expect(screen.getByRole('img')).toBeInTheDocument()
  })
})