import { useState } from "react";
import { CameraOutlined, CloseCircleOutlined } from '@ant-design/icons';

const Preview = ({ fileList }) => {
    return (
        <>
            {fileList.map((file, index) => (
                <img
                    key={index}
                    style={{ maxWidth: '100%', maxHeight: '100%', width: '47em', height: '38em' }}
                    src={URL.createObjectURL(file)}
                    alt={`Preview ${index}`}
                ></img>


            ))}
        </>
    );
};

export default Preview;
