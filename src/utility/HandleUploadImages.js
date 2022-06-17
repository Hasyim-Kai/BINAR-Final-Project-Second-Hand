export const HandleUploadImages = (e, setSelectedFile) => {
  if (e.target.files[0].size > 1000000) {
    e.preventDefault()
    alert(`Cannot upload files more than 1 MB`)
    return
  } else {
    setSelectedFile(e.target.files[0])
  }
}

 
