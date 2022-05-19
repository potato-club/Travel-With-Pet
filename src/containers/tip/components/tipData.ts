import { IconType } from 'react-icons';
import { MdOutlinePets, MdWaterDrop, MdFastfood, MdLocalAirport } from 'react-icons/md';
import { FaDog } from 'react-icons/fa';
import { BsBagCheckFill } from 'react-icons/bs';
import { BiFootball } from 'react-icons/bi';
import { GiDogHouse, GiDogBowl, GiMedicines } from 'react-icons/gi';
import { FaToilet } from 'react-icons/fa';
export type InformationType = {
  infoIcon?: IconType;
  infoTitle: string;
  infoSub: string;
};

export type TipDataType = {
  title: string;
  titleIcon?: IconType;
  information: InformationType[];
};

export const walkTip: TipDataType = {
  title: '가벼운 나들이',
  titleIcon: MdOutlinePets,
  information: [
    {
      infoIcon: MdWaterDrop,
      infoTitle: '물과 물그릇',
      infoSub: '목 말라요',
    },
    {
      infoIcon: FaDog,
      infoTitle: '목줄 및 인식표',
      infoSub: '반려견과 다른 사람의 안전을 지켜주세요',
    },
    {
      infoIcon: BsBagCheckFill,
      infoTitle: '배변봉투',
      infoSub: '공중위생을 위해 잊지 말고 배변봉투를 챙겨주세요',
    },
    {
      infoIcon: MdFastfood,
      infoTitle: '간식',
      infoSub: '배고파요',
    },
  ],
};

export const travelTip: TipDataType = {
  title: '장거리 여행',
  titleIcon: MdLocalAirport,
  information: [
    {
      infoIcon: GiDogHouse,
      infoTitle: '캐리어',
      infoSub: '안전하게 이동할 수 있어요',
    },
    {
      infoIcon: GiDogBowl,
      infoTitle: '사료 및 밥그릇',
      infoSub: '배고파요',
    },
    {
      infoIcon: BiFootball,
      infoTitle: '장난감',
      infoSub: '좋아하는 장난감을 챙겨주세요 좀 더 쉽게 적응할 수 있어요',
    },
    {
      infoIcon: FaToilet,
      infoTitle: '배변패드',
      infoSub: '평소 사용하던 배변패드를 챙겨주세요',
    },
    {
      infoIcon: GiMedicines,
      infoTitle: '멀미약',
      infoSub: '먼 곳을 이동하는 일은 어지러워요',
    },
  ],
};
