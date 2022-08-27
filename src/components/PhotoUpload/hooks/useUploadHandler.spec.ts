import { useUploadHandler } from "./useUploadHandler";
import { act, renderHook } from "@testing-library/react";

describe("[Hook] useUploadHandler", () => {
  it('should have initial null values', () => {
    const {result} = renderHook(() => useUploadHandler())

    expect(result.current.blobSource).toBe('')
    expect(result.current.uploadedPhoto).toBe(null)
  })

  it('should change state values when file uploads', () => {
    const {result} = renderHook(() => useUploadHandler())
    const mockFile = new File(["file"], "chucknorris.png", { type: "image/png" });
    global.URL.createObjectURL = jest.fn();
    
    act(() => result.current.fileUploadHandler(mockFile))

    expect(result.current.blobSource).not.toBe('')
    expect(result.current.uploadedPhoto).not.toBe(null)
  })
});
