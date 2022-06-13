import type { NextPage } from 'next';
import { InformationDetailPage } from 'src/containers/detail/InformationDetailPage';
import { InformationBoard } from 'src/dummy/photoCardInfo';
import { useRouter } from 'next/router';

console.log('sss');
const InformationDetail: NextPage = () => {
  const router = useRouter();
  // console.log(Number(router.query.id), InformationBoard.length - 1);
  if (router.query.id && Number(router.query.id) > InformationBoard.length) {
    return <div>페이지가 없습니다!</div>;
  } else if (
    router.query.id &&
    Number(router.query.id) <= InformationBoard.length
  ) {
    const detailInfo = InformationBoard.filter(
      data => data._id === String(router.query.id),
    )[0];
    // console.log('detailInfo', detailInfo);
    return <InformationDetailPage detailInfo={detailInfo} />;
  }
  return <div>404 ERROR</div>;
};
export default InformationDetail;
// export async function getServerSideProps(context: { query: { id: number } }) {
//   const { id } = context.query;

//   // TODO: id 를 통해 detail 정보 가져오기
//   // TODO: return detail Data
//   return { props: { id } };
// }
