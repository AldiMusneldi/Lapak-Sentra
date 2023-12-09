import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { MdOutlineImage } from 'react-icons/md';

function UploadImage() {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");

  const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px dashed #1475cf;
    height: 120px;
    width: 150px;
    cursor: pointer;
    border-radius: 5px;
  `;

  return (
    <>
      <main>
        <Form onClick={() => document.querySelector(".input-field").click()}>
          <input
            type="file"
            accept="image/*"
            className="input-field"
            hidden
            onChange={({ target: { files } }) => {
              files[0] && setFileName(files[0].name);
              if (files) {
                setImage(URL.createObjectURL(files[0]));
              }
            }}
          />

          {image ? (
            <img src={image} width={100} height={100} alt={fileName} />
          ) : (
            <>
              <MdOutlineImage color="#1475cf" size={60} />
            </>
          )}
        </Form>
      </main>
    </>
  );
}

export default UploadImage;
