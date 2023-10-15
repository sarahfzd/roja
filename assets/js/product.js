var basket = [];
var Products = [];

var sPrdct1 = {
    id: 96843201,
    image: "assets/img/suggestion-products/suggest1.jpeg",
    enTitle: "Tropical Fruits Body Yogurt For Dry And Normal Skin 250ml DEEP SENSE",
    faTitle: "ماست بدن تروپیکال مناسب پوست‌های معمولی و خشک دیپ سنس",
    price: 109000,
    discountPercent: 35,
    suggested: true
}
var sPrdct2 = {
    id: 96843202,
    image: "assets/img/suggestion-products/suggest2.jpeg",
    enTitle: "Face Wash Gel For Oily Skin 250ml DEEP SENSE",
    faTitle: "ژل شستشوی صورت پوست‌های چرب با عصاره بامبو دیپ سنس",
    price: 89000,
    discountPercent: 10,
    suggested: true
}
var sPrdct3 = {
    id: 96843203,
    image: "assets/img/suggestion-products/suggest3.jpeg",
    enTitle: "Anti Lice & Nits Topical Serum Choked Lice 50ml PRIME",
    faTitle: "سرم مو LS برطرف کننده حشرات پریم",
    price: 56000,
    discountPercent: 10,
    suggested: true
}
var sPrdct4 = {
    id: 96843204,
    image: "assets/img/suggestion-products/suggest4.jpeg",
    enTitle: "hair mask with argan oil hydrant ADRA",
    faTitle: "ماسک مو آرگان با آبکشی آدرا",
    price: 257000,
    discountPercent: 10,
    suggested: true
}
var sPrdct5 = {
    id: 96843205,
    image: "assets/img/suggestion-products/suggest5.jpeg",
    enTitle: "Lip Stick Matt MARDINI",
    faTitle: "رژلب جامد مات ماردینی",
    price: 354000,
    discountPercent: 10,
    suggested: true
}
var sPrdct6 = {
    id: 96843206,
    image: "assets/img/suggestion-products/suggest6.jpeg",
    enTitle: "Fresh Act 24hr Women Roll On 50ml MY",
    faTitle: "مام رول ضد تعریق 24 ساعته مردانه فرش اکت مای",
    price: 49400,
    discountPercent: 20,
    suggested: true
}
var sPrdct7 = {
    id: 96843207,
    image: "assets/img/suggestion-products/suggest7.jpeg",
    enTitle: "Hydra Active Deep Moisturizing 120ml JUTE",
    faTitle: "کرم مرطوب کننده و آبرسان قوی Hydra Active پمپی ژوت",
    price: 161000,
    discountPercent: 10,
    suggested: true
}
var sPrdct8 = {
    id: 96843208,
    image: "assets/img/suggestion-products/suggest8.jpeg",
    enTitle: "Moisturizing And Hydrating Body Lotion 400ml JUTE",
    faTitle: "لوسیون مرطوب کننده و آبرسان بدن اکلت ژوت",
    price: 149500,
    discountPercent: 10,
    suggested: true
}
var sPrdct9 = {
    id: 96843209,
    image: "assets/img/suggestion-products/suggest9.jpeg",
    enTitle: "Ultra Barrier Repair Cream MEDILANN",
    faTitle: "کرم ترمیم کننده اولترا مدیلن",
    price: 125300,
    discountPercent: 10,
    suggested: true
}
var sPrdct10 = {
    id: 968432010,
    image: "assets/img/suggestion-products/suggest10.jpeg",
    enTitle: "Shampoo Zinc Pyrithione 2% MEDILANN",
    faTitle: "شامپو ضد شوره زینک پریتیون موی خشک مدیلن",
    price: 47600,
    discountPercent: 40,
    suggested: true
}

var nPrdct1 = {
    id: 46843201,
    image: "assets/img/newest-products/newest-product-1.jpeg",
    enTitle: "GARDEN GRANVILLE",
    faTitle: "ادوپرفیوم زنانه گاردن گرنویل",
    price: 2610000,
    discountPercent: 10,
    newest: true
}
var nPrdct2 = {
    id: 46843202,
    image: "assets/img/newest-products/newest-product-2.jpeg",
    enTitle: "SPOT GUARD TINTED SENSCREEN CREAM SPF50 FOR OILY SKIN MY",
    faTitle: "ضد آفتاب اسپات گارد مات 4 کاره مناسب برای پوست های چرب مای",
    price: 170600,
    discountPercent: 10,
    newest: true
}
var nPrdct3 = {
    id: 46843203,
    image: "assets/img/newest-products/newest-product-3.jpeg",
    enTitle: "BIELENDA",
    faTitle: "کرم دست بازسازنده بی یلندا",
    price: 250000,
    discountPercent: 10,
    newest: true
}
var nPrdct4 = {
    id: 46843204,
    image: "assets/img/newest-products/newest-product-4.jpeg",
    enTitle: "VEGAN SMOOTHIE BIELENDA",
    faTitle: "شامپو بدن ملون بی یلندا",
    price: 850000,
    discountPercent: 10,
    newest: true
}
var nPrdct5 = {
    id: 46843205,
    image: "assets/img/newest-products/newest-product-5.jpeg",
    enTitle: "split ends repair hair mask IROX",
    faTitle: "ماسک موی خشک و مو خوره فری سولفات ایروکس",
    price: 120700,
    discountPercent: 10,
    newest: true
}
var nPrdct6 = {
    id: 46843206,
    image: "assets/img/newest-products/newest-product-6.jpeg",
    enTitle: "Liquid hand wash 500ml SCHON",
    faTitle: "مایع دستشویی فومی عسل 500 میل شون",
    price: 50600,
    discountPercent: 10,
    newest: true
}
var nPrdct7 = {
    id: 46843207,
    image: "assets/img/newest-products/newest-product-7.jpeg",
    enTitle: "Sunscreen Cream Oil Free SPF30 DOCTOR JILA",
    faTitle: "ضد آفتاب Spf30 بی‌رنگ دکتر ژیلا",
    price: 71000,
    discountPercent: 10,
    newest: true
}
var nPrdct8 = {
    id: 46843208,
    image: "assets/img/newest-products/newest-product-8.jpeg",
    enTitle: "Lightening Body Spot Serum JUTE",
    faTitle: "سرم ضد لک و روشن کننده بدن Body Spot ژوت",
    price: 280000,
    discountPercent: 10,
    newest: true
}
var nPrdct9 = {
    id: 46843209,
    image: "assets/img/newest-products/newest-product-9.jpeg",
    enTitle: "RICH EYE CREAM JUTE",
    faTitle: "کرم دور چشم ریچ ژوت",
    price: 300000,
    discountPercent: 25,
    newest: true
}
var nPrdct10 = {
    id: 468432010,
    image: "assets/img/newest-products/newest-product-10.jpeg",
    enTitle: "KIDS & BABY SHAMPOO 2*1 JUTE",
    faTitle: "شامپو سر و بدن کودکان ژوت",
    price: 189000,
    discountPercent: 10,
    newest: true
}

