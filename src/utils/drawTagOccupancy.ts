import Highcharts from "highcharts";
import sunburst from "highcharts/modules/sunburst";
sunburst(Highcharts);

interface SunburstItem {
  id: string;
  value: number;
  tag_ratio: number;
  partname: string;
  fullname: string;
}

interface IExtendSunburstLevelsOption {
  level?: number;
  colorByPoint?: boolean;
  levelIsConstant?: boolean;
}

const DEMO_SUNBURST_LIST = [
  {
    id: "UFO",
    value: 100,
    tag_ratio: 0,
    partname: "관심사",
    fullname: "관심사 (adid)"
  },
  {
    parent: "UFO",
    id: "I01",
    value: 11.15,
    tag_ratio: 0,
    partname: "여가/일상",
    fullname: "I01-여가/일상"
  },
  {
    parent: "UFO",
    id: "I03",
    value: 6.82,
    tag_ratio: 0,
    partname: "패션",
    fullname: "I03-패션"
  },

  {
    parent: "UFO",
    id: "I02",
    value: 6.01,
    tag_ratio: 0,
    partname: "건강",
    fullname: "I02-건강"
  },
  {
    parent: "UFO",
    id: "I04",
    value: 8.04,
    tag_ratio: 0,
    partname: "게임",
    fullname: "I04-게임"
  },

  {
    parent: "UFO",
    id: "I05",
    value: 3.59,
    tag_ratio: 0,
    partname: "교육",
    fullname: "I05-교육"
  },

  {
    parent: "UFO",
    id: "I06",
    value: 5.87,
    tag_ratio: 0,
    partname: "가정/생활",
    fullname: "I06-가정/생활"
  },

  {
    parent: "UFO",
    id: "I07",
    value: 5.52,
    tag_ratio: 0,
    partname: "금융",
    fullname: "I07-금융"
  },
  {
    parent: "UFO",
    id: "I08",
    value: 2.5,
    tag_ratio: 0,
    partname: "육아",
    fullname: "I08-육아"
  },

  {
    parent: "UFO",
    id: "I09",
    value: 5.24,
    tag_ratio: 0,
    partname: "뷰티",
    fullname: "I09-뷰티"
  },

  {
    parent: "UFO",
    id: "I10",
    value: 2.15,
    tag_ratio: 0,
    partname: "인물",
    fullname: "I10-인물"
  },

  {
    parent: "UFO",
    id: "I11",
    value: 3.25,
    tag_ratio: 0,
    partname: "도서/만화/애니",
    fullname: "I11-도서/만화/애니"
  },

  {
    parent: "UFO",
    id: "I12",
    value: 0.58,
    tag_ratio: 0,
    partname: "문화/예술",
    fullname: "I12-문화/예술"
  },

  {
    parent: "UFO",
    id: "I13",
    value: 1.09,
    tag_ratio: 0,
    partname: "공연",
    fullname: "I13-공연"
  },

  {
    parent: "UFO",
    id: "I14",
    value: 5.96,
    tag_ratio: 0,
    partname: "여행",
    fullname: "I14-여행"
  },

  {
    parent: "UFO",
    id: "I15",
    value: 0.82,
    tag_ratio: 0,
    partname: "종교",
    fullname: "I15-종교"
  },
  {
    parent: "UFO",
    id: "I16",
    value: 6.64,
    tag_ratio: 0,
    partname: "요리/맛집",
    fullname: "I16-요리/맛집"
  },

  {
    parent: "UFO",
    id: "I17",
    value: 3.44,
    tag_ratio: 0,
    partname: "지식/동향/이슈",
    fullname: "I17-지식/동향/이슈"
  },

  {
    parent: "UFO",
    id: "I18",
    value: 2.03,
    tag_ratio: 0,
    partname: "스포츠",
    fullname: "I18-스포츠"
  },

  {
    parent: "UFO",
    id: "I19",
    value: 1.83,
    tag_ratio: 0,
    partname: "취업",
    fullname: "I19-취업"
  },

  {
    parent: "UFO",
    id: "I20",
    value: 1.2,
    tag_ratio: 0,
    partname: "영화",
    fullname: "I20-영화"
  },

  {
    parent: "UFO",
    id: "I21",
    value: 0.69,
    tag_ratio: 0,
    partname: "애완/반려동물",
    fullname: "I21-애완/반려동물"
  },
  {
    parent: "UFO",
    id: "I22",
    value: 4.51,
    tag_ratio: 0,
    partname: "자동차",
    fullname: "I22-자동차"
  },

  {
    parent: "UFO",
    id: "I23",
    value: 4.31,
    tag_ratio: 0,
    partname: "취미/레저",
    fullname: "I23-취미/레저"
  },

  {
    parent: "UFO",
    id: "I24",
    value: 1.27,
    tag_ratio: 0,
    partname: "직업",
    fullname: "I24-직업"
  },

  {
    parent: "UFO",
    id: "I25",
    value: 2.72,
    tag_ratio: 0,
    partname: "라이프이벤트",
    fullname: "I25-라이프이벤트"
  },

  {
    parent: "UFO",
    id: "I26",
    value: 2.77,
    tag_ratio: 0,
    partname: "음악",
    fullname: "I26-음악"
  },

  {
    parent: "I01",
    id: "I0101",
    value: 80.16,
    tag_ratio: 0,
    partname: "소셜활동",
    fullname: "I0101-여가/일상-소셜활동"
  },
  {
    parent: "I01",
    id: "I0102",
    value: 37.34,
    tag_ratio: 0,
    partname: "TV/라디오",
    fullname: "I0102-여가/일상-TV/라디오"
  },
  {
    parent: "I0102",
    id: "I010201",
    value: 47.16,
    tag_ratio: 0,
    partname: "드라마",
    fullname: "I010201-여가/일상-TV/라디오-드라마"
  },
  {
    parent: "I010201",
    id: "I01020101",
    value: 3.08,
    tag_ratio: 0,
    partname: "해외",
    fullname: "I01020101-여가/일상-TV/라디오-드라마-해외"
  },
  {
    parent: "I010201",
    id: "I01020102",
    value: 66.05,
    tag_ratio: 0,
    partname: "국내",
    fullname: "I01020102-여가/일상-TV/라디오-드라마-국내"
  },
  {
    parent: "I0102",
    id: "I010202",
    value: 18.48,
    tag_ratio: 0,
    partname: "예능",
    fullname: "I010202-여가/일상-TV/라디오-예능"
  },
  {
    parent: "I0102",
    id: "I010203",
    value: 15.3,
    tag_ratio: 0,
    partname: "뉴스/시사/교양",
    fullname: "I010203-여가/일상-TV/라디오-뉴스/시사/교양"
  },
  {
    parent: "I0102",
    id: "I010204",
    value: 9.16,
    tag_ratio: 0,
    partname: "만화",
    fullname: "I010204-여가/일상-TV/라디오-만화"
  },
  {
    parent: "I0102",
    id: "I010205",
    value: 2.89,
    tag_ratio: 0,
    partname: "어린이방송",
    fullname: "I010205-여가/일상-TV/라디오-어린이방송"
  },
  {
    parent: "I0102",
    id: "I010206",
    value: 28.02,
    tag_ratio: 0,
    partname: "인터넷방송",
    fullname: "I010206-여가/일상-TV/라디오-인터넷방송"
  },
  {
    parent: "I01",
    id: "I0103",
    value: 70.9,
    tag_ratio: 0,
    partname: "킬링타임",
    fullname: "I0103-여가/일상-킬링타임"
  },
  {
    parent: "I0103",
    id: "I010301",
    value: 88.81,
    tag_ratio: 0,
    partname: "음악듣기",
    fullname: "I010301-여가/일상-킬링타임-음악듣기"
  },
  {
    parent: "I0103",
    id: "I010302",
    value: 8.05,
    tag_ratio: 0,
    partname: "유머/가쉽",
    fullname: "I010302-여가/일상-킬링타임-유머/가쉽"
  },
  {
    parent: "I01",
    id: "I0104",
    value: 4.82,
    tag_ratio: 0,
    partname: "유흥",
    fullname: "I0104-여가/일상-유흥"
  },
  {
    parent: "I01",
    id: "I0105",
    value: 9.77,
    tag_ratio: 0,
    partname: "문화생활",
    fullname: "I0105-여가/일상-문화생활"
  },
  {
    parent: "I0105",
    id: "I010501",
    value: 99.7,
    tag_ratio: 0,
    partname: "영화보기",
    fullname: "I010501-여가/일상-문화생활-영화보기"
  },

  {
    parent: "I02",
    id: "I0201",
    value: 80.43,
    tag_ratio: 0,
    partname: "건강관리",
    fullname: "I0201-건강-건강관리"
  },
  {
    parent: "I0201",
    id: "I020101",
    value: 18.25,
    tag_ratio: 0,
    partname: "운동",
    fullname: "I020101-건강-건강관리-운동"
  },
  {
    parent: "I0201",
    id: "I020102",
    value: 23.76,
    tag_ratio: 0,
    partname: "다이어트",
    fullname: "I020102-건강-건강관리-다이어트"
  },
  {
    parent: "I0201",
    id: "I020103",
    value: 73.09,
    tag_ratio: 0,
    partname: "건강증진",
    fullname: "I020103-건강-건강관리-건강증진"
  },
  {
    parent: "I02",
    id: "I0202",
    value: 39.42,
    tag_ratio: 0,
    partname: "건강정보",
    fullname: "I0202-건강-건강정보"
  },
  {
    parent: "I0202",
    id: "I020201",
    value: 8.39,
    tag_ratio: 0,
    partname: "의료기기",
    fullname: "I020201-건강-건강정보-의료기기"
  },
  {
    parent: "I0202",
    id: "I020202",
    value: 6.26,
    tag_ratio: 0,
    partname: "의약품",
    fullname: "I020202-건강-건강정보-의약품"
  },
  {
    parent: "I0202",
    id: "I020203",
    value: 60.73,
    tag_ratio: 0,
    partname: "건강식품/요리",
    fullname: "I020203-건강-건강정보-건강식품/요리"
  },
  {
    parent: "I0202",
    id: "I020204",
    value: 0.62,
    tag_ratio: 0,
    partname: "의학정보",
    fullname: "I020204-건강-건강정보-의학정보"
  },

  {
    parent: "I03",
    id: "I0301",
    value: 76.98,
    tag_ratio: 0,
    partname: "의류",
    fullname: "I0301-패션-의류"
  },
  {
    parent: "I0301",
    id: "I030101",
    value: 57.52,
    tag_ratio: 0,
    partname: "여성의류",
    fullname: "I030101-패션-의류-여성의류"
  },
  {
    parent: "I0301",
    id: "I030102",
    value: 19.82,
    tag_ratio: 0,
    partname: "남성의류",
    fullname: "I030102-패션-의류-남성의류"
  },
  {
    parent: "I0301",
    id: "I030103",
    value: 31.93,
    tag_ratio: 0,
    partname: "스포츠의류",
    fullname: "I030103-패션-의류-스포츠의류"
  },
  {
    parent: "I03",
    id: "I0302",
    value: 46.7,
    tag_ratio: 0,
    partname: "패션잡화",
    fullname: "I0302-패션-패션잡화"
  },
  {
    parent: "I0302",
    id: "I030201",
    value: 46.86,
    tag_ratio: 0,
    partname: "신발",
    fullname: "I030201-패션-패션잡화-신발"
  },
  {
    parent: "I0302",
    id: "I030202",
    value: 19,
    tag_ratio: 0,
    partname: "가방",
    fullname: "I030202-패션-패션잡화-가방"
  },
  {
    parent: "I0302",
    id: "I030203",
    value: 37.85,
    tag_ratio: 0,
    partname: "패션용품/액세서리",
    fullname: "I030203-패션-패션잡화-패션용품/액세서리"
  },
  {
    parent: "I03",
    id: "I0303",
    value: 10.21,
    tag_ratio: 0,
    partname: "브랜드",
    fullname: "I0303-패션-브랜드"
  },
  {
    parent: "I0303",
    id: "I030301",
    value: 72.2,
    tag_ratio: 0,
    partname: "명품",
    fullname: "I030301-패션-브랜드-명품"
  },

  {
    parent: "I04",
    id: "I0401",
    value: 99.05,
    tag_ratio: 0,
    partname: "게임장르",
    fullname: "I0401-게임-게임장르"
  },
  {
    parent: "I0401",
    id: "I040101",
    value: 0.02,
    tag_ratio: 0,
    partname: "교육",
    fullname: "I040101-게임-게임장르-교육"
  },
  {
    parent: "I0401",
    id: "I040102",
    value: 43.23,
    tag_ratio: 0,
    partname: "롤플레잉",
    fullname: "I040102-게임-게임장르-롤플레잉"
  },
  {
    parent: "I0401",
    id: "I040103",
    value: 7.28,
    tag_ratio: 0,
    partname: "스포츠",
    fullname: "I040103-게임-게임장르-스포츠"
  },
  {
    parent: "I0401",
    id: "I040104",
    value: 46.38,
    tag_ratio: 0,
    partname: "시뮬레이션",
    fullname: "I040104-게임-게임장르-시뮬레이션"
  },
  {
    parent: "I040104",
    id: "I04010402",
    value: 89.76,
    tag_ratio: 0,
    partname: "육성/경영",
    fullname: "I04010402-게임-게임장르-시뮬레이션-육성/경영"
  },
  {
    parent: "I040104",
    id: "I04010403",
    value: 18.2,
    tag_ratio: 0,
    partname: "비행",
    fullname: "I04010403-게임-게임장르-시뮬레이션-비행"
  },
  {
    parent: "I040104",
    id: "I04010404",
    value: 1.27,
    tag_ratio: 0,
    partname: "연애",
    fullname: "I04010404-게임-게임장르-시뮬레이션-연애"
  },
  {
    parent: "I0401",
    id: "I040105",
    value: 66.81,
    tag_ratio: 0,
    partname: "액션",
    fullname: "I040105-게임-게임장르-액션"
  },
  {
    parent: "I040105",
    id: "I04010501",
    value: 60.96,
    tag_ratio: 0,
    partname: "슈팅",
    fullname: "I04010501-게임-게임장르-액션-슈팅"
  },
  {
    parent: "I040105",
    id: "I04010502",
    value: 75.96,
    tag_ratio: 0,
    partname: "러닝게임",
    fullname: "I04010502-게임-게임장르-액션-러닝게임"
  },
  {
    parent: "I0401",
    id: "I040106",
    value: 5.62,
    tag_ratio: 0,
    partname: "리듬액션",
    fullname: "I040106-게임-게임장르-리듬액션"
  },
  {
    parent: "I0401",
    id: "I040107",
    value: 23.42,
    tag_ratio: 0,
    partname: "레이싱",
    fullname: "I040107-게임-게임장르-레이싱"
  },
  {
    parent: "I0401",
    id: "I040108",
    value: 15.79,
    tag_ratio: 0,
    partname: "전략",
    fullname: "I040108-게임-게임장르-전략"
  },
  {
    parent: "I0401",
    id: "I040109",
    value: 18.25,
    tag_ratio: 0,
    partname: "카드",
    fullname: "I040109-게임-게임장르-카드"
  },
  {
    parent: "I0401",
    id: "I040110",
    value: 59.95,
    tag_ratio: 0,
    partname: "보드",
    fullname: "I040110-게임-게임장르-보드"
  },
  {
    parent: "I0401",
    id: "I040111",
    value: 80.92,
    tag_ratio: 0,
    partname: "퍼즐",
    fullname: "I040111-게임-게임장르-퍼즐"
  },
  {
    parent: "I040111",
    id: "I04011101",
    value: 18.54,
    tag_ratio: 0,
    partname: "퀴즈",
    fullname: "I04011101-게임-게임장르-퍼즐-퀴즈"
  },
  {
    parent: "I040111",
    id: "I04011102",
    value: 94.26,
    tag_ratio: 0,
    partname: "짝맞추기",
    fullname: "I04011102-게임-게임장르-퍼즐-짝맞추기"
  },
  {
    parent: "I0401",
    id: "I040112",
    value: 5.05,
    tag_ratio: 0,
    partname: "어드벤처",
    fullname: "I040112-게임-게임장르-어드벤처"
  },
  {
    parent: "I0401",
    id: "I040113",
    value: 25.99,
    tag_ratio: 0,
    partname: "캐주얼",
    fullname: "I040113-게임-게임장르-캐주얼"
  },
  {
    parent: "I04",
    id: "I0402",
    value: 2.87,
    tag_ratio: 0,
    partname: "게임정보",
    fullname: "I0402-게임-게임정보"
  },
  {
    parent: "I0402",
    id: "I040201",
    value: 43.02,
    tag_ratio: 0,
    partname: "게임기",
    fullname: "I040201-게임-게임정보-게임기"
  },

  {
    parent: "I05",
    id: "I0501",
    value: 30.24,
    tag_ratio: 0,
    partname: "사교육",
    fullname: "I0501-교육-사교육"
  },
  {
    parent: "I0501",
    id: "I050101",
    value: 9.87,
    tag_ratio: 0,
    partname: "초등",
    fullname: "I050101-교육-사교육-초등"
  },
  {
    parent: "I0501",
    id: "I050102",
    value: 0.99,
    tag_ratio: 0,
    partname: "중등",
    fullname: "I050102-교육-사교육-중등"
  },
  {
    parent: "I0501",
    id: "I050103",
    value: 0.46,
    tag_ratio: 0,
    partname: "고등",
    fullname: "I050103-교육-사교육-고등"
  },
  {
    parent: "I0501",
    id: "I050104",
    value: 4.55,
    tag_ratio: 0,
    partname: "예/체능",
    fullname: "I050104-교육-사교육-예/체능"
  },
  {
    parent: "I0501",
    id: "I050105",
    value: 43.1,
    tag_ratio: 0,
    partname: "입시",
    fullname: "I050105-교육-사교육-입시"
  },
  {
    parent: "I05",
    id: "I0502",
    value: 39.41,
    tag_ratio: 0,
    partname: "어학",
    fullname: "I0502-교육-어학"
  },
  {
    parent: "I05",
    id: "I0503",
    value: 3.02,
    tag_ratio: 0,
    partname: "어학연수/유학",
    fullname: "I0503-교육-어학연수/유학"
  },
  {
    parent: "I05",
    id: "I0504",
    value: 41.23,
    tag_ratio: 0,
    partname: "학교생활/관리",
    fullname: "I0504-교육-학교생활/관리"
  },
  {
    parent: "I0504",
    id: "I050401",
    value: 0.62,
    tag_ratio: 0,
    partname: "진로/적성",
    fullname: "I050401-교육-학교생활/관리-진로/적성"
  },
  {
    parent: "I0504",
    id: "I050402",
    value: 39.88,
    tag_ratio: 0,
    partname: "대학교/대학원",
    fullname: "I050402-교육-학교생활/관리-대학교/대학원"
  },
  {
    parent: "I0504",
    id: "I050403",
    value: 4.06,
    tag_ratio: 0,
    partname: "초등학교",
    fullname: "I050403-교육-학교생활/관리-초등학교"
  },
  {
    parent: "I0504",
    id: "I050404",
    value: 3.02,
    tag_ratio: 0,
    partname: "중학교",
    fullname: "I050404-교육-학교생활/관리-중학교"
  },
  {
    parent: "I0504",
    id: "I050405",
    value: 9.84,
    tag_ratio: 0,
    partname: "고등학교",
    fullname: "I050405-교육-학교생활/관리-고등학교"
  },
  {
    parent: "I05",
    id: "I0505",
    value: 4.14,
    tag_ratio: 0,
    partname: "자격증",
    fullname: "I0505-교육-자격증"
  },

  {
    parent: "I06",
    id: "I0602",
    value: 51.28,
    tag_ratio: 0,
    partname: "주거/살림",
    fullname: "I0602-가정/생활-주거/살림"
  },
  {
    parent: "I0602",
    id: "I060201",
    value: 67.26,
    tag_ratio: 0,
    partname: "인테리어",
    fullname: "I060201-가정/생활-주거/살림-인테리어"
  },
  {
    parent: "I0602",
    id: "I060202",
    value: 7.94,
    tag_ratio: 0,
    partname: "지역정보",
    fullname: "I060202-가정/생활-주거/살림-지역정보"
  },
  {
    parent: "I06",
    id: "I0603",
    value: 0.11,
    tag_ratio: 0,
    partname: "이민/이민정보",
    fullname: "I0603-가정/생활-이민/이민정보"
  },
  {
    parent: "I06",
    id: "I0604",
    value: 75.67,
    tag_ratio: 0,
    partname: "마일리지/리워드",
    fullname: "I0604-가정/생활-마일리지/리워드"
  },

  {
    parent: "I07",
    id: "I0701",
    value: 52.93,
    tag_ratio: 0,
    partname: "재테크",
    fullname: "I0701-금융-재테크"
  },
  {
    parent: "I0701",
    id: "I070101",
    value: 36.49,
    tag_ratio: 0,
    partname: "보험",
    fullname: "I070101-금융-재테크-보험"
  },
  {
    parent: "I0701",
    id: "I070102",
    value: 42.93,
    tag_ratio: 0,
    partname: "주식/증권",
    fullname: "I070102-금융-재테크-주식/증권"
  },
  {
    parent: "I07",
    id: "I0702",
    value: 44.22,
    tag_ratio: 0,
    partname: "부동산",
    fullname: "I0702-금융-부동산"
  },
  {
    parent: "I07",
    id: "I0703",
    value: 12.97,
    tag_ratio: 0,
    partname: "대출",
    fullname: "I0703-금융-대출"
  },

  {
    parent: "I08",
    id: "I0801",
    value: 43.29,
    tag_ratio: 0,
    partname: "육아정보",
    fullname: "I0801-육아-육아정보"
  },
  {
    parent: "I0801",
    id: "I080101",
    value: 4.55,
    tag_ratio: 0,
    partname: "공연/전시",
    fullname: "I080101-육아-육아정보-공연/전시"
  },
  {
    parent: "I0801",
    id: "I080102",
    value: 58.19,
    tag_ratio: 0,
    partname: "아동패션",
    fullname: "I080102-육아-육아정보-아동패션"
  },
  {
    parent: "I08",
    id: "I0802",
    value: 22.45,
    tag_ratio: 0,
    partname: "육아/유아교육",
    fullname: "I0802-육아-육아/유아교육"
  },
  {
    parent: "I08",
    id: "I0803",
    value: 13.75,
    tag_ratio: 0,
    partname: "육아준비",
    fullname: "I0803-육아-육아준비"
  },

  {
    parent: "I09",
    id: "I0901",
    value: 34.86,
    tag_ratio: 0,
    partname: "헤어",
    fullname: "I0901-뷰티-헤어"
  },
  {
    parent: "I09",
    id: "I0902",
    value: 3.86,
    tag_ratio: 0,
    partname: "네일",
    fullname: "I0902-뷰티-네일"
  },
  {
    parent: "I09",
    id: "I0903",
    value: 76.71,
    tag_ratio: 0,
    partname: "피부",
    fullname: "I0903-뷰티-피부"
  },
  {
    parent: "I0903",
    id: "I090301",
    value: 32.43,
    tag_ratio: 0,
    partname: "피부관리",
    fullname: "I090301-뷰티-피부-피부관리"
  },
  {
    parent: "I0903",
    id: "I090302",
    value: 89.4,
    tag_ratio: 0,
    partname: "화장품",
    fullname: "I090302-뷰티-피부-화장품"
  },
  {
    parent: "I09",
    id: "I0905",
    value: 28.56,
    tag_ratio: 0,
    partname: "외모관리",
    fullname: "I0905-뷰티-외모관리"
  },

  {
    parent: "I10",
    id: "I1001",
    value: 85.05,
    tag_ratio: 0,
    partname: "연예인",
    fullname: "I1001-인물-연예인"
  },
  {
    parent: "I1001",
    id: "I100101",
    value: 75.42,
    tag_ratio: 0,
    partname: "가수",
    fullname: "I100101-인물-연예인-가수"
  },
  {
    parent: "I1001",
    id: "I100102",
    value: 51.07,
    tag_ratio: 0,
    partname: "배우/영화배우",
    fullname: "I100102-인물-연예인-배우/영화배우"
  },
  {
    parent: "I10",
    id: "I1002",
    value: 23.67,
    tag_ratio: 0,
    partname: "스포츠인",
    fullname: "I1002-인물-스포츠인"
  },
  {
    parent: "I10",
    id: "I1003",
    value: 24.21,
    tag_ratio: 0,
    partname: "정치인",
    fullname: "I1003-인물-정치인"
  },
  {
    parent: "I10",
    id: "I1004",
    value: 0.03,
    tag_ratio: 0,
    partname: "게이머",
    fullname: "I1004-인물-게이머"
  },

  {
    parent: "I11",
    id: "I1101",
    value: 55.07,
    tag_ratio: 0,
    partname: "책",
    fullname: "I1101-도서/만화/애니-책"
  },
  {
    parent: "I1101",
    id: "I110101",
    value: 1.53,
    tag_ratio: 0,
    partname: "소설",
    fullname: "I110101-도서/만화/애니-책-소설"
  },
  {
    parent: "I1101",
    id: "I110102",
    value: 19.46,
    tag_ratio: 0,
    partname: "만화",
    fullname: "I110102-도서/만화/애니-책-만화"
  },
  {
    parent: "I11",
    id: "I1102",
    value: 2.01,
    tag_ratio: 0,
    partname: "애니메이션",
    fullname: "I1102-도서/만화/애니-애니메이션"
  },
  {
    parent: "I11",
    id: "I1103",
    value: 54.68,
    tag_ratio: 0,
    partname: "웹툰/웹소설",
    fullname: "I1103-도서/만화/애니-웹툰/웹소설"
  },

  {
    parent: "I12",
    id: "I1201",
    value: 16.41,
    tag_ratio: 0,
    partname: "미술/디자인",
    fullname: "I1201-문화/예술-미술/디자인"
  },

  {
    parent: "I13",
    id: "I1301",
    value: 7.52,
    tag_ratio: 0,
    partname: "콘서트",
    fullname: "I1301-공연-콘서트"
  },
  {
    parent: "I13",
    id: "I1302",
    value: 13.04,
    tag_ratio: 0,
    partname: "뮤지컬",
    fullname: "I1302-공연-뮤지컬"
  },
  {
    parent: "I13",
    id: "I1303",
    value: 4.76,
    tag_ratio: 0,
    partname: "연극",
    fullname: "I1303-공연-연극"
  },
  {
    parent: "I13",
    id: "I1304",
    value: 0.74,
    tag_ratio: 0,
    partname: "클래식/무용",
    fullname: "I1304-공연-클래식/무용"
  },
  {
    parent: "I13",
    id: "I1305",
    value: 26.86,
    tag_ratio: 0,
    partname: "전시",
    fullname: "I1305-공연-전시"
  },

  {
    parent: "I14",
    id: "I1401",
    value: 67.12,
    tag_ratio: 0,
    partname: "국내여행",
    fullname: "I1401-여행-국내여행"
  },
  {
    parent: "I1401",
    id: "I140101",
    value: 22.04,
    tag_ratio: 0,
    partname: "지역",
    fullname: "I140101-여행-국내여행-지역"
  },
  {
    parent: "I140101",
    id: "I14010101",
    value: 47.53,
    tag_ratio: 0,
    partname: "제주",
    fullname: "I14010101-여행-국내여행-지역-제주"
  },
  {
    parent: "I14",
    id: "I1402",
    value: 41.12,
    tag_ratio: 0,
    partname: "해외여행",
    fullname: "I1402-여행-해외여행"
  },
  {
    parent: "I1402",
    id: "I140201",
    value: 41.54,
    tag_ratio: 0,
    partname: "지역",
    fullname: "I140201-여행-해외여행-지역"
  },
  {
    parent: "I140201",
    id: "I14020101",
    value: 36.32,
    tag_ratio: 0,
    partname: "동남아",
    fullname: "I14020101-여행-해외여행-지역-동남아"
  },
  {
    parent: "I140201",
    id: "I14020102",
    value: 8.64,
    tag_ratio: 0,
    partname: "중국",
    fullname: "I14020102-여행-해외여행-지역-중국"
  },
  {
    parent: "I140201",
    id: "I14020103",
    value: 19.54,
    tag_ratio: 0,
    partname: "일본",
    fullname: "I14020103-여행-해외여행-지역-일본"
  },
  {
    parent: "I140201",
    id: "I14020104",
    value: 12.95,
    tag_ratio: 0,
    partname: "그외아시아",
    fullname: "I14020104-여행-해외여행-지역-그외아시아"
  },
  {
    parent: "I140201",
    id: "I14020105",
    value: 11.81,
    tag_ratio: 0,
    partname: "미국",
    fullname: "I14020105-여행-해외여행-지역-미국"
  },
  {
    parent: "I140201",
    id: "I14020106",
    value: 3.36,
    tag_ratio: 0,
    partname: "캐나다",
    fullname: "I14020106-여행-해외여행-지역-캐나다"
  },
  {
    parent: "I140201",
    id: "I14020107",
    value: 16.86,
    tag_ratio: 0,
    partname: "유럽",
    fullname: "I14020107-여행-해외여행-지역-유럽"
  },
  {
    parent: "I14",
    id: "I1403",
    value: 4.15,
    tag_ratio: 0,
    partname: "자유여행",
    fullname: "I1403-여행-자유여행"
  },
  {
    parent: "I14",
    id: "I1404",
    value: 0.48,
    tag_ratio: 0,
    partname: "패키지여행",
    fullname: "I1404-여행-패키지여행"
  },

  {
    parent: "I16",
    id: "I1601",
    value: 31.34,
    tag_ratio: 0,
    partname: "쿠킹(레시피)",
    fullname: "I1601-요리/맛집-쿠킹(레시피)"
  },
  {
    parent: "I16",
    id: "I1602",
    value: 87.51,
    tag_ratio: 0,
    partname: "맛집",
    fullname: "I1602-요리/맛집-맛집"
  },
  {
    parent: "I1602",
    id: "I160201",
    value: 30.89,
    tag_ratio: 0,
    partname: "한식",
    fullname: "I160201-요리/맛집-맛집-한식"
  },
  {
    parent: "I1602",
    id: "I160202",
    value: 8.2,
    tag_ratio: 0,
    partname: "일식",
    fullname: "I160202-요리/맛집-맛집-일식"
  },
  {
    parent: "I1602",
    id: "I160203",
    value: 5.76,
    tag_ratio: 0,
    partname: "중식",
    fullname: "I160203-요리/맛집-맛집-중식"
  },
  {
    parent: "I1602",
    id: "I160204",
    value: 34.57,
    tag_ratio: 0,
    partname: "양식",
    fullname: "I160204-요리/맛집-맛집-양식"
  },
  {
    parent: "I1602",
    id: "I160205",
    value: 1.95,
    tag_ratio: 0,
    partname: "퓨전",
    fullname: "I160205-요리/맛집-맛집-퓨전"
  },
  {
    parent: "I1602",
    id: "I160206",
    value: 2.94,
    tag_ratio: 0,
    partname: "기타 외국식",
    fullname: "I160206-요리/맛집-맛집-기타 외국식"
  },
  {
    parent: "I1602",
    id: "I160207",
    value: 33.98,
    tag_ratio: 0,
    partname: "패스트푸드",
    fullname: "I160207-요리/맛집-맛집-패스트푸드"
  },
  {
    parent: "I1602",
    id: "I160208",
    value: 23.62,
    tag_ratio: 0,
    partname: "디저트",
    fullname: "I160208-요리/맛집-맛집-디저트"
  },
  {
    parent: "I1602",
    id: "I160209",
    value: 15.05,
    tag_ratio: 0,
    partname: "간식/분식",
    fullname: "I160209-요리/맛집-맛집-간식/분식"
  },
  {
    parent: "I1602",
    id: "I160210",
    value: 22.77,
    tag_ratio: 0,
    partname: "카페",
    fullname: "I160210-요리/맛집-맛집-카페"
  },
  {
    parent: "I1602",
    id: "I160211",
    value: 1.95,
    tag_ratio: 0,
    partname: "뷔페",
    fullname: "I160211-요리/맛집-맛집-뷔페"
  },

  {
    parent: "I17",
    id: "I1701",
    value: 20.55,
    tag_ratio: 0,
    partname: "IT/컴퓨터",
    fullname: "I1701-지식/동향/이슈-IT/컴퓨터"
  },
  {
    parent: "I17",
    id: "I1702",
    value: 12.14,
    tag_ratio: 0,
    partname: "사회",
    fullname: "I1702-지식/동향/이슈-사회"
  },
  {
    parent: "I17",
    id: "I1703",
    value: 50.87,
    tag_ratio: 0,
    partname: "정치",
    fullname: "I1703-지식/동향/이슈-정치"
  },
  {
    parent: "I17",
    id: "I1704",
    value: 0.68,
    tag_ratio: 0,
    partname: "건강/의학",
    fullname: "I1704-지식/동향/이슈-건강/의학"
  },
  {
    parent: "I17",
    id: "I1705",
    value: 7.05,
    tag_ratio: 0,
    partname: "비즈니스/경제",
    fullname: "I1705-지식/동향/이슈-비즈니스/경제"
  },
  {
    parent: "I17",
    id: "I1706",
    value: 25.85,
    tag_ratio: 0,
    partname: "연예",
    fullname: "I1706-지식/동향/이슈-연예"
  },

  {
    parent: "I18",
    id: "I1801",
    value: 13.12,
    tag_ratio: 0,
    partname: "야구",
    fullname: "I1801-스포츠-야구"
  },
  {
    parent: "I18",
    id: "I1802",
    value: 17.6,
    tag_ratio: 0,
    partname: "축구",
    fullname: "I1802-스포츠-축구"
  },
  {
    parent: "I18",
    id: "I1803",
    value: 1.73,
    tag_ratio: 0,
    partname: "농구",
    fullname: "I1803-스포츠-농구"
  },
  {
    parent: "I18",
    id: "I1804",
    value: 26.57,
    tag_ratio: 0,
    partname: "골프",
    fullname: "I1804-스포츠-골프"
  },
  {
    parent: "I18",
    id: "I1805",
    value: 2.32,
    tag_ratio: 0,
    partname: "배구",
    fullname: "I1805-스포츠-배구"
  },

  {
    parent: "I19",
    id: "I1901",
    value: 7.9,
    tag_ratio: 0,
    partname: "창업",
    fullname: "I1901-취업-창업"
  },
  {
    parent: "I19",
    id: "I1902",
    value: 15.44,
    tag_ratio: 0,
    partname: "공시/고시정보",
    fullname: "I1902-취업-공시/고시정보"
  },

  {
    parent: "I20",
    id: "I2001",
    value: 28.2,
    tag_ratio: 0,
    partname: "액션/SF",
    fullname: "I2001-영화-액션/SF"
  },
  {
    parent: "I20",
    id: "I2002",
    value: 14.64,
    tag_ratio: 0,
    partname: "코미디",
    fullname: "I2002-영화-코미디"
  },
  {
    parent: "I20",
    id: "I2003",
    value: 24.27,
    tag_ratio: 0,
    partname: "드라마/가족",
    fullname: "I2003-영화-드라마/가족"
  },
  {
    parent: "I20",
    id: "I2004",
    value: 11.43,
    tag_ratio: 0,
    partname: "공포/스릴러",
    fullname: "I2004-영화-공포/스릴러"
  },
  {
    parent: "I20",
    id: "I2005",
    value: 9.86,
    tag_ratio: 0,
    partname: "로맨스/멜로",
    fullname: "I2005-영화-로맨스/멜로"
  },
  {
    parent: "I20",
    id: "I2006",
    value: 11.96,
    tag_ratio: 0,
    partname: "애니메이션",
    fullname: "I2006-영화-애니메이션"
  },

  {
    parent: "I22",
    id: "I2201",
    value: 15.03,
    tag_ratio: 0,
    partname: "국산차",
    fullname: "I2201-자동차-국산차"
  },
  {
    parent: "I22",
    id: "I2202",
    value: 18.37,
    tag_ratio: 0,
    partname: "수입차",
    fullname: "I2202-자동차-수입차"
  },
  {
    parent: "I22",
    id: "I2203",
    value: 7.06,
    tag_ratio: 0,
    partname: "중고차",
    fullname: "I2203-자동차-중고차"
  },
  {
    parent: "I22",
    id: "I2204",
    value: 0.84,
    tag_ratio: 0,
    partname: "오토바이",
    fullname: "I2204-자동차-오토바이"
  },
  {
    parent: "I22",
    id: "I2205",
    value: 23.3,
    tag_ratio: 0,
    partname: "자동차관리",
    fullname: "I2205-자동차-자동차관리"
  },
  {
    parent: "I2205",
    id: "I220501",
    value: 3.83,
    tag_ratio: 0,
    partname: "튜닝",
    fullname: "I220501-자동차-자동차관리-튜닝"
  },

  {
    parent: "I23",
    id: "I2301",
    value: 2.52,
    tag_ratio: 0,
    partname: "해양스포츠",
    fullname: "I2301-취미/레저-해양스포츠"
  },
  {
    parent: "I23",
    id: "I2302",
    value: 1.29,
    tag_ratio: 0,
    partname: "스키/보드",
    fullname: "I2302-취미/레저-스키/보드"
  },
  {
    parent: "I23",
    id: "I2303",
    value: 12.1,
    tag_ratio: 0,
    partname: "사진",
    fullname: "I2303-취미/레저-사진"
  },
  {
    parent: "I23",
    id: "I2304",
    value: 5.04,
    tag_ratio: 0,
    partname: "자전거",
    fullname: "I2304-취미/레저-자전거"
  },
  {
    parent: "I23",
    id: "I2305",
    value: 0.92,
    tag_ratio: 0,
    partname: "캠핑",
    fullname: "I2305-취미/레저-캠핑"
  },
  {
    parent: "I23",
    id: "I2306",
    value: 2,
    tag_ratio: 0,
    partname: "낚시",
    fullname: "I2306-취미/레저-낚시"
  },
  {
    parent: "I23",
    id: "I2307",
    value: 3.2,
    tag_ratio: 0,
    partname: "등산",
    fullname: "I2307-취미/레저-등산"
  },
  {
    parent: "I23",
    id: "I2308",
    value: 80.86,
    tag_ratio: 0,
    partname: "봉사/기부",
    fullname: "I2308-취미/레저-봉사/기부"
  },

  {
    parent: "I24",
    id: "I2401",
    value: 97.42,
    tag_ratio: 0,
    partname: "업종/직종",
    fullname: "I2401-직업-업종/직종"
  },
  {
    parent: "I2401",
    id: "I240101",
    value: 38.06,
    tag_ratio: 0,
    partname: "자영업",
    fullname: "I240101-직업-업종/직종-자영업"
  },
  {
    parent: "I2401",
    id: "I240102",
    value: 62.34,
    tag_ratio: 0,
    partname: "직장생활",
    fullname: "I240102-직업-업종/직종-직장생활"
  },

  {
    parent: "I25",
    id: "I2501",
    value: 2.99,
    tag_ratio: 0,
    partname: "이사",
    fullname: "I2501-라이프이벤트-이사"
  },
  {
    parent: "I25",
    id: "I2502",
    value: 26.79,
    tag_ratio: 0,
    partname: "결혼",
    fullname: "I2502-라이프이벤트-결혼"
  },
  {
    parent: "I25",
    id: "I2504",
    value: 54.96,
    tag_ratio: 0,
    partname: "연애/만남",
    fullname: "I2504-라이프이벤트-연애/만남"
  },
  {
    parent: "I25",
    id: "I2505",
    value: 21.88,
    tag_ratio: 0,
    partname: "군대",
    fullname: "I2505-라이프이벤트-군대"
  },

  {
    parent: "I26",
    id: "I2601",
    value: 85.68,
    tag_ratio: 0,
    partname: "음악장르",
    fullname: "I2601-음악-음악장르"
  },
  {
    parent: "I2601",
    id: "I260101",
    value: 67.17,
    tag_ratio: 0,
    partname: "댄스",
    fullname: "I260101-음악-음악장르-댄스"
  },
  {
    parent: "I2601",
    id: "I260102",
    value: 76.46,
    tag_ratio: 0,
    partname: "발라드",
    fullname: "I260102-음악-음악장르-발라드"
  },
  {
    parent: "I2601",
    id: "I260103",
    value: 55.02,
    tag_ratio: 0,
    partname: "POP",
    fullname: "I260103-음악-음악장르-POP"
  },
  {
    parent: "I2601",
    id: "I260104",
    value: 25.69,
    tag_ratio: 0,
    partname: "트로트",
    fullname: "I260104-음악-음악장르-트로트"
  },
  {
    parent: "I2601",
    id: "I260105",
    value: 61.55,
    tag_ratio: 0,
    partname: "랩/힙합",
    fullname: "I260105-음악-음악장르-랩/힙합"
  },
  {
    parent: "I2601",
    id: "I260106",
    value: 60.94,
    tag_ratio: 0,
    partname: "록/메탈",
    fullname: "I260106-음악-음악장르-록/메탈"
  },
  {
    parent: "I2601",
    id: "I260107",
    value: 31.69,
    tag_ratio: 0,
    partname: "일렉트로니카",
    fullname: "I260107-음악-음악장르-일렉트로니카"
  },
  {
    parent: "I2601",
    id: "I260108",
    value: 14.47,
    tag_ratio: 0,
    partname: "재즈/뉴에이지",
    fullname: "I260108-음악-음악장르-재즈/뉴에이지"
  },
  {
    parent: "I2601",
    id: "I260109",
    value: 14.74,
    tag_ratio: 0,
    partname: "클래식",
    fullname: "I260109-음악-음악장르-클래식"
  },
  {
    parent: "I2601",
    id: "I260110",
    value: 39.19,
    tag_ratio: 0,
    partname: "포크/블루스",
    fullname: "I260110-음악-음악장르-포크/블루스"
  },
  {
    parent: "I2601",
    id: "I260111",
    value: 49.88,
    tag_ratio: 0,
    partname: "인디음악",
    fullname: "I260111-음악-음악장르-인디음악"
  },
  {
    parent: "I2601",
    id: "I260112",
    value: 8.27,
    tag_ratio: 0,
    partname: "CCM/종교음악",
    fullname: "I260112-음악-음악장르-CCM/종교음악"
  },
  {
    parent: "I2601",
    id: "I260113",
    value: 64.12,
    tag_ratio: 0,
    partname: "OST",
    fullname: "I260113-음악-음악장르-OST"
  },
  {
    parent: "I260113",
    id: "I26011301",
    value: 88.49,
    tag_ratio: 0,
    partname: "드라마",
    fullname: "I26011301-음악-음악장르-OST-드라마"
  },
  {
    parent: "I260113",
    id: "I26011302",
    value: 73.42,
    tag_ratio: 0,
    partname: "영화/애니메이션",
    fullname: "I26011302-음악-음악장르-OST-영화/애니메이션"
  },
  {
    parent: "I2601",
    id: "I260114",
    value: 35.7,
    tag_ratio: 0,
    partname: "어린이음악",
    fullname: "I260114-음악-음악장르-어린이음악"
  },
  {
    parent: "I260114",
    id: "I26011401",
    value: 21.29,
    tag_ratio: 0,
    partname: "동요",
    fullname: "I26011401-음악-음악장르-어린이음악-동요"
  },
  {
    parent: "I260114",
    id: "I26011402",
    value: 2.07,
    tag_ratio: 0,
    partname: "태교음악",
    fullname: "I26011402-음악-음악장르-어린이음악-태교음악"
  }
];

