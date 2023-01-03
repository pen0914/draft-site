import React from "react";

type Part = {
  image: string;
  brand: string;
  name: string;
  price: string;
};

export const ItemContext = React.createContext<Array<Part>>([
  {
    image:
      "https://lh3.googleusercontent.com/pw/AL9nZEWcn_N_KUjaLKOHqeTSgTBXw0DttVQzond8Ms9OVr1fkXwSGnSwZbEPOJBGA26J4IQEMRO94PXlE5hp0rZ25HHV9g1IuQscSeoM69lemsuWJZM3137gzjZ10yX1fDjVkZNjBeHeCq3WdeXE7M3aIv0=s909-no?authuser=0",
    brand: "Vintage",
    name: "TrackJacket",
    price: "￥5,100"
  },
  {
    image:
      "https://lh3.googleusercontent.com/pw/AL9nZEUu_7VXPwNQrS5jDm8nTnXygO2mBqtvxnVoIk_Mu3wKUTHSPFab21BVklLP4McqFl2cMfWm2x0VIPDolafD-WYdygp1Qb6kkMDEybumOmAGAFW-1t9C9iq2VA3Ol4mMZwWAoNcIfwPkmLb4otNPdgs=s909-no?authuser=0",
    brand: "Vintage",
    name: "SweatMickey",
    price: "￥7,900"
  },
  {
    image:
      "https://lh3.googleusercontent.com/pw/AL9nZEWawsr9D1p1PlxaLpFn7HXQoesquWKB1zcE-rGXIv_6NKbj0p_BZfQr-D-icNKbHSj6hu5tseQ2rvJDOJm4TnZebG6YWzZgscDjZ6TuzuVL_Dd49A9Um9JMSQddAo81cH3zfI3cX82gSqWqlZ9en20=s909-no?authuser=0",

    brand: "Vintage",
    name: "TrackJacket",
    price: "￥6,100"
  },
  {
    image:
      "https://lh3.googleusercontent.com/pw/AL9nZEW7A4olTW9HnRlrrPUIq_GnMg2f8H7mfHcaNbrWBVe7o83Jtkk_rRHwyyFa5n-LO_CP94ZNi8rMXoTeIG0aF6xUKKtv9vnfideoQNdXJlAPLsgs0YtC4gve3xXVAkz1_Kv9jQnYU37SVACblrB6yMU=s909-no?authuser=0",
    brand: "Vintage",
    name: "TruckPants",
    price: "￥13,800"
  },
  {
    image:
      "https://lh3.googleusercontent.com/pw/AL9nZEUXKSEACvXbssoQu574sJ1rOEmG29f1418Xhs3ppjBpDdKimZfbRvXrIv9z5TYSHL6762fgYeh1rHWYWqKxsWGpAqIaAxNm1fqxfIs5G61iTq1d3ujX_RgVegZUWFRtu9ev6dANUcUkyKnRjFhAu3g=s909-no?authuser=0",
    brand: "Vintage",
    name: "PaisleySlacks",
    price: "￥8,200"
  },
  {
    image:
      "https://lh3.googleusercontent.com/pw/AL9nZEV8aMotY13imDVcZJOMTP_2es32rDir3eyZeg7udA47g2HVSAUp_OdbZG02A2fMmVwGAIGX7FCJMjGlBJujtF-bhD4xIO6U0wzTzShmnEhf4wURT9MkLmKF6DjQilmCxzNm26EHqdYipfvlXn1eItQ=s909-no?authuser=0",
    brand: "override",
    name: "KnitBucket",
    price: "￥9,900"
  },
  {
    image:
      "https://lh3.googleusercontent.com/pw/AL9nZEXQNh0HodMxJydj0N74r_myNrU8Z_J4byOmURQUNk5Wug0N8bXaC0fSbOPKcUwH49vmjbDrBJTemAxDeufVPC-XwBishAEuNlL4IJ20bu1KyJyS7WOujHDmuYqDZ9lRcsX7uu2lYyipyhQIZydKqEU=s909-no?authuser=0",
    brand: "stussy",
    name: "BasicPlaidBucketHat",
    price: "￥6,600"
  },
  {
    image:
      "https://lh3.googleusercontent.com/pw/AL9nZEXHq5XiV_bwYQlC2O72-f2L_KwEiOxtjTELHRwnu8rufYVdEDPg8M5kvl027FuKCMbJiAGmhOEPYEYF-GDMOu7g9bk4OLddfLJZXtxIptLg8CoeDKGv6MRyaqOwb1Xh9Lavr9SnFltNxii5R33A-HA=s909-no?authuser=0",
    brand: "oldStussy",
    name: "KnitHat",
    price: "￥14,500"
  },
  {
    image:
      "https://lh3.googleusercontent.com/pw/AL9nZEXO6fARa1XwjU3E3qrVSu6W7sQsf7noI53Enue8od00nhtgPz2wVEEAGMB_zNia6R4tGPN72ZEfiLQLZ57QtFjvk-zT2woiD9OdHKVC183MXFFk5m62k-KzuB07gRe9lKvLJLw2--RegIelZHvqeJw=s909-no?authuser=0",
    brand: "override",
    name: "AngTulip",
    price: "￥7,100"
  },
  {
    image:
      "https://lh3.googleusercontent.com/pw/AL9nZEUbIh7m6Gm5iqP0fMCR5kYel_TblhR_B-oCmHnH2Q9UOdPpeoJ2QkEFWe-l5Xp8O2QpH7TmrtmobFBVcRAo9lKodOtcHZvpcBXwHbs7AWBxg5w_pR2-NY8ruoNsnirVgDRvDxkipt6id1HsNrulqz8=s909-no?authuser=0",
    brand: "towncraft",
    name: "SouvenirJacket",
    price: "￥15,500"
  },
  {
    image:
      "https://lh3.googleusercontent.com/pw/AL9nZEXDfz0uhcfuh9_4oJrwnrkaqlmHiKLqtlJ2HMqV4SWrk10fqHE320ThXchNMhMG0TxrkF84-R5nMDTfPOGBhfK1ko3RBLID5xzo-2HJ5ASqMIMYKEtwYvmezciye15ZLFMb-ie-dNS75zyiGvAztm8=s909-no?authuser=0",
    brand: "Vintage",
    name: "TrackJacket",
    price: "￥9,800"
  },
  {
    image:
      "https://lh3.googleusercontent.com/pw/AL9nZEWQHCc-dJSblAZKAzwYQtnj8NNzrfWxfrmRcpyRMKQ7b4pWdijyyOqtw5QrfnKTdBbUByVpO4JpAsuo17EzMTrUUGWCqdw-77-Us0SO6-4W9cpzgJuwLvu3VxLeky7UkdV2w7NOC1f1aTEJRF9kU0A=s909-no?authuser=0",
    brand: "Vintage",
    name: "TrackJacket",
    price: "￥6,200"
  },
  {
    image:
      "https://lh3.googleusercontent.com/pw/AL9nZEV4oGvK26TcX5TQwqhgcBfXagwPHcwD7Kc-Q5ac6EJt1-v7DDl6NecWJkBdEjx8f-z47UVc4tagAs4QPTIW-Nv3pw5Y8Vb0rcczeKYNYpzLtZ4UENeUYIHELPv3kTP4VmXqZUvgOgnUflTs3UQzYEY=s909-no?authuser=0",
    brand: "Vintage",
    name: "TrackJacket",
    price: "￥3,100"
  },
  {
    image:
      "https://lh3.googleusercontent.com/pw/AL9nZEVsEqmbUf1Cp_fl5dUqTrfVKbXnELPfFeaghzBj6WPNVk9QIK_0cZRL_7zyNJY0HAOpAevfZ92TCXi1r0VP_adMXSxfhLch7CeyDuB2IPUXlvNTb4gI_un82RFYGnJ8g7AcJLg2hsgfY1sECNrL2no=s909-no?authuser=0",
    brand: "Carhartt",
    name: "Vest",
    price: "￥21,200"
  },
  {
    image:
      "https://lh3.googleusercontent.com/pw/AL9nZEVKtZod41SCryfSFBN0EJh3_R8rgsu63DdcPKBOWlcHd4-xxOt5Csy4lVZBWHeTkcbZrhnatykTEsimkjxeKY9Y_fKVCrujJ04CunmQG_XF_Cldl4t__HvaOwp7muhE21bxfE0r_kXXK9zuk0emXsc=s909-no?authuser=0",
    brand: "Vintage",
    name: "NylonPullover",
    price: "￥5,900"
  }
]);
