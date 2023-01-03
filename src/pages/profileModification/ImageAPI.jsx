import { BASE_URL } from '../../common/BASE_URL';

async function imageUpload(file) {
  try {
    const formData = new FormData();
    formData.append('image', file);
    const data = await fetch(BASE_URL + '/image/uploadfile', {
      method: 'POST',
      body: formData,
    });
    const result = await data.json();
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export default imageUpload;
