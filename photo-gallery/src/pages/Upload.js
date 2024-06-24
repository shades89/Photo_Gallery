import React, { useState } from 'react';
import { Storage } from 'aws-amplify';

const Upload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (file) {
            try {
                await Storage.put(file.name, file, {
                    contentType: file.type,
                });
                alert('File uploaded successfully');
            } catch (error) {
                console.error('Error uploading file:', error);
                alert('File upload failed');
            }
        }
    };

    return (
        <div>
            <h1>Upload</h1>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default Upload;
