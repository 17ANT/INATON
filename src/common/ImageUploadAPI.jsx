import { BASE_URL } from './BASE_URL';

async function postImage(file) {
    console.log('postImage');
    console.log(file);
    try {
        const formData = new FormData();
        formData.append('image', file);
        const data = await fetch(BASE_URL + '/image/uploadfile', {
            method: 'POST',
            headers: {
                'Content-type': 'multipart/form-data',
            },
            body: formData,
        });
        const result = await data.json();
        console.log('api > ', result);
        return result;
    } catch (error) {
        console.log(error.message);
    }
}

export default postImage;
