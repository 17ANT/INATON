import { BASE_URL } from './BASE_URL';
import ImageResize from './ImageResize';
const SIZE_LIMIT = 8 * 1024 * 1024;

// postImage라는 API를 부를때 file을 넘기는데
// 이때 file이 null일 수 있다.
// file.size null이면 어쩔꺼냐.

async function postImage(file) {
  try {
    let newFile = file;
    if (file.size > SIZE_LIMIT) {
      alert('8MB 이상의 파일은 업로드하는데 일정 시간이 소요됩니다.');
      // file -> 작은 용량 파일로 변경 후 forDaata에 넣기
      newFile = await ImageResize(file);
      if (newFile) {
        new Error('테스트');
      }
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
