// Catalog data shared by the products list, detail and "similar" sections.
// Each text field carries both locales: { uz, ru }. Resolution against the
// active locale happens in the helpers below, so callers wrap them in computed().
// Images are intentionally omitted — the UI renders a static product image.
import { locale } from '../i18n/index.js'

// Tag labels are shared between the category filter and each product's tag,
// so comparisons stay consistent within a locale.
const TAGS = {
  all: { uz: 'Barchasi', ru: 'Все' },
  fresh: { uz: "Yangi so'yilgan", ru: 'Охлаждённое' },
  half: { uz: 'Yarim tayyor', ru: 'Полуфабрикат' },
  marinated: { uz: 'Marinadlangan', ru: 'Маринованное' },
  smoked: { uz: 'Dudlangan', ru: 'Копчёное' },
  frozen: { uz: 'Muzlatilgan & qadoqlangan', ru: 'Заморозка и упаковка' },
}

const categoriesRaw = [TAGS.all, TAGS.fresh, TAGS.half, TAGS.marinated, TAGS.smoked, TAGS.frozen]

const SPEC_LABELS = {
  holati: { uz: 'Holati', ru: 'Состояние' },
  harorat: { uz: 'Saqlash harorati', ru: 'Температура хранения' },
  qadoqlash: { uz: 'Qadoqlash', ru: 'Упаковка' },
  yetkazib: { uz: 'Yetkazib berish', ru: 'Доставка' },
}

const defaultSpecs = (extra = {}) => [
  { label: SPEC_LABELS.holati, value: extra.holati ?? { uz: "Yangi so'yilgan / muzlatilgan", ru: 'Охлаждённое / замороженное' } },
  { label: SPEC_LABELS.harorat, value: extra.harorat ?? { uz: '0…+4°C (yangi), −18°C (muzlatilgan)', ru: '0…+4°C (охл.), −18°C (зам.)' } },
  { label: SPEC_LABELS.qadoqlash, value: extra.qadoqlash ?? { uz: 'Vakuum yoki lotok, 1 / 5 / 10 kg', ru: 'Вакуум или лоток, 1 / 5 / 10 кг' } },
  { label: SPEC_LABELS.yetkazib, value: { uz: "Toshkent bo'yicha 24 soat ichida", ru: 'По Ташкенту в течение 24 часов' } },
]

