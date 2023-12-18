const CATEGORIES = [
  "Кеды",
  "Пиджак",
  "Шляпа",
  "Штаны",
  "Носки",
  "Рубашка",
  "Перчатки",
  "Трусы",
  "Сапоги",
  "Тапки",
];

const COLORS = ["Красный", "Синий", "Желтый", "Белый", "Серый"];

const IMAGES = [
  "https://img.fix-price.com/800x800/images/origin/origin/4c18b73d117e8470f0ad2e256a798472.jpg",
  "https://bonlook.ua/image/catalog/blog/107149dd-49d7-11eb-8dc1-000c29ac654d-1142x1481.jpg",
  "https://elema.by/upload/resize_cache/iblock/653/k0gr1l1jxdz2h0pzi2zgb0ywae1mpqjr/500_750_1/Bryuki-zhenskie-3K_123_1-chyernyy-_1_.jpg",
  "https://arsenal-bl.by/files/items/267/icon.jpg",
  "https://shop-cdn1-2.vigbo.tech/shops/182478/products/22050502/images/2-837e4fc0a69d7affc092b8f8c263d2e2.jpg",
  "https://bonlook.ua/image/catalog/blog/4b786ae4-eeb3-11eb-8dc7-000c29ac654d-1142x1481.jpg",
  "https://img.freepik.com/premium-photo/pair-of-used-cheap-black-soft-rubber-slippers-with-signs-od-friction-wear-isolated-on-white-background_636705-5271.jpg",
  "https://elema.by/upload/resize_cache/iblock/d93/cdccr3hy7urlrwcy3c9gc0b5z2uolhjw/500_750_1/Kurtka-zhenskaya-plashchevaya-uteplyennaya-4_236-chyernyy-_1_.jpg",
  "https://respekt.by/image/cache/catalog/pidzhaki/906%281%29-933x1400.jpg",
  "https://belwest.by/images/h66/h12/8966805389342.jpg",
];

let ID = 1;
const getRandomRating = () => (Math.random() * 5).toFixed(1);
const getRandomPrice = () => Math.floor(Math.random() * (9999 - 10 + 1));
const getRandomName = () => Math.random().toString(36).substring(2);

export const generateProducts = (n = 20) => {
  const products = [];
  for (let i = 0; i < n; i++) {
    products.push(generateProduct());
  }
  return products;
};
const generateProduct = () => ({
  img: IMAGES[Math.floor(Math.random() * IMAGES.length)],
  id: ID++,
  name: getRandomName(),
  description: getRandomName(),
  category: CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)],
  color: COLORS[Math.floor(Math.random() * COLORS.length)],
  price: getRandomPrice(),
  rating: getRandomRating(),
  image: "",
});
