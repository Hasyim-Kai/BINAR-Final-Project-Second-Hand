export const HandleUploadImages = (e, setSelectedFile, callback) => {
  if (e.target.files[0].size > 1000000) {
    e.preventDefault();
    // alert(`Cannot upload files more than 1 MB`)
    callback();
    return;
  } else {
    setSelectedFile(e.target.files[0]);
  }
};
