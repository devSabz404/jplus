import React, { useState, useEffect } from 'react';

const MultipleFileInput = () => {
  // state that will hold the Array of objects
  // initialized with empty array
  const [files, setFiles] = useState([]);
  // onChange function that reads files on uploading them
  // files read are encoded as Base64
  function onFileUpload(event) {
    event.preventDefault();
    // Get the file Id
    let id = event.target.id;
    // Create an instance of FileReader API
    let file_reader = new FileReader();
    // Get the actual file itself
    let file = event.target.files[0];
    file_reader.onload = () => {
      // After uploading the file
      // appending the file to our state array
      // set the object keys and values accordingly
      setFiles([...files, { file_id: id, uploaded_file: file_reader.result }]);
    };
    // reading the actual uploaded file
    file_reader.readAsDataURL(file);
  }
  // handle submit button for form
  function handleSubmit(e) {
    e.preventDefault();
    console.log(files);
  }
  // button state whether it's disabled or enabled
  const [enabled, setEnabled] = useState(false);
  // using useEffect we can detect if user uploaded any file,
  // so enable submit button
  useEffect(() => {
    if (files.length === 0) {
      setEnabled(false);
    } else {
      setEnabled(true);
    }
  }, [files]);

  return (
    <form onSubmit={handleSubmit} className="upload--container">
      <h1> Multiple File Inputs with Signle Submit Button </h1>
      <div className="upload--button">
        <input
          onChange={onFileUpload}
          id={1}
         
          type="file"
        />
      </div>
      <div className="upload--button">
        <input
          onChange={onFileUpload}
          id={2}
         
          type="file"
        />
      </div>
      <div className="upload--button">
        <input
          onChange={onFileUpload}
          id={3}
         
          type="file"
        />
      </div>
      {enabled ? (
        <button type="submit">Submit</button>
      ) : (
        <button disabled type="submit">
          Submit
        </button>
      )}
    </form>
  );
};

export default MultipleFileInput;