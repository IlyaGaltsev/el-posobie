const massConspects = [
  {
    number: 1,
    title: "СП 1.1 план",
    id: "1ZZAoUD70OQtOp2pL-_JzQmBd7H_HXwNz",
    tag: "sp"
  },
  {
    number: 2,
    title: "СП 1.2 план",
    id: "1A3xI9j6AsYpN-6ejUDY23NoVRGxkWf74",
    tag: "sp"
  },
  {
    number: 3,
    title: "СП 1.3 план",
    id: "1WHerOK-VXJhGnQhDQMPlYBsMSErihFpV",
    tag: "sp"
  },
  {
    number: 4,
    title: "СП 1.4 план",
    id: "1UoTkHLsUBkzkQrcf4O9-nrka8jfijb2Z",
    tag: "sp"
  },
  {
    number: 5,
    title: "ТП Тема 1.1 план",
    id: "1PzqSHDBq9o5_6v0USmW1e1uu0GEtED9w",
    tag: "tp"
  },
  {
    number: 6,
    title: "ТП Тема 1.2 план",
    id: "15RiI_Fvkh8PilvXRmYu0Xka5D7wyt8Uq",
    tag: "tp"
  },
  {
    number: 7,
    title: "ТП Тема 1.3 план",
    id: "1RVPjQyKu8E7bT-se_rS_fiQF0UXJljec",
    tag: "tp"
  },
  {
    number: 8,
    title: "ТП Тема 1.4 план",
    id: "1E18esTlCeR6kIfRX85Iuw4QVWdu27EzE",
    tag: "tp"
  },
  {
    number: 9,
    title: "РХБЗ Тема 1.1 план",
    id: "1XDDyydFA1uiCkvUdogAJGYCkg02Us3Kz",
    tag: "rxbz"
  },
  {
    number: 10,
    title: "РХБЗ Тема 1.2 план",
    id: "1xOIQEI9j0OHMyNx_CLiA6kfSC",
    tag: "rxbz"
  },
  {
    number: 11,
    title: "ОВУ Тема 1.1 Распределение времени военнослужащих",
    id: "1Lyf3WLPCvuikHTTZOIhE-VpgSKxzDBVe",
    tag: "oby"
  },
  {
    number: 12,
    title: "ОВУ Тема 2.1 Военнослужащие и взаимоотношения между ними",
    id: "1lzlwT3aHiBGY4stMX85pmJk4iGXN0Ck9",
    tag: "oby"
  },
  {
    number: 13,
    title: "ОВУ Тема 2.2 Воинские звания и знаки различия военнослужащих",
    id: "1vhPKEuB9cHKn7AOI-JpYE9i4HvD1DjTb",
    tag: "oby"
  },
  {
    number: 14,
    title: "ОВУ Тема 2.3 Воинская дисциплина. Поощрение и дисциплинарные взыскания",
    id: "1LoG-Axm6v8OvjxBIsCeIo4R1Vp4nulLk",
    tag: "oby"
  },
  {
    number: 15,
    title: "ОВУ Тема 3.1 Обязанности лиц суточного наряда",
    id: "16PMp_c_c2a7IfgVLU7piEcOnmy2Di2VL",
    tag: "oby"
  },
  {
    number: 16,
    title: "ОВУ Тема 3.2 Обязанности лиц суточного наряда",
    id: "1iIE-c7FFAOKSBHhFY_oukQtgB7psTBfL",
    tag: "oby"
  },
  {
    number: 17,
    title: "ОВУ Тема 3.3 КХО",
    id: "1NO8hKedilpdmz1Kt403AGfCkhMG8rpZ4",
    tag: "oby"
  },
  {
    number: 18,
    title: "ОВУ Тема 3.4 Караул",
    id: "1e9AlZFKtVFK5f2XbYZJsi53O89Kk5cL8",
    tag: "oby"
  },
  {
    number: 19,
    title: "ВМП Тема 1.1 план",
    id: "1pEdE4UIFhPMVsHWO4qsb0xhVRmTwbaZF",
    tag: "vmp"
  },
  {
    number: 20,
    title: "Огневая Тема 1.1 план",
    id: "1oT-HHL9ifdbwT5Dp_i7JTRdn-aZUzUOR",
    tag: "fire"
  },
  {
    number: 21,
    title: "Огневая Тема 1.2 план",
    id: "19dFaX1G6o_1K-QgxE_NozHsuhxzjkwG1",
    tag: "fire"
  },
  {
    number: 22,
    title: "Огневая Тема 1.3 план",
    id: "1IgS0oe1XvfzAftAGOy8DCwol_yGZeok5",
    tag: "fire"
  },
  {
    number: 23,
    title: "Огневая Тема 2.1 план",
    id: "17Q4I3FVQTr5kVckxfuj2vNOL_QQNW7jI",
    tag: "fire"
  },
  {
    number: 24,
    title: "Огневая Тема 3.1 план",
    id: "1xgbXJ7L08X-AjjE73Yi05W4qp5dsE3nx",
    tag: "fire"
  },
  {
    number: 25,
    title: "Огневая Тема 3.2 план",
    id: "1Kn7SjO20nov4rK1zxlEVfXXuZSH3TrHX",
    tag: "fire"
  },
  {
    number: 26,
    title: "Огневая Тема 3.3 план",
    id: "1p2sNN-zrvuqrj5hwKVw7yLqcAH69eqX8",
    tag: "fire"
  },
  {
    number: 27,
    title: "Огневая Тема 4.1 план",
    id: "1jDuyWgKmssFrAGO-fDGOmB-DVSeYJ5Ec",
    tag: "fire"
  },
  {
    number: 28,
    title: "ФП Тема 1.1 план",
    id: "1mWE4jnzDaXLa8WnT1tBKm2Oef11NdxFW",
    tag: "fizik"
  },
  {
    number: 29,
    title: "ФП Тема 2.1 план",
    id: "1CFiYxSlXHrhgVpqi1gUYsEn-u",
    tag: "fizik"
  },
  {
    number: 30,
    title: "ФП Тема 3.1 план",
    id: "1Y3zRCyfg2FufseNogOGF0wDDr0mYPXrL",
    tag: "fizik"
  },
  {
    number: 31,
    title: "ФП Тема 4.1 план",
    id: "1TleEadKpTc4TymnPJnNtu6CXeAdg5ZhH",
    tag: "fizik"
  },
  {
    number: 32,
    title: "ОБВС Тема 1.1 план",
    id: "1jqk-nGh8RvFF14V4roR9jcjM0-dk0o92",
    tag: "obvs"
  }
]

export default massConspects
