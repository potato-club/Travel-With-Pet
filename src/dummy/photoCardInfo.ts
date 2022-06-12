import { InformationBoardType } from 'src/types/board.type';
export let unique = 1;
export const InformationBoard: InformationBoardType[] = [
  {
    _id: String(unique),
    title: '여행을 다녀왔습니다',
    category: '여행',
    city: '인천',
    detailCity: '부평',
    tags: '#여행#단체사진#꿀잼',
    contents:
      '너무너무 재밌는 하루였어요! 우리 이쁜 아이들좀 보세요!!![imageURL](https://meongmeong-tui-img-storage.s3-ap-northeast-2.amazonaws.com/f4eac623-721e-483e-b399-30de51ab1882.png)',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '음식점',
    city: '서울',
    detailCity: '홍대',
    tags: '#음식점#맛집#가성비#대박',
    contents:
      '홍대쪽에 놀러갈일이 있어서 반려동물을 데리고 갔는데 너무 맛있고, 가성비 좋은 식당이 있어서 소개해드립니다!![imageURL](https://meongmeong-tui-img-storage.s3-ap-northeast-2.amazonaws.com/f4eac623-721e-483e-b399-30de51ab1882.png)',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '숙소',
    city: '인천',
    detailCity: '구월동',
    tags: '#숙소#반려동물 출입가능',
    contents:
      '![imageURL](https://meongmeong-tui-img-storage.s3-ap-northeast-2.amazonaws.com/f4eac623-721e-483e-b399-30de51ab1882.png)![imageURL](https://meongmeong-tui-img-storage.s3-ap-northeast-2.amazonaws.com/f4eac623-721e-483e-b399-30de51ab1882.png)asjldkasdlajsㅁㄴ넝ㅁ늉뮹![imageURL](https://meongmeong-tui-img-storage.s3-ap-northeast-2.amazonaws.com/f4eac623-721e-483e-b399-30de51ab1882.png)이미지 여러개일때 포토카드에 내용 출력하는거 어떻게 구현하지',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '기타',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '여행',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '음식점',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '숙소',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '기타',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '여행',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '음식점',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '숙소',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '기타',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '여행',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '음식점',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '숙소',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '기타',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '여행',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '음식점',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '숙소',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '기타',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '여행',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '음식점',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '숙소',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '기타',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '여행',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '음식점',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '숙소',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '기타',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '여행',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '음식점',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '숙소',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '기타',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '여행',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '음식점',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '숙소',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '기타',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '여행',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '음식점',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '숙소',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '기타',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '여행',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '음식점',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '숙소',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '기타',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '여행',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '음식점',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '숙소',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '기타',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '여행',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '음식점',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '숙소',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '기타',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '여행',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '음식점',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '숙소',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '기타',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '여행',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '음식점',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '숙소',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '기타',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '여행',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '음식점',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '숙소',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '기타',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '여행',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '음식점',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '숙소',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '기타',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '여행',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '음식점',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '숙소',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '기타',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '여행',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '음식점',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '숙소',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '기타',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '여행',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '음식점',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '숙소',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
  {
    _id: String(unique),
    title: '타이틀',
    category: '기타',
    city: '인천',
    detailCity: '구월동',
    tags: '#태그#나중에#분리하기',
    contents: '여기에 내용, 사진 같이 들어감',
    heart: 1,
    commentCount: 1,
    comments: [],
    owner: {
      _id: '123124',
      email: 'email.gmail.com',
      avatarUrl: '..',
      name: '게시글작성자',
      __v: unique,
    },
    createdAt: new Date(),
    __v: unique++,
  },
];
