// ============================================================
//  REACT SAVOL-JAVOB — Barcha savollar bazasi (23 mavzu)
// ============================================================

export const topics = [
  {
    id: 1,
    key: "react_intro",
    label: "React ga kirish",
    icon: "⚛️",
    color: "#61dafb",
  },
  {
    id: 2,
    key: "components_jsx",
    label: "Componentalar va JSX",
    icon: "📜",
    color: "#f1c40f",
  },
  {
    id: 3,
    key: "components_styling",
    label: "Components (images, style)",
    icon: "🎨",
    color: "#ff7675",
  },
  {
    id: 4,
    key: "static_data_map",
    label: "Statik data va uni maplash",
    icon: "📋",
    color: "#34495e",
  },
  { id: 5, key: "props", label: "Props", icon: "🧩", color: "#e67e22" },
  {
    id: 6,
    key: "use_state",
    label: "useState Hook",
    icon: "💾",
    color: "#2ecc71",
  },
  {
    id: 7,
    key: "handling_events",
    label: "Handling Events in React",
    icon: "⚡",
    color: "#e74c3c",
  },
  {
    id: 8,
    key: "use_effect",
    label: "useEffect Hook",
    icon: "🔄",
    color: "#3498db",
  },
  {
    id: 9,
    key: "fetch_crud",
    label: "Fetch and Methods (CRUD)",
    icon: "🌐",
    color: "#1abc9c",
  },
  { id: 10, key: "axios", label: "Axios", icon: "📡", color: "#00b894" },
  {
    id: 11,
    key: "react_router_dom",
    label: "React Router DOM",
    icon: "🚦",
    color: "#8e44ad",
  },
  {
    id: 12,
    key: "react_router_advanced",
    label: "React Router Advanced",
    icon: "🛣️",
    color: "#6c5ce7",
  },
  {
    id: 13,
    key: "props_context",
    label: "Prop drilling & useContext",
    icon: "🔌",
    color: "#9b59b6",
  },
  {
    id: 14,
    key: "memory_management",
    label: "Memory management",
    icon: "🧠",
    color: "#ffeaa7",
  },
  {
    id: 15,
    key: "github_teamwork",
    label: "Github da Team ishlash",
    icon: "👥",
    color: "#2c3e50",
  },
  {
    id: 16,
    key: "use_reducer",
    label: "useReducer Hook",
    icon: "📉",
    color: "#00cec9",
  },
  {
    id: 17,
    key: "memoization",
    label: "UseMemo, Memo, UseCallback",
    icon: "🚀",
    color: "#ff7675",
  },
  {
    id: 18,
    key: "error_handling",
    label: "Error Handling",
    icon: "🛡️",
    color: "#d63031",
  },
  {
    id: 19,
    key: "redux_toolkit",
    label: "Redux toolkit",
    icon: "📦",
    color: "#764abc",
  },
  {
    id: 20,
    key: "i18n_library",
    label: "i18n library",
    icon: "🗣️",
    color: "#fdcb6e",
  },
  { id: 21, key: "firebase", label: "FireBase", icon: "🔥", color: "#e67e22" },
  { id: 22, key: "nextjs", label: "Next JS", icon: "▲", color: "#000000" },
  {
    id: 23,
    key: "nextjs_advanced",
    label: "Next JS advanced",
    icon: "⚡",
    color: "#0984e3",
  },
];

