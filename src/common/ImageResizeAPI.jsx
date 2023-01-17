import imageCompression from 'browser-image-compression';

async function imageResizeAPI(file) {
  const options = {
    maxSizeMB: 8,
    maxWidhOrHeight: 1920,
    useWebWorker: true,
  };

  try {
    const blobFile = await imageCompression(file, options);
    const newFile = new File([blobFile], `${blobFile.name}`, {
      type: blobFile.type,
    });
    return newFile;
  } catch (error) {
    console.log(error);
  }
}

export default imageResizeAPI;