const rawProducts = [
  {
    slug: 'tovuq-filesi',
    tag: TAGS.fresh,
    title: { uz: 'Tovuq filesi', ru: 'Куриное филе' },
    fullTitle: { uz: 'Tovuq filesi (fileto)', ru: 'Куриное филе (филето)' },
    short: { uz: "Sof oqsilga boy, noziq ko'krak qismi.", ru: 'Богатая белком, нежная грудка.' },
    desc: {
      uz: "Yangi so'yilgan, sof oqsilga boy noziq ko'krak qismi. Restoran menyusi va sog'lom oila dasturxoni uchun ideal — minimal yog', maksimal ta'm.",
      ru: 'Охлаждённая, богатая чистым белком нежная грудка. Идеальна для меню ресторанов и здорового семейного стола — минимум жира, максимум вкуса.',
    },
    specs: defaultSpecs(),
    tavsif: {
      uz: "Tovuq filesi — tovuqning eng qimmatli, oqsilga boy va kam yog'li qismi. Caravan Chicken filesi yangi so'yilgan tovuqlardan tayyorlanadi, qo'lda tozalanadi va gigiyenik sharoitda qadoqlanadi. Steyk, grill, panirovka yoki sho'rva uchun bir xil darajada mos keladi.",
      ru: 'Куриное филе — самая ценная, богатая белком и нежирная часть курицы. Филе Caravan Chicken готовится из охлаждённых кур, очищается вручную и упаковывается в гигиеничных условиях. Одинаково подходит для стейка, гриля, панировки или супа.',
    },
    saqlash: {
      uz: "Yangi mahsulotni 0…+4°C haroratda 3 kungacha, muzlatilganini −18°C da 6 oygacha saqlash mumkin. Qayta muzlatish tavsiya etilmaydi. Tayyorlashdan oldin xona haroratida eritilishi lozim.",
      ru: 'Свежий продукт хранится при 0…+4°C до 3 дней, замороженный при −18°C до 6 месяцев. Повторная заморозка не рекомендуется. Перед приготовлением следует разморозить при комнатной температуре.',
    },
  },
  {
    slug: 'butun-tovuq',
    tag: TAGS.fresh,
    title: { uz: 'Butun tovuq', ru: 'Целая курица' },
    fullTitle: { uz: 'Butun tovuq', ru: 'Целая курица' },
    short: { uz: "Yangi so'yilgan, oilaviy dasturxon uchun.", ru: 'Охлаждённая, для семейного стола.' },
    desc: {
      uz: "Yaxlit, yangi so'yilgan butun tovuq — oilaviy dasturxon, sho'rva va tandir uchun ideal tanlov. Tabiiy ozuqada boqilgan, ortiqcha yog'siz.",
      ru: 'Цельная, охлаждённая курица — идеальный выбор для семейного стола, супа и тандыра. Выращена на натуральном корме, без лишнего жира.',
    },
    specs: defaultSpecs({ qadoqlash: { uz: 'Yakka termoplyonka, 1.2–1.8 kg', ru: 'Индивидуальная термоплёнка, 1.2–1.8 кг' } }),
    tavsif: {
      uz: "Butun tovuq Caravan Chicken fermasida tabiiy ozuqada yetishtiriladi, halol so'yiladi va to'liq tozalanib qadoqlanadi. Bir butun mahsulotdan bir necha taom tayyorlash imkonini beradi.",
      ru: 'Целая курица выращивается на ферме Caravan Chicken на натуральном корме, забивается по халялю и упаковывается полностью очищенной. Из одного цельного продукта можно приготовить несколько блюд.',
    },
    saqlash: {
      uz: "0…+4°C haroratda 3 kungacha saqlang. Uzoq saqlash uchun −18°C da muzlatib qo'ying. Eritilgan tovuqni qayta muzlatmang.",
      ru: 'Хранить при 0…+4°C до 3 дней. Для длительного хранения заморозьте при −18°C. Размороженную курицу не замораживайте повторно.',
    },
  },
  {
    slug: 'tovuq-qanotchalari',
    tag: TAGS.fresh,
    title: { uz: 'Tovuq qanotchalari', ru: 'Куриные крылышки' },
    fullTitle: { uz: 'Tovuq qanotchalari', ru: 'Куриные крылышки' },
    short: { uz: 'Grill va fritter uchun ideal qanotlar.', ru: 'Идеальные крылышки для гриля и фритюра.' },
    desc: {
      uz: "Sersuv va mazali tovuq qanotchalari — grill, BBQ va fritter uchun eng yaxshi tanlov. Bir tekis kesilgan, tayyorlashga qulay.",
      ru: 'Сочные и вкусные куриные крылышки — лучший выбор для гриля, BBQ и фритюра. Ровно нарезаны, удобны в приготовлении.',
    },
    specs: defaultSpecs({ qadoqlash: { uz: 'Lotok yoki vakuum, 0.5 / 1 kg', ru: 'Лоток или вакуум, 0.5 / 1 кг' } }),
    tavsif: {
      uz: "Qanotchalar restoran va kafelarda eng ko'p buyurtma qilinadigan qismlardan biri. Bir xil o'lchamda kesiladi, marinadlashga va tez tayyorlashga juda mos.",
      ru: 'Крылышки — одна из самых заказываемых частей в ресторанах и кафе. Нарезаются одного размера, отлично подходят для маринования и быстрого приготовления.',
    },
    saqlash: {
      uz: "Yangi holatda 0…+4°C da 2 kungacha, muzlatilgan holatda −18°C da 5 oygacha saqlanadi.",
      ru: 'В свежем виде хранится при 0…+4°C до 2 дней, в замороженном — при −18°C до 5 месяцев.',
    },
  },
  {
    slug: 'tovuq-son-boldir',
    tag: TAGS.fresh,
    title: { uz: 'Tovuq son & boldir', ru: 'Куриное бедро и голень' },
    fullTitle: { uz: 'Tovuq son va boldir', ru: 'Куриное бедро и голень' },
    short: { uz: 'Sersuv, mazali oyoq qismi.', ru: 'Сочная, вкусная часть ножки.' },
    desc: {
      uz: "Sersuv va to'yimli oyoq qismi — qovurish, dimlash va grill uchun ideal. Bog'cha va oila taomlari uchun mos.",
      ru: 'Сочная и питательная часть ножки — идеальна для жарки, тушения и гриля. Подходит для детсадовских и семейных блюд.',
    },
    specs: defaultSpecs({ qadoqlash: { uz: 'Lotok, 1 kg', ru: 'Лоток, 1 кг' } }),
    tavsif: {
      uz: "Son va boldir tovuqning eng sersuv qismi hisoblanadi. Tabiiy ta'mi va to'yimliligi bilan ajralib turadi, har qanday issiq taomga mos keladi.",
      ru: 'Бедро и голень считаются самой сочной частью курицы. Отличаются натуральным вкусом и питательностью, подходят к любому горячему блюду.',
    },
    saqlash: {
      uz: "0…+4°C da 3 kungacha yoki −18°C da 6 oygacha saqlang.",
      ru: 'Хранить при 0…+4°C до 3 дней или при −18°C до 6 месяцев.',
    },
  },
  {
    slug: 'tovuq-naggetslari',
    tag: TAGS.half,
    title: { uz: 'Tovuq naggetslari', ru: 'Куриные наггетсы' },
    fullTitle: { uz: 'Tovuq naggetslari', ru: 'Куриные наггетсы' },
    short: { uz: 'Tez tayyorlanadigan yarim tayyor mahsulot.', ru: 'Быстро готовящийся полуфабрикат.' },
    desc: {
      uz: "Bolalar yaxshi ko'radigan, tez tayyorlanadigan yarim tayyor mahsulot. Tabiiy file go'shtidan tayyorlangan, ziravorli panirovkada.",
      ru: 'Любимый детьми, быстро готовящийся полуфабрикат. Изготовлен из натурального мяса филе, в пряной панировке.',
    },
    specs: defaultSpecs({
      holati: { uz: 'Yarim tayyor / muzlatilgan', ru: 'Полуфабрикат / замороженное' },
      qadoqlash: { uz: 'Qadoqlangan paket, 0.3 / 0.5 / 1 kg', ru: 'Фасованный пакет, 0.3 / 0.5 / 1 кг' },
    }),
    tavsif: {
      uz: "Naggetslar yangi tovuq filesidan tayyorlanadi, ziravorlangan va panirovkada qoplanadi. Frityur yoki pechda 8–10 daqiqada tayyor bo'ladi.",
      ru: 'Наггетсы готовятся из свежего куриного филе, приправляются и покрываются панировкой. Готовы за 8–10 минут во фритюре или духовке.',
    },
    saqlash: {
      uz: "−18°C da 6 oygacha saqlanadi. Eritmasdan to'g'ridan-to'g'ri tayyorlash mumkin.",
      ru: 'Хранится при −18°C до 6 месяцев. Можно готовить сразу, без разморозки.',
    },
  },
  {
    slug: 'tovuq-lyulasi',
    tag: TAGS.half,
    title: { uz: 'Tovuq lyulasi', ru: 'Куриная люля' },
    fullTitle: { uz: 'Tovuq lyulasi (kabob)', ru: 'Куриная люля (кебаб)' },
    short: { uz: 'Ziravorli, panirovkada — bir zumda tayyor.', ru: 'В специях — готова в один миг.' },
    desc: {
      uz: "Ziravorlarda yo'g'rilgan tovuq lyulasi — grill va skovorodada bir zumda tayyor bo'ladigan yarim tayyor mahsulot.",
      ru: 'Куриная люля, замешанная со специями — полуфабрикат, который мгновенно готовится на гриле и сковороде.',
    },
    specs: defaultSpecs({
      holati: { uz: 'Yarim tayyor / muzlatilgan', ru: 'Полуфабрикат / замороженное' },
      qadoqlash: { uz: 'Lotok, 0.5 / 1 kg', ru: 'Лоток, 0.5 / 1 кг' },
    }),
    tavsif: {
      uz: "Lyulya tovuq qiymasidan, tabiiy ziravorlar bilan tayyorlanadi. Grill, mangal yoki skovorodada tez pishadi va sersuv bo'lib qoladi.",
      ru: 'Люля готовится из куриного фарша с натуральными специями. Быстро готовится на гриле, мангале или сковороде и остаётся сочной.',
    },
    saqlash: {
      uz: "−18°C da 5 oygacha saqlanadi. Tayyorlashdan oldin yengil eritish tavsiya etiladi.",
      ru: 'Хранится при −18°C до 5 месяцев. Перед приготовлением рекомендуется лёгкая разморозка.',
    },
  },
  {
    slug: 'marinadlangan-shashlik',
    tag: TAGS.marinated,
    title: { uz: 'Marinadlangan shashlik', ru: 'Маринованный шашлык' },
    fullTitle: { uz: 'Marinadlangan tovuq shashlik', ru: 'Маринованный куриный шашлык' },
    short: { uz: 'Ziravorlarda marinadlangan, grill uchun.', ru: 'Маринован в специях, для гриля.' },
    desc: {
      uz: "Maxsus ziravorlar aralashmasida marinadlangan tovuq shashlik — mangalga shaylab qo'ying va lazzatlaning. Qo'shimcha tayyorgarliksiz.",
      ru: 'Куриный шашлык, маринованный в смеси специй — просто разложите на мангале и наслаждайтесь. Без дополнительной подготовки.',
    },
    specs: defaultSpecs({
      holati: { uz: 'Marinadlangan / sovutilgan', ru: 'Маринованное / охлаждённое' },
      qadoqlash: { uz: 'Vakuum lotok, 1 kg', ru: 'Вакуумный лоток, 1 кг' },
    }),
    tavsif: {
      uz: "Shashlik bo'laklari tovuq sonidan kesiladi va Caravan Chicken'ning maxsus marinadida bir kecha tindiriladi. Mangalda 12–15 daqiqada tayyor.",
      ru: 'Кусочки шашлыка нарезаются из куриного бедра и настаиваются ночь в специальном маринаде Caravan Chicken. Готов на мангале за 12–15 минут.',
    },
    saqlash: {
      uz: "0…+4°C da 48 soat ichida iste'mol qiling. Muzlatish tavsiya etilmaydi.",
      ru: 'Употребите в течение 48 часов при 0…+4°C. Заморозка не рекомендуется.',
    },
  },
  {
    slug: 'dudlangan-tovuq',
    tag: TAGS.smoked,
    title: { uz: 'Dudlangan tovuq', ru: 'Копчёная курица' },
    fullTitle: { uz: 'Dudlangan butun tovuq', ru: 'Копчёная целая курица' },
    short: { uz: 'Tabiiy dudlangan, dasturxonga tayyor.', ru: 'Натуральное копчение, готова к столу.' },
    desc: {
      uz: "Tabiiy yog'ochda dudlangan butun tovuq — dasturxonga to'g'ridan-to'g'ri tortishga tayyor noziklik. Yorqin ta'm va xushbo'y hid.",
      ru: 'Целая курица, копчённая на натуральной древесине — деликатес, готовый прямо к столу. Яркий вкус и аппетитный аромат.',
    },
    specs: defaultSpecs({
      holati: { uz: 'Dudlangan / sovutilgan', ru: 'Копчёное / охлаждённое' },
      qadoqlash: { uz: 'Vakuum, 1.2–1.6 kg', ru: 'Вакуум, 1.2–1.6 кг' },
    }),
    tavsif: {
      uz: "Tovuq tabiiy mevali yog'och chiplarida sekin dudlanadi. Hech qanday sun'iy bo'yoq va kuchaytirgichlarsiz, faqat tabiiy ta'm.",
      ru: 'Курица медленно коптится на натуральной фруктовой древесной щепе. Без искусственных красителей и усилителей — только натуральный вкус.',
    },
    saqlash: {
      uz: "0…+6°C da 7 kungacha saqlanadi. Ochilgandan so'ng 2 kun ichida iste'mol qilish tavsiya etiladi.",
      ru: 'Хранится при 0…+6°C до 7 дней. После вскрытия рекомендуется употребить в течение 2 дней.',
    },
  },
]

const pick = (v) => (v && typeof v === 'object' && ('uz' in v || 'ru' in v) ? v[locale.value] ?? v.uz : v)

function resolve(p) {
  return {
    slug: p.slug,
    tag: pick(p.tag),
    title: pick(p.title),
    fullTitle: pick(p.fullTitle),
    short: pick(p.short),
    desc: pick(p.desc),
    specs: p.specs.map((s) => ({ label: pick(s.label), value: pick(s.value) })),
    tavsif: pick(p.tavsif),
    saqlash: pick(p.saqlash),
  }
}

// Reactive when called inside a computed/render (reads locale.value via pick).
export function getCategories() {
  return categoriesRaw.map(pick)
}

export function getProducts() {
  return rawProducts.map(resolve)
}

export function getProduct(slug) {
  const p = rawProducts.find((x) => x.slug === slug) || rawProducts[0]
  return resolve(p)
}

export function relatedProducts(slug, count = 4) {
  return rawProducts.filter((p) => p.slug !== slug).slice(0, count).map(resolve)
}
