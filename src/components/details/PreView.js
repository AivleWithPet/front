import { useState } from "react";


const Preview = ({ fileList }) => {
    return (
        <>
            {fileList.map((file, index) => (
                <img
                    key={index}
                    width="100%"
                    src={URL.createObjectURL(file)}
                    alt={`Preview ${index}`}
                />
            ))}
        </>
    );
};

export default Preview;


// const Preview = () => {
//     const [imageSrc, setImageSrc] = useState(null);

//     const onUpload = (e) => {
//         const file = e.target.files[0];
//         const reader = new FileReader();
//         reader.readAsDataURL(file);

//         return new Promise((resolve) => {
//             reader.onload = () => {
//                 setImageSrc(reader.result || null);
//                 resolve();
//             };
//         });
//     };

//     return (
//         <>
//             <input accept="image/*" multiple type="file" onChange={e => onUpload(e)} />
//             <img width={'100%'} src={imageSrc} />
//         </>
//     );
// };

// export default Preview;
