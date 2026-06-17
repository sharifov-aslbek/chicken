// Catalog data shared by the products list, detail and "similar" sections.
// Images are intentionally omitted — the UI renders free-field placeholders.

export const categories = [
  'Barchasi',
  "Yangi so'yilgan",
  'Yarim tayyor',
  'Marinadlangan',
  'Dudlangan',
  'Muzlatilgan & qadoqlangan',
]

const defaultSpecs = (extra = {}) => [
  { label: 'Holati', value: extra.holati ?? "Yangi so'yilgan / muzlatilgan" },
  { label: 'Saqlash harorati', value: extra.harorat ?? '0…+4°C (yangi), −18°C (muzlatilgan)' },
  { label: 'Qadoqlash', value: extra.qadoqlash ?? 'Vakuum yoki lotok, 1 / 5 / 10 kg' },
  { label: 'Yetkazib berish', value: 'Toshkent bo\'yicha 24 soat ichida' },
]

export const products = [
  {
    slug: 'tovuq-filesi',
    tag: "Yangi so'yilgan",
    title: 'Tovuq filesi',
    fullTitle: 'Tovuq filesi (fileto)',
    short: "Sof oqsilga boy, noziq ko'krak qismi.",
    desc: "Yangi so'yilgan, sof oqsilga boy noziq ko'krak qismi. Restoran menyusi va sog'lom oila dasturxoni uchun ideal — minimal yog', maksimal ta'm.",
    specs: defaultSpecs(),
    tavsif:
      "Tovuq filesi — tovuqning eng qimmatli, oqsilga boy va kam yog'li qismi. Caravan Chicken filesi yangi so'yilgan tovuqlardan tayyorlanadi, qo'lda tozalanadi va gigiyenik sharoitda qadoqlanadi. Steyk, grill, panirovka yoki sho'rva uchun bir xil darajada mos keladi.",
    saqlash:
      "Yangi mahsulotni 0…+4°C haroratda 3 kungacha, muzlatilganini −18°C da 6 oygacha saqlash mumkin. Qayta muzlatish tavsiya etilmaydi. Tayyorlashdan oldin xona haroratida eritilishi lozim.",
  },
  {
    slug: 'butun-tovuq',
    tag: "Yangi so'yilgan",
    title: 'Butun tovuq',
    fullTitle: 'Butun tovuq',
    short: "Yangi so'yilgan, oilaviy dasturxon uchun.",
    desc: "Yaxlit, yangi so'yilgan butun tovuq — oilaviy dasturxon, sho'rva va tandir uchun ideal tanlov. Tabiiy ozuqada boqilgan, ortiqcha yog'siz.",
    specs: defaultSpecs({ qadoqlash: 'Yakka termoplyonka, 1.2–1.8 kg' }),
    tavsif:
      "Butun tovuq Caravan Chicken fermasida tabiiy ozuqada yetishtiriladi, halol so'yiladi va to'liq tozalanib qadoqlanadi. Bir butun mahsulotdan bir necha taom tayyorlash imkonini beradi.",
    saqlash:
      "0…+4°C haroratda 3 kungacha saqlang. Uzoq saqlash uchun −18°C da muzlatib qo'ying. Eritilgan tovuqni qayta muzlatmang.",
  },
  {
    slug: 'tovuq-qanotchalari',
    tag: "Yangi so'yilgan",
    title: 'Tovuq qanotchalari',
    fullTitle: 'Tovuq qanotchalari',
    short: 'Grill va fritter uchun ideal qanotlar.',
    desc: "Sersuv va mazali tovuq qanotchalari — grill, BBQ va fritter uchun eng yaxshi tanlov. Bir tekis kesilgan, tayyorlashga qulay.",
    specs: defaultSpecs({ qadoqlash: 'Lotok yoki vakuum, 0.5 / 1 kg' }),
    tavsif:
      "Qanotchalar restoran va kafelarda eng ko'p buyurtma qilinadigan qismlardan biri. Bir xil o'lchamda kesiladi, marinadlashga va tez tayyorlashga juda mos.",
    saqlash:
      "Yangi holatda 0…+4°C da 2 kungacha, muzlatilgan holatda −18°C da 5 oygacha saqlanadi.",
  },
  {
    slug: 'tovuq-son-boldir',
    tag: "Yangi so'yilgan",
    title: 'Tovuq son & boldir',
    fullTitle: 'Tovuq son va boldir',
    short: 'Sersuv, mazali oyoq qismi.',
    desc: "Sersuv va to'yimli oyoq qismi — qovurish, dimlash va grill uchun ideal. Bog'cha va oila taomlari uchun mos.",
    specs: defaultSpecs({ qadoqlash: 'Lotok, 1 kg' }),
    tavsif:
      "Son va boldir tovuqning eng sersuv qismi hisoblanadi. Tabiiy ta'mi va to'yimliligi bilan ajralib turadi, har qanday issiq taomga mos keladi.",
    saqlash:
      "0…+4°C da 3 kungacha yoki −18°C da 6 oygacha saqlang.",
  },
  {
    slug: 'tovuq-naggetslari',
    tag: 'Yarim tayyor',
    title: 'Tovuq naggetslari',
    fullTitle: 'Tovuq naggetslari',
    short: 'Tez tayyorlanadigan yarim tayyor mahsulot.',
    desc: "Bolalar yaxshi ko'radigan, tez tayyorlanadigan yarim tayyor mahsulot. Tabiiy file go'shtidan tayyorlangan, ziravorli panirovkada.",
    specs: defaultSpecs({ holati: 'Yarim tayyor / muzlatilgan', qadoqlash: 'Qadoqlangan paket, 0.3 / 0.5 / 1 kg' }),
    tavsif:
      "Naggetslar yangi tovuq filesidan tayyorlanadi, ziravorlangan va panirovkada qoplanadi. Frityur yoki pechda 8–10 daqiqada tayyor bo'ladi.",
    saqlash:
      "−18°C da 6 oygacha saqlanadi. Eritmasdan to'g'ridan-to'g'ri tayyorlash mumkin.",
  },
  {
    slug: 'tovuq-lyulasi',
    tag: 'Yarim tayyor',
    title: 'Tovuq lyulasi',
    fullTitle: 'Tovuq lyulasi (kabob)',
    short: 'Ziravorli, panirovkada — bir zumda tayyor.',
    desc: "Ziravorlarda yo'g'rilgan tovuq lyulasi — grill va skovorodada bir zumda tayyor bo'ladigan yarim tayyor mahsulot.",
    specs: defaultSpecs({ holati: 'Yarim tayyor / muzlatilgan', qadoqlash: 'Lotok, 0.5 / 1 kg' }),
    tavsif:
      "Lyulya tovuq qiymasidan, tabiiy ziravorlar bilan tayyorlanadi. Grill, mangal yoki skovorodada tez pishadi va sersuv bo'lib qoladi.",
    saqlash:
      "−18°C da 5 oygacha saqlanadi. Tayyorlashdan oldin yengil eritish tavsiya etiladi.",
  },
  {
    slug: 'marinadlangan-shashlik',
    tag: 'Marinadlangan',
    title: 'Marinadlangan shashlik',
    fullTitle: 'Marinadlangan tovuq shashlik',
    short: 'Ziravorlarda marinadlangan, grill uchun.',
    desc: "Maxsus ziravorlar aralashmasida marinadlangan tovuq shashlik — mangalga shaylab qo'ying va lazzatlaning. Qo'shimcha tayyorgarliksiz.",
    specs: defaultSpecs({ holati: 'Marinadlangan / sovutilgan', qadoqlash: 'Vakuum lotok, 1 kg' }),
    tavsif:
      "Shashlik bo'laklari tovuq sonidan kesiladi va Caravan Chicken'ning maxsus marinadida bir kecha tindiriladi. Mangalda 12–15 daqiqada tayyor.",
    saqlash:
      "0…+4°C da 48 soat ichida iste'mol qiling. Muzlatish tavsiya etilmaydi.",
  },
  {
    slug: 'dudlangan-tovuq',
    tag: 'Dudlangan',
    title: 'Dudlangan tovuq',
    fullTitle: 'Dudlangan butun tovuq',
    short: 'Tabiiy dudlangan, dasturxonga tayyor.',
    desc: "Tabiiy yog'ochda dudlangan butun tovuq — dasturxonga to'g'ridan-to'g'ri tortishga tayyor noziklik. Yorqin ta'm va xushbo'y hid.",
    specs: defaultSpecs({ holati: 'Dudlangan / sovutilgan', qadoqlash: 'Vakuum, 1.2–1.6 kg' }),
    tavsif:
      "Tovuq tabiiy mevali yog'och chiplarida sekin dudlanadi. Hech qanday sun'iy bo'yoq va kuchaytirgichlarsiz, faqat tabiiy ta'm.",
    saqlash:
      "0…+6°C da 7 kungacha saqlanadi. Ochilgandan so'ng 2 kun ichida iste'mol qilish tavsiya etiladi.",
  },
]

export function getProduct(slug) {
  return products.find((p) => p.slug === slug) || products[0]
}

export function relatedProducts(slug, count = 4) {
  return products.filter((p) => p.slug !== slug).slice(0, count)
}
