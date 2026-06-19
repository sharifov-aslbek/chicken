// All UI copy for the site, keyed by locale. UZ is the source language; RU is the translation.
export const messages = {
  uz: {
    nav: {
      home: 'Bosh sahifa',
      about: 'Biz haqimizda',
      products: 'Mahsulotlar',
      process: 'Jarayon',
      faq: 'Savollar',
      contact: "Bog'lanish",
      partner: "Hamkor bo'lish",
    },

    hero: {
      tags: ['Halol', 'Pokiza', 'Tez'],
      title: "Jo'jalikdan boshlab barcha jarayonlar bizning nazoratda!",
      lead: 'Caravan Chicken — restoran, kafe, fastfood va oila dasturxoni uchun sifatli, halol va pokiza tovuq mahsulotlarini ishlab chiqaruvchi hamda yirik hajmda yetkazib beruvchi kompaniya.',
      viewProducts: "Mahsulotlarni ko'rish",
      buy: 'Sotib olish',
    },

    stats: {
      items: [
        'Bizga ishonadigan hamkorlar',
        'Sifatli ishlab chiqarish tajribasi',
        'Mahsulot turlari',
        "Viloyatlar bo'ylab yetkazib berish",
      ],
      trusted: 'Bizga ishonishadi',
    },

    about: {
      eyebrow: 'Biz haqimizda',
      title: 'Ishonch ustida qurilgan katta ishlab chiqarish tizimi',
      lead: "Caravan Chicken — jo'jalikdan dasturxoningizgacha bo'lgan barcha jarayonlarni to'liq nazorat qiluvchi kompaniya. Zamonaviy uskunalar, 120+ tajribali mutaxassis va yiliga 3,5 milliondan ortiq bosh jo'ja yetishtirish quvvati bizga har bir mahsulotda barqaror sifatni ta'minlash imkonini beradi.",
      features: [
        { title: "Halol so'yish kafolati", text: "Shariy qoidalar asosida, qo'lda so'yiladi." },
        { title: "O'z tovuq fermamiz mavjud", text: "Sog'lom ozuqa va toza sharoit kafolati." },
        { title: 'Gigiyenik va halol qadoqlash', text: 'Zamonaviy uskunalarda toza, ishonchli qadoqlash.' },
      ],
    },

    prod: {
      eyebrow: 'Mahsulotlar',
      title: 'Har qanday menyu va oila dasturxoni uchun ideal',
      lead: "Yangi so'yilgan tovuqning barcha qismlari, yarim tayyor mahsulotlar va keng assortiment — barchasi bir joyda.",
      all: 'Barcha mahsulotlar',
      videoBadge: '▶ Avto-ijro · ovozsiz',
      detail: 'Batafsil',
      cards: [
        { title: 'Tovuq naggetslari', text: "Bolalar yaxshi ko'radigan, tez tayyorlanadigan yarim tayyor mahsulot." },
        { title: 'Tovuq filesi', text: "Yangi so'yilgan, sof oqsilga boy noziq ko'krak qismi." },
        { title: 'Marinadlangan qanotcha', text: 'Ziravorlarda marinadlangan, grill uchun tayyor.' },
        { title: 'Dudlangan tovuq son', text: 'Tabiiy dudlangan, dasturxonga tayyor noziklik.' },
      ],
    },

    why: {
      eyebrow: 'Nega aynan Caravan Chicken?',
      title: 'Bizning 5 ta kuchli tomonimiz',
      featureTitle: 'Halol va xalqaro ISO sertifikatlar',
      featureText: "Shariy qoidalar asosida mahsulotlar qo'lda so'yiladi — bu bizning asosiy va'damiz.",
      cards: [
        { title: "Jo'jalikdan dasturxongacha to'liq nazorat", text: 'Yetishtirishdan qadoqlashgacha — har bir bosqich bizning nazoratimizda.' },
        { title: '5–6 daqiqada tayyor', text: 'Yarim tayyor mahsulotlar — band kunlar, kutilmagan mehmonlar va restoran menyulari uchun ideal yechim.' },
        { title: 'Uzluksiz, yirik hajmda yetkazib berish', text: "Restoran va kafelar uchun ulgurji va barqaror ta'minot kafolati." },
        { title: 'Gigiyenik ishlab chiqarish', text: "Zamonaviy uskunalar va qat'iy tozalik standartlari." },
      ],
    },

    process: {
      eyebrow: 'Jarayon',
      title: "Jo'jalikdan dasturxoningizgacha — 5 bosqich",
      steps: [
        { title: 'Yetishtirish', text: "Sog'lom va tabiiy sharoitda boqilgan jo'jalar." },
        { title: "Halol so'yish", text: "Shariy qoidalar asosida, qo'lda so'yiladi." },
        { title: 'Tozalash & qayta ishlash', text: 'Zamonaviy, gigiyenik va pokiza sexda ishlov beriladi.' },
        { title: 'Qadoqlash', text: 'Toza va xavfsiz, pokiza qadoqlash.' },
        { title: 'Yetkazib berish', text: "Tez, uzluksiz — to'g'ridan-to'g'ri qo'lingizgacha." },
      ],
    },

    reviews: {
      eyebrow: 'Mijozlar fikri',
      title: 'Bizga ishongan brendlar nima deydi?',
      items: [
        { text: "Caravan Chicken bilan ishlay boshlaganimizdan beri ta'minot uzilishini umuman ko'rmadik. Sifat barqaror.", name: 'Akmal Karimov', company: '"Osh Markazi" restorani' },
        { text: 'Halollik kafolati biz uchun eng muhim. Mijozlarimizga ishonch bilan taklif qilamiz.', name: 'Dilnoza Yusupova', company: '"Family Cafe"' },
        { text: 'Yarim tayyor mahsulotlar menyumizni tezlashtirdi — buyurtma 6 daqiqada tayyor.', name: 'Sardor Aliyev', company: '"Tez Lunch" fastfood' },
      ],
    },

    faq: {
      eyebrow: 'Savollar',
      title: "Bizdan ko'p so'raladigan savollar",
      lead: "Bu yerda sizni qiziqtirgan barcha savollarga javob topasiz. Boshqa savollaringiz bo'lsa, biz bilan bog'laning.",
      ask: 'Savol berish',
      items: [
        { q: 'Caravan Chicken mahsulotlari nima bilan farq qiladi?', a: "Biz butun jarayonni — yetishtirishdan qadoqlashgacha — o'zimiz nazorat qilamiz. Bu barqaror sifat va to'liq halollik kafolatini beradi." },
        { q: "Nega restoranlar Caravan Chicken'ni tanlaydi?", a: "Uzluksiz ta'minot, barqaror sifat va yirik hajmdagi buyurtmalarni o'z vaqtida yetkazib berish — restoranlar uchun eng muhim omillar." },
        { q: "Mahsulotlar qanday sifat nazoratidan o'tadi?", a: "Har bir partiya gigiyenik sexda zamonaviy uskunalar yordamida tekshiriladi va xalqaro standartlarga muvofiq qayta ishlanadi." },
        { q: 'Doimiy hamkorlar uchun alohida shartlar bormi?', a: "Ha, doimiy hamkorlar uchun individual narxlar, ustuvor yetkazib berish va moslashuvchan to'lov shartlari belgilanadi." },
        { q: 'Minimal buyurtma miqdori qancha?', a: "Minimal buyurtma hajmi mahsulot turiga bog'liq. Aniq miqdor uchun biz bilan bog'laning — sizga mos shartlarni taklif qilamiz." },
        { q: 'Yarim tayyor mahsulotlar qanday saqlanadi?', a: 'Yarim tayyor mahsulotlar muzlatilgan holatda yetkazib beriladi va tegishli harorat rejimida uzoq muddat sifatini saqlaydi.' },
        { q: 'Yetkazib berish qancha vaqt oladi?', a: "Toshkent bo'ylab buyurtmalar odatda 24 soat ichida yetkaziladi. Doimiy hamkorlar uchun belgilangan jadval asosida ishlaymiz." },
      ],
    },

    contact: {
      eyebrow: "Bog'lanish",
      title: "Hamkorlik yoki buyurtma uchun so'rov yuboring",
      lead: "Formani to'ldiring — narx, hajm va shartlar bo'yicha siz bilan tez orada bog'lanamiz. Doimiy hamkorlar uchun individual narxlar belgilanadi.",
      list: [
        '+998 71 200 21 11',
        'Telegram: @caravan_chicken',
        'Instagram: @caravan_chicken',
        'Ish vaqti: Du–Sh, 9:00–18:00',
      ],
      roleRestaurant: 'Restoran / Kafe',
      roleCustomer: 'Oddiy mijoz',
      note: "Ma'lumotlaringiz uchinchi shaxslarga berilmaydi.",
    },

    form: {
      name: 'Ism',
      namePh: 'Ismingizni kiriting',
      phone: 'Telefon raqami',
      company: 'Korxona / brend nomi',
      companyPh: "Restoran yoki do'koningiz nomi",
      iAm: 'Men:',
      comment: "Izoh yoki so'rovingiz",
      commentPh: "Qo'shimcha ma'lumotlar...",
      submit: "So'rov yuborish",
    },

    footer: {
      desc: "Jo'jalikdan dasturxoningizgacha — halol, pokiza va tez yetkazib beriladigan tovuq mahsulotlari.",
      pagesTitle: 'Sahifalar',
      contactTitle: 'Kontakt',
      findTitle: 'Bizni toping',
      address: "Toshkent sh., Sergeli tumani, Qumariq MFY, Alisher Navoiy ko'chasi, 11-uy",
      hours: 'Du–Sh, 9:00–18:00',
      copyright: '© 2026 Caravan Chicken. Barcha huquqlar himoyalangan. · Ishlab chiqaruvchi: «Caravan Chickens Meat» MChJ',
      privacy: 'Maxfiylik siyosati',
      terms: 'Foydalanish shartlari',
    },

    catalog: {
      eyebrow: 'Mahsulotlar katalogi',
      title: 'Har bir menyu uchun ideal tovuq mahsulotlari',
      lead: "Yangi so'yilgan, yarim tayyor, marinadlangan va dudlangan — 30 dan ortiq mahsulot turi ulgurji va chakana savdo uchun.",
      detail: 'Batafsil',
      ctaTitle: "Ulgurji yoki shaxsiy buyurtma?<br />Biz bilan bog'laning",
      ctaText: "Narx, hajm va yetkazib berish shartlari bo'yicha menejerimiz siz bilan tez orada bog'lanadi.",
      ctaBtn: "Hoziroq bog'lanish",
    },

    detail: {
      priceEyebrow: 'Ulgurji narx',
      priceValue: 'Kelishilgan holda — hajmga qarab',
      order: 'Buyurtma berish',
      askPrice: "Narx so'rash",
      badgeHalal: 'Halal sertifikat',
      badgeIso: 'ISO sifat nazorati',
      aboutTitle: 'Mahsulot haqida batafsil',
      tavsifTitle: 'Tavsif',
      saqlashTitle: 'Saqlash va tayyorlash',
      relatedTitle: "O'xshash mahsulotlar",
      detailLink: 'Batafsil',
    },

    aboutP: {
      eyebrow: 'Biz haqimizda',
      title: "Bir maqsad yo'lida birlashgan katta oila",
      lead: "Caravan Chicken — jo'jalikdan dasturxoningizgacha bo'lgan barcha jarayonni o'z nazorati ostida olib boradigan ishlab chiqarish kompaniyasi.",
      bannerLabel: 'Jamoa surati uchun erkin maydon',
      storyTitle: 'Bizning hikoyamiz',
      storyP1: "Caravan Chicken — jo'jalikdan boshlangan kichik bir tashabbus edi. Bugun u zamonaviy uskunalar, tajribali mutaxassislar va o'z fermasi bilan O'zbekistondagi yetakchi tovuq mahsulotlari ishlab chiqaruvchilaridan biriga aylandi.",
      storyP2: 'Maqsadimiz oddiy: har bir oilaning dasturxoniga halol, toza va ishonchli mahsulot yetkazish. Ana shu ishonch bizni har kuni oldinga yetaklaydi.',
      badgeText: 'Yillik yetishtirish quvvati — bir boshdan',
      stats: ['Doimiy hamkor', 'Yillik tajriba', 'Mahsulot turi', 'Hududda yetkazish'],
      valuesEyebrow: 'Qadriyatlarimiz',
      valuesHeading: 'Sifat, pokizlik va insonlar ishonchi',
      values: [
        { title: "Halal so'yish kafolati", text: "Mahsulotlarimiz shariy qoidalar asosida, qo'lda va nazorat ostida so'yiladi." },
        { title: "O'z tovuq fermamiz", text: "Yarim 3.5 mln bosh quvvati — boshidan oxirigacha o'zimiz nazorat qilamiz." },
        { title: 'Gigiyenik qadoqlash', text: 'Zamonaviy uskunalarda toza, ishonchli va halol qadoqlash jarayoni.' },
      ],
      ctaTitle: "Caravan Chicken oilasiga qo'shiling",
      ctaText: "Hamkor, ulgurji xaridor yoki yetkazib beruvchi bo'lishni xohlaysizmi? — Biz bilan bog'laning.",
      ctaBtn: "Hamkor bo'lish",
    },

    contactP: {
      eyebrow: "Bog'lanish",
      title: "Biz bilan bog'laning",
      lead: "Hamkorlik, ulgurji yoki shaxsiy buyurtma — formani to'ldiring yoki quyidagi kanallar orqali murojaat qiling. Tez orada javob beramiz.",
      cards: [
        { label: 'Telefon', value: '+998 71 200 21 11' },
        { label: 'Telegram', value: '@caravan_chicken' },
        { label: 'Manzil', value: "Sergeli tumani, Qumariq MFY, Alisher Navoiy ko'chasi, 11-uy" },
        { label: 'Ish vaqti', value: 'Dushanba–Shanba, 9:00–18:00' },
      ],
      formTitle: "So'rov yuborish",
      roleB2b: 'Restoran / Kafe (B2B)',
      roleB2c: 'Oddiy mijoz (B2C)',
      ok: "Rahmat! So'rovingiz qabul qilindi — tez orada bog'lanamiz.",
      mapTitle: 'Bizni xaritada toping',
      mapLabel: 'Interaktiv xarita shu yerga joylashtiriladi',
    },
  },

  ru: {
    nav: {
      home: 'Главная',
      about: 'О нас',
      products: 'Продукция',
      process: 'Процесс',
      faq: 'Вопросы',
      contact: 'Контакты',
      partner: 'Стать партнёром',
    },

    hero: {
      tags: ['Халяль', 'Чистота', 'Скорость'],
      title: 'Все процессы под нашим контролем — от птенца до стола!',
      lead: 'Caravan Chicken — компания, производящая качественную, халяльную и чистую куриную продукцию и поставляющая её крупными объёмами для ресторанов, кафе, фастфуда и семейного стола.',
      viewProducts: 'Смотреть продукцию',
      buy: 'Купить',
    },

    stats: {
      items: [
        'Партнёров доверяют нам',
        'Лет качественного производства',
        'Видов продукции',
        'Регионов доставки',
      ],
      trusted: 'Нам доверяют',
    },

    about: {
      eyebrow: 'О нас',
      title: 'Крупное производство, построенное на доверии',
      lead: 'Caravan Chicken — компания, полностью контролирующая все процессы от птенца до вашего стола. Современное оборудование, более 120 опытных специалистов и мощность выращивания свыше 3,5 миллиона голов в год позволяют нам обеспечивать стабильное качество каждого продукта.',
      features: [
        { title: 'Гарантия халяльного забоя', text: 'Забой производится вручную, по шариатским нормам.' },
        { title: 'Собственная птицеферма', text: 'Гарантия здорового корма и чистых условий.' },
        { title: 'Гигиеничная и халяльная упаковка', text: 'Чистая и надёжная упаковка на современном оборудовании.' },
      ],
    },

    prod: {
      eyebrow: 'Продукция',
      title: 'Идеально для любого меню и семейного стола',
      lead: 'Все части охлаждённой курицы, полуфабрикаты и широкий ассортимент — всё в одном месте.',
      all: 'Вся продукция',
      videoBadge: '▶ Автовоспроизведение · без звука',
      detail: 'Подробнее',
      cards: [
        { title: 'Куриные наггетсы', text: 'Любимый детьми, быстро готовящийся полуфабрикат.' },
        { title: 'Куриное филе', text: 'Охлаждённая, богатая белком нежная грудка.' },
        { title: 'Маринованные крылышки', text: 'Маринованы в специях, готовы для гриля.' },
        { title: 'Копчёное куриное бедро', text: 'Натуральное копчение, готовый к столу деликатес.' },
      ],
    },

    why: {
      eyebrow: 'Почему именно Caravan Chicken?',
      title: 'Наши 5 сильных сторон',
      featureTitle: 'Халяль и международные сертификаты ISO',
      featureText: 'Продукция забивается вручную по шариатским нормам — это наше главное обещание.',
      cards: [
        { title: 'Полный контроль от птенца до стола', text: 'От выращивания до упаковки — каждый этап под нашим контролем.' },
        { title: 'Готово за 5–6 минут', text: 'Полуфабрикаты — идеальное решение для занятых дней, нежданных гостей и меню ресторанов.' },
        { title: 'Бесперебойные поставки крупными объёмами', text: 'Гарантия оптового и стабильного снабжения для ресторанов и кафе.' },
        { title: 'Гигиеничное производство', text: 'Современное оборудование и строгие стандарты чистоты.' },
      ],
    },

    process: {
      eyebrow: 'Процесс',
      title: 'От птенца до вашего стола — 5 этапов',
      steps: [
        { title: 'Выращивание', text: 'Птенцы, выращенные в здоровых и естественных условиях.' },
        { title: 'Халяльный забой', text: 'Забой вручную, по шариатским нормам.' },
        { title: 'Очистка и переработка', text: 'Обработка в современном, гигиеничном и чистом цеху.' },
        { title: 'Упаковка', text: 'Чистая и безопасная, гигиеничная упаковка.' },
        { title: 'Доставка', text: 'Быстро и бесперебойно — прямо в ваши руки.' },
      ],
    },

    reviews: {
      eyebrow: 'Отзывы клиентов',
      title: 'Что говорят доверяющие нам бренды?',
      items: [
        { text: 'С начала работы с Caravan Chicken мы вообще не сталкивались с перебоями поставок. Качество стабильное.', name: 'Акмаль Каримов', company: 'ресторан «Ош Маркази»' },
        { text: 'Гарантия халяльности для нас важнее всего. Мы с уверенностью предлагаем продукцию нашим клиентам.', name: 'Дилноза Юсупова', company: '«Family Cafe»' },
        { text: 'Полуфабрикаты ускорили наше меню — заказ готов за 6 минут.', name: 'Сардор Алиев', company: 'фастфуд «Tez Lunch»' },
      ],
    },

    faq: {
      eyebrow: 'Вопросы',
      title: 'Часто задаваемые вопросы',
      lead: 'Здесь вы найдёте ответы на все интересующие вас вопросы. Если у вас есть другие вопросы — свяжитесь с нами.',
      ask: 'Задать вопрос',
      items: [
        { q: 'Чем отличается продукция Caravan Chicken?', a: 'Мы сами контролируем весь процесс — от выращивания до упаковки. Это даёт гарантию стабильного качества и полной халяльности.' },
        { q: 'Почему рестораны выбирают Caravan Chicken?', a: 'Бесперебойное снабжение, стабильное качество и своевременная доставка крупных заказов — самые важные факторы для ресторанов.' },
        { q: 'Какой контроль качества проходит продукция?', a: 'Каждая партия проверяется в гигиеничном цеху на современном оборудовании и перерабатывается в соответствии с международными стандартами.' },
        { q: 'Есть ли особые условия для постоянных партнёров?', a: 'Да, для постоянных партнёров устанавливаются индивидуальные цены, приоритетная доставка и гибкие условия оплаты.' },
        { q: 'Каков минимальный объём заказа?', a: 'Минимальный объём заказа зависит от вида продукции. Для уточнения свяжитесь с нами — мы предложим подходящие вам условия.' },
        { q: 'Как хранятся полуфабрикаты?', a: 'Полуфабрикаты поставляются в замороженном виде и при соответствующем температурном режиме долго сохраняют качество.' },
        { q: 'Сколько времени занимает доставка?', a: 'Заказы по Ташкенту обычно доставляются в течение 24 часов. С постоянными партнёрами работаем по установленному графику.' },
      ],
    },

    contact: {
      eyebrow: 'Контакты',
      title: 'Отправьте запрос на сотрудничество или заказ',
      lead: 'Заполните форму — мы свяжемся с вами в ближайшее время по цене, объёму и условиям. Для постоянных партнёров устанавливаются индивидуальные цены.',
      list: [
        '+998 71 200 21 11',
        'Telegram: @caravan_chicken',
        'Instagram: @caravan_chicken',
        'Время работы: Пн–Сб, 9:00–18:00',
      ],
      roleRestaurant: 'Ресторан / Кафе',
      roleCustomer: 'Обычный клиент',
      note: 'Ваши данные не передаются третьим лицам.',
    },

    form: {
      name: 'Имя',
      namePh: 'Введите ваше имя',
      phone: 'Номер телефона',
      company: 'Название компании / бренда',
      companyPh: 'Название вашего ресторана или магазина',
      iAm: 'Я:',
      comment: 'Комментарий или запрос',
      commentPh: 'Дополнительная информация...',
      submit: 'Отправить запрос',
    },

    footer: {
      desc: 'От птенца до вашего стола — халяльная, чистая и быстро доставляемая куриная продукция.',
      pagesTitle: 'Страницы',
      contactTitle: 'Контакты',
      findTitle: 'Найти нас',
      address: 'г. Ташкент, Сергелийский р-н, МФЙ Кумарик, ул. Алишера Навои, дом 11',
      hours: 'Пн–Сб, 9:00–18:00',
      copyright: '© 2026 Caravan Chicken. Все права защищены. · Производитель: ООО «Caravan Chickens Meat»',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования',
    },

    catalog: {
      eyebrow: 'Каталог продукции',
      title: 'Идеальная куриная продукция для любого меню',
      lead: 'Охлаждённая, полуфабрикаты, маринованная и копчёная — более 30 видов продукции для оптовой и розничной торговли.',
      detail: 'Подробнее',
      ctaTitle: 'Оптовый или личный заказ?<br />Свяжитесь с нами',
      ctaText: 'Наш менеджер свяжется с вами в ближайшее время по цене, объёму и условиям доставки.',
      ctaBtn: 'Связаться сейчас',
    },

    detail: {
      priceEyebrow: 'Оптовая цена',
      priceValue: 'По договорённости — в зависимости от объёма',
      order: 'Оформить заказ',
      askPrice: 'Узнать цену',
      badgeHalal: 'Сертификат халяль',
      badgeIso: 'Контроль качества ISO',
      aboutTitle: 'Подробнее о продукте',
      tavsifTitle: 'Описание',
      saqlashTitle: 'Хранение и приготовление',
      relatedTitle: 'Похожие продукты',
      detailLink: 'Подробнее',
    },

    aboutP: {
      eyebrow: 'О нас',
      title: 'Большая семья, объединённая одной целью',
      lead: 'Caravan Chicken — производственная компания, которая ведёт под собственным контролем весь процесс от птенца до вашего стола.',
      bannerLabel: 'Свободное место для фото команды',
      storyTitle: 'Наша история',
      storyP1: 'Caravan Chicken начиналась с небольшой инициативы на птицеферме. Сегодня, с современным оборудованием, опытными специалистами и собственной фермой, она стала одним из ведущих производителей куриной продукции в Узбекистане.',
      storyP2: 'Наша цель проста: доставить на стол каждой семьи халяльный, чистый и надёжный продукт. Именно это доверие ведёт нас вперёд каждый день.',
      badgeText: 'Годовая мощность выращивания — поголовно',
      stats: ['Постоянных партнёров', 'Лет опыта', 'Видов продукции', 'Регионов доставки'],
      valuesEyebrow: 'Наши ценности',
      valuesHeading: 'Качество, чистота и доверие людей',
      values: [
        { title: 'Гарантия халяльного забоя', text: 'Наша продукция забивается по шариатским нормам, вручную и под контролем.' },
        { title: 'Собственная птицеферма', text: 'Мощность около 3.5 млн голов — контролируем от начала до конца сами.' },
        { title: 'Гигиеничная упаковка', text: 'Чистый, надёжный и халяльный процесс упаковки на современном оборудовании.' },
      ],
      ctaTitle: 'Присоединяйтесь к семье Caravan Chicken',
      ctaText: 'Хотите стать партнёром, оптовым покупателем или поставщиком? — Свяжитесь с нами.',
      ctaBtn: 'Стать партнёром',
    },

    contactP: {
      eyebrow: 'Контакты',
      title: 'Свяжитесь с нами',
      lead: 'Сотрудничество, оптовый или личный заказ — заполните форму или обратитесь по каналам ниже. Ответим в ближайшее время.',
      cards: [
        { label: 'Телефон', value: '+998 71 200 21 11' },
        { label: 'Telegram', value: '@caravan_chicken' },
        { label: 'Адрес', value: 'Сергелийский р-н, МФЙ Кумарик, ул. Алишера Навои, дом 11' },
        { label: 'Время работы', value: 'Понедельник–Суббота, 9:00–18:00' },
      ],
      formTitle: 'Отправить запрос',
      roleB2b: 'Ресторан / Кафе (B2B)',
      roleB2c: 'Обычный клиент (B2C)',
      ok: 'Спасибо! Ваш запрос принят — мы скоро свяжемся с вами.',
      mapTitle: 'Найдите нас на карте',
      mapLabel: 'Здесь будет размещена интерактивная карта',
    },
  },
}
