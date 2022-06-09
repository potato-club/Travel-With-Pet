export type CommentsType = {
  id: number;
  writer: string;
  content: string;
  date: string;
  time: string;
};

export const comments: CommentsType[] = [
  {
    id: 1,
    writer: '양파먹는소녀s',
    content: '댓글 테스트1',
    date: '2022.01.23',
    time: '03:22',
  },
  {
    id: 2,
    writer: '다카포Da capo',
    content: '댓글 테스트2',
    date: '2022.01.23',
    time: '03:22',
  },
  {
    id: 3,
    writer: '인간 맛동산',
    content: '댓글 테스트3',
    date: '2022.01.23',
    time: '03:22',
  },
];