var msPrdct1 = {
    id: 396843201,
    image: "assets/img/most-sale-products/most-sale-1.jpeg",
    enTitle: "Multi Active Toner For Oily And Combination Skin 170ml LA FARRERR",
    faTitle: "تونر مولتی اکتیو مخصوص پوست های چرب و مختلط 1 لافارر",
    price: 83100,
    discountPercent: 10,
    mostSale: true
}
var msPrdct2 = {
    id: 396843202,
    image: "assets/img/most-sale-products/most-sale-2.jpeg",
    enTitle: "Sunscreen Acne Fluid Oil FREE 50+ 50 gr SUNSAFE",
    faTitle: "ضد آفتاب فاقد چربی فلوئید آکنئیک +SPF50 سان سیف",
    price: 267800,
    discountPercent: 20,
    mostSale: true
}
var msPrdct3 = {
    id: 396843203,
    image: "assets/img/most-sale-products/most-sale-3.jpeg",
    enTitle: "Hyal Cream Rich Moisturizer 40ml SKIN ONE",
    faTitle: "کرم مرطوب کننده مغذی هیال اسکین وان",
    price: 179800,
    discountPercent: 12,
    mostSale: true
}
var msPrdct4 = {
    id: 396843204,
    image: "assets/img/most-sale-products/most-sale-4.jpeg",
    enTitle: "Hydra Active Deep Moisturizing 70ml JUTE",
    faTitle: "کرم مرطوب کننده و آبرسان قوی Hydra Active تیوبی ژوت",
    price: 98000,
    discountPercent: 10,
    mostSale: true
}
var msPrdct5 = {
    id: 396843205,
    image: "assets/img/most-sale-products/most-sale-5.jpeg",
    enTitle: "wonder volume mascara CALLISTA",
    faTitle: "ریمل حجم دهنده واندر ولوم کالیستا",
    price: 271200,
    discountPercent: 10,
    mostSale: true
}
var msPrdct6 = {
    id: 396843206,
    image: "assets/img/most-sale-products/most-sale-6.jpeg",
    enTitle: "C-Prime Invisible Sunblock Gel SPF50 40ml PRIME",
    faTitle: "ضد آفتاب ژلی مدل C-Prime حاوی ویتامین C با SPF50 پریم",
    price: 420000,
    discountPercent: 10,
    mostSale: true
}
var msPrdct7 = {
    id: 396843207,
    image: "assets/img/most-sale-products/most-sale-7.jpeg",
    enTitle: "Micellar Cleansing Water 250ml DERMATYPIQUE",
    faTitle: "محلول پاک کننده آرایش میسلار پوست مختلط تا چرب درماتیپیک",
    price: 179800,
    discountPercent: 10,
    mostSale: true
}
var msPrdct8 = {
    id: 396843208,
    image: "assets/img/most-sale-products/most-sale-8.jpeg",
    enTitle: "VELVET MATTE LIPSTICK GOLDEN ROSE",
    faTitle: "رژ لب جامد ولوت گلدن رز",
    price: 173700,
    discountPercent: 10,
    mostSale: true
}
var msPrdct9 = {
    id: 396843209,
    image: "assets/img/most-sale-products/most-sale-9.jpeg",
    enTitle: "Purifying Cleansing Gel 150ml DERMATYPIQUE",
    faTitle: "ژل شوینده پوست چرب درماتیپیک",
    price: 219800,
    discountPercent: 10,
    mostSale: true
}
var msPrdct10 = {
    id: 3968432010,
    image: "assets/img/most-sale-products/most-sale-10.jpeg",
    enTitle: "SUNSCREEN TINTED FLUIDSPF50+ (50 ML) DERMATYPIQUE",
    faTitle: "ضد آفتاب رنگی فلویید پوست مختلط و چرب +SPF50 درماتیپیک",
    price: 289800,
    discountPercent: 10,
    mostSale: true
}

