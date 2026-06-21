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
      storyP1: "Caravan Chicken — jo'jalikdan dasturxoningizgacha bo'lgan barcha jarayonlarni to'liq nazorat qiluvchi yirik ishlab chiqarish kompaniyasi. Biz uchun sifat oddiy standart emas — bu butun jamoamizning asosiy qadriyati. Kompaniyamiz zamonaviy texnologiyalar va so'nggi rusumdagi uskunalar bilan jihozlangan yirik ishlab chiqarish hududiga ega.",
      storyP2: "Mahsulotlarimiz halol va shariy qoidalarga to'liq amal qilgan holda qo'lda so'yiladi. Tovuqlar tabiiy va sog'lom usulda yetishtiriladi hamda barcha gigiyena standartlariga qat'iy rioya qilinadi. Biz tovuqning barcha qismlari va 15 dan ortiq yarim tayyor mahsulot turlarini ishlab chiqaramiz.",
      storyP3: "Bugungi kunda Caravan Chicken ko'plab mahalliy brendlar, fast food restoranlar, kafelar va hamkor korxonalar hamda oila dasturxoni uchun ishonchli yetkazib beruvchi sifatida faoliyat yuritmoqda. Biz uchun eng muhimi — sifat, pokizlik va insonlar ishonchi.",
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
      tags: ['Халяль', 'Чисто', 'Быстро'],
      title: 'От инкубатора и до стола — все процессы под нашим контролем!',
      lead: 'Caravan Chicken — компания, которая производит качественную, халяльную и чистую куриную продукцию для ресторанов, кафе, фастфуда и домашнего стола, а также поставляет её оптом.',
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
      storyP1: 'Caravan Chicken — крупная производственная компания, полностью контролирующая все процессы от птицефермы до вашего стола. Для нас качество — не просто стандарт, а главная ценность всей нашей команды. Компания располагает крупной производственной территорией, оснащённой современными технологиями и оборудованием последнего поколения.',
      storyP2: 'Наша продукция забивается вручную при полном соблюдении халяльных и шариатских норм. Птица выращивается естественным и здоровым способом, со строгим соблюдением всех гигиенических стандартов. Мы производим все части курицы и более 15 видов полуфабрикатов.',
      storyP3: 'Сегодня Caravan Chicken работает как надёжный поставщик для множества местных брендов, ресторанов быстрого питания, кафе и партнёрских предприятий, а также для семейного стола. Самое важное для нас — качество, чистота и доверие людей.',
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

  en: {
    nav: {
      home: 'Home',
      about: 'About us',
      products: 'Products',
      process: 'Process',
      faq: 'FAQ',
      contact: 'Contact',
      partner: 'Become a partner',
    },

    hero: {
      tags: ['Halal', 'Clean', 'Fast'],
      title: 'From hatchery onward — every process under our control!',
      lead: 'Caravan Chicken is a company that produces high-quality, halal and clean chicken products for restaurants, cafés, fast food and family tables — and delivers them at scale.',
      viewProducts: 'View products',
      buy: 'Buy now',
    },

    stats: {
      items: [
        'Partners who trust us',
        'Years of quality production',
        'Product types',
        'Regions we deliver to',
      ],
      trusted: 'Trusted by',
    },

    about: {
      eyebrow: 'About us',
      title: 'A large production system built on trust',
      lead: 'Caravan Chicken is a company that fully controls every process from the farm to your table. Modern equipment, 120+ experienced specialists and a capacity of over 3.5 million birds per year allow us to ensure consistent quality in every product.',
      features: [
        { title: 'Guaranteed halal slaughter', text: 'Slaughtered by hand, according to Sharia rules.' },
        { title: 'We have our own poultry farm', text: 'Guaranteed healthy feed and clean conditions.' },
        { title: 'Hygienic and halal packaging', text: 'Clean, reliable packaging on modern equipment.' },
      ],
    },

    prod: {
      eyebrow: 'Products',
      title: 'Ideal for any menu and the family table',
      lead: 'All cuts of freshly slaughtered chicken, semi-finished products and a wide assortment — all in one place.',
      all: 'All products',
      videoBadge: '▶ Auto-play · muted',
      detail: 'Details',
      cards: [
        { title: 'Chicken nuggets', text: 'A kid-favourite, quick-to-cook semi-finished product.' },
        { title: 'Chicken fillet', text: 'Freshly slaughtered, protein-rich tender breast.' },
        { title: 'Marinated wings', text: 'Marinated in spices, ready for the grill.' },
        { title: 'Smoked chicken thigh', text: 'Naturally smoked, a table-ready delicacy.' },
      ],
    },

    why: {
      eyebrow: 'Why Caravan Chicken?',
      title: 'Our 5 strengths',
      featureTitle: 'Halal and international ISO certificates',
      featureText: 'Products are slaughtered by hand according to Sharia rules — that is our core promise.',
      cards: [
        { title: 'Full control from farm to table', text: 'From rearing to packaging — every stage is under our control.' },
        { title: 'Ready in 5–6 minutes', text: 'Semi-finished products — the ideal solution for busy days, unexpected guests and restaurant menus.' },
        { title: 'Continuous, large-volume delivery', text: 'Guaranteed wholesale and stable supply for restaurants and cafés.' },
        { title: 'Hygienic production', text: 'Modern equipment and strict cleanliness standards.' },
      ],
    },

    process: {
      eyebrow: 'Process',
      title: 'From the farm to your table — 5 stages',
      steps: [
        { title: 'Rearing', text: 'Birds raised in healthy and natural conditions.' },
        { title: 'Halal slaughter', text: 'Slaughtered by hand, according to Sharia rules.' },
        { title: 'Cleaning & processing', text: 'Processed in a modern, hygienic and clean workshop.' },
        { title: 'Packaging', text: 'Clean and safe, hygienic packaging.' },
        { title: 'Delivery', text: 'Fast and continuous — straight to your hands.' },
      ],
    },

    reviews: {
      eyebrow: 'Customer reviews',
      title: 'What do the brands that trust us say?',
      items: [
        { text: 'Since we started working with Caravan Chicken, we have not seen a single supply interruption. The quality is consistent.', name: 'Akmal Karimov', company: '"Osh Markazi" restaurant' },
        { text: 'The halal guarantee matters most to us. We confidently offer it to our customers.', name: 'Dilnoza Yusupova', company: '"Family Cafe"' },
        { text: 'Semi-finished products sped up our menu — an order is ready in 6 minutes.', name: 'Sardor Aliyev', company: '"Tez Lunch" fast food' },
      ],
    },

    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently asked questions',
      lead: 'Here you will find answers to all the questions that interest you. If you have other questions, get in touch with us.',
      ask: 'Ask a question',
      items: [
        { q: 'What makes Caravan Chicken products different?', a: 'We control the entire process ourselves — from rearing to packaging. This guarantees consistent quality and full halal compliance.' },
        { q: 'Why do restaurants choose Caravan Chicken?', a: 'Uninterrupted supply, consistent quality and on-time delivery of large orders — the most important factors for restaurants.' },
        { q: 'What quality control do the products go through?', a: 'Every batch is inspected in a hygienic workshop using modern equipment and processed in line with international standards.' },
        { q: 'Are there special terms for regular partners?', a: 'Yes, regular partners get individual pricing, priority delivery and flexible payment terms.' },
        { q: 'What is the minimum order quantity?', a: 'The minimum order volume depends on the product type. Contact us for exact figures — we will offer terms that suit you.' },
        { q: 'How are semi-finished products stored?', a: 'Semi-finished products are delivered frozen and keep their quality for a long time at the right temperature.' },
        { q: 'How long does delivery take?', a: 'Orders across Tashkent are usually delivered within 24 hours. With regular partners we work on a set schedule.' },
      ],
    },

    contact: {
      eyebrow: 'Contact',
      title: 'Send a request for partnership or an order',
      lead: 'Fill in the form — we will contact you shortly about pricing, volume and terms. Regular partners get individual pricing.',
      list: [
        '+998 71 200 21 11',
        'Telegram: @caravan_chicken',
        'Instagram: @caravan_chicken',
        'Working hours: Mon–Sat, 9:00–18:00',
      ],
      roleRestaurant: 'Restaurant / Café',
      roleCustomer: 'Regular customer',
      note: 'Your information is not shared with third parties.',
    },

    form: {
      name: 'Name',
      namePh: 'Enter your name',
      phone: 'Phone number',
      company: 'Company / brand name',
      companyPh: 'Name of your restaurant or shop',
      iAm: 'I am:',
      comment: 'Comment or request',
      commentPh: 'Additional information...',
      submit: 'Send request',
    },

    footer: {
      desc: 'From the farm to your table — halal, clean and fast-delivered chicken products.',
      pagesTitle: 'Pages',
      contactTitle: 'Contact',
      findTitle: 'Find us',
      address: 'Tashkent, Sergeli district, Qumariq neighbourhood, Alisher Navoiy street, building 11',
      hours: 'Mon–Sat, 9:00–18:00',
      copyright: '© 2026 Caravan Chicken. All rights reserved. · Manufacturer: "Caravan Chickens Meat" LLC',
      privacy: 'Privacy policy',
      terms: 'Terms of use',
    },

    catalog: {
      eyebrow: 'Product catalog',
      title: 'Ideal chicken products for every menu',
      lead: 'Freshly slaughtered, semi-finished, marinated and smoked — over 30 product types for wholesale and retail.',
      detail: 'Details',
      ctaTitle: 'Wholesale or personal order?<br />Get in touch with us',
      ctaText: 'Our manager will contact you shortly about pricing, volume and delivery terms.',
      ctaBtn: 'Contact now',
    },

    detail: {
      priceEyebrow: 'Wholesale price',
      priceValue: 'By agreement — depending on volume',
      order: 'Place an order',
      askPrice: 'Ask for price',
      badgeHalal: 'Halal certificate',
      badgeIso: 'ISO quality control',
      aboutTitle: 'About the product in detail',
      tavsifTitle: 'Description',
      saqlashTitle: 'Storage and preparation',
      relatedTitle: 'Similar products',
      detailLink: 'Details',
    },

    aboutP: {
      eyebrow: 'About us',
      title: 'A large family united by one goal',
      lead: 'Caravan Chicken is a production company that runs the entire process from the farm to your table under its own control.',
      bannerLabel: 'Free space for a team photo',
      storyTitle: 'Our story',
      storyP1: 'Caravan Chicken is a large production company that fully controls every process from the poultry farm to your table. For us, quality is not just a standard — it is the core value of our entire team. The company has a large production site equipped with modern technologies and the latest-generation equipment.',
      storyP2: 'Our products are slaughtered by hand in full compliance with halal and Sharia rules. The birds are raised in a natural and healthy way, with strict adherence to all hygiene standards. We produce every cut of the chicken and more than 15 types of semi-finished products.',
      storyP3: 'Today, Caravan Chicken operates as a reliable supplier for many local brands, fast-food restaurants, cafés and partner businesses, as well as for the family table. What matters most to us is quality, cleanliness and people’s trust.',
      badgeText: 'Annual rearing capacity — per head',
      stats: ['Regular partners', 'Years of experience', 'Product types', 'Regions delivered to'],
      valuesEyebrow: 'Our values',
      valuesHeading: 'Quality, cleanliness and people’s trust',
      values: [
        { title: 'Guaranteed halal slaughter', text: 'Our products are slaughtered by hand and under supervision, according to Sharia rules.' },
        { title: 'Our own poultry farm', text: 'A capacity of about 3.5 million birds — we control it from start to finish ourselves.' },
        { title: 'Hygienic packaging', text: 'A clean, reliable and halal packaging process on modern equipment.' },
      ],
      ctaTitle: 'Join the Caravan Chicken family',
      ctaText: 'Want to become a partner, wholesale buyer or supplier? — Get in touch with us.',
      ctaBtn: 'Become a partner',
    },

    contactP: {
      eyebrow: 'Contact',
      title: 'Get in touch with us',
      lead: 'Partnership, wholesale or a personal order — fill in the form or reach us through the channels below. We will respond shortly.',
      cards: [
        { label: 'Phone', value: '+998 71 200 21 11' },
        { label: 'Telegram', value: '@caravan_chicken' },
        { label: 'Address', value: 'Sergeli district, Qumariq neighbourhood, Alisher Navoiy street, building 11' },
        { label: 'Working hours', value: 'Monday–Saturday, 9:00–18:00' },
      ],
      formTitle: 'Send a request',
      roleB2b: 'Restaurant / Café (B2B)',
      roleB2c: 'Regular customer (B2C)',
      ok: 'Thank you! Your request has been received — we will contact you shortly.',
      mapTitle: 'Find us on the map',
      mapLabel: 'An interactive map will be placed here',
    },
  },
}
