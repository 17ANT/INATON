import { BASE_URL } from '../../common/BASE_URL';

async function imageUpload(file) {
    console.log('one image request');
    try {
        const formData = new FormData();
        formData.append('image', file);
        const data = await fetch(BASE_URL + '/image/uploadfile', {
            method: 'POST',
            // headers: {
            //     'Content-type': 'multipart/form-data',
            // },
            body: formData,
        });
        console.log(data);
        const result = await data.json();
        return result;
    } catch (error) {
        console.log(error.message);
    }
}

export default imageUpload;