var bodysplash1 = {
    id: 1111101,
    image: "assets/img/category-bodysplash/1.jpeg",
    enTitle: "Long Lasting Body Mist 200 ml IPLUS",
    faTitle: "بادی میست خوشبو کننده بدن بانوان آی پلاس",
    price: 105300,
    discountPercent: 30
}
var bodysplash2 = {
    id: 1111102,
    image: "assets/img/category-bodysplash/2.jpeg",
    enTitle: "Seagull Men Body Splash Elegant SEAGULL",
    faTitle: "بادی اسپلش الگانت آقایان سی گل",
    price: 129500,
    discountPercent: 20
}
var bodysplash3 = {
    id: 1111103,
    image: "assets/img/category-bodysplash/3.jpeg",
    enTitle: "Long Lasting Body Mist 200 ml IPLUS",
    faTitle: "بادی میست خوشبو کننده بدن آقایان آی پلاس",
    price: 105000,
    discountPercent: 20
}
var bodysplash4 = {
    id: 1111104,
    image: "assets/img/category-bodysplash/4.jpeg",
    enTitle: "Charm SEAGULL4",
    faTitle: "بادی میست زنانه Charm سی گل",
    price: 154500,
    discountPercent: 20
}
var bodysplash5 = {
    id: 1111105,
    image: "assets/img/category-bodysplash/5.jpeg",
    enTitle: "Eau So Yummy SEAGULL",
    faTitle: "بادی میست زنانه Eau So Yummy سی گل",
    price: 154500,
    discountPercent: 20
}
var bodysplash6 = {
    id: 1111106,
    image: "assets/img/category-bodysplash/6.jpeg",
    enTitle: "Marvel SEAGUL",
    faTitle: "بادی میست زنانه Marvel سی گل",
    price: 154500,
    discountPercent: 20
}
var bodysplash7 = {
    id: 1111107,
    image: "assets/img/category-bodysplash/7.jpeg",
    enTitle: "Reinvigoroting refreshing long lasting body mist 200ml IPLUS",
    faTitle: "بادی میست خوشبو کننده بدن آقایان قرمز آی پلاس",
    price: 105300,
    discountPercent: 20
}
var bodysplash8 = {
    id: 1111108,
    image: "assets/img/category-bodysplash/8.jpeg",
    enTitle: "Reinvigoroting refreshing long lasting body mist 200ml IPLUS",
    faTitle: "بادی میست خوشبو کننده بدن بانوان بنفش آی پلاس",
    price: 105300,
    discountPercent: 20
}
var bodysplash9 = {
    id: 1111109,
    image: "assets/img/category-bodysplash/9.jpeg",
    enTitle: "Selena Hair & Body Mist 200ml CALLISTA",
    faTitle: "بادی اسپلش زنانه مو و بدن سلنا کالیستا",
    price: 207600,
    discountPercent: 20
}
var bodysplash10 = {
    id: 11111010,
    image: "assets/img/category-bodysplash/10.jpeg",
    enTitle: "Taylor Hair & Body Mist 200ml CALLISTA",
    faTitle: "بادی اسپلش زنانه مو و بدن تیلور کالیستا",
    price: 207600,
    discountPercent: 20
}
var bodysplash11 = {
    id: 11111011,
    image: "assets/img/category-bodysplash/11.jpeg",
    enTitle: "My Magician Purple Forest Body Splash Women MY",
    faTitle: "بادی اسپلش مجیشن پرپل فارست بی رنگ مای",
    price: 137200,
    discountPercent: 20
}
var bodysplash12 = {
    id: 11111012,
    image: "assets/img/category-bodysplash/12.jpeg",
    enTitle: "hebe hair & body splash 200ml MY",
    faTitle: "بادی اسپلش مو و بدن هرا مای",
    price: 148500,
    discountPercent: 10
}
var bodysplash13 = {
    id: 11111013,
    image: "assets/img/category-bodysplash/13.jpeg",
    enTitle: "Leto hair & body splash 200ml MY",
    faTitle: "بادی اسپلش مو و بدن لتو مای",
    price: 148400,
    discountPercent: 10
}
var bodysplash14 = {
    id: 11111014,
    image: "assets/img/category-bodysplash/14.jpeg",
    enTitle: "Luna hair & body splash 200ml MY",
    faTitle: "بادی اسپلش مو و بدن لونا مای",
    price: 148400,
    discountPercent: 20
}
var bodysplash15 = {
    id: 11111015,
    image: "assets/img/category-bodysplash/15.jpeg",
    enTitle: "Men Body Splash Model Off Road 220 ml MY",
    faTitle: "بادی اسپلش مردانه آف رود مای",
    price: 134700,
    discountPercent: 10
}
var deodorant1 = {
    id: 2222201,
    image: "assets/img/category-deodorant/1.jpeg",
    enTitle: "Roll on Deodorant For women 60 ml LAMININ",
    faTitle: "مام رول ضد تعریق دئودرانت زنانه لامینین",
    price: 92000,
    discountPercent: 30
}
var deodorant2 = {
    id: 2222202,
    image: "assets/img/category-deodorant/2.jpeg",
    enTitle: "Recharge Deodorant Spray for Men 125ml COMEON",
    faTitle: "اسپری ضد تعریق بدن مردانه مدل ریشارژ اسکین واتر کامان",
    price: 94700,
    discountPercent: 10
}
var deodorant3 = {
    id: 2222203,
    image: "assets/img/category-deodorant/3.jpeg",
    enTitle: "deodorant sensitive skin alcohol free 50ml IPLUS",
    faTitle: "دئودورانت و ضد تعریق بانوان مناسب پوست حساس آی پلاس",
    price: 87500,
    discountPercent: 25
}
var deodorant4 = {
    id: 2222204,
    image: "assets/img/category-deodorant/4.jpeg",
    enTitle: "energizing deodorant 50ml IPLUS",
    faTitle: "دئودورانت و ضد تعریق آقایان با رایحه انرژی بخش آی پلاس",
    price: 87500,
    discountPercent: 25
}
var deodorant5 = {
    id: 2222205,
    image: "assets/img/category-deodorant/5.jpeg",
    enTitle: "alcohol free deodorant anti perspirant 48H 50ml IPLUS",
    faTitle: "دئودورانت و ضد تعریق 48 ساعته آقایان آی پلاس",
    price: 78600,
    discountPercent: 25
}
var deodorant6 = {
    id: 2222206,
    image: "assets/img/category-deodorant/6.jpeg",
    enTitle: "Anti Perspirant Deodorant Cream LAMININ",
    faTitle: "کرم ضد تعریق مردانه لامینین",
    price: 115000,
    discountPercent: 25
}
var deodorant7 = {
    id: 2222207,
    image: "assets/img/category-deodorant/7.jpeg",
    enTitle: "Anti Perspirant Deodorant Cream LAMININ",
    faTitle: "کرم ضد تعریق بانوان لامینین",
    price: 115000,
    discountPercent: 25
}
var deodorant8 = {
    id: 2222208,
    image: "assets/img/category-deodorant/8.jpeg",
    enTitle: "Roll on Deodorant For men 60 ml LAMININ",
    faTitle: "مام رول ضد تعریق دئودرانت مردانه لامینین",
    price: 92000,
    discountPercent: 25
}
var deodorant9 = {
    id: 2222209,
    image: "assets/img/category-deodorant/9.jpeg",
    enTitle: "men's antiperspirant spray Attract HYDRODERM",
    faTitle: "اسپری دئودورانت و ضد تعریق مردانه Attract هیدرودرم",
    price: 95000,
    discountPercent: 20
}
var deodorant10 = {
    id: 22222010,
    image: "assets/img/category-deodorant/10.jpeg",
    enTitle: "men's antiperspirant spray Sport Infinity HYDRODERM",
    faTitle: "اسپری دئودورانت و ضد تعریق مردانه Sport Infinity هیدرودرم",
    price: 95000,
    discountPercent: 20
}
var deodorant11 = {
    id: 22222011,
    image: "assets/img/category-deodorant/11.jpeg",
    enTitle: "Hair Minimizing Deodorant Dry spray 150ml HYDRODERM",
    faTitle: "اسپری دئودورانت و ضد تعریق بانوان حاوی آلوئه‌ورا هیدرودرم",
    price: 95000,
    discountPercent: 20
}
var deodorant12 = {
    id: 22222012,
    image: "assets/img/category-deodorant/12.jpeg",
    enTitle: "Whitening Deodorant Dry Spray 150ml HYDRODERM",
    faTitle: "اسپری دئودورانت و ضد تعریق بانوان التیام بخش هیدرودرم",
    price: 95000,
    discountPercent: 20
}
var deodorant13 = {
    id: 22222013,
    image: "assets/img/category-deodorant/13.jpeg",
    enTitle: "Recovery Sport Deodorant Dry Spray 150ml HYDRODERM",
    faTitle: "اسپری دئودورانت و ضد تعریق مردانه ریکاوری اسپورت هیدرودرم",
    price: 95000,
    discountPercent: 20
}
var deodorant14 = {
    id: 22222014,
    image: "assets/img/category-deodorant/14.jpeg",
    enTitle: "Relax Deodorant Dry Spray 150ml HYDRODERM",
    faTitle: "اسپری دئودورانت و ضد تعریق مردانه ریلکس هیدرودرم",
    price: 95000,
    discountPercent: 20
}
var deodorant15 = {
    id: 22222015,
    image: "assets/img/category-deodorant/15.jpeg",
    enTitle: "Women's antiperspirant spray HYDRODERM",
    faTitle: "اسپری ضد تعریق زنانه پوست‌های آسیب دیده هیدرودرم",
    price: 95000,
    discountPercent: 20
}
var lotion1 = {
    id: 3333301,
    image: "assets/img/category-lotion/1.jpeg",
    enTitle: "Moisturizing And Hydrating Body Lotion 400ml JUTE",
    faTitle: "لوسیون مرطوب کننده و آبرسان بدن اکلت ژوت",
    price: 195000,
    discountPercent: 30
}
var lotion2 = {
    id: 3333302,
    image: "assets/img/category-lotion/2.jpeg",
    enTitle: "Moisturizing And Hydrating Body Lotion 400ml JUTE",
    faTitle: "لوسیون شکلات مرطوب کننده و آبرسان بدن ژوت",
    price: 195000,
    discountPercent: 25
}
var lotion3 = {
    id: 3333303,
    image: "assets/img/category-lotion/3.jpeg",
    enTitle: "ADORE LOTINON BODY LOTION JUTE",
    faTitle: "لوسیون مرطوب کننده بدن آدور ژوت",
    price: 195000,
    discountPercent: 25
}
var lotion4 = {
    id: 3333304,
    image: "assets/img/category-lotion/4.jpeg",
    enTitle: "Baby And Kids Lotion 70ml JUTE",
    faTitle: "لوسیون مرطوب کننده کودکان ژوت",
    price: 52000,
    discountPercent: 25
}
var lotion5 = {
    id: 3333305,
    image: "assets/img/category-lotion/5.jpeg",
    enTitle: "post depilatory lotion for women IPLUS",
    faTitle: "لوسیون پس از اپیلاسیون بانوان تیوبی آی پلاس",
    price: 59700,
    discountPercent: 25
}
var lotion6 = {
    id: 3333306,
    image: "assets/img/category-lotion/6.jpeg",
    enTitle: "Mandarin Body Lotion JUTE",
    faTitle: "لوسیون ماندارین ژوت",
    price: 149500,
    discountPercent: 25
}
var lotion7 = {
    id: 3333307,
    image: "assets/img/category-lotion/7.jpeg",
    enTitle: "Moisturizing And Hydrating Body Lotion 400ml JUTE",
    faTitle: "لوسیون نارگیل مرطوب کننده و آبرسان بدن ژوت",
    price: 175000,
    discountPercent: 25
}
var lotion8 = {
    id: 3333308,
    image: "assets/img/category-lotion/8.jpeg",
    enTitle: "10 Percent Urea Moisturizing Cream For Dry Skins ARDENE",
    faTitle: "لوسیون مرطوب کننده اوره 10% آردن",
    price: 98000,
    discountPercent: 20
}
var lotion9 = {
    id: 3333309,
    image: "assets/img/category-lotion/9.jpeg",
    enTitle: "Moisturizing lotion face and body baby 200gr HYDRODERM",
    faTitle: "لوسیون مرطوب کننده صورت و بدن نوزادان شیرخوار هیدرودرم",
    price: 100000,
    discountPercent: 20
}
var lotion10 = {
    id: 33333010,
    image: "assets/img/category-lotion/10.jpeg",
    enTitle: "Body Lotion MEDILANN",
    faTitle: "لوسیون بدن مدیلن",
    price: 110000,
    discountPercent: 20
}
var lotion11 = {
    id: 33333011,
    image: "assets/img/category-lotion/11.jpeg",
    enTitle: "Mango Body lotion JABON PLUS",
    faTitle: "لوسیون بدن انبه ژبن پلاس",
    price: 235000,
    discountPercent: 20
}
var lotion12 = {
    id: 33333012,
    image: "assets/img/category-lotion/12.jpeg",
    enTitle: "Lady Body Lotion For Dry Skin 200g HYDRODERM",
    faTitle: "لوسیون بدن تیوبی لیدی پوست خشک هیدرودرم",
    price: 124500,
    discountPercent: 20
}
var lotion13 = {
    id: 3333301,
    image: "assets/img/category-lotion/13.jpeg",
    enTitle: "Moisturizing Face & Body Lotion BEAUTY SILK",
    faTitle: "لوسیون صورت و بدن کودک بیوتی سیلک",
    price: 288000,
    discountPercent: 15
}
var lotion14 = {
    id: 33333014,
    image: "assets/img/category-lotion/14.jpeg",
    enTitle: "Body Lotion 200ml DOCTOR JILA",
    faTitle: "لوسیون بدن دکتر ژیلا",
    price: 117100,
    discountPercent: 15
}
var lotion15 = {
    id: 33333015,
    image: "assets/img/category-lotion/15.jpeg",
    enTitle: "Moisturizing body lotion VERONIQUE15",
    faTitle: "لوسیون مرطوب کننده بدن ورونیک",
    price: 399800,
    discountPercent: 10
}
var bodyShower1 = {
    id: 4444401,
    image: "assets/img/category-bodyShower/1.jpeg",
    enTitle: "Face & Body Care Syndet Gel 200ml SCALPIA",
    faTitle: "ژل شستشوی غیرصابونی صورت و بدن پوست چرب و جوش‌دار اسکالپیا",
    price: 114700,
    discountPercent: 40
}
var bodyShower2 = {
    id: 4444402,
    image: "assets/img/category-bodyShower/2.jpeg",
    enTitle: "Face & Body Care Syndet Gel 200ml SCALPIA",
    faTitle: "ژل روشن کننده غیر صابونی صورت و بدن اسکالپیا",
    price: 114700,
    discountPercent: 30
}
var bodyShower3 = {
    id: 4444403,
    image: "assets/img/category-bodyShower/3.jpeg",
    enTitle: "Syndet gel face & body care 200ml SCALPIA",
    faTitle: "ژل شوینده غیرصابونی مناسب پوست های خشک و حساس اسکالپیا",
    price: 114700,
    discountPercent: 30
}
var bodyShower4 = {
    id: 4444404,
    image: "assets/img/category-bodyShower/4.jpeg",
    enTitle: "BODY CARE spa and argan CREAMY SHOWER GEL HYDRODERM",
    faTitle: "شامپو بدن کرمی با رایحه اسپا و آرگان هیدرودرم",
    price: 79000,
    discountPercent: 30
}
var bodyShower5 = {
    id: 4444405,
    image: "assets/img/category-bodyShower/5.jpeg",
    enTitle: "BoDY WASH Peony JUTE",
    faTitle: "شامپو بدن پیونی ژوت",
    price: 115000,
    discountPercent: 25
}
var bodyShower6 = {
    id: 4444406,
    image: "assets/img/category-bodyShower/6.jpeg",
    enTitle: "Lightening & Anty Taches All Skin Type Phyto One",
    faTitle: "پن شوینده روشن کننده و ضد لک انواع پوست فیتو وان",
    price: 85000,
    discountPercent: 20
}
var bodyShower7 = {
    id: 4444407,
    image: "assets/img/category-bodyShower/7.jpeg",
    enTitle: "Extra Mild Soap Free Cleansing Dry And Sensitive Skin MEDIPAIN",
    faTitle: "پن درماتولوژیک و شفاف کننده پوست خشک و حساس مدیپن",
    price: 114000,
    discountPercent: 20
}
var bodyShower8 = {
    id: 4444408,
    image: "assets/img/category-bodyShower/8.jpeg",
    enTitle: "Extra Mild Soap Free Cleansing Dry And Normal Skin Cream MEDIPAIN",
    faTitle: "پن درماتولوژیک کرم دار پوست معمولی،خشک و خیلی خشک مدیپن",
    price: 114000,
    discountPercent: 20
}
var bodyShower9 = {
    id: 4444409,
    image: "assets/img/category-bodyShower/9.jpeg",
    enTitle: "Hair & Body Wash Relaxing HYDRODERM",
    faTitle: "شامپو سر و بدن و اصلاح صورت، آرامش بخش هیدرودرم",
    price: 69000,
    discountPercent: 20
}
var bodyShower10 = {
    id: 44444010,
    image: "assets/img/category-bodyShower/10.jpeg",
    enTitle: "Hydrating Foam Cleanser Oily Skin MEDILANN",
    faTitle: "فوم شستشوی صورت و بدن پوست چرب و مختلط مدیلن",
    price: 167000,
    discountPercent: 20
}
var bodyShower11 = {
    id: 44444011,
    image: "assets/img/category-bodyShower/11.jpeg",
    enTitle: "BODY CARE milk and honey CREAMY SHOWER GEL HYDRODERM",
    faTitle: "شامپو بدن کرمی با رایحه شیر و عسل هیدرودرم",
    price: 79400,
    discountPercent: 20
}
var bodyShower12 = {
    id: 44444012,
    image: "assets/img/category-bodyShower/12.jpeg",
    enTitle: "BODY CARE jasmine and argan CREAMY SHOWER GEL HYDRODERM",
    faTitle: "شامپو بدن کرمی با رایحه یاس و آرگان هیدرودرم",
    price: 79400,
    discountPercent: 20
}
var bodyShower13 = {
    id: 44444013,
    image: "assets/img/category-bodyShower/13.jpeg",
    enTitle: "BODY CARE white silk CREAMY SHOWER GEL HYDRODERM",
    faTitle: "شامپو بدن کرمی با رایحه ابریشم سفید هیدرودرم",
    price: 79400,
    discountPercent: 20
}
var bodyShower14 = {
    id: 44444014,
    image: "assets/img/category-bodyShower/14.jpeg",
    enTitle: "Nourishing Coconut Milk Creamy Body Shampoo SCHON",
    faTitle: "شامپو بدن کرمی مغذی شیر و نارگیل شون",
    price: 80600,
    discountPercent: 15
}
var bodyShower15 = {
    id: 44444015,
    image: "assets/img/category-bodyShower/15.jpeg",
    enTitle: "lavender relaxing body wash SCHON",
    faTitle: "شامپو بدن اسطوخدوس شون",
    price: 71800,
    discountPercent: 15
}
Products.push(sPrdct1);
Products.push(sPrdct2);
Products.push(sPrdct3);
Products.push(sPrdct4);
Products.push(sPrdct5);
Products.push(sPrdct6);
Products.push(sPrdct7);
Products.push(sPrdct8);
Products.push(sPrdct9);
Products.push(sPrdct10);
Products.push(nPrdct1);
Products.push(nPrdct2);
Products.push(nPrdct3);
Products.push(nPrdct4);
Products.push(nPrdct5);
Products.push(nPrdct6);
Products.push(nPrdct7);
Products.push(nPrdct8);
Products.push(nPrdct9);
Products.push(nPrdct10);
Products.push(msPrdct1);
Products.push(msPrdct2);
Products.push(msPrdct3);
Products.push(msPrdct4);
Products.push(msPrdct5);
Products.push(msPrdct6);
Products.push(msPrdct7);
Products.push(msPrdct8);
Products.push(msPrdct9);
Products.push(msPrdct10);
Products.push(bodysplash1);
Products.push(bodysplash2);
Products.push(bodysplash3);
Products.push(bodysplash4);
Products.push(bodysplash5);
Products.push(bodysplash6);
Products.push(bodysplash7);
Products.push(bodysplash8);
Products.push(bodysplash9);
Products.push(bodysplash10);
Products.push(bodysplash11);
Products.push(bodysplash12);
Products.push(bodysplash13);
Products.push(bodysplash14);
Products.push(bodysplash15);
Products.push(deodorant1);
Products.push(deodorant2);
Products.push(deodorant3);
Products.push(deodorant4);
Products.push(deodorant5);
Products.push(deodorant6);
Products.push(deodorant7);
Products.push(deodorant8);
Products.push(deodorant9);
Products.push(deodorant10);
Products.push(deodorant11);
Products.push(deodorant12);
Products.push(deodorant13);
Products.push(deodorant14);
Products.push(deodorant15);
Products.push(lotion1);
Products.push(lotion2);
Products.push(lotion3);
Products.push(lotion4);
Products.push(lotion5);
Products.push(lotion6);
Products.push(lotion7);
Products.push(lotion8);
Products.push(lotion9);
Products.push(lotion10);
Products.push(lotion11);
Products.push(lotion12);
Products.push(lotion13);
Products.push(lotion14);
Products.push(lotion15);
Products.push(bodyShower1);
Products.push(bodyShower2);
Products.push(bodyShower3);
Products.push(bodyShower4);
Products.push(bodyShower5);
Products.push(bodyShower6);
Products.push(bodyShower7);
Products.push(bodyShower8);
Products.push(bodyShower9);
Products.push(bodyShower10);
Products.push(bodyShower11);
Products.push(bodyShower12);
Products.push(bodyShower13);
Products.push(bodyShower14);
Products.push(bodyShower15);

