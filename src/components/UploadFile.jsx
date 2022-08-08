const UploadFile = () => {
    return(
        <div>
            <label>Upload ID proof</label>
            <label htmlFor="upload-file">
                <p>Choose file</p>
                <span htmlFor="upload-file">Browse</span>
                <input id="upload-file" type="file" />
            </label>
        </div>
    );
};

export default UploadFile;