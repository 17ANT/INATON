import { BASE_URL } from './BASE_URL';

async function postImage(file) {
    try {
        const formData = new FormData();
        formData.append('image', file);

        const data = await fetch(BASE_URL + '/image/uploadfile', {
            method: 'POST',
            body: formData,
        });
        const res = await data.json();
        return res;
    } catch (error) {
        console.log(error.message);
    }
}

export default postImage;