localStorage.setItem("allProducts", JSON.stringify(Products));



$(document).ready(function () {


    var strBasket = localStorage.getItem("basket");
    if (strBasket) {
        basket = JSON.parse(strBasket);
        initialBakset();
    }

    $(document).on("click", ".suggest-product-add-to-basket-btn", function (e) {

        debugger;
        e.preventDefault();
        var btn = this;
        var id = $(btn).closest(".suggest-product-test").data("id");
        var basketItem;
        itemFinded = false;
        if (basket && basket.length > 0) {
            basketItem = basket.find(x => x.id == id);
            if (basketItem) {
                itemFinded = true;
                basketItem.count = basketItem.count + 1;
                $('#basket-add-product-modal').modal('show');
                setTimeout(function () { $('#basket-add-product-modal').modal('hide'); }, 900);
            }
        }
        if (!itemFinded) {
            var currentProduct = Products.find(x => x.id == id);
            basketItem = {
                id: currentProduct.id,
                faTitle: currentProduct.faTitle,
                enTitle: currentProduct.enTitle,
                model: currentProduct.category,
                price: currentProduct.price,
                image: currentProduct.image,
                discount: currentProduct.discountPercent,
                totalPrice: currentProduct.price - (currentProduct.price * currentProduct.discountPercent / 100),
                count: 1
            }
            basket.push(basketItem);
            $('#basket-add-product-modal').modal('show');
            setTimeout(function () { $('#basket-add-product-modal').modal('hide'); }, 900);
        }
        initialBakset();

    });
    $(document).on("click", ".basket-inner-product-test-count-increase", function (e) {
        e.preventDefault();
        var btn = this;
        var id = $(btn).closest(".basket-inner-product-test").data("id");
        ezafeKon(id);
    });
    $(document).on("click", ".basket-inner-product-test-count-decrease", function (e) {
        e.preventDefault();
        var btn = this;
        var id = $(btn).closest(".basket-inner-product-test").data("id");
        dec(id);
    });

    $(".second-body").html("");
    debugger;
    for (var item of Products) {
        var html = '<div class="suggest-product-test" data-id=' + item.id + '>';
        html += '<div class="suggest-product-img">';
        html += '<img class="suggest-product-image" src="' + item.image + '"';
        html += 'title="' + item.faTitle + '"';
        html += 'alt="' + item.enTitle + '">';
        html += '</div>';
        html += '<div class="suggest-product-description">';
        html += '<div class="suggest-product-title">';
        html += '<span>' + item.faTitle + '</span>';
        html += '</div>';
        html += '<div class="suggest-product-price">';
        html += '<del>' + item.price + 'تومان</del>';
        html += '<span>' + (item.price - (item.discountPercent * item.price / 100)) + ' تومان</span>';
        html += '</div>';
        html += '</div>';
        html += '<div class="suggest-product-buttons">';
        html += '<div class="suggest-product-btns">';
        html += '<button class="suggest-product-add-to-basket-btn"><span class="material-symbols-outlined">shopping_bag</span></button>';
        html += '<button class="suggest-product-info-btn"><span class="material-symbols-outlined">info</span></button>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        $(".second-body").append(html);
    }

    function ezafeKon(id) {

        var basketItem = basket.find(x => x.id == id);
        basketItem.count = basketItem.count + 1;
        initialBakset();
    }
    function dec(id) {

        var basketItem = basket.find(x => x.id == id);
        var prdctTitle = basketItem.faTitle;
        if (basketItem) {
            if (basketItem.count <= 1) {
                var index = basket.indexOf(basketItem)
                basket.splice(index, 1)
                var itemRemoved = true;

                if (itemRemoved) {
                    $(".remove-from-basket-alert").removeClass("visually-hidden");
                    $(".remove-from-basket-alert").html('<span>"' + prdctTitle + '" از سبد خرید شما حذف شد!</span>')
                    setTimeout(function () {

                        $(".remove-from-basket-alert").addClass("visually-hidden");
                    }, 1000);
                }

            } else {
                basketItem.count = basketItem.count - 1;
            }
        }
        initialBakset();
    }

    function initialBakset() {
        debugger;
        //خالی کردن داخل سبد خرید در html
        $(".basket-inner-products-list").html("");
        //چرخیدن داخل آرایه سبد خرید

        localStorage.setItem("basket", JSON.stringify(basket));

        for (var item of basket) {
            //صدا کردن تابع زیر
            addBasketItemFromHtml(item);
        }
        var totalCount = 0;
        var totalPrice = 0;
        var totalDiscount = 0;
        for (var item of basket) {
            totalPrice += item.count * item.totalPrice;
            totalCount += item.count;
            totalDiscount = totalDiscount + (item.price * item.discount / 100) * item.count;
        }
        $("#totalPrice").html(totalPrice);
        $("#totalCount").html(totalCount);
        $("#totalDiscount").html(totalDiscount);
        $("#basket-badge").html(totalCount);
    }

    function addBasketItemFromHtml(basketItem) {
        //تشکیل المنت های مربوط به باکس یک آیتم سبد خرید

        var html = '<div class="basket-inner-product-test" data-id="' + basketItem.id + '">';
        html += '<div class="basket-inner-product-test-image">';
        html += '<img class="basket-inner-product-test-img" src="' + basketItem.image + '" title="' + basketItem.faTitle + '" alt="' + basketItem.faTitle + '">';
        html += '</div>';
        html += '<div class="basket-inner-product-test-description">';
        html += '<div class="basket-inner-product-test-description-title"><span>' + summeryString(basketItem.faTitle, 25) + '</span></div>';
        html += '<div class="basket-inner-product-test-description-price"><span>' + basketItem.totalPrice + '</span></div>';
        html += '</div>';
        html += '<div class="basket-inner-product-test-count">';
        html += '<bottun class="basket-inner-product-test-count-increase"><span>+</span></bottun>';
        html += '<input class="counter-input" value="' + basketItem.count + '" disabled="disabled">';
        html += '<bottun class="basket-inner-product-test-count-decrease"><span>-</span></bottun>';
        html += '</div>';
        html += '</div>';
        $(".basket-inner-products-list").append(html)

    }
    function summeryString(str, lng) {
        let finalStr = "";
        const currentLng = str.length;
        if (currentLng > lng) {
            finalStr += str.substr(0, lng) + "..";
        } else {
            finalStr = str;
        }
        return finalStr;
    }

    $(document).on("click", ".suggest-product-info-btn", function (e) {
        debugger;
        e.preventDefault();
        var btn = this;
        var id = $(btn).closest(".suggest-product-test").data("id");
        for (var modalItem of Products) {
            modalItem = Products.find(x => x.id == id);
            var html = '<div class="modal fade info-modal" id="infoModal" tabindex="-1" data-id=" ' + modalItem.id + ' " aria-labelledby="exampleModalLabel" aria-hidden="true">';
            html += '<div class="modal-dialog">';
            html += '<div class="modal-content">';
            html += '<div class="modal-header">';
            html += '<h5 class="modal-title" id="exampleModalLabel"> ' + modalItem.faTitle + '</h5>';
            html += '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>';
            html += '<div class="modal-body info-modal-body">';
            html += '<div class="product-info-modal">';
            html += '<div class="product-info-img-modal">';
            html += '<img class="product-info-image-modal" src="' + modalItem.image + '" alt="#" title="#"></div>';
            html += '<div class="product-info-fatitle-modal">';
            html += '<span class="product-info-title-farsi-modal"></span></div>';
            html += '<div class="product-info-entitle-modal">';
            html += '<span class="product-info-title-english-modal">' + modalItem.enTitle + '</span></div>';
            html += '<div class="product-info-des-modal">';
            html += '<span class="product-info-description-modal">توضیحات محصول: </span></div>';
            html += '<div class="product-info-price-modal">';
            html += '<del class="product-info-old-price-modal">' + (modalItem.price - (modalItem.discountPercent * modalItem.price / 100)) + '</del>';
            html += '<span class="product-info-new-price-modal">' + modalItem.price + '</span>';
            html += '</div></div></div>';
            html += '<div class="modal-footer info-modal-btns">';
            html += '<button type="button" class="btn" data-bs-dismiss="modal">Close</button>';
            html += '<button type="button" class="btn">Save changes</button>';
            html += '</div></div></div></div>';

            $(".info-modal").append(html);
            $('#infoModal').modal('show');
        }
    });
    // $("#searchBtn").click(function () {
    //     let searchValue = $("#searchInput").val();
    //     if (searchValue && searchValue.length > 0) {
    //         let findedProduct = Products.filter(x => x.faTitle.includes(searchValue));
    //         if (findedProduct) {
    //         } else {
    //             alert("محصولی با این مشخصات پیدا نشد:(")
    //         }
    //     }
    // })
    $("#searchInput").on("input", function () {
        let searchValue = $("#searchInput").val();
        if (searchValue && searchValue.length > 0) {
            debugger;
            let findedProduct = Products.filter(x => x.faTitle.includes(searchValue));
            $(".search-results-box").removeClass("visually-hidden");
            if (findedProduct && findedProduct.length > 0) {
                $(".search-results-box").html("")
                for (const item of findedProduct) {
                    let html = '<div class="serch-result-test">';
                    html += '<a class="search-result-link" href="#" style="text-decoration:none">';
                    html += '<img class="search-result-img" src=" ' + item.image + ' "';
                    html += 'title="" alt="">';
                    html += '<div class="search-result-info">';
                    html += '<span class="search-result-title row">' + item.faTitle + '</span>';
                    html += '<span class="search-result-price row">' + (item.price - (item.price * item.discountPercent / 100)) + 'تومان</span>';
                    html += '</div>';
                    html += '</a>';
                    html += '</div>';

                    $(".search-results-box").append(html)
                }
            }
            else {
                $(".search-results-box").html('<div style="padding:10px;font-size:16px;text-align:center;"><strong> محصولی پیدا نشد :( </strong></div>')
            }
        } else {
            $(".search-results-box").addClass("visually-hidden");
        }
    })
    $("#searchBtn").click(function () {
        let searchValue = $("#searchInput").val();
        if (searchValue && searchValue.length > 0) {
            debugger;
            let findedProduct = Products.filter(x => x.faTitle.includes(searchValue));
            $(".search-results-box").addClass("visually-hidden");
            if (findedProduct && findedProduct.length > 0) {
                $(".second-body").html("")
                for (const item of findedProduct) {
                    var shtml = '<div class="suggest-product-test" data-id=' + item.id + '>';
                    shtml += '<div class="suggest-product-img">';
                    shtml += '<img class="suggest-product-image" src="' + item.image + '"';
                    shtml += 'title="' + item.faTitle + '"';
                    shtml += 'alt="' + item.enTitle + '">';
                    shtml += '</div>';
                    shtml += '<div class="suggest-product-description">';
                    shtml += '<div class="suggest-product-title">';
                    shtml += '<span>' + item.faTitle + '</span>';
                    shtml += '</div>';
                    shtml += '<div class="suggest-product-price">';
                    shtml += '<del>' + item.price + 'تومان</del>';
                    shtml += '<span>' + (item.price - (item.discountPercent * item.price / 100)) + ' تومان</span>';
                    shtml += '</div>';
                    shtml += '</div>';
                    shtml += '<div class="suggest-product-buttons">';
                    shtml += '<div class="suggest-product-btns">';
                    shtml += '<button class="suggest-product-add-to-basket-btn"><span class="material-symbols-outlined">shopping_bag</span></button>';
                    shtml += '<button class="suggest-product-info-btn"><span class="material-symbols-outlined">info</span></button>';
                    shtml += '</div>';
                    shtml += '</div>';
                    shtml += '</div>';
                    $(".second-body").append(shtml);
                }
            }
            else {
                $(".second-body").html("هیچ محصولی پیدا نشد")
            }
        } else {

            $(".second-body").html("")
            for (const item of Products) {
                var shtml = '<div class="suggest-product-test" data-id=' + item.id + '>';
                shtml += '<div class="suggest-product-img">';
                shtml += '<img class="suggest-product-image" src="' + item.image + '"';
                shtml += 'title="' + item.faTitle + '"';
                shtml += 'alt="' + item.enTitle + '">';
                shtml += '</div>';
                shtml += '<div class="suggest-product-description">';
                shtml += '<div class="suggest-product-title">';
                shtml += '<span>' + item.faTitle + '</span>';
                shtml += '</div>';
                shtml += '<div class="suggest-product-price">';
                shtml += '<del>' + item.price + 'تومان</del>';
                shtml += '<span>' + (item.price - (item.discountPercent * item.price / 100)) + ' تومان</span>';
                shtml += '</div>';
                shtml += '</div>';
                shtml += '<div class="suggest-product-buttons">';
                shtml += '<div class="suggest-product-btns">';
                shtml += '<button class="suggest-product-add-to-basket-btn"><span class="material-symbols-outlined">shopping_bag</span></button>';
                shtml += '<button class="suggest-product-info-btn"><span class="material-symbols-outlined">info</span></button>';
                shtml += '</div>';
                shtml += '</div>';
                shtml += '</div>';
                $(".second-body").append(shtml);
            }
        }
    })

});
