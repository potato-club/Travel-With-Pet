import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { DailyDetailPage } from 'src/containers/detail/DailyDetailPage';
import { DailyBoard } from 'src/dummy/dailyInfo';

const DailyDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const detailInfo = DailyBoard.filter(data => data._id === String(id))[0];
  return <DailyDetailPage detailInfo={detailInfo} />;
};

// export async function getServerSideProps(context: { query: { id: number } }) {
//   const { id } = context.query;

//   // TODO: id 를 통해 detail 정보 가져오기
//   // TODO: return detail Data
//   return { props: { id } };
// }

export default DailyDetail;
