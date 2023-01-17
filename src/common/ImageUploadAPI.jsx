import { BASE_URL } from './BASE_URL';
import imageResizeAPI from './ImageResizeAPI';

// postImage라는 API를 부를때 file을 넘기는데
// 이때 file이 null일 수 있다.
// file.size null이면 어쩔꺼냐.

async function postImage(file) {
  try {
    let newFile = file;

    // jpeg, png인 경우에만 압축을 진행
    if (newFile.type === 'image/jpeg' || newFile.type === 'image/png') {
      newFile = await imageResizeAPI(file);
    } else if (file.size >= 10 * 1024 * 1024) {
      alert('10MB 이하의 이미지를 올려주세요');
      new Error('용량 초과');
    }
    const formData = new FormData();
    formData.append('image', newFile);
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