// function makePlotSunBurstOptions(): Highcharts.PlotSunburstOptions {
//   // shared options for all sunburst series
//   return {};
// }

// function makePlotSeriesOptions(): Highcharts.PlotSeriesOptions {
//   // general options for all series
//   return {};
// }

function makeSunburstSeries(
  sunburstDataList: SunburstItem[]
): Highcharts.SeriesSunburstOptions {
  return {
    type: "sunburst",
    data: sunburstDataList,
    allowTraversingTree: true,
    // levelIsConstant: false,
    // colorByPoint: true,
    cursor: "pointer",
    dataLabels: {
      format: "{point.partname}",
      filter: {
        property: "innerArcLength",
        operator: ">",
        value: 16
      }
    },
    colors: [
      "#7095CC",
      "#708FCC",
      "#7089CC",
      "#7084CC",
      "#707ECC",
      "#7078CC",
      "#7072CC",
      "#7470CC",
      "#7A70CC",
      "#8070CC",
      "#8570CC",
      "#8B70CC",
      "#9170CC",
      "#9770CC",
      "#9D70CC",
      "#A270CC",
      "#A870CC",
      "#AE70CC",
      "#B470CC",
      "#BA70CC"
    ],
    levels: [
      {
        level: 1,
        dataLabels: {
          filter: {
            property: "outerArcLength",
            operator: ">",
            value: 64
          }
        }
      },
      {
        level: 2,
        colorByPoint: true
      },
      {
        level: 3,
        colorVariation: {
          key: "brightness",
          to: 0.5
        }
      },
      {
        level: 4,
        colorVariation: {
          key: "brightness",
          to: 0.5
        }
      }
    ] as (Highcharts.PlotSunburstLevelsOptions & IExtendSunburstLevelsOption)[]
  };
}

function makeSunburstChartOption(
  sunburstDataList: SunburstItem[]
): Highcharts.Options {
  return {
    chart: {
      height: "100%"
    },
    title: {
      text: ""
    },
    credits: { enabled: false },
    series: [makeSunburstSeries(sunburstDataList)],
    tooltip: {
      headerFormat: "",
      pointFormat: "<b>{point.fullname}</b>: {point.value}%"
    }
  };
}

function drawTagOccupancy($container: HTMLDivElement) {
  // 태그별 점유도에 사용되는 선버스트 그래프
  Highcharts.chart($container, makeSunburstChartOption(DEMO_SUNBURST_LIST));
}

export default drawTagOccupancy;
