import type { NextPage } from 'next';
import { InformationDetailPage } from 'src/containers/detail/InformationDetailPage';
import { InformationBoard } from 'src/dummy/photoCardInfo';
import { useRouter } from 'next/router';

const InformationDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const detailInfo = InformationBoard.filter(
    data => data._id === String(id),
  )[0];
  console.log(detailInfo);
  return <InformationDetailPage detailInfo={detailInfo} />;
};

// export async function getServerSideProps(context: { query: { id: number } }) {
//   const { id } = context.query;

//   // TODO: id 를 통해 detail 정보 가져오기
//   // TODO: return detail Data
//   return { props: { id } };
// }

export default InformationDetail;
