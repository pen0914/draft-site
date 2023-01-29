import React from "react";

import { Item } from "../../type/api/Item";

export const ItemContext = React.createContext<Item[]>([
  {
    id: 1,
    image:
      "https://lh3.googleusercontent.com/pw/AMWts8AA4X648JlHB8hvuU73-O0kY4b-uHe29b5EbV0b6yMcSnIo-4s0oFXMyyH9e7i-59FaUCmgKIVYqYdyy3Kk1DSV7EAcy8MGqJEgTVK_XAdDgPQv3C0VORDOCXzwLGkgerZtoHa5W15Vwd8mSUth4z7H=s855-no?authuser=0",

    name: "TrackJacket",
    price: "￥5,100",
    brand: "Vintage",
    category: "トラックジャケット",
    detail: "ベロア生地",
    size: "M",
    condition: "A",
    partNumber: "1n21u"
  },
  {
    id: 2,
    image:
      "https://lh3.googleusercontent.com/pw/AMWts8AcPoBVZSlIDDcap7YAOCWgf_NmwwZM3mLwg3CnCx1uVmV7mtiy42pf3PCLKZ2OW5gt5JyQ398YgzYOQLFepsZRGSI6J3bMazhc_RXquv-t9O0PUfBKW-rFaNzPv9iNxhmCohKeiG7b2KTQSl_M8-xa=s855-no?authuser=0",

    name: "SweatMickey",
    price: "￥7,900",
    brand: "Vintage",
    category: "スウェット",
    detail: "ポケット付き",
    size: "M",
    condition: "B",
    partNumber: "1n21sdsd"
  },
  {
    id: 3,
    image:
      "https://lh3.googleusercontent.com/pw/AMWts8Buc3frfUJrLqfvGWK-FExQi3JcwljEz2jEsV1rj2esJDcKF3dKiTE3AdBC_s2CJEzO0p6htwcYuVkFDsIJmJVysJaR31sDKB4ahYsC-pWjKjtHzlsDIEhVmz5HajpKgmDiVsmdnykf2Z617Exz0PPM=s855-no?authuser=0",

    name: "TrackJacket",
    price: "￥6,100",
    brand: "Vintage",
    category: "トラックジャケット",
    detail: "裏地にメッシュ",
    size: "M",
    condition: "A",
    partNumber: "1nssa1u"
  },
  {
    id: 4,
    image:
      "https://lh3.googleusercontent.com/pw/AMWts8BF4KD0DYYIPumym0xUIml3k_ILEG1Zw5VEapclMGRczPWE8peZsegx0iL-P-qRWXuixUMz6tkqbH38glpIJ2BTil7QpIJTfQKnHF7cJ6L4LpnL78eBmT1TaeRe3olvd9_MP7ItKoChgXnwYOTrnvSC=s855-no?authuser=0",

    name: "TruckPants",
    price: "￥13,800",
    brand: "Vintage",
    category: "トラックパンツ",
    detail: "サイドラインに刺繍",
    size: "S",
    condition: "B",
    partNumber: "adsn21u"
  },
  {
    id: 5,
    image:
      "https://lh3.googleusercontent.com/pw/AMWts8BekjEnzDBNSrIMY2-s6glyjjrztENEAd55vuTBOJCQV4oW43u5FEbyYo3FMnRxDJDLhrxOBk52QZb04gfYaydJ8qI3a7wKc0KhK5FdIT1p9JZoXNbY_IIxI7iXd3zb3D2txocJNfN2rIfi4vmqZWKb=s855-no?authuser=0",

    name: "PaisleySlacks",
    price: "￥8,200",
    brand: "Vintage",
    category: "スラックス",
    detail: "ペイズリー柄",
    size: "S",
    condition: "B",
    partNumber: "1nsmhty1u"
  },
  {
    id: 6,
    image:
      "https://lh3.googleusercontent.com/pw/AMWts8DzKurLBVNsjmpw3ByQT0bLqtFKLpT6HXyxN4ofnHv1VOton2umsMdj274EziVG1mIC4Dbr5CIt82C75oJ_G-O6S7l9KCKYTV2sGjCzICaLu7oxfIVqKMqN75g9uaZqEuBtlvwow8OrkIDi9mVDhRk=s855-no?authuser=0",

    name: "KnitBucket",
    price: "￥9,900",
    brand: "override",
    category: "バケットハット",
    detail: "紐付き",
    size: "M",
    condition: "A",
    partNumber: "5y3ru"
  },
  {
    id: 7,
    image:
      "https://lh3.googleusercontent.com/pw/AMWts8ArmzTo11ONkJGozpMvOl8QknSdt23snsp5imcKv7x938-oke3aQUrrw3THg7zjd4qlBtBHaddBinQjllckHB6IbJ8IcYwimXToM3FPMMGRc5M0GxdUuou-eQ3Ka8T5I4TvsDZ9elP5aCV7-Vodtn4=s855-no?authuser=0",

    name: "BasicPlaidBucketHat",
    price: "￥6,600",
    brand: "stussy",
    category: "バケットハット",
    detail: "チェック柄",
    size: "M",
    condition: "A",
    partNumber: "86wvnn2"
  },
  {
    id: 8,
    image:
      "https://lh3.googleusercontent.com/pw/AMWts8AGIzuVy94Isv1SWLuPoll8RrSQDxn-SqDPy4jmCZmGH5SBQMfiWuMfCDXJFTnJLm26-32NmVOGMHURJfbXAnyW8jknHu-PSWHBxkfr80_YAUjQOUNGLKZv6OYqwaXrmoDrIGQxL6Y_IN2eJ1g8j2E=s855-no?authuser=0",

    name: "KnitHat",
    price: "￥14,500",
    brand: "oldStussy",
    category: "ビーニー",
    detail: "ロゴ刺繍",
    size: "S",
    condition: "B",
    partNumber: "1k2dv7"
  },
  {
    id: 9,
    image:
      "https://lh3.googleusercontent.com/pw/AMWts8Dzd_I9O3Go4_PuJETLy7jnLaNjWQapf28xGRRHrIY_XsPToMBWTGfwv1q5gTziBsdMomYjI1awSMISOt7kQ4sQH9DzfCkfcvUxzOCkVVZRKjSWvd1eVrfZJgHI9K-e7R2UxV6Yr4BQl1ZLxBrQRi4=s855-no?authuser=0",

    name: "AngTulip",
    price: "￥7,100",
    brand: "override",
    category: "バケットハット",
    detail: "リバーシブル",
    size: "M",
    condition: "A",
    partNumber: "21u852"
  },
  {
    id: 10,
    image:
      "https://lh3.googleusercontent.com/pw/AMWts8Ay-vAWBRDTEg7MXQHqIYim1h8pNsfRNX4LHu_sRC5KYrgXUmwCl01GyU0J_HgLcPlXGM_6ajGR5Koj5seC6y85cLf93SmSNZoJlaf6CwG-qwDydyyG9p-VA6MOk6gMm-l7yxM1WcUz4_EZHV92aUNo=s855-no?authuser=0",

    name: "SouvenirJacket",
    price: "￥15,500",
    brand: "towncraft",
    category: "スーベニアジャケット",
    detail: "胸元、袖、バックに刺繍",
    size: "M",
    condition: "A",
    partNumber: "ika2ce"
  },
  {
    id: 11,
    image:
      "https://lh3.googleusercontent.com/pw/AMWts8B2huJNVQZA4vEiEQkhSiOzCvOcBt1y6YsektDIoCraXLGTur1qvLQPpYFhga8rSQik7f_gTOke21gVMGlzgLTMcFzJ0kuEoncdz_I2gIdha9Mtb3Wk1kY-B4V6qSLHUJCBtc0RkrlR-tiDc_UQ6rg5=s855-no?authuser=0",

    name: "TrackJacket",
    price: "￥9,800",
    brand: "Vintage",
    category: "トラックジャケット",
    detail: "ベロア生地",
    size: "M",
    condition: "B",
    partNumber: "11u994f"
  },
  {
    id: 12,
    image:
      "https://lh3.googleusercontent.com/pw/AMWts8BjJbMTVD1hv4LmUk3vfIHBoedKdKxLZKDZnoZ-nx3-4Z9wO_iJ2g2Q0i1-ZmdlII7Rig9vpogbnK0nVQJWB-m_pNWS6ZagTMSIiEdbSs6gS6PDPvQQuALHMnE2jO77ACUY6oaUuoxVNozHHRx6a9Ya=s855-no?authuser=0",

    name: "TrackJacket",
    price: "￥6,200",
    brand: "Vintage",
    category: "トラックジャケット",
    detail: "裏地にフリース生地",
    size: "M",
    condition: "B",
    partNumber: "1nwa103u"
  },
  {
    id: 13,
    image:
      "https://lh3.googleusercontent.com/pw/AMWts8CMba-fpVzkHzAoJLZxfGLrLNmADF-qXcHOIWeFRWf-gi7AEDdADeijy_m61THAhaT2pFfloAX8JSCDOmiSknV5y16eQ43N4SAMqxRtxmkuGRIwf7zmPyDbEH7wxo3Rru9zIhWcQ--b9y0VZiT1EJpZ=s855-no?authuser=0",

    name: "TrackJacket",
    price: "￥3,100",
    brand: "Vintage",
    category: "トラックジャケット",
    detail: "首元、袖に刺繍",
    size: "M",
    condition: "B",
    partNumber: "900snu"
  },
  {
    id: 14,
    image:
      "https://lh3.googleusercontent.com/pw/AMWts8DCLVYv_2sCve2EUUZ_XEdIrebJwhIaqtHwhXlVELnd7XRknsM_SUdNmXQ-MwA_g5OMdxgVBFADwpl_aG1uZJyuKkkq3UjwQcrQ565r2dySQ08BcUs9hH7mkKJaOHz6hw49hz0w_q6Cv6WRwIcl6jkS=s855-no?authuser=0",

    name: "Vest",
    price: "￥21,200",
    brand: "Carhartt",
    category: "ベスト",
    detail: "胸元に刺繍",
    size: "M",
    condition: "C",
    partNumber: "121unfqwu"
  },
  {
    id: 15,
    image:
      "https://lh3.googleusercontent.com/pw/AMWts8Bq2D9xMsINhhs9aFwXQhiv2u8U5ZB8tdTvP-M0FXN72bWI9yYza7F4e13PWYSrokXJntTlq5PiE6BCVAdTuYJZviV7m2MuBC3PByn9Dt4lWUIAwioL2AyxFijWVcPGTmpBk7p6qMSGLQr5OcSpQvWu=s855-no?authuser=0",

    name: "NylonPullover",
    price: "￥5,900",
    brand: "Vintage",
    category: "プルオーバー",
    detail: "胸元に刺繍",
    size: "M",
    condition: "B",
    partNumber: "1wefu5u"
  }
]);

/*
export const ItemProvider: VFC<Props> = (props) => {
  const { children } = props;

  const [itemPick, setItemPick] = React.useState(null);
  return (
    <ItemContext.Provider value={{ itemPick, setItemPick }}>
      {children}
    </ItemContext.Provider>
  );
}; 
*/
