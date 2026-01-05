const uniqueIdentifier = "JWK-WEDDING-TEMPLATE-V1";

// 갤러리 레이아웃 타입 정의
type GalleryLayout = "scroll" | "grid";
type GalleryPosition = "middle" | "bottom";

interface GalleryConfig {
  layout: GalleryLayout;
  position: GalleryPosition;
  images: string[];
}

export const weddingConfig = {
  // 메타 정보
  meta: {
    title: "김영환 ❤️ 박정인의 결혼식에 초대합니다",
    description: "결혼식 초대장",
    ogImage: "/images/ha0h-1fsi-bqt3.jpg",
    noIndex: true,
    _jwk_watermark_id: uniqueIdentifier,
  },

  // 메인 화면
  main: {
    title: "Wedding Invitation",
    image: "/images/ha0h-1fsi-bqt3.jpg",
    date: "2026년 3월 21일 토요일 13시 40분",
    venue: "루이비스컨벤션웨딩홀"
  },

  // 소개글
  intro: {
    title: "",
    text: "서로를 바라보며 걸어온\n소중한 발걸음이\n이제 하나의 길로 이어집니다.\n\n사랑과 믿음으로\n새 가정을 이루는 저희 두 사람의\n작은 시작을 알려드립니다."
  },

  // 결혼식 일정
  date: {
    year: 2026,
    month: 3,
    day: 21,
    hour: 13,
    minute: 40,
    displayDate: "2026.03.21 SAT PM 13:40",
  },

  // 장소 정보
  venue: {
    name: "루이비스컨벤션웨딩홀",
    address: "서울 송파구 법원로9길 26 H비즈니스파크 D동 루이비스컨벤션\n지하1층 아모리스홀",
    tel: "02-6281-9000",
    naverMapId: "루이비스컨벤션웨딩홀",
    coordinates: {
      latitude: 37.480994,
      longitude: 127.119327,
    },
    placeId: "ChIJXaUpTfn9fDURwQYEvQYMWSA",
    mapZoom: "17",
    mapNaverCoordinates: "14146303.7572431,4489320.0338415,15,0,0,0,dh",
    transportation: {
      subway: "문정역(8호선) 도보 10분 또는 4번 출구 앞 셔틀버스 10분 간격 배차 운행",
      bus: "일반버스(초록)\n 30, 31, 32, 331, 100, 119\n간선버스(파랑)\n302, 303, 320, 333, 343, 345, 350, 360\n지선버스(초록)\n3420\n광역버스(빨강)\n9403\n직행좌석버스(빨강)\n500-1,1009,1112,1117,1650,3302,G2100",
    },
    parking: "네비게이션 이용시 : 루이비스컨벤션 또는 주소 입력\n웨딩홀 건물(H비지니스파크) 내 A, B동 C, D동 B1~B4 1300여대 주차가능",
    groomShuttle: {
      location: "경기도 광주 성결교회",
      departureTime: "오전 10시 30분 출발",
      contact: {
        name: "담당자명",
        tel: "010-1234-5678"
      }
    },
    brideShuttle: {
      location: "경북 구미시",
      departureTime: "오전 11시 출발",
      contact: {
        name: "담당자명",
        tel: "010-9876-5432"
      }
    }
  },

  // 갤러리
  gallery: {
    layout: "grid" as GalleryLayout,
    position: "bottom" as GalleryPosition,
    images: [
      "/images/gallery/image1.jpg",
      "/images/gallery/image2.jpg",
      "/images/gallery/image3.jpg",
      "/images/gallery/image4.jpg",
      "/images/gallery/image5.jpg",
      "/images/gallery/image6.jpg",
      "/images/gallery/image7.jpg",
      "/images/gallery/image8.jpg",
      "/images/gallery/image9.jpg",
    ],
  } as GalleryConfig,

  // 초대의 말씀
  invitation: {
    message: "한 줄기 별빛이 되어 만난 인연\n평생을 함께 걸어가려 합니다.\n\n소중한 분들의 축복 속에\n저희 두 사람이 첫 걸음을 내딛습니다.\n\n귀한 시간 내어 함께해 주신다면\n그 어떤 축복보다 값진 선물이 될 것입니다.",
    groom: {
      name: "김영환",
      label: "아들",
      father: "김의수",
      mother: "이정옥",
    },
    bride: {
      name: "박정인",
      label: "딸",
      father: "박운봉",
      mother: "백승희",
    },
  },

  // 계좌번호 (구조를 모두 통일하여 에러 방지)
  account: {
    groom: {
      bank: "기업은행",
      number: "242066607-02-014",
      holder: "김영환",
    },
    bride: {
      bank: "국민은행",
      number: "987-654-321098",
      holder: "박정인",
    },
    groomFather: {
      bank: "농협",
      number: "221022-56-005417",
      holder: "김의수",
    },
    groomMother: {
      bank: "농협",
      number: "171395-52-078221",
      holder: "이정옥",
    },
    brideFather: {
      bank: "농협", // 실제 은행명으로 수정 필요
      number: "999-000-111222", // 실제 계좌로 수정 필요
      holder: "박운봉",
    },
    //brideMother: {
    //  bank: "농협",
    //  number: "741092-56-066907",
    //  holder: "백승희",
   // }
  },

  // RSVP 설정
  rsvp: {
    enabled: false,
    showMealOption: false,
  },

  // 슬랙 알림 설정 (에러 방지를 위해 비워둠)
  slack: {
    webhookUrl: "",
    channel: "",
    compactMessage: true,
  },
};