export const questions = {
  // 1. REACT GA KIRISH
  react_intro: [
    {
      question: "React nima?",
      options: [
        "Foydalanuvchi interfeyslarini yaratish uchun JavaScript kutubxonasi",
        "Dasturlash tili",
        "CSS freymvorki",
        "Ma'lumotlar bazasi",
      ],
      correctAnswer: 0,
      explanation:
        "React — bu foydalanuvchi interfeyslarini (UI) yaratish uchun ishlatiladigan, Meta (Facebook) tomonidan ishlab chiqilgan va ochiq manbali JavaScript kutubxonasidir.",
    },
    {
      question: "React kim/qaysi kompaniya tomonidan ishlab chiqilgan?",
      options: ["Google", "Microsoft", "Meta (Facebook)", "Twitter"],
      correctAnswer: 2,
      explanation:
        "React 2013-yilda Facebook (hozirgi Meta) muhandisi Jordan Walke tomonidan yaratilgan va hozirda ham Meta va faol hamjamiyat tomonidan qo'llab-quvvatlanadi.",
    },
    {
      question: "SPA (Single Page Application) nima?",
      options: [
        "Faqat bir sahifali va butun sahifani yangilamasdan ishlovchi ilova",
        "Faqat bir dona rasm bo'lgan sayt",
        "Har bir bosishda serverdan yangi HTML yuklovchi sayt",
        "CSS ishlatilmaydigan sayt",
      ],
      correctAnswer: 0,
      explanation:
        "SPA (Single Page Application) — faqat bitta HTML sahifasini yuklaydigan va foydalanuvchi navigatsiya qilganda butun sahifani yangilamasdan, faqat kerakli qismlarini dinamik yangilaydigan veb-ilovadir.",
    },
    {
      question: "Virtual DOM nima?",
      options: [
        "Brauzerning haqiqiy DOMi",
        "Haqiqiy DOMning xotiradagi yengil nusxasi (kopi)",
        "CSS stillarini saqlaydigan xotira",
        "Serverdagi ma'lumotlar bazasi",
      ],
      correctAnswer: 1,
      explanation:
        "Virtual DOM — bu haqiqiy DOMning xotiradagi (JS obyekt ko'rinishidagi) yengil nusxasidir. React o'zgarishlarni avval Virtual DOMda hisoblab, keyin haqiqiy DOMga minimal ta'sir bilan o'tkazadi.",
    },
    {
      question: "Virtual DOM ishlatilishining asosiy sababi nima?",
      options: [
        "Xavfsizlikni oshirish",
        "Haqiqiy DOMni yangilash sekin bo'lgani uchun tezlikni oshirish",
        "Fayllar hajmini kamaytirish",
        "Server xarajatlarini tejash",
      ],
      correctAnswer: 1,
      explanation:
        "Haqiqiy DOM bilan bevosita va tez-tez ishlash juda sekin. Virtual DOM orqali React faqatgina o'zgargan qismlarni aniqlab (diffing), faqat o'sha joylarni haqiqiy DOMda yangilaydi (reconciliation).",
    },
    {
      question: "Reactda deklarativ (declarative) yondashuv nima?",
      options: [
        "Dasturchi interfeys qanday ko'rinishda bo'lishini tasvirlaydi, o'zgarishlarni React o'zi boshqaradi",
        "Dasturchi sahifa qanday o'zgarishini bosqichma-bosqich yozadi",
        "Faqat o'zgaruvchilarni e'lon qilish",
        "Kodni faqat serverda yozish",
      ],
      correctAnswer: 0,
      explanation:
        "Deklarativ yondashuvda biz 'nima qilish kerakligini' yozamiz (masalan: agar isLoading true bo'lsa, yuklash aylanasi chiqsin). 'Qanday qilishni' (DOM elementini o'chirish/qo'shish) React o'zi hal qiladi.",
    },
    {
      question: "React qanday arxitektura modeliga asoslangan?",
      options: [
        "Monolitik model",
        "Komponentli arxitektura",
        "MVC (Model-View-Controller) modeli",
        "Mikroservislar",
      ],
      correctAnswer: 1,
      explanation:
        "React va undagi UI elementlari butunlay komponentlar (Component-based) arxitekturasiga asoslangan. Sahifaning har bir qismi mustaqil komponent sifatida yoziladi va qayta ishlatiladi.",
    },
    {
      question:
        "Hozirgi kunda yangi React loyihasini tezkor yaratish uchun qaysi vosita tavsiya etiladi?",
      options: ["Create React App", "Vite", "Webpack", "Gulp"],
      correctAnswer: 1,
      explanation:
        "Hozirgi kunda Create React App (CRA) eskirgan deb hisoblanadi. Vite tezligi va qulayligi tufayli eng ommabop loyiha yig'uvchi asbob hisoblanadi.",
    },
    {
      question: "Reactda ma'lumotlar oqimi (data flow) qanday yo'nalishga ega?",
      options: [
        "Ikki tomonlama (two-way)",
        "Faqat pastdan yuqoriga",
        "Bir tomonlama (one-way) - otadan bolaga",
        "Ma'lumotlar oqimi mavjud emas",
      ],
      correctAnswer: 2,
      explanation:
        "Reactda ma'lumotlar faqat bir yo'nalishda (unidirectional data flow) oqadi: ota komponentdan bola komponentga props orqali yuboriladi.",
    },
    {
      question: "React nima uchun dasturlash tili emas?",
      options: [
        "Chunki u faqat brauzerda ishlaydi",
        "Chunki u JavaScript sintaksisiga asoslangan kutubxonadir",
        "Chunki u dizayn chizish uchun",
        "Chunki u faqat serverda ishlaydi",
      ],
      correctAnswer: 1,
      explanation:
        "React dasturlash tili emas, balki JavaScript tilida yozilgan va JavaScript bilan ishlaydigan kutubxonadir.",
    },
  ],

  // 2. COMPONENTALAR VA JSX
  components_jsx: [
    {
      question: "JSX nima?",
      options: [
        "JavaScript XML — JS fayl ichida HTML kabi kod yozish imkonini beruvchi sintaktik kengaytma",
        "Yangi turdagi ma'lumotlar turi",
        "JavaScript kutubxonasi",
        "Dizayn standarti",
      ],
      correctAnswer: 0,
      explanation:
        "JSX — JavaScript XML degani. U JavaScript fayllari ichida xuddi HTML kabi kod yozish imkoniyatini beradi.",
    },
    {
      question: "JSX brauzer tomonidan to'g'ridan-to'g'ri o'qiladimi?",
      options: [
        "Ha, barcha brauzerlar uni to'g'ridan-to'g'ri o'qiydi",
        "Yo'q, u Babel kabi transpaylerlar yordamida JavaScriptga o'girilishi shart",
        "Faqat Chrome o'qiy oladi",
        "Faqat Safari o'qiy oladi",
      ],
      correctAnswer: 1,
      explanation:
        "Brauzerlar JSXni tushunmaydi. Loyihani yig'ish jarayonida Babel yoki shunga o'xshash transpaylerlar uni oddiy JavaScript funksiyalariga (React.createElement) o'giriydi.",
    },
    {
      question: "JSXda JavaScript ifodalarini qanday qavslar ichida yozamiz?",
      options: [
        'Qo\'shtirnoq ichida: ""',
        "Burchakli qavslar ichida: <>",
        "Gulli qavslar ichida: {}",
        "Kvadrat qavslar ichida: []",
      ],
      correctAnswer: 2,
      explanation:
        "JSX ichida istalgan JavaScript o'zgaruvchisi yoki ifodasini yozish uchun gulli qavslar `{}` dan foydalanamiz.",
    },
    {
      question:
        "JSXda oddiy HTML dagi 'class' atributi o'rniga nima ishlatiladi?",
      options: ["class", "className", "class_name", "clazz"],
      correctAnswer: 1,
      explanation:
        "JavaScriptda `class` kalit so'zi klass yaratish uchun band qilingan, shu sababli JSX da uning o'rniga `className` ishlatiladi.",
    },
    {
      question: "JSXda inline stillar (inline styles) qanday beriladi?",
      options: [
        'style="color: red"',
        "style={{ color: 'red' }}",
        "style={color: red}",
        "style=[color: red]",
      ],
      correctAnswer: 1,
      explanation:
        "JSXda stillar obyekt shaklida beriladi. Tashqi qavs JavaScript ifodasi ekanini, ichki qavs esa CSS xossalari yozilgan obyekt ekanini bildiradi.",
    },
    {
      question:
        "JSXda self-closing (o'zi yopiladigan) teglarni (masalan, <br>, <img>) yopish shartmi?",
      options: [
        "Yo'q, shart emas",
        "Ha, oxiriga slash qo'yib yopish shart (masalan: <br />)",
        "Faqat rasmlarni yopish shart",
        "Bu ixtiyoriy",
      ],
      correctAnswer: 1,
      explanation:
        'JSXda barcha teglar yopilishi shart. O\'zi yopiladigan teglarni ham oxirida slash bilan yopish kerak: `<br />`, `<img src="..." />`.',
    },
    {
      question:
        "JSX elementining eng tashqi (root) qismida nechta element bo'lishi mumkin?",
      options: [
        "Faqat 1 ta",
        "Cheksiz ko'p",
        "Kamida 2 ta",
        "Hech qanday element bo'lmasligi ham mumkin",
      ],
      correctAnswer: 0,
      explanation:
        "JSX komponenti har doim bitta root element qaytarishi shart. Agar bir nechta element bo'lsa, ularni bitta div yoki bo'sh Fragment (`<>...</>`) ichiga o'rash kerak.",
    },
    {
      question: "React Fragment (`<>...</>`) nima uchun ishlatiladi?",
      options: [
        "DOMda ortiqcha element hosil qilmasdan bir nechta elementlarni guruhlash uchun",
        "Sahifani tezroq yuklash uchun",
        "Dizayn berish uchun",
        "Ma'lumot saqlash uchun",
      ],
      correctAnswer: 0,
      explanation:
        "React Fragment DOMda ortiqcha `div` yoki boshqa tugunlarni hosil qilmasdan JSX elementlarini bitta rootga o'rash uchun ishlatiladi.",
    },
    {
      question:
        "JSXda CSS xossalari (masalan, background-color) qanday formatda yoziladi?",
      options: [
        "Kebab-case: background-color",
        "CamelCase: backgroundColor",
        "Faqat kichik harflarda",
        "Snake_case: background_color",
      ],
      correctAnswer: 1,
      explanation:
        "JSX obyekt stillarida CSS kalit so'zlari camelCase uslubida yoziladi. Masalan: `backgroundColor`, `fontSize`, `borderRadius`.",
    },
    {
      question: "JSX da izohlar (comments) qanday yoziladi?",
      options: ["// izoh", "<!-- izoh -->", "{/* izoh */}", "/* izoh */"],
      correctAnswer: 2,
      explanation:
        "JSX ichida izoh yozish uchun uni JavaScript ifodasi sifatida gulli qavsga olib, ko'p qatorli izoh belgisidan foydalanamiz: `{/* izoh */}`.",
    },
  ],

  // 3. COMPONENTS (IMAGES, ICONS, STYLE)
  components_styling: [
    {
      question:
        "Vite loyihasida mahalliy rasmni components ichida ishlatish uchun qanday import qilinadi?",
      options: [
        '<img src="./image.png" />',
        "import img from './image.png' va <img src={img} />",
        "const img = require('./image.png')",
        "import './image.png'",
      ],
      correctAnswer: 1,
      explanation:
        "Vite loyihalarida rasmlarni JS moduli kabi import qilib, so'ng JSX da src ga o'zgaruvchi sifatida berish eng to'g'ri va xavfsiz yo'ldir.",
    },
    {
      question: "Public papkasidagi rasmlarni qanday chaqiramiz?",
      options: [
        "import orqali",
        "To'g'ridan-to'g'ri absolyut yo'l orqali: `/image.png`",
        "require('/public/image.png')",
        "Public dagi rasmlarni ishlatib bo'lmaydi",
      ],
      correctAnswer: 1,
      explanation:
        "`public` papkasidagi fayllar o'zgarishsiz build papkasiga ko'chiriladi. Shuning uchun ularni import qilmasdan, `/fayl_nomi` ko'rinishida chaqirish mumkin.",
    },
    {
      question: "CSS Modules nima uchun ishlatiladi?",
      options: [
        "CSS ni o'chiradigan kutubxona",
        "Klass nomlarini unikal qilib, stillar boshqa komponentlarga tasodifan ta'sir qilib ketishini oldini olish uchun",
        "Faqat animatsiyalar uchun",
        "Bootstrap klasslari to'plami",
      ],
      correctAnswer: 1,
      explanation:
        "CSS Modules fayl nomiga `.module.css` deb yozib import qilinadi. U avtomatik ravishda har bir klassga unikal identifikator qo'shadi, natijada klasslar to'qnashmaydi.",
    },
    {
      question:
        "React Icons kutubxonasidan ma'lum bir ikonkani qanday import qilamiz?",
      options: [
        "import FaBeer from 'react-icons'",
        "import { FaBeer } from 'react-icons/fa'",
        "import FaBeer from 'react-icons/fa/FaBeer'",
        "require('react-icons/fa')",
      ],
      correctAnswer: 1,
      explanation:
        "React Icons dan kerakli ikonkalar guruhidan nomlangan import yordamida olinadi: `import { FaBeer } from 'react-icons/fa`.",
    },
    {
      question: "Styled Components nima?",
      options: [
        "Tayyor tugmalar to'plami",
        "JavaScript fayllari ichida CSS yozish imkonini beruvchi CSS-in-JS kutubxonasi",
        "Faqat Tailwind klasslari",
        "Reactning ichki stillash tizimi",
      ],
      correctAnswer: 1,
      explanation:
        "Styled Components — komponentga bog'langan stillarni yozish uchun keng qo'llaniladigan kutubxonadir: `const Button = styled.button`color: red;``.",
    },
    {
      question:
        "Styled Components da props orqali dinamik stillar berish mumkinmi?",
      options: [
        "Yo'q, stillar o'zgarmas bo'ladi",
        "Ha, props qabul qilib, unga qarab CSS qiymatlarini o'zgartirish mumkin",
        "Faqat klasslarda mumkin",
        "Faqat useState bilan mumkin",
      ],
      correctAnswer: 1,
      explanation:
        "Styled Components props qabul qila oladi. Masalan: `color: ${props => props.primary ? 'blue' : 'gray'}`.",
    },
    {
      question:
        "React loyihalarida SASS (SCSS) preprotsessoridan foydalanish uchun nima qilish kerak?",
      options: [
        "Hech narsa, u avtomatik ishlaydi",
        "Loyihaga `sass` paketini (npm i sass) o'rnatish kifoya, keyin .scss fayllarini import qilsa bo'ladi",
        "Webpack sozlash shart",
        "Buning iloji yo'q",
      ],
      correctAnswer: 1,
      explanation:
        "Vite Sass ni avtomatik qo'llab-quvvatlaydi. Loyihaga `sass` dev dependency paketini o'rnatish kifoya.",
    },
    {
      question:
        "CSS Modules faylida qanday qilib klassni global qilish mumkin?",
      options: [
        ":global(.my-class) { ... } ko'rinishida yozish orqali",
        "Klass nomini katta harfda yozib",
        "Faqat divga yozib",
        "Buni iloji yo'q",
      ],
      correctAnswer: 0,
      explanation:
        "CSS Modules ichida `:global` kalit so'zi bilan yozilgan sinflar transpayl bo'lganda unikal nomga o'zgartirilmaydi va oddiy global CSS klassi kabi ishlaydi.",
    },
    {
      question: "Reactda inline css yozish qaysi qatorda to'g'ri ko'rsatilgan?",
      options: [
        '<div style="color: red; font-size: 12px">',
        "<div style={{ color: 'red', fontSize: '12px' }}>",
        "<div style={color: 'red'}>",
        '<div css="color: red">',
      ],
      correctAnswer: 1,
      explanation:
        "JSX da inline style berishda ob'ektdan foydalaniladi va CSS xossalari camelCase formatida yoziladi.",
    },
    {
      question:
        "CSS Modules faylida bir klassni ikkinchisidan meros qilib olish uchun qaysi kalit so'z ishlatiladi?",
      options: ["extends", "composes", "inherit", "include"],
      correctAnswer: 1,
      explanation:
        "CSS Modules-da boshqa klass stillarini olish uchun `composes` kalit so'zi ishlatiladi. Masalan: `composes: className from './another.css';`.",
    },
  ],

  // 4. STATIK DATA VA UNI MAP LASH
  static_data_map: [
    {
      question:
        "Reactda ma'lumotlar massivini ro'yxat ko'rinishida render qilish uchun qaysi metod ishlatiladi?",
      options: ["forEach()", "map()", "filter()", "reduce()"],
      correctAnswer: 1,
      explanation:
        "`map()` metodi massiv elementlarini aylanib chiqib, har bir element uchun yangi JSX qaytaradi va bu orqali ro'yxatlar dinamik hosil qilinadi.",
    },
    {
      question:
        "Ro'yxat elementlarini render qilganda har bir elementga berilishi shart bo'lgan maxsus atribut nima?",
      options: ["id", "key", "index", "className"],
      correctAnswer: 1,
      explanation:
        "Ro'yxatdagi har bir JSX elementiga majburiy ravishda unikal `key` atributi berilishi shart.",
    },
    {
      question: "Reactda `key` atributining asosiy vazifasi nima?",
      options: [
        "Elementlarni chiroyli stillash",
        "Virtual DOMga qaysi elementlar o'zgargani, qo'shilgani yoki o'chirilganini tezda aniqlashga yordam berish",
        "JavaScript xotirasini tejash",
        "Elementlarni saralash",
      ],
      correctAnswer: 1,
      explanation:
        "`key` Reactga qaysi elementlar o'zgarganini tezroq solishtirish imkonini beradi. Bu ro'yxatlar o'zgarganda faqat kerakli elementni qayta chizish orqali tezlikni ta'minlaydi.",
    },
    {
      question: "`key` atributi qiymati qanday bo'lishi kerak?",
      options: [
        "Barcha elementlarda bir xil bo'lishi kerak",
        "Ro'yxat doirasida mutlaqo unikal (takrorlanmas) va o'zgarmas bo'lishi kerak",
        "Faqat ketma-ket keladigan sonlar bo'lishi shart",
        "Matn ko'rinishida bo'lishi taqiqlanadi",
      ],
      correctAnswer: 1,
      explanation:
        "Key qiymati o'sha ro'yxat ichida har bir element uchun unikal bo'lishi kerak. Odatda ma'lumotlar bazasidagi `id` ishlatiladi.",
    },
    {
      question:
        "`key` sifatida massiv indeksidan (index) foydalanish tavsiya etiladimi?",
      options: [
        "Ha, bu eng to'g'ri yo'l",
        "Yo'q, faqat ro'yxat statik bo'lsa (elementlar qo'shilmasa, o'chirilmasa yoki saralanmasa) ishlatish mumkin. Aks holda bu xatoliklarga olib keladi",
        "Taqiqlangan, mutlaqo xato beradi",
        "Faqat string indekslar tavsiya etiladi",
      ],
      correctAnswer: 1,
      explanation:
        "Agar ro'yxat tartibi o'zgarsa, o'chirilsa yoki qo'shilsa, indekslar ham o'zgarib ketadi. Bu Reactning Virtual DOM solishtirishini chalkashtirib yuboradi.",
    },
    {
      question:
        "Qaysi xolatda React `key` berilmaganda ogohlantirish (warning) beradi?",
      options: [
        "Har qanday div ishlatilganda",
        "Massivni map() yordamida aylanib JSX qaytarilganda",
        "Faqat formalar bilan ishlaganda",
        "Faqat useEffect ichida",
      ],
      correctAnswer: 1,
      explanation:
        "Brauzer konsolida 'Each child in a list should have a unique key prop' ogohlantirishi `map` ichidagi JSX elementlariga `key` berilmaganda chiqadi.",
    },
    {
      question:
        "Bola komponentga berilgan `key` propini bola komponent ichida o'qib olish mumkinmi?",
      options: [
        "Ha, props.key orqali",
        "Yo'q, key Reactning ichki ehtiyojlari uchun ajratilgan va u bola komponentga props sifatida o'tib bormaydi",
        "Faqat klass komponentlarda o'qish mumkin",
        "Faqat useState ichida mumkin",
      ],
      correctAnswer: 1,
      explanation:
        "`key` atributi maxsus kalit so'z bo'lib, React uni o'zining Virtual DOM solishtiruvida ishlatadi va bola komponent propslar ro'yxatiga qo'shmaydi.",
    },
    {
      question:
        "Agar ma'lumotlarda unikal id bo'lmasa, key uchun nima ishlatish mumkin?",
      options: [
        "Math.random() ni to'g'ridan-to'g'ri render ichida chaqirish",
        "Tashqarida yaratilgan unikal id generatorlari (masalan, uuid yoki nanoid)",
        "Faqat bo'sh satr",
        "Barcha elementlarga bir xil nom berish",
      ],
      correctAnswer: 1,
      explanation:
        "Render vaqtida `Math.random()` ishlatish xato. Uuid kabi kutubxonalar bilan unikal id generatsiya qilib olish to'g'ri yo'l hisoblanadi.",
    },
    {
      question: "`key` ning unikal bo'lishi butun veb-sayt miqyosida shartmi?",
      options: [
        "Ha, butun loyihada bitta ham takrorlanmasligi kerak",
        "Yo'q, faqat joriy ro'yxat (massiv) doirasida unikal bo'lsa kifoya. Boshqa sahifadagi boshqa ro'yxatlarda bir xil keylar bo'lishi mumkin",
        "Faqat bir sahifada unikal bo'lishi kerak",
        "Faqat root komponentda shart",
      ],
      correctAnswer: 1,
      explanation:
        "Key atributi faqat o'zi joylashgan o'sha ro'yxat (massiv) ichida bir-biridan farq qilishi kerak. Global miqyosda bir xil bo'lishining zarari yo'q.",
    },
    {
      question: "`key` ning to'g'ri ishlatilishi qaysi qatorda ko'rsatilgan?",
      options: [
        "{items.map((item) => <li key={item.id}>{item.name}</li>)}",
        "{items.map((item) => <li>{item.name}</li>)}",
        "{items.map((item) => <li id={item.id}>{item.name}</li>)}",
        "{items.map((item) => <li class={item.id}>{item.name}</li>)}",
      ],
      correctAnswer: 0,
      explanation:
        "Ro'yxat elementining eng tashqi JSX tegi (`<li>`) tarkibida unikal `key` atributi yozilishi to'g'ri amaliyotdir.",
    },
  ],

  // 5. PROPS
  props: [
    {
      question: "Props nima?",
      options: [
        "Komponentning ichki o'zgaruvchan holati",
        "Ota komponentdan bola komponentga uzatiladigan o'zgarmas ma'lumotlar",
        "CSS klasslari ro'yxati",
        "HTML teglari to'plami",
      ],
      correctAnswer: 1,
      explanation:
        "Props (Properties) — ota komponentdan bola komponentga uzatiladigan, bola komponent uchun faqat o'qishga mo'ljallangan parametrlardir.",
    },
    {
      question: "Props qiymatini bola komponent ichida o'zgartirsa bo'ladimi?",
      options: [
        "Ha, o'zgartirish mumkin",
        "Yo'q, props 'read-only' (faqat o'qish uchun) hisoblanadi va uni bola komponentda o'zgartirib bo'lmaydi",
        "Faqat klass komponentlarda o'zgartirsa bo'ladi",
        "Faqat son ko'rinishida bo'lsa mumkin",
      ],
      correctAnswer: 1,
      explanation:
        "React qoidalariga ko'ra props o'zgarmasdir (immutable). Agar bolada props o'zgarishi kerak bo'lsa, ota komponentdan callback funksiya uzatiladi.",
    },
    {
      question:
        "Functional komponentda propsni destruptizatsiya (destructure) qilish qanday yoziladi?",
      options: [
        "const { props } = MyComponent",
        "function MyComponent({ name, age })",
        "function MyComponent(props.name)",
        "destructure(props)",
      ],
      correctAnswer: 1,
      explanation:
        "Komponent parametrlarida gulli qavslar `{}` yordamida props elementlarini destruptizatsiya qilib olish kodni toza qiladi.",
    },
    {
      question: "`props.children` nima?",
      options: [
        "Faqat bola komponentlar ro'yxati",
        "Komponentning ochiluvchi va yopiluvchi teglari orasiga yozilgan har qanday kontent",
        "Bola komponentlarning soni",
        "Props ro'yxatini o'chiradigan metod",
      ],
      correctAnswer: 1,
      explanation:
        "`props.children` yordamida komponentni ochish-yopish teglari `<MyCard>kontent</MyCard>` ko'rinishida yozganimizda ichidagi 'kontent'ni qabul qilib olamiz.",
    },
    {
      question:
        "Reactda default props qiymati qanday berilishi mumkin (funktsional komponentda)?",
      options: [
        "Default parameter orqali: `function MyComponent({ name = 'Mehmon' })`",
        "useState yordamida",
        "CSS orqali",
        "Unga default berib bo'lmaydi",
      ],
      correctAnswer: 0,
      explanation:
        "Funktsional komponentlarda default qiymat berishning eng zamonaviy va oson yo'li JS dagi default parametrlardan foydalanishdir.",
    },
    {
      question:
        "Props yordamida funksiyalarni bola komponentga uzatish mumkinmi?",
      options: [
        "Yo'q, faqat sonlar va matnlarni uzatish mumkin",
        "Ha, JavaScript funksiyalarini ham props sifatida uzatish mumkin",
        "Faqat maxsus kutubxonalar bilan mumkin",
        "Faqat klass komponentlarda mumkin",
      ],
      correctAnswer: 1,
      explanation:
        "Reactda funksiyalar ham props orqali bolaga uzatilishi mumkin. Bu boladan otaga ma'lumot yoki hodisalarni qaytarish uchun keng qo'llaniladi.",
    },
    {
      question:
        "Ota komponent render bo'lganda uning ostidagi bola komponentlar render bo'ladimi?",
      options: [
        "Yo'q, faqat o'zgarganda",
        "Ha, ota render bo'lganda uning barcha bola komponentlari ham re-render bo'ladi (agar memo ishlatilmagan bo'lsa)",
        "Faqat props bo'lmasa",
        "Hech qachon",
      ],
      correctAnswer: 1,
      explanation:
        "Reactda standart holatda ota komponent render bo'lsa, barcha bola komponentlar ham qayta render qilinadi.",
    },
    {
      question: "Props Drilling nima?",
      options: [
        "Propsni o'chirib yuborish jarayoni",
        "Ma'lumotni ota komponentdan juda chuqur joylashgan bola komponentga yetkazish uchun o'rtadagi keraksiz komponentlar orqali propsni ketma-ket o'tkazish",
        "Dizayn stillari oqimi",
        "API dan ma'lumot olish",
      ],
      correctAnswer: 1,
      explanation:
        "Props Drilling — bu state yoki ma'lumotni o'rtadagi komponentlarga kerak bo'lmasa ham, chuqur joylashgan bola komponentga yetkazish uchun ketma-ket props qilib uzatib chiqish jarayonidir.",
    },
    {
      question: "PropTypes nima?",
      options: [
        "Props stillari ro'yxati",
        "Komponentga keladigan propslarning tiplarini (string, number, array va b.) tekshirish uchun ishlatiladigan yordamchi kutubxona",
        "useState hookining bir turi",
        "React router metodi",
      ],
      correctAnswer: 1,
      explanation:
        "PropTypes yordamida runtime da kelayotgan propslar turi to'g'riligini tekshirish mumkin.",
    },
    {
      question:
        "Props orqali olingan massivni bola komponentda o'zgartirish to'g'rimi (masalan, `props.list.push(5)`)?",
      options: [
        "Ha, bu oddiy massiv",
        "Yo'q, bu props immutabillik qoidasini buzadi va xatoliklarga olib keladi. Nusxa olib keyin o'zgartirish kerak",
        "Faqat string bo'lsa mumkin",
        "Faqat loading bo'lsa to'g'ri",
      ],
      correctAnswer: 1,
      explanation:
        "Props orqali kelgan ma'lumotlarni to'g'ridan-to'g'ri mutatsiya qilish taqiqlanadi. O'zgartirish kerak bo'lsa, massivdan nusxa olish kerak (`[...props.list]`).",
    },
  ],

  // 6. USESTATE HOOK
  use_state: [
    {
      question: "State nima?",
      options: [
        "Komponentning tashqaridan oladigan ma'lumotlari",
        "Komponent ichida saqlanadigan va vaqt o'tishi bilan o'zgarishi mumkin bo'lgan xususiy holat (ma'lumot)",
        "CSS stillari to'plami",
        "Saytning URL manzili",
      ],
      correctAnswer: 1,
      explanation:
        "State — bu komponent ichida saqlanadigan va boshqariladigan, uning qayta render bo'lishiga sabab bo'la oladigan o'zgaruvchan ma'lumotdir.",
    },
    {
      question: "useState hookidan qaytadigan qiymat qanday ko'rinishga ega?",
      options: [
        "Faqat bitta obyekt",
        "Ikki elementdan iborat massiv: [current_state, set_state_function]",
        "Faqat bitta funksiya",
        "Uchta elementdan iborat massiv",
      ],
      correctAnswer: 1,
      explanation:
        "useState massiv qaytaradi: birinchi element joriy holat qiymati (state), ikkinchi element esa shu holatni yangilovchi funksiyadir: `const [count, setCount] = useState(0)`.",
    },
    {
      question:
        "State qiymatini to'g'ridan-to'g'ri o'zgartirish (masalan, state = 5) nima uchun mumkin emas?",
      options: [
        "Chunki JS bunga ruxsat bermaydi",
        "Chunki bunday o'zgarish React re-renderni chaqirmaydi va UI yangilanmay qoladi",
        "Faqat sonlarda shunday",
        "Buni iloji bor",
      ],
      correctAnswer: 1,
      explanation:
        "Stateni to'g'ridan-to'g'ri o'zgartirish re-renderni chaqirmaydi. Shuning uchun stateni har doim setter funksiyasi orqali o'zgartirish shart.",
    },
    {
      question:
        "Agar yangi state qiymati oldingi state qiymatiga bog'liq bo'lsa, uni qanday yangilash to'g'riroq?",
      options: [
        "setCount(count + 1)",
        "setCount(prev => prev + 1) — callback funksiya orqali oldingi holatni olib yangilash",
        "count = count + 1",
        "setCount(1)",
      ],
      correctAnswer: 1,
      explanation:
        "State asinxron ravishda yangilanishi mumkinligi sababli, agar yangi holat oldingi holatga bog'liq bo'lsa, har doim callback funksiya (`prev => prev + 1`) orqali yangilash tavsiya qilinadi.",
    },
    {
      question:
        "useState hookiga boshlang'ich qiymat sifatida funksiya berish (lazy initialization) nima uchun kerak?",
      options: [
        "Faqat asinxron API bilan ishlash uchun",
        "Og'ir hisob-kitoblarni faqat birinchi renderda bajarish va keraksiz hisoblashlarning oldini olish uchun",
        "Xatoliklarni tutish uchun",
        "Dizaynni optimallashtirish uchun",
      ],
      correctAnswer: 1,
      explanation:
        "Boshlang'ich qiymatni hisoblash og'ir ish bo'lsa (masalan localStorage dan o'qish), unga funksiya beriladi: `useState(() => getHeavyValue())`.",
    },
    {
      question:
        "useState hookini shartlar yoki sikllar ichida ishlatish mumkinmi?",
      options: [
        "Ha, farqi yo'q",
        "Yo'q, hooklar faqat komponentning eng yuqori darajasida chaqirilishi shart",
        "Faqat sikllar ichida mumkin",
        "Faqat useEffect ichida mumkin",
      ],
      correctAnswer: 1,
      explanation:
        "React Hooklari qoidalariga ko'ra, hooklar har doim bir xil tartibda chaqirilishi kerak. Shuning uchun ularni shartlar yoki sikllar ichida chaqirish taqiqlanadi.",
    },
    {
      question: "Reactda state va props o'rtasidagi asosiy farq nima?",
      options: [
        "State ota komponentdan keladi, props esa ichki hisoblanadi",
        "State komponentning ichki, o'zgaruvchan holati; Props esa ota komponentdan keladigan va o'zgarmas ma'lumotdir",
        "Hech qanday farqi yo'q",
        "Props faqat sonlarni saqlaydi",
      ],
      correctAnswer: 1,
      explanation:
        "State komponentning shaxsiy va o'zgartira oladigan ma'lumotidir. Props esa komponentga tashqaridan keladigan va uni bola komponent o'zgartira olmaydigan ma'lumotdir.",
    },
    {
      question: "State o'zgarganda komponentda nima sodir bo'ladi?",
      options: [
        "Komponent yangi state qiymati bilan qayta render bo'ladi",
        "Brauzer butunlay yangilanadi",
        "Fayllar o'chib ketadi",
        "Hech narsa",
      ],
      correctAnswer: 0,
      explanation:
        "State o'zgarishi re-render chaqiradi, natijada React Virtual DOMni yangilab, faqat o'zgargan qismlarni ekranda aks ettiradi.",
    },
    {
      question:
        "Object ko'rinishidagi stateni qisman qanday yangilaymiz (faqat bitta xossasini)?",
      options: [
        "setForm({ name: 'Ali' }) — to'g'ridan-to'g'ri",
        "setForm(prev => ({ ...prev, name: 'Ali' })) — spread operator yordamida eski qiymatlarni saqlab qolib",
        "form.name = 'Ali'",
        "setForm('Ali')",
      ],
      correctAnswer: 1,
      explanation:
        "Obyekt statelarini yangilashda eski xossalarni o'chib ketmasligi uchun spread operator `...` yordamida ularni nusxalab olish kerak.",
    },
    {
      question: "React 18 da Batching (guruhlash) nima?",
      options: [
        "Stateni o'chirish",
        "Bir nechta state o'zgarishlarini bitta renderga birlashtirish orqali unumdorlikni oshirish",
        "Massivlarni saralash",
        "Faqat API da ishlaydigan asbob",
      ],
      correctAnswer: 1,
      explanation:
        "Batching — React bir vaqtning o'zida yuz bergan bir nechta state yangilanishlarini bitta render doirasida guruhlab bajarish xususiyatidir.",
    },
  ],

  // 7. HANDLING EVENTS IN REACT
  handling_events: [
    {
      question:
        "Reactda hodisalarni (events) boshqarish HTML dagi hodisalardan qanday farq qiladi?",
      options: [
        "Reactda hodisalar camelCase ko'rinishida yoziladi va qiymat sifatida string emas, funksiya beriladi",
        "Reactda hodisalar ishlamaydi",
        "HTML dagi bilan bir xil",
        "Faqat CSS orqali boshqariladi",
      ],
      correctAnswer: 0,
      explanation:
        'HTML da hodisalar kichik harflarda yoziladi (`onclick="foo()"`), Reactda esa camelCase shaklida yoziladi, qiymatiga funksiya uzatiladi: `onClick={foo}`.',
    },
    {
      question:
        "Reactda hodisani tinglovchi funksiyaga argument yuborish qanday amalga oshiriladi?",
      options: [
        "onClick={handleClick(id)} — to'g'ridan-to'g'ri chaqirish",
        "onClick={() => handleClick(id)} — arrow funksiya orqali o'rab chaqirish",
        "onClick={handleClick.id}",
        "onClick=[handleClick(id)]",
      ],
      correctAnswer: 1,
      explanation:
        "Agar funksiyaga parametr uzatmoqchi bo'lsak, uni arrow funksiya orqali o'rashimiz kerak. Aks holda funksiya render paytida darhol bajarilib ketadi.",
    },
    {
      question: "SyntheticEvent nima?",
      options: [
        "React tomonidan brauzerlarning o'z hodisalari ustiga qurilgan va barcha brauzerlarda bir xil ishlashini ta'minlovchi o'rovchi obyekt",
        "Sun'iy hosil qilingan xatoliklar",
        "Faqat telefonlarda ishlaydigan hodisa",
        "HTML dagi hodisaning nomi",
      ],
      correctAnswer: 0,
      explanation:
        "React turli brauzerlarda hodisalar bir xil ishlashi uchun brauzerning shaxsiy hodisasini (nativeEvent) o'zining `SyntheticEvent` ob'ektiga o'raydi.",
    },
    {
      question:
        "Forma yuborilganda sahifa yangilanishining oldini olish uchun nima qilinadi?",
      options: [
        "event.stopPropagation()",
        "event.preventDefault()",
        "return false",
        "preventDefault(event)",
      ],
      correctAnswer: 1,
      explanation:
        "Forma yuborilganda brauzer sahifani avtomatik yangilashga harakat qiladi. Buning oldini olish uchun hodisa ob'ektidagi `event.preventDefault()` metodi chaqiriladi.",
    },
    {
      question:
        "Hodisa tarqalishini (event bubbling) to'xtatish uchun qaysi metod ishlatiladi?",
      options: [
        "event.preventDefault()",
        "event.stopPropagation()",
        "event.stop()",
        "event.cancelBubble()",
      ],
      correctAnswer: 1,
      explanation:
        "Hodisa ota elementlarga tarqalib ketmasligini (bubbling) oldini olish uchun `event.stopPropagation()` metodidan foydalaniladi.",
    },
    {
      question: "Reactda input qiymati o'zgarganda qaysi hodisa ishlatiladi?",
      options: ["onInput", "onChange", "onKeypress", "onValueChange"],
      correctAnswer: 1,
      explanation:
        "Reactda kiritish maydonidagi har bir o'zgarishni kuzatish uchun an'anaviy `onChange` hodisasidan foydalaniladi.",
    },
    {
      question: "Input elementining qiymatini hodisa ichida qanday olamiz?",
      options: [
        "event.value",
        "event.target.value",
        "event.input.value",
        "target.value",
      ],
      correctAnswer: 1,
      explanation:
        "`event.target` — bu hodisa sodir bo'lgan DOM elementidir. Undan kiritilgan qiymatni olish uchun `event.target.value` yoziladi.",
    },
    {
      question:
        "Quyidagi kodda nima sodir bo'ladi: `<button onClick={handleClick()}>Bosish</button>`?",
      options: [
        "Tugma bosilganda handleClick ishlaydi",
        "handleClick funksiyasi komponent render bo'lgan zahoti avtomatik bajariladi va xato kelib chiqishi mumkin",
        "Tugma bosilmaydi",
        "Sintaktik xato beradi",
      ],
      correctAnswer: 1,
      explanation:
        "Funksiya qavslar bilan chaqirilgani sababli (`handleClick()`), u render vaqtida darhol bajariladi. Uni faqat havola sifatida berish kerak: `onClick={handleClick}`.",
    },
    {
      question: "Tugma ikki marta bosilganda ishlaydigan hodisa nomi nima?",
      options: ["onDoubleSubmit", "onDoubleClick", "on2Click", "onDbClick"],
      correctAnswer: 1,
      explanation:
        "Reactda element ikki marta tezkor bosilganda ishlaydigan hodisa nomi `onDoubleClick` deb ataladi.",
    },
    {
      question:
        "Reactda klaviatura tugmasi bosilganda qaysi hodisa tinglanadi?",
      options: [
        "onKeyDown / onKeyUp",
        "onPress",
        "onKeyboard",
        "onButtonPress",
      ],
      correctAnswer: 0,
      explanation:
        "Klaviaturadan tugma bosilganda yoki qo'yib yuborilganda `onKeyDown`, `onKeyPress` yoki `onKeyUp` kabi standart hodisalar ishlatiladi.",
    },
  ],

  // 8. USEEFFECT HOOK
  use_effect: [
    {
      question: "useEffect hooki nima uchun ishlatiladi?",
      options: [
        "CSS stillarini yuklash uchun",
        "Yon ta'sirlarni (side effects: API so'rovlar, DOM o'zgarishlari, timerlar) boshqarish uchun",
        "Faqat HTML render qilish uchun",
        "State yaratish uchun",
      ],
      correctAnswer: 1,
      explanation:
        "useEffect — funktsional komponentlarda yon ta'sirlarni (side effects), ya'ni ma'lumotlarni serverdan yuklash, obunalar yaratish, DOMni qo'lda o'zgartirish yoki timerlar qo'yish kabi ishlarni bajarish uchun mo'ljallangan hookdir.",
    },
    {
      question:
        "useEffect ga beriladigan dependency array (bog'liqliklar massivi) bo'sh bo'lsa (ya'ni, []), effekt qachon ishlaydi?",
      options: [
        "Har safar komponent re-render bo'lganda",
        "Faqat komponent birinchi marta ekranga chiqqanda (mount bo'lganda) bir marta ishlaydi",
        "Hech qachon ishlamaydi",
        "Komponent ekrandan o'chayotganda",
      ],
      correctAnswer: 1,
      explanation:
        "Bo'sh massiv `[]` berilsa, ushbu effekt faqat komponent birinchi marta ekranga yuklanganda (mount bo'lganda) bir marta ishlaydi va qayta renderlarda ishlamaydi.",
    },
    {
      question:
        "useEffect hookida bog'liqliklar massivi umuman berilmasa, effekt qachon ishlaydi?",
      options: [
        "Hech qachon ishlamaydi",
        "Faqat birinchi renderda",
        "Har bir render (va re-render)dan keyin doimiy ravishda ishlaydi",
        "Faqat asinxron funksiyalar chaqirilganda",
      ],
      correctAnswer: 2,
      explanation:
        "Agar bog'liqliklar massivi yozilmasa, useEffect komponentning har bir renderidan keyin qayta-qayta ishlaydi.",
    },
    {
      question:
        "useEffect ning cleanup (tozalash) funksiyasi nima va u qanday yoziladi?",
      options: [
        "useEffect dan qaytariladigan (return) funksiya bo'lib, u obuna yoki taymerlarni o'chirish uchun xizmat qiladi",
        "Komponent boshida yoziladigan funksiya",
        "Massiv ichida yoziladigan tozalash kodi",
        "useState ichidagi setter funksiya",
      ],
      correctAnswer: 0,
      explanation:
        "useEffect ichidan qaytariladigan funksiya cleanup (tozalash) funksiyasi deyiladi. U komponent ekrandan o'chganda (unmount) yoki effekt qayta ishlashidan oldin keraksiz timerlar, event listenerlar yoki obunalarni tozalash uchun ishlatiladi.",
    },
    {
      question:
        "useEffect ichidagi bog'liqliklar massiviga o'zgaruvchi berilsa (masalan, [count]), effekt qachon ishlaydi?",
      options: [
        "Faqat count 0 ga teng bo'lganda",
        "Komponent yuklanganda va har safar count qiymati o'zgarganda",
        "Faqat komponent ekrandan o'chganda",
        "Har bir renderda count dan qat'iy nazar",
      ],
      correctAnswer: 1,
      explanation:
        "Agar massiv ichiga o'zgaruvchilar qo'yilsa, effekt komponent yuklanganda hamda o'sha massivdagi o'zgaruvchilarning qiymati o'zgargandagina qayta ishga tushadi.",
    },
    {
      question:
        "Class komponentlaridagi componentDidMount va componentWillUnmount vazifalarini funktsional komponentlarda qaysi hook bajaradi?",
      options: ["useState", "useContext", "useEffect", "useRef"],
      correctAnswer: 2,
      explanation:
        "useEffect hooki class komponentlaridagi lifecycle (hayotiy sikl) metodlarini o'zida birlashtiradi.",
    },
    {
      question:
        "useEffect callback funksiyasini to'g'ridan-to'g'ri `async` deb e'lon qilish mumkinmi (masalan, useEffect(async () => ...))?",
      options: [
        "Ha, bu standart usul",
        "Yo'q, useEffect callback funksiyasi promise qaytara olmaydi, shuning uchun async funksiyani effekt ichida alohida yaratib chaqirish kerak",
        "Faqat ma'lumot yuklaganda mumkin",
        "Faqat bo'sh massiv bilan mumkin",
      ],
      correctAnswer: 1,
      explanation:
        "useEffect callback funksiyasi Promise qaytargani sababli async funksiyani to'g'ridan-to'g'ri qabul qila olmaydi. Ichida oddiy funksiya ochib asynclikni ta'minlash kerak.",
    },
    {
      question:
        "Quyidagi kodda nima xato bor: `useEffect(() => { setCount(count + 1) })`?",
      options: [
        "setCount ishlamaydi",
        "Bu kod cheksiz render (infinite loop) hosil qiladi, chunki dependency massivi yo'q va effekt ichida state o'zgartirilmoqda",
        "Faqat asinxron xato beradi",
        "Sintaktik xato bor",
      ],
      correctAnswer: 1,
      explanation:
        "Effekt har safar renderdan keyin ishlaydi, u stateni o'zgartiradi. State o'zgargani uchun komponent qayta render bo'ladi va effekt yana ishlaydi. Natijada cheksiz render yuzaga keladi.",
    },
    {
      question: "useEffect qachon bajariladi?",
      options: [
        "Render jarayonidan oldin (ekranga chiqmasdan oldin)",
        "Brauzer sahifani render qilib bo'lganidan so'ng (asinxron ravishda)",
        "Faqat foydalanuvchi tugmani bosganda",
        "Faqat serverda",
      ],
      correctAnswer: 1,
      explanation:
        "React renderlash ishlarini tugatib, DOMni yangilab bo'lgach va foydalanuvchiga sahifa ko'ringanidan keyin asinxron ravishda useEffect effektlarini ishga tushiradi.",
    },
    {
      question:
        "React 18 Strict Mode da development rejimida useEffect necha marta ishlaydi?",
      options: [
        "1 marta",
        "2 marta (ishlaydi, cleanup bo'ladi, yana qayta ishlaydi - tozalash kodlari to'g'ri yozilganini tekshirish uchun)",
        "Hech qachon",
        "3 marta",
      ],
      correctAnswer: 1,
      explanation:
        "Strict Mode loyihadagi xatoliklar va tozalash (cleanup) funksiyalari to'g'ri yozilganini tekshirish uchun mount/unmount siklini simulyatsiya qilib useEffectni ikki marta ishga tushiradi.",
    },
  ],

  // 9. FETCH AND METHODS (CRUD)
  fetch_crud: [
    {
      question:
        "Tarmoq so'rovlarini yuborish uchun brauzer ichida o'rnatilgan standart funksiya qaysi?",
      options: ["axios", "fetch", "ajax", "request"],
      correctAnswer: 1,
      explanation:
        "`fetch()` funksiyasi brauzerda tayyor o'rnatilgan va tarmoq orqali so'rov yuboradigan asinxron Promise qaytaruvchi API dir.",
    },
    {
      question:
        "Fetch funksiyasidan kelgan response o'qiladigan JSON formatiga qanday o'tkaziladi?",
      options: [
        "JSON.parse(response)",
        "await response.json()",
        "response.text()",
        "Avtomatik ravishda JSON formatida keladi",
      ],
      correctAnswer: 1,
      explanation:
        "Fetch javobi HTTP response ko'rinishida keladi. Uni o'qish uchun `response.json()` metodini chaqirish va uni kutish (await) lozim.",
    },
    {
      question: "CRUD nima degani?",
      options: [
        "Create, Read, Update, Delete (Ma'lumotlar bilan ishlashdagi 4 ta asosiy operatsiya)",
        "Css kodlarini siqish standarti",
        "React router turi",
        "Dasturning xavfsizlik protokoli",
      ],
      correctAnswer: 0,
      explanation:
        "CRUD — Create (Yaratish), Read (O'qish), Update (Yangilash), Delete (O'chirish) so'zlarining qisqartmasi bo'lib, har qanday ma'lumotlar bazasi yoki API bilan ishlash asosi hisoblanadi.",
    },
    {
      question:
        "Yangi ma'lumot yaratish (Create) uchun qaysi HTTP metodi ishlatiladi?",
      options: ["GET", "POST", "PUT", "DELETE"],
      correctAnswer: 1,
      explanation:
        "Yangi ma'lumot qo'shish yoki serverga yuborish uchun odatda `POST` metodidan foydalaniladi.",
    },
    {
      question:
        "Ma'lumotni to'liq yangilash (Update) uchun qaysi HTTP metodi ishlatiladi?",
      options: ["GET", "POST", "PUT", "DELETE"],
      correctAnswer: 2,
      explanation:
        "Mavjud ma'lumotlarni to'liq yangilash uchun `PUT` metodi, qisman o'zgartirish uchun esa `PATCH` metodi ishlatiladi.",
    },
    {
      question:
        "Fetch yordamida POST so'rovini yuborishda so'rov tanasi (body) qaysi ko'rinishda beriladi?",
      options: [
        "Bo'sh satr",
        "JSON.stringify(data) ko'rinishidagi string formatda va headers qismida Content-Type: application/json ko'rsatilgan holda",
        "JavaScript obyekti ko'rinishida to'g'ridan-to'g'ri",
        "Faqat URL ichida parametrlarda",
      ],
      correctAnswer: 1,
      explanation:
        "Serverga ma'lumot yuborishda obyekt JSON satriga o'giriladi (`JSON.stringify`) va server u bilan ishlashi uchun mos sarlavha (Headers) qo'shiladi.",
    },
    {
      question:
        "Fetch funksiyasida xatoliklarni tekshirishda response.ok nimani anglatadi?",
      options: [
        "Serverdan muvaffaqiyatli (200-299) status kodi qaytganligini ko'rsatuvchi boolean qiymat",
        "Internet tezligini",
        "State yangilanganini",
        "Faqat fayllar yuklanganini",
      ],
      correctAnswer: 0,
      explanation:
        "Fetch 404 yoki 500 xatolarida Promise ni reject qilmaydi, shuning uchun so'rov muvaffaqiyatli o'tganini tekshirish uchun `if (!response.ok)` yozish shart.",
    },
    {
      question:
        "So'rov yuborilayotgan vaqtda pending bo'lib turganda asinxron so'rovni bekor qilish uchun qaysi brauzer API si ishlatiladi?",
      options: [
        "AbortController",
        "CancelToken",
        "StopFetch",
        "Promise.cancel()",
      ],
      correctAnswer: 0,
      explanation:
        "`AbortController` yordamida so'rovlarni boshqarish va agar komponent unmount bo'lsa, tugallanmagan so'rovni bekor qilish (abort) mumkin.",
    },
    {
      question: "GET so'rovi nima uchun xizmat qiladi?",
      options: [
        "Serverdan ma'lumotlarni olish (o'qish) uchun",
        "Ma'lumotlarni o'chirish uchun",
        "Yangi ma'lumot yaratish uchun",
        "Stillarni yuklash uchun",
      ],
      correctAnswer: 0,
      explanation:
        "GET metodi serverdan kerakli ma'lumotlarni yuklab olish uchun ishlatiladigan standart HTTP metodidir.",
    },
    {
      question:
        "DELETE metodi orqali o'chirish so'rovi yuborilganda odatda URL qanday ko'rinishda bo'ladi?",
      options: [
        "/api/delete",
        "/api/users/:id — o'chirilishi kerak bo'lgan elementning unikal ID si URL oxiriga qo'shiladi",
        "/api/users?all=true",
        "/api/users",
      ],
      correctAnswer: 1,
      explanation:
        "Elementlarni o'chirishda aynan qaysi element o'chirilishi kerakligini bildirish uchun uning unikal ID si URL pathiga qo'shib yuboriladi.",
    },
  ],

  // 10. AXIOS
  axios: [
    {
      question: "Axios nima?",
      options: [
        "Reactning bir qismi",
        "Tarmoq so'rovlarini amalga oshirish uchun ishlatiladigan uchinchi tomon kutubxonasi",
        "Dizayn asbobi",
        "Ma'lumotlar bazasi",
      ],
      correctAnswer: 1,
      explanation:
        "Axios — so'rovlar yuborish uchun keng qo'llaniladigan mashhur JavaScript kutubxonasidir. U fetchga qaraganda kengroq imkoniyatlarga (interceptorlar, avtomatik JSON konvertatsiya va h.k.) ega.",
    },
    {
      question:
        "Axios orqali kelgan javob tarkibidan server yuborgan asosiy ma'lumotni qanday o'qiymiz?",
      options: [
        "response.json()",
        "response.data",
        "response.body",
        "response.payload",
      ],
      correctAnswer: 1,
      explanation:
        "Axios serverdan kelgan javobni (JSON) avtomatik o'girib, uni response ob'ektining `.data` xossasiga yuklab beradi.",
    },
    {
      question: "Axios Interceptors (interceptorlar) nima uchun ishlatiladi?",
      options: [
        "Faqat sahifalarni himoya qilish uchun",
        "So'rov yuborilishidan oldin yoki javob kelgandan keyin ularni tutib qolib, global ravishda token qo'shish yoki xatolarni log qilish uchun",
        "Stillarni yangilash uchun",
        "Ma'lumotlarni o'chirish uchun",
      ],
      correctAnswer: 1,
      explanation:
        "Interceptorlar yordamida har bir so'rovga avtomatik ravishda token qo'shib yuborish yoki 401 Unauthorized xatosi kelganda foydalanuvchini logindan chiqarib yuborish kabi ishlarni bitta joyda yozish mumkin.",
    },
    {
      question:
        "Axios da request so'rovini bekor qilish (cancel) uchun nima ishlatiladi?",
      options: [
        "AbortController / AbortSignal",
        "axios.stop()",
        "axios.clear()",
        "Promise.reject()",
      ],
      correctAnswer: 0,
      explanation:
        "Zamonaviy Axios versiyalarida ham xuddi fetch kabi `AbortController` signali so'rovni bekor qilish uchun ishlatiladi.",
    },
    {
      question: "Axios.create() nima vazifani bajaradi?",
      options: [
        "Yangi ma'lumot yaratadi",
        "Boshlang'ich URL va headers sozlamalariga ega bo'lgan global maxsus axios nusxasini (instance) yaratish uchun xizmat qiladi",
        "So'rovlarni o'chiradi",
        "Kutubxonani yangilaydi",
      ],
      correctAnswer: 1,
      explanation:
        "`axios.create({ baseURL: 'https://api.site.com' })` yordamida base URL va default headerslarni bir marta yozib, hamma joyda o'sha instance dan foydalanish mumkin.",
    },
    {
      question:
        "Nima uchun Axios oddiy Fetch API dan ustunroq deb hisoblanadi?",
      options: [
        "Chunki u tekin",
        "Chunki u eski brauzerlarni ham qo'llab-quvvatlaydi, avtomatik ravishda JSON formatiga o'giriydi va interceptorlarni taklif qiladi",
        "Chunki u faqat Reactda ishlaydi",
        "Chunki u serverni talab qilmaydi",
      ],
      correctAnswer: 1,
      explanation:
        "Axios fetch ga qaraganda qulayroq xatolar boshqaruvi, avtomatik JSON transformatsiyasi, so'rovlarni oson bekor qilish va interceptorlar kabi boy imkoniyatlar beradi.",
    },
    {
      question:
        "Axiosda GET so'rovi yuborish sintaksisi to'g'ri yozilgan qatorni aniqlang.",
      options: [
        "axios.get('/api/users')",
        "axios('/api/users', 'GET')",
        "axios.fetch('/api/users')",
        "axios.getUsers()",
      ],
      correctAnswer: 0,
      explanation:
        "Axiosda GET so'rovi `.get()` metodi yordamida oddiy va tushunarli yoziladi.",
    },
    {
      question:
        "Axios da post so'rovi yuborishda ikkinchi parametr sifatida nima beriladi?",
      options: [
        "headers",
        "Yuboriladigan ma'lumot (payload/body)",
        "timeout",
        "Boshlang'ich URL",
      ],
      correctAnswer: 1,
      explanation:
        "`axios.post(url, data, config)` tartibida yoziladi, ya'ni ikkinchi parametr serverga yuboriladigan ma'lumotdir.",
    },
    {
      question:
        "Axios orqali xatolarni tutish qaysi qatorda to'g'ri ko'rsatilgan?",
      options: [
        "axios.get('/api').catch(error => console.log(error))",
        "axios.get('/api').onError()",
        "try { axios.get('/api') } catch(e) {}",
        "if (axios.error) {}",
      ],
      correctAnswer: 0,
      explanation:
        "Axios Promise ga asoslanganligi sababli, xatolarni `.catch()` yoki `try-catch` bloklari yordamida oson tutib olish mumkin.",
    },
    {
      question:
        "Axios bilan parallel ravishda bir nechta so'rov yuborish uchun qaysi metod ishlatiladi?",
      options: [
        "axios.all() (yoki Promise.all)",
        "axios.multiple()",
        "axios.race()",
        "axios.together()",
      ],
      correctAnswer: 0,
      explanation:
        "`axios.all([request1, request2])` yordamida bir nechta so'rovlarni parallel yuborib, hammasi tugagach natijalarni olish mumkin.",
    },
  ],

  // 11. REACT ROUTER DOM
  react_router_dom: [
    {
      question: "React Router DOM nima uchun ishlatiladi?",
      options: [
        "CSS stillarini ulash uchun",
        "React veb-ilovalarida sahifani yangilamasdan sahifalararo harakatlanishni (navigatsiyani) boshqarish uchun",
        "Ma'lumotlar bazasini boshqarish uchun",
        "Faqat telefon ilovalari uchun",
      ],
      correctAnswer: 1,
      explanation:
        "React Router DOM veb-ilovalarni SPA (Single Page Application) sifatida shakllantirib, URL manziliga qarab komponentlarni almashtirib beradi.",
    },
    {
      question:
        "React Router DOM navigatsiyasini yoqish uchun butun ilovani qaysi komponent ichiga o'rash kerak?",
      options: ["Routes", "BrowserRouter", "Link", "Route"],
      correctAnswer: 1,
      explanation:
        "`BrowserRouter` ilovani brauzer tarixi (History API) bilan bog'lab turadi va navigatsiya ishlashi uchun u loyihaning eng yuqori qismida o'ralishi shart.",
    },
    {
      question:
        "URL manziliga mos keluvchi sahifa komponentini aniqlash uchun qaysi komponent ishlatiladi?",
      options: ["<Route />", "<Routes />", "<Link />", "<Outlet />"],
      correctAnswer: 0,
      explanation:
        "`<Route path=\"/about\" element={<About />} />` ko'rinishida yozilib, u belgilangan path bo'yicha qaysi komponent chiqishini boshqaradi.",
    },
    {
      question:
        "React Router DOMda URL dagi dinamik parametrlarni (masalan, /user/:id) olish uchun qaysi hook ishlatiladi?",
      options: ["useSearchParams", "useParams", "useNavigate", "useLocation"],
      correctAnswer: 1,
      explanation:
        "`useParams` hooki URL tarkibidagi dinamik o'zgaruvchilarni (masalan `:id`) obyekt ko'rinishida olib beradi: `const { id } = useParams()`.",
    },
    {
      question:
        "Tugma bosilganda foydalanuvchini boshqa sahifaga o'tkazib yuborish (navigatsiya qilish) uchun qaysi hook ishlatiladi?",
      options: ["useParams", "useNavigate", "useLocation", "useHistory"],
      correctAnswer: 1,
      explanation:
        "React Router v6 da `useNavigate` hookidan qaytgan funksiya orqali navigatsiya qilinadi: `const navigate = useNavigate(); navigate('/profile');`.",
    },
    {
      question:
        "React Routerda sahifalararo o'tish uchun an'anaviy HTML dagi `<a>` tegi o'rniga nima ishlatiladi va nima uchun?",
      options: [
        "<Route /> tegi",
        "<Link /> komponenti, chunki u sahifani to'liq yangilamasdan tezkor o'tishni ta'minlaydi",
        "<Redirect /> komponenti",
        '<a href="..."> orqali ulanadi',
      ],
      correctAnswer: 1,
      explanation:
        "`<Link to=\"/about\">` brauzer sahifasini to'liq yuklashni inkor qiladi va faqatgina o'zgarishi kerak bo'lgan komponentlarni render qiladi.",
    },
    {
      question:
        "Hech qaysi path ga mos tushmagan URL manzillarini tutish (404 Error page) uchun Route pathiga nima yoziladi?",
      options: ['path="/404"', 'path="*"', 'path="/error"', 'path="any"'],
      correctAnswer: 1,
      explanation:
        "React Routerda asterisk `*` belgisi 'har qanday boshqa manzil' degan ma'noni anglatadi va u hech qaysi route ga tushmagan xatolik sahifalarini chiqarish uchun qo'llaniladi.",
    },
    {
      question: "NavLink va Link o'rtasidagi asosiy farq nima?",
      options: [
        "NavLink faqat klasslarda ishlaydi",
        "NavLink faol (active) sahifani aniqlay oladi va unga avtomatik ravishda active klassini qo'shib beradi. Bu navigatsiya menyulari uchun qulay",
        "Link tezroq ishlaydi",
        "NavLink faqat rasmlar uchun",
      ],
      correctAnswer: 1,
      explanation:
        "`NavLink` o'zining active holatiga ko'ra active stillarini qo'llash imkonini beradi.",
    },
    {
      question:
        "Nested Routes (ichma-ich joylashgan routerlar) ishlatilganda bola komponentlar ota komponent ichida qaysi teg o'rnida render bo'ladi?",
      options: ["<Routes />", "<Outlet />", "<Children />", "<Inject />"],
      correctAnswer: 1,
      explanation:
        "`<Outlet />` komponenti ota route tarkibida yozilib, bola route lardagi komponentlarni aynan o'sha joyga render qilib beradi.",
    },
    {
      question: "useLocation hooki nima qaytaradi?",
      options: [
        "Faqat URL parametrlarini",
        "Joriy URL haqidagi ma'lumotlarni saqlovchi obyektni (pathname, search, hash, state)",
        "Navigatsiya funksiyasini",
        "Oldingi sahifa nomini",
      ],
      correctAnswer: 1,
      explanation:
        "`useLocation` joriy sahifaning to'liq manzili, query stringlari va sahifadan-sahifaga uzatilgan maxsus holat ma'lumotlarini taqdim etadi.",
    },
  ],

  // 12. REACT ROUTER ADVANCED
  react_router_advanced: [
    {
      question:
        "URL dagi query parametrlarni (masalan, ?search=react&page=2) boshqarish uchun qaysi hook ishlatiladi?",
      options: ["useParams", "useSearchParams", "useLocation", "useNavigate"],
      correctAnswer: 1,
      explanation:
        "`useSearchParams` hooki URL dagi query string parametrlarni o'qish va yozish uchun massiv qaytaradi: `const [searchParams, setSearchParams] = useSearchParams()`.",
    },
    {
      question:
        "Navigate component (v6) yordamida sahifadan boshqasiga yo'naltirish (redirect) qanday yoziladi?",
      options: [
        '<Navigate to="/dashboard" replace />',
        '<Redirect to="/dashboard" />',
        '<Route redirect="/dashboard" />',
        '<Navigate link="/dashboard" />',
      ],
      correctAnswer: 0,
      explanation:
        "`<Navigate to=\"/dashboard\" replace />` render bo'lganda foydalanuvchini dashboard sahifasiga o'tkazib yuboradi. `replace` esa tarixda (history) eski sahifani almashtiradi.",
    },
    {
      question:
        "React Router v6.4+ dagi Data Loader (yuklovchi) vazifasi nima?",
      options: [
        "Sahifani yuklash animatsiyasini chiqarish",
        "Komponent render bo'lishidan oldin unga kerakli ma'lumotlarni serverdan asinxron ravishda yuklab beradigan funksiya",
        "Router tezligini oshirish",
        "Faqat rasmlarni yuklash",
      ],
      correctAnswer: 1,
      explanation:
        "Loader funksiyalari komponent render bo'lishidan avval ishga tushib, ma'lumotlar kelib tushgach sahifani ochadi, bu esa sahifaning yuklanishini optimallashtiradi.",
    },
    {
      question:
        "Loader funksiyasidan kelgan ma'lumotni komponent ichida qaysi hook orqali o'qiymiz?",
      options: ["useLoaderData", "useParams", "useLoader", "useFetchedData"],
      correctAnswer: 0,
      explanation:
        "`useLoaderData` hooki loader funksiyasidan qaytarilgan natijani komponent tarkibida qabul qilib oladi.",
    },
    {
      question: "Protected Route (himoyalangan sahifa) qanday yaratiladi?",
      options: [
        "Faqat CSS orqali",
        "Bola komponentni o'rab turadigan va auth state ga qarab foydalanuvchini login sahifasiga yo'naltiruvchi maxsus Wrapper komponent yaratish orqali",
        "Serverda himoyalash orqali",
        "Hech qanday yo'l yo'q",
      ],
      correctAnswer: 1,
      explanation:
        "Auth Wrapper yaratib, agar foydalanuvchi tizimga kirmagan bo'lsa `<Navigate to=\"/login\" />` qaytariladi, kirgan bo'lsa `<Outlet />` yoki `children` ko'rsatiladi.",
    },
    {
      question:
        "Foydalanuvchini boshqa sahifaga o'tkazishda maxsus ma'lumot (state) uzatib yuborish useNavigate yordamida qanday yoziladi?",
      options: [
        "navigate('/profile', { state: { fromHome: true } })",
        "navigate('/profile?fromHome=true')",
        "navigate('/profile', { fromHome: true })",
        "navigate('/profile', 'state')",
      ],
      correctAnswer: 0,
      explanation:
        "Navigate funksiyasining ikkinchi parametriga `state` xossasini berish orqali keyingi sahifaga ko'rinmas ma'lumot yuborish mumkin. Uni keyingi sahifada `useLocation().state` orqali o'qiladi.",
    },
    {
      question:
        "React Router v6.4+ dagi Action funksiyasi nima uchun xizmat qiladi?",
      options: [
        "Tugma bosish harakatlari uchun",
        "Forma yuborilganda (POST/PUT/DELETE) serverga so'rov yuborish va form ma'lumotlarini qayta ishlash uchun",
        "Navigatsiya uchun",
        "Dizayn berish uchun",
      ],
      correctAnswer: 1,
      explanation:
        "Action funksiyalari formalar bilan ishlashni soddalashtiradi. Forma yuborilganda u avtomatik ishlab, loaderlar ma'lumotlarini yangilash imkonini beradi.",
    },
    {
      question:
        "Outlet orqali nested komponentga qanday qilib umumiy props yoki ma'lumot uzatish mumkin?",
      options: [
        "<Outlet props={...} />",
        "<Outlet context={value} /> va bola komponentda `useOutletContext()` hookidan foydalanish orqali",
        "<Outlet data={...} />",
        "Buni iloji yo'q",
      ],
      correctAnswer: 1,
      explanation:
        "Outlet komponentida `context` propi mavjud bo'lib, unga uzatilgan qiymatni ostidagi barcha bolalar `useOutletContext` hooki orqali bemalol o'qib olishi mumkin.",
    },
    {
      question:
        "Loader yoki Action funksiyasida yuz bergan xatoliklarni tutib qolish va maxsus xatolik sahifasini ko'rsatish uchun Route da qaysi prop ishlatiladi?",
      options: ["error", "errorElement", "fallback", "onError"],
      correctAnswer: 1,
      explanation:
        "`errorElement={<ErrorBoundary />}` propi yordamida o'sha route doirasida yuz bergan har qanday runtime xatolik chiroyli tarzda boshqariladi.",
    },
    {
      question:
        "Query string yordamida parametr o'rnatilganda ( setSearchParams({ page: 3 }) ) nima sodir bo'ladi?",
      options: [
        "Sahifa yangilanadi",
        "URL oxiridagi query qismi yangilanadi (`?page=3`) va unga ulangan komponent re-render bo'ladi",
        "Fayllar o'chadi",
        "Hech narsa",
      ],
      correctAnswer: 1,
      explanation:
        "setSearchParams chaqirilishi URL ni sahifani yangilamasdan o'zgartiradi va parametr o'zgargani uchun React re-render chaqiradi.",
    },
  ],

  // 13. PROP DRILLING & PROPS USECONTEXT
  props_context: [
    {
      question: "Props Drilling nima?",
      options: [
        "Propsni o'chirish jarayoni",
        "Ma'lumotni ota komponentdan juda chuqur joylashgan bola komponentga yetkazish uchun o'rtadagi keraksiz komponentlar orqali propsni ketma-ket o'tkazish",
        "Dizayn stillari oqimi",
        "API dan ma'lumot olish",
      ],
      correctAnswer: 1,
      explanation:
        "Props Drilling — bu state yoki ma'lumotni o'rtadagi komponentlarga kerak bo'lmasa ham, chuqur joylashgan bola komponentga yetkazish uchun ketma-ket props qilib uzatib chiqish jarayonidir.",
    },
    {
      question:
        "Props Drilling muammosini hal qilish uchun Reactda qanday standart vosita mavjud?",
      options: ["Redux", "Context API", "React Router", "useState"],
      correctAnswer: 1,
      explanation:
        "Context API — React loyihalarida props drilling muammosini hal qilish va ma'lumotlarni komponentlar daraxti bo'ylab global ulashish imkonini beruvchi standart vositadir.",
    },
    {
      question: "Context yaratish uchun qaysi funksiyadan foydalaniladi?",
      options: [
        "useContext()",
        "createContext()",
        "makeContext()",
        "useState()",
      ],
      correctAnswer: 1,
      explanation:
        "Reactda yangi context yaratish uchun `createContext()` funksiyasidan foydalaniladi. Masalan: `const MyContext = createContext(null)`.",
    },
    {
      question:
        "Context qiymatini komponentlar daraxtiga tarqatish (taqdim etish) uchun qaysi komponent ishlatiladi?",
      options: [
        "Context.Consumer",
        "Context.Provider",
        "Context.Wrapper",
        "Context.Sender",
      ],
      correctAnswer: 1,
      explanation:
        "`Context.Provider` komponenti uning ostidagi barcha komponentlarga context qiymatini ulashish (provide qilish) imkonini beradi. U `value` propini oladi.",
    },
    {
      question:
        "Funktsional komponent ichida Context qiymatini qabul qilib olish uchun qaysi hook ishlatiladi?",
      options: ["useContext", "useProvider", "useState", "useEffect"],
      correctAnswer: 0,
      explanation:
        "Funktsional komponentlarda context qiymatini olish uchun `useContext` hookiga yaratilgan context ob'ektini berib chaqiramiz: `const value = useContext(MyContext)`.",
    },
    {
      question:
        "Context Provider ga berilgan `value` qiymati o'zgarganda nima sodir bo'ladi?",
      options: [
        "Hech narsa sodir bo'lmaydi",
        "Shu context dan foydalanayotgan (useContext qilgan) barcha komponentlar qayta render bo'ladi",
        "Faqat eng birinchi bola render bo'ladi",
        "Xatolik yuz beradi",
      ],
      correctAnswer: 1,
      explanation:
        "Context.Provider ning value qiymati o'zgarganida, shu contextni iste'mol qiluvchi (useContext ishlatuvchi) barcha komponentlar avtomatik ravishda qayta render qilinadi.",
    },
    {
      question: "Context API dan qachon foydalanish tavsiya etiladi?",
      options: [
        "Har qanday ma'lumot almashinuvida",
        "Global ma'lumotlarni (masalan: sayt tili, tema-dark/light, foydalanuvchi ma'lumotlari) ko'p joyda ishlatish kerak bo'lganda",
        "Faqat API dan ma'lumot yuklaganda",
        "Faqat animatsiyalar bilan ishlashda",
      ],
      correctAnswer: 1,
      explanation:
        "Context butun ilova bo'ylab ko'plab komponentlarga kerak bo'ladigan global ma'lumotlarni (til, mavzu, login holati) saqlash va ulashish uchun juda mos keladi.",
    },
    {
      question:
        "Nima uchun Context API ni haddan tashqari ko'p ishlatish tavsiya etilmaydi?",
      options: [
        "Chunki u faqat klass komponentlarda ishlaydi",
        "Chunki har safar context qiymati o'zgarganda unga ulangan barcha komponentlar qayta render bo'lib, unumdorlikka (performance) salbiy ta'sir qilishi mumkin",
        "Saytni sekin yuklagani uchun",
        "Uning yozilishi juda uzun",
      ],
      correctAnswer: 1,
      explanation:
        "Context qiymati o'zgarganda barcha iste'molchilar qayta render bo'ladi. Tez-tez o'zgaradigan ma'lumotlar uchun Context dan foydalanish keraksiz qayta renderlarni ko'paytirib yuboradi.",
    },
    {
      question:
        "Context.Provider tarkibida `value` propini yozmasak nima bo'ladi?",
      options: [
        "Boshlang'ich qiymat ishlatiladi",
        "React xato beradi va ishlamaydi",
        "Null qiymati qaytadi",
        "Undefined qaytadi va ogohlantirish beradi",
      ],
      correctAnswer: 1,
      explanation:
        "Context.Provider tarkibida `value` propini berish majburiydir. Aks holda uning ostidagi komponentlar yangi qiymatni ololmaydi va xatoliklar kelib chiqishi mumkin.",
    },
    {
      question:
        "Context dan foydalanadigan komponent har doim Context.Provider ichida bo'lishi shartmi?",
      options: [
        "Yo'q, shart emas",
        "Ha, agar komponent Provider tashqarisida bo'lsa va useContext qilsa, u createContext(defaultValue) dagi boshlang'ich qiymatni oladi",
        "Faqat bir marta ishlatilsa shart emas",
        "Ha, aks holda dastur crash bo'ladi",
      ],
      correctAnswer: 1,
      explanation:
        "Agar komponent Provider tashqarisida bo'lsa, u baribir ishlaydi, lekin u context ning joriy dinamik qiymatini emas, balki `createContext` yaratilganda berilgan default (boshlang'ich) qiymatni qabul qiladi.",
    },
  ],

  // 14. MEMORY MANAGEMENT
  memory_management: [
    {
      question: "JavaScriptda xotira oqishi (Memory Leak) nima?",
      options: [
        "Kompyuter xotirasi to'lib qolishi",
        "Dastur tomonidan ishlatilgan, lekin keraksiz bo'lsa ham xotiradan o'chirilmay (garbage collection qilinmay) ushlab turilgan xotira qismlari",
        "Dasturning tezroq ishlashi",
        "Ma'lumotlar bazasi xatosi",
      ],
      correctAnswer: 1,
      explanation:
        "Memory Leak — endi kerak bo'lmagan ma'lumotlarning xotirada qolib ketishi va vaqt o'tishi bilan tizim resurslarini yeb bitirishi jarayonidir.",
    },
    {
      question:
        "Reactda useEffect ichida yaratilgan setInterval yoki setTimeout ni tozalamaslik nima xavf tug'diradi?",
      options: [
        "Hech narsa, u o'zi tozalaydi",
        "Komponent ekrandan o'chsa ham (unmount), taymer fonda ishlashda davom etadi va xotira oqishi (memory leak) yuzaga keladi",
        "Timer tezroq ishlaydi",
        "Faqat bir marta ishlaydi",
      ],
      correctAnswer: 1,
      explanation:
        "Komponent ekrandan yo'qolganda fondagi taymerlar o'chmaydi. Har safar komponent qayta yuklanganda yangi taymer qo'shilib, xotirani band qilaveradi. Buning oldini olish uchun cleanup funksiyasida `clearInterval` yoki `clearTimeout` yozilishi shart.",
    },
    {
      question:
        "useEffect ichida oynaga (window) event listener qo'shilganda, uni qayerda tozalash lozim?",
      options: [
        "Hech qayerda, brauzer o'zi o'chiradi",
        "useEffect ning cleanup (return) funksiyasi ichida `window.removeEventListener` orqali",
        "Tugma bosilganda alohida",
        "Boshqa useEffect ichida",
      ],
      correctAnswer: 1,
      explanation:
        "Tizim elementlariga qo'shilgan tinglovchilar (Event Listeners) komponent o'chayotganda cleanup funksiyasida o'chirilishi shart. Aks holda xotirada eskirgan havolalar qolib ketadi.",
    },
    {
      question:
        "React 18 ga qadar ko'p uchraydigan 'Can't perform a React state update on an unmounted component' ogohlantirishi nimani anglatadi?",
      options: [
        "Internet yo'qligini",
        "Komponent ekrandan o'chib ketganidan keyin asinxron so'rov (masalan API) tugab, endi mavjud bo'lmagan komponent stateni yangilashga harakat qilganligini",
        "Vite xatosini",
        "CSS yuklanmaganligini",
      ],
      correctAnswer: 1,
      explanation:
        "Ekrandan o'chgan komponent holatini (state) o'zgartirish xotira oqishiga olib kelishi mumkin. Buning oldini olish uchun asinxron so'rov bekor qilinishi yoki unmount holati tekshirilishi kerak.",
    },
    {
      question:
        "Garbage Collector (Axlat yig'uvchi) JavaScriptda qanday vazifani bajaradi?",
      options: [
        "Xato kodlarni o'chiradi",
        "Dasturda endi hech qayerdan havola qilinmayotgan (unreferenced) obyektlarni aniqlab, ularning xotirasini avtomatik bo'shatadi",
        "Fayllarni siqadi",
        "Tugmalarni stillaydi",
      ],
      correctAnswer: 1,
      explanation:
        "JS dvigatelidagi Garbage Collector fonda ishlab, xotirada keraksiz bo'lgan ma'lumotlarni o'chirib xotirani boza saqlaydi.",
    },
    {
      question:
        "Websocket yoki Firebase real-time ulanishlarini Reactda qachon yopish (close) kerak?",
      options: [
        "Ulanish tugagach avtomatik",
        "useEffect cleanup funksiyasi ichida komponent ekrandan o'chganda (unmount)",
        "Faqat internet o'chganda",
        "Buning iloji yo'q",
      ],
      correctAnswer: 1,
      explanation:
        "Real-time tarmoq ulanishlari (Websockets) komponent o'chganda yopilishi kerak, aks holda ulanish ochiq qolib resurslarni band qiladi.",
    },
    {
      question:
        "useRef dan foydalanish xotira boshqaruvida qanday yordam beradi?",
      options: [
        "Render sonini oshiradi",
        "Elementlarga to'g'ridan-to'g'ri murojaat qilish orqali xotirada keraksiz renderlar o'zgarishlaridan qochish imkonini beradi",
        "Faqat loadingda yordam beradi",
        "Uning xotiraga foydasi yo'q",
      ],
      correctAnswer: 1,
      explanation:
        "useRef re-render chaqirmaydi, ya'ni keraksiz vaqtinchalik ma'lumotlar uchun qo'shimcha Virtual DOM hisob-kitoblarini kamaytiradi.",
    },
    {
      question:
        "AbortController yordamida fetch so'rovlarini bekor qilish qayerda yoziladi?",
      options: [
        "Faqat form yuborishda",
        "useEffect ning cleanup return qismida `controller.abort()` chaqiriladi",
        "useMemo ichida",
        "Hech qayerda, buni iloji yo'q",
      ],
      correctAnswer: 1,
      explanation:
        "Komponent unmount bo'lganda `controller.abort()` chaqirilsa, hali tugallanmagan API so'rovi brauzer tomonidan bekor qilinadi va xotira tejaladi.",
    },
    {
      question:
        "Quyidagilardan qaysi biri xotira oqishiga (memory leak) sabab bo'lmaydi?",
      options: [
        "Fonda qolib ketgan setInterval",
        "Tozalanmagan global EventListener lar",
        "To'g'ri yozilgan va tozalangan useEffect hooklari",
        "Unmount bo'lgan komponentga yoziladigan asinxron state yangilanishlari",
      ],
      correctAnswer: 2,
      explanation:
        "Agar tozalash (cleanup) funksiyalari to'g'ri yozilgan bo'lsa, xotira oqishlari yuzaga kelmaydi va loyiha barqaror ishlaydi.",
    },
    {
      question:
        "JavaScriptda closures (yopilishlar) xotira bilan qanday bog'liq?",
      options: [
        "Ular xotirani o'chiradi",
        "Closures tashqi funksiyadagi o'zgaruvchilarni xotirada ushlab qoladi, shuning uchun ular noto'g'ri ishlatilsa keraksiz ma'lumotlar o'chmay qolishi mumkin",
        "Closures faqat css da ishlaydi",
        "Hech qanday aloqasi yo'q",
      ],
      correctAnswer: 1,
      explanation:
        "Closures ichki funksiyaga tashqi o'zgaruvchini eslab qolish imkonini beradi. Ichki funksiya xotirada saqlanib tursa, tashqi o'zgaruvchilar ham Garbage Collector tomonidan o'chirilmaydi.",
    },
  ],

  // 15. GITHUB DA TEAM BO'LIB ISHLASH
  github_teamwork: [
    {
      question: "GitHub nima?",
      options: [
        "Dasturlash tili",
        "Git versiyalar boshqaruvi tizimi yordamida yozilgan kodlarni saqlash va jamoaviy ishlash uchun mo'ljallangan bulutli platforma",
        "Operatsion tizim",
        "CSS kutubxonasi",
      ],
      correctAnswer: 1,
      explanation:
        "GitHub — butun dunyo dasturchilari o'z kodlarini saqlaydigan va hamkorlikda loyihalar yaratadigan eng yirik veb platformadir.",
    },
    {
      question:
        "Jamoada ishlashda asosiy kod yoziladigan va himoyalanadigan branch (tarmoq) nomi nima?",
      options: ["feature", "main (yoki master)", "develop", "bugfix"],
      correctAnswer: 1,
      explanation:
        "`main` yoki `master` branchi loyihaning ishchi, production holatdagi asosiy tarmog'i hisoblanadi va unga to'g'ridan-to'g'ri kod yozish tavsiya etilmaydi.",
    },
    {
      question: "Pull Request (PR) nima?",
      options: [
        "Kodlarni yuklab olish",
        "Dasturchi o'z tarmog'idagi (branch) o'zgarishlarni asosiy tarmoqqa (main/develop) qo'shish uchun jamoaga yuboradigan ruxsatnoma/so'rov",
        "Git xatoligi",
        "Kodni serverdan o'chirish",
      ],
      correctAnswer: 1,
      explanation:
        "Pull Request orqali jamoa a'zolari kiritilgan o'zgarishlarni ko'rib chiqadi (Code Review), muhokama qiladi va ma'qullagandan keyin asosiy kodga birlashtiradi (merge).",
    },
    {
      question: "Git Conflict (to'qnashuv) nima uchun yuzaga keladi?",
      options: [
        "Internet o'chib qolganda",
        "Ikki dasturchi bitta faylning aynan bir xil qatorini o'zgartirib, bir vaqtda gitga yuklamoqchi bo'lganida Git qaysi birini saqlashni bilmay qolganida",
        "Kompyuter qizib ketganda",
        "Faqat rasmlar yuklanganda",
      ],
      correctAnswer: 1,
      explanation:
        "Git bitta faylning bitta qatoridagi turli o'zgarishlarni avtomatik hal qilolmaydi va dasturchidan qaysi kod to'g'ri ekanligini qo'lda tanlashni (Resolve Conflict) so'raydi.",
    },
    {
      question:
        "Serverdagi eng so'nggi o'zgarishlarni o'zimizning kompyuterga tortib olish va o'z kodimiz bilan birlashtirish buyrug'i qaysi?",
      options: ["git push", "git pull", "git status", "git add"],
      correctAnswer: 1,
      explanation:
        "`git pull` serverdagi yangiliklarni yuklab oladi va ularni bizning lokal branchimiz bilan birlashtiradi.",
    },
    {
      question:
        "Lokal o'zgarishlarni saqlab turib, branchini tozalash va keyin yana qaytarib olish uchun qaysi buyruq ishlatiladi?",
      options: [
        "git checkout",
        "git stash (va git stash pop)",
        "git reset",
        "git commit",
      ],
      correctAnswer: 1,
      explanation:
        "`git stash` vaqtinchalik o'zgarishlarni yashirib qo'yadi. Keyin serverdan pull qilib bo'lgach, `git stash pop` orqali saqlangan kodlarni qaytarib olish mumkin.",
    },
    {
      question: ".gitignore fayli nima uchun xizmat qiladi?",
      options: [
        "Git xatolarini ro'yxat qilish uchun",
        "Loyihadagi gitga yuklanmasligi kerak bo'lgan keraksiz fayllar (node_modules, .env, build papkalari) ro'yxatini saqlash uchun",
        "Sayt dizayni uchun",
        "Faqat JavaScript fayllarini yashirish uchun",
      ],
      correctAnswer: 1,
      explanation:
        "node_modules yoki maxsus kalitlar saqlanadigan `.env` faylini GitHub ga yuklamaslik kerak. Ular `.gitignore` fayliga yozib qo'yiladi.",
    },
    {
      question:
        "Yangi branch (tarmoq) yaratish va unga o'tish buyrug'i qanday?",
      options: [
        "git branch new-branch",
        "git checkout -b new-branch",
        "git checkout new-branch",
        "git pull new-branch",
      ],
      correctAnswer: 1,
      explanation:
        "`git checkout -b branch_nomi` yangi tarmoq ochadi va sizni avtomatik ravishda o'sha tarmoqqa o'tkazadi.",
    },
    {
      question: "Git rebase va git merge farqi nima?",
      options: [
        "Merge tekin, rebase pullik",
        "Merge o'zgarishlarni yangi commit bilan qo'shadi, Rebase esa tarixni chiziqli va tartibli qilib boshqa branch ustiga ko'chiradi",
        "Hech qanday farqi yo'q",
        "Rebase faqat xatolarni o'chiradi",
      ],
      correctAnswer: 1,
      explanation:
        "Merge tarixni boricha (tarmoqlanishlar bilan) saqlaydi. Rebase esa barcha commitlarni bitta chiziqqa joylashtiradi, bu esa git tarixini oson o'qiladigan qiladi.",
    },
    {
      question: "GitHub Actions nima?",
      options: [
        "Tugmalar to'plami",
        "GitHub dagi avtomatlashtirilgan CI/CD (Continuous Integration / Continuous Deployment) tizimi bo'lib, har safar kod yuklanganda testlar va buildni avtomatik ishga tushiradi",
        "Dasturchilar chatlashadigan joy",
        "Bulutli ma'lumotlar ombori",
      ],
      correctAnswer: 1,
      explanation:
        "GitHub Actions yordamida loyihani avtomatik test qilish, sifatini tekshirish va serverga deploy qilish ishlarini avtomatlashtirish mumkin.",
    },
  ],

  // 16. USEREDUCER HOOK
  use_reducer: [
    {
      question: "useReducer hooki nima uchun ishlatiladi?",
      options: [
        "Komponentlarni stillash uchun",
        "useState ga o'xshash, lekin murakkab va bir-biriga bog'liq bo'lgan state (holat) mantiqlarini boshqarish uchun mo'ljallangan hook",
        "API dan ma'lumot olish uchun",
        "Animatsiyalarni boshqarish uchun",
      ],
      correctAnswer: 1,
      explanation:
        "useReducer murakkab holatlar (masalan ko'p xossali obyektlar) va ularni o'zgartiradigan ko'plab actionlarni tartibli boshqarishga yordam beradi.",
    },
    {
      question: "useReducer qabul qiladigan ikkita asosiy argument nima?",
      options: [
        "state va action",
        "reducer funksiyasi va boshlang'ich state (initialState)",
        "useContext va useState",
        "dispatcher va callback",
      ],
      correctAnswer: 1,
      explanation:
        "useReducer shunday chaqiriladi: `useReducer(reducer, initialState)`.",
    },
    {
      question: "Reducer funksiyasi nima?",
      options: [
        "Xatolarni kamaytiradigan funksiya",
        "Joriy state va action ob'ektini qabul qilib, shunga asosan mutlaqo yangi state qaytaradigan toza (pure) funksiya",
        "Asinxron so'rov yuboradigan funksiya",
        "CSS klasslari ro'yxati",
      ],
      correctAnswer: 1,
      explanation:
        "Reducer funksiyasi asinxron so'rovlarsiz va yon ta'sirlarsiz ishlaydigan, har doim bir xil kiruvchi ma'lumotlarga bir xil chiquvchi javob beradigan toza funksiya bo'lishi shart.",
    },
    {
      question: "useReducer dan qaytadigan massiv tarkibida nimalar bo'ladi?",
      options: [
        "State qiymati va uni to'g'ridan-to'g'ri o'zgartiradigan funksiya",
        "Joriy state qiymati va actionlarni yuboruvchi dispatch funksiyasi",
        "Faqat bitta obyekt",
        "Uchta alohida funksiya",
      ],
      correctAnswer: 1,
      explanation:
        "useReducer massiv qaytaradi: `const [state, dispatch] = useReducer(reducer, initialState)`.",
    },
    {
      question:
        "Action (harakat) ob'ekti odatda qanday standart xossalarga ega bo'ladi?",
      options: [
        "id va className",
        "type (bajarilishi kerak bo'lgan amal nomi) va payload (yuboriladigan qo'shimcha ma'lumot)",
        "state va setter",
        "headers va body",
      ],
      correctAnswer: 1,
      explanation:
        "Action — bu nima qilish kerakligini bildiruvchi oddiy obyekt. Masalan: `{ type: 'ADD_TODO', payload: 'Yangi vazifa' }`.",
    },
    {
      question:
        "State o'zgartirish harakatini (action) reducerga yuborish uchun nima chaqiriladi?",
      options: ["setState()", "dispatch(action)", "useReducer()", "update()"],
      correctAnswer: 1,
      explanation:
        "`dispatch` funksiyasi yordamida action ob'ekti reducerga uzatiladi: `dispatch({ type: 'INCREMENT' })`.",
    },
    {
      question: "useReducer va useState o'rtasidagi asosiy farq nimada?",
      options: [
        "useReducer tezroq ishlaydi",
        "useState oddiy statelar uchun, useReducer esa murakkab, bir-biriga bog'liq va ko'p bosqichli state mantiqlari uchun qulay",
        "useState faqat klasslarda ishlaydi",
        "Hech qanday farqi yo'q",
      ],
      correctAnswer: 1,
      explanation:
        "useReducer state yangilanish mantiqini komponentdan tashqariga chiqarish va test qilish imkonini beradi, bu esa kodning o'qilishini yaxshilaydi.",
    },
    {
      question:
        "Reducer funksiyasi ichida har doim qaysi JavaScript sintaksisidan foydalanish keng tarqalgan?",
      options: ["if-else", "switch-case", "for...of", "try-catch"],
      correctAnswer: 1,
      explanation:
        "Action turlarini (`action.type`) tekshirish va har biriga mos yangi stateni qaytarish uchun `switch-case` eng qulay va chiroyli yo'l hisoblanadi.",
    },
    {
      question:
        "Reducer funksiyasi ichida API dan fetch yordamida ma'lumot olish to'g'rimi?",
      options: [
        "Ha, bu eng qulay joy",
        "Yo'q, reducer toza (pure) funksiya bo'lishi kerak. Uning ichida asinxron so'rovlar, timerlar yoki boshqa side-effektlar yozish mutlaqo taqiqlanadi",
        "Faqat POST so'rovlari uchun to'g'ri",
        "Faqat loading bo'lsa mumkin",
      ],
      correctAnswer: 1,
      explanation:
        "Reducer faqat kelgan ma'lumot bo'yicha stateni hisoblashi shart. API so'rovlari esa komponent ichida (useEffect yoki event handlerda) bajarilib, natijasi dispatch qilinadi.",
    },
    {
      question:
        "useReducer da uchinchi parametr (init funksiyasi) nima uchun xizmat qiladi?",
      options: [
        "Xatolarni tekshirish uchun",
        "Boshlang'ich stateni dinamik ravishda kechiktirib (lazy) hisoblash va yaratish uchun",
        "CSS yuklash uchun",
        "Hech narsa uchun, u ishlatilmaydi",
      ],
      correctAnswer: 1,
      explanation:
        "Agar boshlang'ich stateni yaratish og'ir hisob-kitoblarni talab qilsa, init funksiyasi uchinchi argument qilib beriladi: `useReducer(reducer, initialArg, init)`.",
    },
  ],

  // 17. USEMEMO, MEMO. USECALLBACK
  memoization: [
    {
      question: "useMemo hookining asosiy vazifasi nima?",
      options: [
        "DOM elementlariga bog'lanish",
        "Og'ir hisob-kitoblar natijasini keshlab qo'yish va har renderda keraksiz qayta hisoblashlarning oldini olish",
        "API dan ma'lumot yuklash",
        "State yaratish",
      ],
      correctAnswer: 1,
      explanation:
        "useMemo hisob-kitob natijasini xotirada saqlaydi va faqat unga bog'liq bo'lgan o'zgaruvchilar o'zgargandagina qayta hisoblaydi.",
    },
    {
      question: "useCallback hookining asosiy vazifasi nima?",
      options: [
        "Stillarni keshlab qo'yish",
        "Funksiya obyektining o'zini keshlab qo'yish va har renderda qayta e'lon qilinishining oldini olish",
        "State yangilash",
        "Timer yaratish",
      ],
      correctAnswer: 1,
      explanation:
        "useCallback funksiyaning o'zini keshlab qo'yadi. Bu bola komponentga funksiya uzatilganda, har safar ota render bo'lganda funksiya qayta yaratilib bola keraksiz render bo'lishining oldini oladi.",
    },
    {
      question: "useMemo va useCallback o'rtasidagi asosiy farq nima?",
      options: [
        "useMemo klasslarda, useCallback funktsiyalarda ishlaydi",
        "useMemo funksiyadan qaytgan qiymatni (natijani) keshlaydi, useCallback esa funksiyaning o'zini keshlaydi",
        "Hech qanday farqi yo'q",
        "useMemo sekinroq ishlaydi",
      ],
      correctAnswer: 1,
      explanation:
        "`useMemo(() => computeValue(a), [a])` qiymat qaytaradi. `useCallback(() => doSomething(a), [a])` esa funksiyaning o'zini qaytaradi.",
    },
    {
      question:
        "Qachon useMemo va useCallback dan foydalanish samarasiz (ortiqcha) hisoblanadi?",
      options: [
        "Har qanday loyihada",
        "Kichik va oddiy hisob-kitoblarda, chunki keshni solishtirish va saqlash ham o'ziga yarasha resurs talab qiladi va kodni murakkablashtiradi",
        "Faqat katta loyihalarda",
        "Faqat vaqtinchalik o'zgaruvchilarda",
      ],
      correctAnswer: 1,
      explanation:
        "Har bir oddiy funksiyani useCallback ga o'rash Reactda performance ni yaxshilamaydi, balki yomonlashtirishi mumkin. Ortiqcha solishtiruvlar va xotira bandligi oshadi.",
    },
    {
      question: "React.memo nima?",
      options: [
        "useMemo hookining boshqa nomi",
        "Komponentni o'rab, uning propslari o'zgarmasa qayta render bo'lishini to'xtatuvchi Higher-Order Component (HOC)",
        "State saqlovchi",
        "Xatolarni tutuvchi",
      ],
      correctAnswer: 1,
      explanation:
        "React.memo komponent darajasida ishlaydi. Agar ota komponent render bo'lsa ham, bolaning propslari o'zgarmagan bo'lsa, React.memo bola komponent re-renderini to'xtatadi.",
    },
    {
      question:
        "React.memo bilan o'ralgan bola komponentga props sifatida oddiy funksiya uzatilsa, ota render bo'lganda bola ham render bo'ladimi?",
      options: [
        "Yo'q, chunki u React.memo bilan o'ralgan",
        "Ha, chunki otada funksiya har renderda yangidan yaratiladi va bola buni yangi props deb qabul qiladi. Buning oldini olish uchun funksiyani useCallback ga o'rash kerak",
        "Faqat xato beradi",
        "Faqat input bo'lsa render bo'ladi",
      ],
      correctAnswer: 1,
      explanation:
        "JavaScriptda funksiyalar ob'ekt bo'lgani sababli har safar yangi xotira manzili (reference) bilan yaratiladi. Shuning uchun ota render bo'lganda funksiya havolasi o'zgaradi va React.memo bolani baribir render qiladi. Buni tuzatish uchun `useCallback` ishlatiladi.",
    },
    {
      question: "useMemo qabul qiladigan birinchi argument nima?",
      options: [
        "Massiv",
        "Qiymat qaytaruvchi funksiya",
        "O'zgaruvchi",
        "useEffect",
      ],
      correctAnswer: 1,
      explanation:
        "useMemo birinchi argument sifatida hisob-kitobni amalga oshiradigan va natijani qaytaradigan funksiyani qabul qiladi: `useMemo(() => calculate(), [dep])`.",
    },
    {
      question:
        "useCallback ga beriladigan dependency array bo'sh bo'lsa, nima sodir bo'ladi?",
      options: [
        "Funksiya har renderda qayta yaratiladi",
        "Funksiya faqat birinchi renderda bir marta yaratiladi va keyingi barcha renderlarda o'sha birinchi renderdagi versiyasi keshdan olinadi",
        "Funksiya ishlamaydi",
        "Xatolik yuz beradi",
      ],
      correctAnswer: 1,
      explanation:
        "Bo'sh dependency massivi bilan useCallback funksiyani bir marta yaratadi va u o'zgarmaydi. Biroq, agar funksiya ichida state ishlatilsa, u har doim eski (stale) state qiymatini eslab qolishi mumkin.",
    },
    {
      question:
        "Shallow comparison (yuzaki solishtirish) React.memo da qanday ishlaydi?",
      options: [
        "Faqat ob'ektlarning ichki xossalarini to'liq tekshiradi",
        "Propslarning faqat birinchi darajali qiymatlarini solishtiradi (sonlar va satrlarni solishtiradi, ob'ektlar va massivlarning esa faqat xotira manzillarini tekshiradi)",
        "Faqat stillarni tekshiradi",
        "Hech qanday tekshiruv qilmaydi",
      ],
      correctAnswer: 1,
      explanation:
        "Shallow comparison ob'ektlar ichini chuqur tekshirmaydi, faqat havolasini solishtiradi. Shuning uchun ota renderda yangi obyekt uzatilsa, props o'zgardi deb hisoblanadi.",
    },
    {
      question:
        "useMemo va useCallback qaysi turdagi komponentlarda ishlatiladi?",
      options: [
        "Faqat Class komponentlarda",
        "Faqat Functional komponentlarda",
        "Ikkala turda ham",
        "Faqat Redux bilan birga",
      ],
      correctAnswer: 1,
      explanation:
        "Hooklar faqat funktsional komponentlarda ishlaydi. Class komponentlarda bunaqa xususiyatlar mavjud emas.",
    },
  ],

  // 18. ERROR HANDLING
  error_handling: [
    {
      question: "Reactda Error Boundary (Xatolik chegarasi) nima?",
      options: [
        "CSS xatolarini tozalovchi asbob",
        "Komponentlar daraxtining istalgan joyidagi JS xatolarini tutib oladigan, ularni log qiladigan va buzilgan komponent o'rniga zaxira UI ko'rsatadigan klass komponenti",
        "Faqat input validatsiyasi",
        "Server xatolarini tutuvchi router",
      ],
      correctAnswer: 1,
      explanation:
        "Error Boundary butun veb-ilovaning bitta kichik xato tufayli butunlay oq ekran bo'lib (crash) qolishini oldini oladi.",
    },
    {
      question:
        "Error Boundary komponenti qaysi turdagi komponent bo'lishi shart?",
      options: [
        "Faqat Class component (Sinfiy komponent)",
        "Faqat Functional component (Funktsional komponent)",
        "Ixtiyoriy",
        "Faqat arrow funksiya",
      ],
      correctAnswer: 0,
      explanation:
        "Hozirgi kunda ham Reactda Error Boundary yaratish uchun faqat Class component dan foydalanish shart, chunki funktsional komponentlarda bunga mos keladigan hooklar mavjud emas.",
    },
    {
      question:
        "Class komponentini Error Boundary ga aylantirish uchun qaysi lifecycle metodlaridan kamida bittasi bo'lishi kerak?",
      options: [
        "componentDidMount yoki componentDidUpdate",
        "getDerivedStateFromError yoki componentDidCatch",
        "render yoki constructor",
        "componentWillUnmount",
      ],
      correctAnswer: 1,
      explanation:
        "`getDerivedStateFromError` xatolikka qarab stateni yangilab zaxira UI ko'rsatish uchun, `componentDidCatch` esa xatoni Sentry kabi xizmatlarga yuborish uchun ishlatiladi.",
    },
    {
      question: "Error Boundary qaysi holatlardagi xatolarni tuta OLMAYDI?",
      options: [
        "Faqat render vaqtidagi xatolarni",
        "Event handlerlar, asinxron kodlar (setTimeout, fetch), Server Side Rendering (SSR) va o'zining ichidagi xatolarni",
        "Faqat bola komponentlardagi xatolarni",
        "Hech qanday cheklov yo'q",
      ],
      correctAnswer: 1,
      explanation:
        "Error boundary asinxron operatsiyalar va event listenerlar ichidagi xatolarni tuta olmaydi. U yerda standart `try...catch` ishlatilishi kerak.",
    },
    {
      question:
        "Event listenerlar yoki asinxron so'rovlar ichidagi xatolarni qanday tutamiz?",
      options: [
        "Error Boundary orqali",
        "Standart try-catch bloklari yordamida",
        "React buni o'zi hal qiladi",
        "Hech qanday yo'l yo'q",
      ],
      correctAnswer: 1,
      explanation:
        "Asinxron kodlar va hodisalarni boshqaruvchi funksiyalarda yuz bergan xatoliklarni tutish uchun standart `try { ... } catch (e) { ... }` ishlatiladi.",
    },
    {
      question: "react-error-boundary kutubxonasi nima beradi?",
      options: [
        "CSS animatsiyalari",
        "Class komponent yozmasdan funktsional tarzda Error Boundary yaratish va fallback UI ko'rsatish imkonini beruvchi tayyor wrapper kutubxonadir",
        "Server Router",
        "Firebase sozlamalari",
      ],
      correctAnswer: 1,
      explanation:
        "`react-error-boundary` — bu qulay va tayyor kutubxona bo'lib, xatoliklarni boshqarishni ancha soddalashtiradi.",
    },
    {
      question:
        "Quyidagilardan qaysi biri Error Boundary bilan o'ralganda xavfsiz render bo'ladi?",
      options: [
        "Faqat API so'rovi",
        "Sintaktik xatosi bor, render vaqtida crash bo'ladigan oddiy bola komponent",
        "setTimeout ichidagi xato",
        "Faqat Redux Toolkit",
      ],
      correctAnswer: 1,
      explanation:
        "Render vaqtida JSX da yuz beradigan runtime xatoliklarni Error Boundary mukammal tutib qola oladi.",
    },
    {
      question: "componentDidCatch metodi qanday parametrlarni qabul qiladi?",
      options: [
        "Faqat error",
        "error (xato ob'ekti) va info (xato komponent daraxti haqida ma'lumot)",
        "Hech qanday parametr",
        "Faqat xato sodir bo'lgan vaqtni",
      ],
      correctAnswer: 1,
      explanation:
        "`componentDidCatch(error, info)` ko'rinishida bo'lib, xato haqidagi to'liq ma'lumotlarni serverga yuborish imkonini beradi.",
    },
    {
      question:
        "Sayt buzilganda (crash bo'lganda) foydalanuvchiga nima ko'rsatish tavsiya qilinadi?",
      options: [
        "Hech narsa (oq ekran)",
        "Tushunarli va chiroyli 'Xatolik yuz berdi' sahifasi va qayta yuklash (Reset) tugmasi",
        "Faqat kod xatosi matni",
        "Server sozlamalari",
      ],
      correctAnswer: 1,
      explanation:
        "Foydalanuvchi tajribasini (UX) buzmaslik uchun xatolik sodir bo'lgan joyda tushunarli zaxira UI chiqarib, sahifani qayta yuklash imkonini berish kerak.",
    },
    {
      question:
        "Error Boundary butun ilovani bitta qilib o'rashi kerakmi yoki bo'lib yozsa ham bo'ladimi?",
      options: [
        "Faqat butun saytni o'rashi kerak",
        "Bo'lib-bo'lib yozish mumkin, masalan: Sidebar, Header va Main qismlar alohida o'ralsa, bitta qism buzilsa ham qolgan qismlar ishlab turaveradi",
        "Faqat sahifalar ichida bo'lishi shart",
        "Buni farqi yo'q",
      ],
      correctAnswer: 1,
      explanation:
        "Har bir muhim blokni alohida Error Boundary bilan o'rash saytning chidamliligini (robustness) oshiradi.",
    },
  ],

  // 19. REDUX TOOLKIT
  redux_toolkit: [
    {
      question: "Redux nima?",
      options: [
        "Faqat router kutubxonasi",
        "Ilovaning barcha komponentlari uchun markazlashtirilgan global holatni boshqarish kutubxonasi",
        "CSS frameworki",
        "Ma'lumotlar bazasi turi",
      ],
      correctAnswer: 1,
      explanation:
        "Redux — butun ilova uchun yagona va global holat omborini taqdim etuvchi, ma'lumotlarni tartibli boshqarishga yordam beradigan kutubxonadir.",
    },
    {
      question: "Redux Toolkit (RTK) nima?",
      options: [
        "Redux ning pullik versiyasi",
        "Redux bilan ishlashni soddalashtirish, ortiqcha kodlarni kamaytirish uchun yaratilgan rasmiy va tavsiya etilgan Redux to'plami",
        "Mobil ilovalar uchun Redux",
        "Faqat dizayn stillari to'plami",
      ],
      correctAnswer: 1,
      explanation:
        "Redux Toolkit — an'anaviy Redux dagi murakkab sozlamalar va ko'p yoziladigan kodlarni qisqartirish maqsadida yaratilgan zamonaviy Redux standartidir.",
    },
    {
      question:
        "Redux da global statelar saqlanadigan yagona joy nima deb ataladi?",
      options: ["Slice", "Store", "Reducer", "Action"],
      correctAnswer: 1,
      explanation:
        "Redux-da barcha global ma'lumotlar bitta umumiy obyektda — `Store` (omborda) saqlanadi.",
    },
    {
      question:
        "Redux Toolkit da state va uni o'zgartiradigan reducerlarni bitta joyda e'lon qilish uchun nima ishlatiladi?",
      options: [
        "createStore",
        "createSlice",
        "configureStore",
        "createReducer",
      ],
      correctAnswer: 1,
      explanation:
        "`createSlice` — boshlang'ich qiymat (initialState), reducerlar va ularga mos actionlarni bitta faylda qulay yaratish imkonini beruvchi RTK funksiyasidir.",
    },
    {
      question:
        "Store dagi global stateni komponent ichida o'qib olish uchun qaysi Redux hooki ishlatiladi?",
      options: ["useDispatch", "useSelector", "useState", "useStore"],
      correctAnswer: 1,
      explanation:
        "`useSelector` hooki store ichidagi kerakli stateni tanlab olish uchun ishlatiladi: `const count = useSelector(state => state.counter.value)`.",
    },
    {
      question:
        "Actionni ishga tushirish (reducerga yuborish) uchun qaysi Redux hooki ishlatiladi?",
      options: ["useSelector", "useDispatch", "useAction", "useReducer"],
      correctAnswer: 1,
      explanation:
        "`useDispatch` hooki orqali biz actionlarni ishga tushiramiz, natijada reducer ishlab store dagi holatni yangilaydi: `const dispatch = useDispatch(); dispatch(increment())`.",
    },
    {
      question:
        "Redux Toolkit da asinxron amallarni bajarish uchun qaysi yordamchi funksiya ishlatiladi?",
      options: [
        "createSlice",
        "createAsyncThunk",
        "configureStore",
        "asyncAction",
      ],
      correctAnswer: 1,
      explanation:
        "`createAsyncThunk` — Redux da asinxron operatsiyalarni (API chaqiruvlari kabi) dispatch qilish va uning loading, fulfilled, rejected holatlarini boshqarish uchun ishlatiladi.",
    },
    {
      question: "Reducer nima?",
      options: [
        "Faqat ma'lumot yuklovchi funksiya",
        "Eski state va actionni qabul qilib, ularga asosan yangi state qaytaruvchi toza funksiya",
        "CSS stillarini o'zgartiruvchi asbob",
        "Router komponenti",
      ],
      correctAnswer: 1,
      explanation:
        "Reducer — bu action ga qarab, store dagi stateni qanday o'zgartirish kerakligini belgilaydigan sof JavaScript funksiyasidir.",
    },
    {
      question:
        "Nima uchun Redux Toolkit da stateni bemalol mutatsiya qilish (masalan, state.value = 5) mumkindek ko'rinadi?",
      options: [
        "Chunki u xavfsiz emas",
        "Chunki RTK ichki tizimida Immer.js kutubxonasi ishlaydi, u biz yozgan kodni avtomatik ravishda immutabillikka o'tkazib beradi",
        "Faqat sonlarda shunday",
        "Bu xato, bunday qilib bo'lmaydi",
      ],
      correctAnswer: 1,
      explanation:
        "An'anaviy Reduxda stateni o'zgartirish uchun har doim nusxa olish kerak edi. RTK esa Immer.js dan foydalanadi, u bizga oddiy o'zgartirish sintaksisidan foydalanish imkonini beradi.",
    },
    {
      question: "Redux ni har qanday kichik loyihada ishlatish to'g'rimi?",
      options: [
        "Ha, u barcha loyihalarga shart",
        "Yo'q, kichik loyihalarda useState va Context API yetarli bo'ladi. Redux kod hajmini oshiradi va uni faqat murakkab global statega ega yirik loyihalarda ishlatish tavsiya qilinadi",
        "Faqat internet tez bo'lsa to'g'ri",
        "Faqat Tailwind bilan ishlatish kerak",
      ],
      correctAnswer: 1,
      explanation:
        "Redux loyihaga qo'shimcha murakkablik olib keladi. Agar loyiha kichik bo'lsa, Reactning o'zidagi Context API yoki useState yetarli hisoblanadi.",
    },
  ],

  // 20. I18N LIBRARY
  i18n_library: [
    {
      question: "i18n nima degani?",
      options: [
        "Dasturlash tili standarti",
        "Internationalization (Baynalmilallashtirish - so'zning bosh va oxirgi harflari orasida 18 ta harf borligidan olingan qisqartma)",
        "CSS formatlash turi",
        "Yangi internet protokoli",
      ],
      correctAnswer: 1,
      explanation:
        "i18n — dasturiy ta'minotni turli tillar va madaniyatlarga moslashtirish (tarjima qilish) jarayonining global qisqartmasidir.",
    },
    {
      question:
        "React loyihalarini ko'p tilli (multilingual) qilishda eng mashhur kutubxonalar to'plami qaysi?",
      options: [
        "React Router",
        "i18next va react-i18next",
        "Redux Toolkit",
        "i18n-style",
      ],
      correctAnswer: 1,
      explanation:
        "`i18next` yadro kutubxonasi, `react-i18next` esa uni React komponentlari va hooklari bilan qulay bog'laydigan rasmiy kutubxonadir.",
    },
    {
      question:
        "Komponent ichida tarjima qilingan so'zlarni olish uchun qaysi hook va funksiya ishlatiladi?",
      options: [
        "const { t } = useTranslation()",
        "const { translate } = useI18n()",
        "const t = getTranslation()",
        "useLocale()",
      ],
      correctAnswer: 0,
      explanation:
        "`useTranslation` hookidan qaytadigan `t` funksiyasiga JSON dagi kalit so'zni berib, uni joriy tildagi tarjimasini olamiz: `t('welcome')`.",
    },
    {
      question:
        "Ilova tilini dasturiy ravishda (masalan, til tugmasi bosilganda) o'zgartirish qanday yoziladi?",
      options: [
        "i18n.changeLanguage('uz')",
        "changeLang('uz')",
        "t('change_to_uz')",
        "window.setLang('uz')",
      ],
      correctAnswer: 0,
      explanation:
        "`useTranslation` hookidan qaytadigan `i18n` ob'ektidagi `changeLanguage('til_kodi')` metodi yordamida tilni real vaqtda yangilaymiz.",
    },
    {
      question: "Tarjimalar (translation resources) odatda qayerda saqlanadi?",
      options: [
        "Faqat HTML faylida",
        "Har bir til uchun alohida JSON fayllarida (uz.json, en.json va h.k.)",
        "Ma'lumotlar bazasida jadvalda",
        "CSS stillarida",
      ],
      correctAnswer: 1,
      explanation:
        'Tarjimalar odatda kalit-qiymat shaklidagi JSON fayllarida saqlanadi: `{ "hello": "Salom", "bye": "Xayr" }`.',
    },
    {
      question:
        "Tarjima matni ichiga dinamik o'zgaruvchi qiymatini joylashtirish (Interpolation) qanday yoziladi?",
      options: [
        "t('hello', { name: 'Ali' })",
        "t('hello' + name)",
        "t('hello', 'Ali')",
        "t('hello').replace('Ali')",
      ],
      correctAnswer: 0,
      explanation:
        'JSON faylida `{ "hello": "Salom, {{name}}!" }` deb yoziladi, JS da esa o\'zgaruvchini obyekt ko\'rinishida ikkinchi argument qilib uzatamiz.',
    },
    {
      question:
        "Foydalanuvchi tanlagan tilni keyingi kirishlarida ham eslab qolish uchun i18next ning qaysi yordamchi moduli tavsiya etiladi?",
      options: [
        "i18next-browser-languagedetector",
        "i18next-save-language",
        "i18next-remember",
        "LanguageKeeper",
      ],
      correctAnswer: 0,
      explanation:
        "`i18next-browser-languagedetector` foydalanuvchining brauzer tili yoki localStorage dagi oldingi tanlovini avtomatik aniqlab beradi.",
    },
    {
      question: "React-i18next dagi <Trans> komponenti nima uchun kerak?",
      options: [
        "Matnni CSS orqali bezash uchun",
        "Tarjima qilinadigan matn tarkibida murakkab HTML/JSX elementlari (masalan havolalar, qalin matn <b>) bo'lganda ularni to'g'ri render qilish uchun",
        "Tilni tez yuklash uchun",
        "Hech narsa uchun",
      ],
      correctAnswer: 1,
      explanation:
        "Agar tarjimaning o'rtasida havola yoki stillangan matn bo'lsa, uni oddiy `t()` bilan render qilib bo'lmaydi. Bunday holda `<Trans>` komponenti qo'l keladi.",
    },
    {
      question:
        "Agar biror kalit so'z tanlangan tilda tarjima qilinmagan bo'lsa, nima sodir bo'ladi?",
      options: [
        "Sayt buzilib oq ekran bo'ladi",
        "i18next fallbackLng (zaxira tili, masalan 'en') sozlamasidagi tarjimani ko'rsatadi",
        "Faqat bo'sh joy chiqadi",
        "Xatolik oynasi chiqadi",
      ],
      correctAnswer: 1,
      explanation:
        "Sozlamalarda `fallbackLng: 'en'` berilsa, joriy tilda tarjima topilmasa, avtomatik ravishda ingliz tilidagi versiyasi ko'rsatiladi.",
    },
    {
      question:
        "React loyihasiga i18n sozlamalarini ulash qayerda amalga oshiriladi?",
      options: [
        "Faqat index.html ichida",
        "Alohida `i18n.js` sozlama fayli yaratilib, u loyihaning kirish faylida (`main.jsx`) import qilib qo'yiladi",
        "Faqat CSS faylida",
        "Faqat App.jsx oxirida",
      ],
      correctAnswer: 1,
      explanation:
        "i18n kutubxonasi ilova boshlanishida ishga tushishi uchun uning sozlamalari `main.jsx` (yoki `index.jsx`) faylining eng tepasida yuklanadi.",
    },
  ],

  // 21. FIREBASE
  firebase: [
    {
      question: "Firebase nima?",
      options: [
        "Dasturlash tili",
        "Google tomonidan taqdim etilgan, ma'lumotlar bazasi, auth, hosting va bulutli xizmatlarni o'z ichiga olgan BaaS (Backend-as-a-Service) platformasi",
        "CSS kutubxonasi",
        "Vite o'rniga ishlaydigan yig'uvchi",
      ],
      correctAnswer: 1,
      explanation:
        "Firebase frontend dasturchilarga server yozmasdan turib ma'lumotlar bazasi, avtorizatsiya va fayllar bilan ishlash imkonini beradi.",
    },
    {
      question:
        "Firebase loyihasini Reactga ulashda konfiguratsiya obyektida nimalar saqlanadi?",
      options: [
        "Foydalanuvchilar parollari",
        "apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId kabi unikal kalitlar",
        "Stillar ro'yxati",
        "Faqat URL manzillar",
      ],
      correctAnswer: 1,
      explanation:
        "Ushbu kalitlar Firebase konsolida loyiha yaratilganda beriladi va u orqali React Firebase serverlari bilan xavfsiz bog'lanadi.",
    },
    {
      question:
        "Firebase Authentication yordamida elektron pochta va parol bilan ro'yxatdan o'tish funksiyasi qaysi?",
      options: [
        "signInWithEmailAndPassword",
        "createUserWithEmailAndPassword",
        "signUpWithEmail",
        "registerUser",
      ],
      correctAnswer: 1,
      explanation:
        "`createUserWithEmailAndPassword` funksiyasi yangi foydalanuvchini elektron pochta va parol bilan ro'yxatdan o'tkazadi.",
    },
    {
      question:
        "Firebase Authentication yordamida tizimga kirgan foydalanuvchining login holatini (auth state) real vaqtda kuzatib boruvchi metod qaysi?",
      options: [
        "onAuthStateChanged",
        "getAuthUser",
        "currentUser",
        "watchAuth",
      ],
      correctAnswer: 0,
      explanation:
        "`onAuthStateChanged(auth, (user) => { ... })` tinglovchisi foydalanuvchi kirdi/chiqdi holatini doimiy kuzatib boradi.",
    },
    {
      question: "Cloud Firestore nima?",
      options: [
        "Faqat fayllarni saqlaydigan joy",
        "Firebase tarkibidagi NoSQL (hujjatga asoslangan) bulutli ma'lumotlar bazasi",
        "Animatsiyalar kutubxonasi",
        "Firebase serveri",
      ],
      correctAnswer: 1,
      explanation:
        "Cloud Firestore ma'lumotlarni to'plamlar (Collections) va hujjatlar (Documents) shaklida saqlaydigan tezkor va real-time ma'lumotlar bazasidir.",
    },
    {
      question:
        "Firestore da real-time (jonli) ma'lumotlarni kuzatish va ma'lumot o'zgarganda UI ni avtomatik yangilash uchun qaysi metod ishlatiladi?",
      options: ["getDocs", "onSnapshot", "addDoc", "query"],
      correctAnswer: 1,
      explanation:
        "`onSnapshot` metodi ma'lumotlar o'zgarishi bilan darhol yangi qiymatni qaytaradi va bu orqali real-time chatlar yoki ro'yxatlar yaratiladi.",
    },
    {
      question:
        "Firestore ga yangi hujjat (document) qo'shish va unga avtomatik unikal ID berish qaysi funksiya orqali amalga oshiriladi?",
      options: ["setDoc", "addDoc", "updateDoc", "createDoc"],
      correctAnswer: 1,
      explanation:
        "`addDoc` yangi ma'lumot yozadi va o'zi unikal ID generatsiya qiladi. Agar ID ni qo'lda yozmoqchi bo'lsak, `setDoc` ishlatiladi.",
    },
    {
      question: "Firebase Storage nima uchun xizmat qiladi?",
      options: [
        "Ma'lumotlar bazasini saqlash uchun",
        "Foydalanuvchilar yuklagan rasmlar, videolar, audiolar va boshqa fayllarni saqlash uchun",
        "Dastur kodini yuklash uchun",
        "Tizimga kirish uchun",
      ],
      correctAnswer: 1,
      explanation:
        "Firebase Storage katta hajmli media fayllarni xavfsiz saqlash va ularni yuklash/manzilini olish uchun mo'ljallangan bulutli ombordir.",
    },
    {
      question:
        "Foydalanuvchini tizimdan chiqarish (Log out) Firebase da qaysi funksiya orqali bajariladi?",
      options: ["signOut", "logOut", "deleteAuth", "exitUser"],
      correctAnswer: 0,
      explanation:
        "`signOut(auth)` funksiyasi joriy foydalanuvchi seansini tugatadi va tizimdan chiqaradi.",
    },
    {
      question:
        "Firestore da mavjud hujjatni qisman yangilash uchun qaysi metod ishlatiladi?",
      options: ["setDoc", "updateDoc", "deleteDoc", "patchDoc"],
      correctAnswer: 1,
      explanation:
        "`updateDoc` metodi mavjud hujjatning faqat ko'rsatilgan xossalarini yangilaydi, qolgan qismlariga tegmaydi.",
    },
  ],

  // 22. NEXT JS
  nextjs: [
    {
      question: "Next.js nima?",
      options: [
        "Yangi dasturlash tili",
        "React kutubxonasi ustiga qurilgan, SSR, SSG va tayyor loyiha tuzilishini taqdim etuvchi ommabop freymvork",
        "CSS preprotsessori",
        "Ma'lumotlar bazasi interfeysi",
      ],
      correctAnswer: 1,
      explanation:
        "Next.js React loyihalarini qidiruv tizimlari (SEO) uchun optimallashtirish, serverda render qilish (SSR) va marshrutlashni soddalashtirish uchun yaratilgan freymvorkdir.",
    },
    {
      question: "Next.js App Router da sahifalar (routes) qanday yaratiladi?",
      options: [
        "React Router yordamida qo'lda",
        "app/ papkasi ichida kataloglar (papka) va ularning ichida majburiy ravishda `page.js` (yoki page.tsx) fayllarini yaratish orqali (File-system routing)",
        "package.json orqali",
        "router.config faylida yozib",
      ],
      correctAnswer: 1,
      explanation:
        "Next.js da file-system routing ishlaydi. Har bir papka URL yo'liga aylanadi, masalan: `app/about/page.js` -> `/about` sahifasi bo'ladi.",
    },
    {
      question:
        "Next.js da default (standart) bo'yicha barcha komponentlar qanday xarakterga ega?",
      options: [
        "Client Components",
        "Server Components (Server komponentlari)",
        "HTML Components",
        "Stateful Components",
      ],
      correctAnswer: 1,
      explanation:
        "Next.js App Router da barcha komponentlar default bo'yicha Server Components hisoblanadi. Bu sahifa yuklanishini tezlashtiradi va JS hajmini kamaytiradi.",
    },
    {
      question:
        "Komponentni Client Component ga aylantirish (useState yoki useEffect hooklarini ishlatish imkonini berish) uchun faylning eng tepasiga nima deb yoziladi?",
      options: [
        "'use client'",
        "'client side'",
        "'import client'",
        "'enable hooks'",
      ],
      correctAnswer: 0,
      explanation:
        "Faqat brauzerda ishlaydigan dynamic xususiyatlar (state, event, hook) ishlatish uchun faylning eng birinchi qatoriga `'use client'` direktivasi yozilishi shart.",
    },
    {
      question: "SSR (Server-Side Rendering) nima?",
      options: [
        "Saytni faqat serverda saqlash",
        "Har bir so'rov yuborilganda sahifani serverda to'liq HTML ko'rinishida yig'ib, keyin brauzerga tayyor yuborish texnologiyasi",
        "Statik sahifa yaratish",
        "JS kodini o'chirish",
      ],
      correctAnswer: 1,
      explanation:
        "SSR yordamida foydalanuvchi va qidiruv tizimi botlari saytga kirganda bo'sh HTML o'rniga barcha ma'lumotlar bilan to'ldirilgan tayyor sahifani ko'radi.",
    },
    {
      question:
        "Next.js da sahifalararo o'tish uchun qaysi komponent tavsiya etiladi va nima uchun?",
      options: [
        "<a> tegi",
        "next/link dan keladigan <Link> komponenti, chunki u sahifani yangilamasdan navigatsiya qiladi va sahifa kontentini oldindan yuklaydi (prefetching)",
        "next/router komponenti",
        "Navigate komponenti",
      ],
      correctAnswer: 1,
      explanation:
        "Next.js `Link` komponenti ekran sohasiga tushgan sahifalar kodini fonda oldindan yuklab oladi (prefetching), bu esa sahifaga bosilganda lahzali o'tishni ta'minlaydi.",
    },
    {
      question:
        "Next.js dagi <Image /> komponentining an'anaviy <img> tagidan qanday afzalliklari bor?",
      options: [
        "Rasm rangini o'zgartira oladi",
        "Rasmlarni avtomatik optimallashtiradi, o'lchamini kichraytiradi, zamonaviy formatlarga (WebP) o'tkazadi va lazy loading qo'llaydi",
        "Rasmlarni 3D ko'rinishga keltiradi",
        "Hech qanday farqi yo'q",
      ],
      correctAnswer: 1,
      explanation:
        "`next/image` rasmlarni ekran o'lchamiga qarab dinamik siqadi va CLS (Cumulative Layout Shift) xatolarini oldini olish uchun kenglik va balandlikni hisobga oladi.",
    },
    {
      question: "SSG (Static Site Generation) nima?",
      options: [
        "Sayt yuklanishini to'xtatish",
        "Sahifani loyihani yig'ish (build) vaqtida bir marta to'liq HTML qilib yaratib qo'yish va barcha foydalanuvchilarga o'sha tayyor faylni darhol ulashish texnologiyasi",
        "CSS stillarini yuklash",
        "Faqat telefonlar uchun dizayn",
      ],
      correctAnswer: 1,
      explanation:
        "SSG juda tez ishlaydi, chunki server har safar ma'lumotlarni bazadan olib o'tirmaydi, tayyor HTML faylni CDN orqali tezda yetkazadi.",
    },
    {
      question: "Next.js da sahifa tartibi (Layout) nima uchun xizmat qiladi?",
      options: [
        "Faqat stillar berish uchun",
        "Bir nechta sahifalar uchun umumiy bo'lgan interfeys elementlarini (masalan, Header va Footer) bitta joyda guruhlash va sahifa o'zgarganda ularni qayta render qilmaslik uchun",
        "Rasmlarni joylash uchun",
        "Xatolarni ko'rsatish uchun",
      ],
      correctAnswer: 1,
      explanation:
        "`layout.js` fayllari umumiy karkasni yaratadi va faqat uning ichidagi `children` (sahifalar) o'zgaradi.",
    },
    {
      question:
        "Next.js kim/qaysi kompaniya tomonidan yaratilgan va qo'llab-quvvatlanadi?",
      options: ["Facebook", "Vercel", "Google", "Netlify"],
      correctAnswer: 1,
      explanation:
        "Next.js freymvorki 2016-yilda Vercel kompaniyasi tomonidan yaratilgan va ishlab chiqilmoqda.",
    },
  ],

  // 23. NEXT JS ADVANCED
  nextjs_advanced: [
    {
      question: "Next.js dagi Middleware vazifasi nima?",
      options: [
        "Stillarni tekshirish",
        "So'rov yakunlanishidan oldin ishga tushib, foydalanuvchini auth holatiga ko'ra yo'naltirish (redirect), redirect yoki cookie-lar bilan ishlash imkonini beruvchi kod bo'lagi",
        "Ma'lumotlar bazasini o'chirish",
        "Rasmlarni siqish",
      ],
      correctAnswer: 1,
      explanation:
        "`middleware.js` loyihaning ildizida yoziladi va barcha kiruvchi so'rovlarni tahlil qilib, xavfsizlik va navigatsiya qoidalarini markaziy boshqaradi.",
    },
    {
      question: "Server Actions nima?",
      options: [
        "Server animatsiyalari",
        "Client componentlaridan yoki formalardan turib to'g'ridan-to'g'ri serverda ishlaydigan asinxron funksiyalarni chaqirish imkonini beruvchi Next.js xususiyati",
        "Vite sozlamalari",
        "API Router sozlamalari",
      ],
      correctAnswer: 1,
      explanation:
        "Server Actions yordamida alohida API yozmasdan, formani submit qilganda to'g'ridan-to'g'ri server funksiyasini ishga tushirish va bazaga yozish mumkin.",
    },
    {
      question: "ISR (Incremental Static Regeneration) nima?",
      options: [
        "Statik sahifalarni o'chirish",
        "Build qilingan statik sahifalarni butun loyihani boshqadan build qilmasdan, fonda ma'lum vaqt oralig'ida (revalidate) yangilab turish imkonini beruvchi texnologiya",
        "Saytni tezkor yuklash tizimi",
        "Faqat router sozlamalari",
      ],
      correctAnswer: 1,
      explanation:
        "ISR yordamida sahifa statik tezlikda ishlaydi, lekin belgilangan vaqt (masalan har 60 soniyada) o'tgach fonda yangi ma'lumotlar bilan qayta shakllanadi.",
    },
    {
      question:
        "Next.js App Router da dinamik marshrutlar (dynamic routes) papkasi qanday nomlanadi?",
      options: ["[id]", ":id", "id", "*id"],
      correctAnswer: 0,
      explanation:
        "Dinamik yo'llar yaratish uchun papka nomi kvadrat qavslar ichida yoziladi, masalan: `app/blog/[slug]/page.js` -> `/blog/hello-world` sahifasiga mos tushadi.",
    },
    {
      question:
        "SEO uchun Next.js da Metadata (title, description va b.) qanday qo'shiladi?",
      options: [
        "HTML fayl ichida qo'lda yozib",
        "page.js yoki layout.js faylidan `metadata` obyektini export qilish orqali",
        "useState yordamida",
        "CSS properties orqali",
      ],
      correctAnswer: 1,
      explanation:
        "Next.js metadata obyektini o'qib, brauzer sarlavhasi (Head) va ijtimoiy tarmoqlar botlari uchun mos metataglarni avtomatik generatsiya qiladi.",
    },
    {
      question:
        "Next.js dagi Route Handlers (API yo'llari) qaysi fayl nomi bilan yaratiladi?",
      options: [
        "api.js",
        "route.js (yoki route.ts)",
        "server.js",
        "handler.js",
      ],
      correctAnswer: 1,
      explanation:
        "Veb-ilovada maxsus backend so'rovlariga javob beradigan (JSON) API lar yaratish uchun `route.js` fayli yoziladi.",
    },
    {
      question:
        "Next.js da Google Fonts (shriftlar) yuklashda Cumulative Layout Shift (shrift o'zgarganda sahifa sakrashi) oldini olish qanday yechilgan?",
      options: [
        "CSS import orqali",
        "`next/font` moduli orqali shriftlarni build vaqtida yuklab olib, o'lchamlarini avtomatik hisoblash orqali",
        "Shriftlarni ishlatmaslik orqali",
        "Faqat rasmlardan foydalanish orqali",
      ],
      correctAnswer: 1,
      explanation:
        "`next/font` shriftlarni local yuklab oladi va shrift yuklanguncha sahifa sakrashlarini oldini oladigan mos o'lchamdagi zaxira shrift stillarini o'rnatib turadi.",
    },
    {
      question:
        "Lokal loyiha o'zgarishlarini tekshirib build qilish uchun terminalda qaysi buyruq ishlatiladi?",
      options: [
        "npm run dev",
        "npm run build",
        "npm run start",
        "npm run test",
      ],
      correctAnswer: 1,
      explanation:
        "`npm run build` Next.js loyihasini ishlab chiqarishga (production) tayyorlaydi va statik sahifalarni shakllantiradi.",
    },
    {
      question:
        "Parallel Routes (parallel yo'llar) Next.js da qanday nomlanadi?",
      options: [
        "@folder (masalan @analytics)",
        "[folder]",
        ":folder",
        "*folder",
      ],
      correctAnswer: 0,
      explanation:
        "Parallel Routes bitta layout doirasida bir vaqtda yoki shartli ravishda bir nechta sahifani render qilish uchun ishlatiladi va `@` belgisi bilan boshlanadi.",
    },
    {
      question:
        "Next.js loyihalarini deploy qilish va hosting qilish uchun eng ideal bulutli platforma qaysi?",
      options: ["Heroku", "Vercel", "GitHub Pages", "Netlify"],
      correctAnswer: 1,
      explanation:
        "Next.js Vercel kompaniyasi mahsuli bo'lgani sababli, Vercel platformasi Next.js xususiyatlarini (SSR, ISR, Edge functions) eng mukammal va lahzali qo'llab-quvvatlaydigan hostingdir.",
    },
  ],
};
