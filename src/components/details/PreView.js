import { useState } from "react";


const Preview = ({ fileList }) => {
    return (
        <>
            {fileList.map((file, index) => (
                <img
                    key={index}
                    style={{ maxWidth: '100%', maxHeight: '100%', width: 'calc(100vw - 55vw)', height: 'calc(100vh - 40vh)' }}
                    src={URL.createObjectURL(file)}
                    alt={`Preview ${index}`}
                />
            ))}
        </>
    );
};

export default Preview;
