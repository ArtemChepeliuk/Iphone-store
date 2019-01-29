const phone = (name, model, image, price, FirstSliderImage, secondSliderImage, thirdSliderImage) => ({
  name,
  model,
  image,
  price,
  FirstSliderImage,
  secondSliderImage,
  thirdSliderImage
});
const phones = [
  phone("Iphone", "SE", "img/se1.jpg", "6 500", "img/se1.jpg", "img/se2.jpg", "img/se3.jpg"),
  phone("Iphone", "7 Plus", "img/7-1.jpg", "12 600", "img/7-1.jpg", "img/7-2.jpg", "img/7-3.jpg"),
  phone("Iphone", "8 Plus", "img/8-1.jpg", "15 800", "img/8-1.jpg", "img/8-2.jpg", "img/8-3.jpg"),
  phone("Iphone", "X", "img/x-1.jpg", "19 500", "img/x-1.jpg", "img/x-2.jpg", "img/x-3.jpg"),
  phone("Iphone", "XR", "img/xr-1.jpg", "20 200", "img/xr-1.jpg", "img/xr-2.jpg", "img/xr-3.jpg"),
  phone("Iphone", "XS Max", "img/xs-1.jpg", "25 350", "img/xs-1.jpg", "img/xs-2.jpg", "img/xs-3.jpg"),
]
const size = (phoneSize) => ({
  phoneSize
});
const sizes = [
  size(16),
  size(32),
  size(64),
  size(128),
  size(256),
  size(512),
]
const color = (phoneColor, colorImage, colorsClass) => ({
  phoneColor,
  colorImage,
  colorsClass
})
const colors = [
  color("Grey", "img/se3.jpg", "btn-secondary"),
  color("Black", "img/se4.jpg", "btn-dark"),
  color("Red", "img/se5.jpg", "btn-danger"),
  color("Gold", "img/se6.jpg", "btn-warning"),
  color("White", "img/se3.jpg", "btn-light color-white"),
]

new Vue({
  el: "#app",
  data: {
    phones: phones,
    phone: phones[0],
    selectedphoneIndex: 0,
    sizes: sizes,
    size: sizes[0],
    selectSizesIndex: 0,
    colors: colors,
    color: colors[0],
    selectColorsIndex: 0,
    search: '',
    creditVisibility: false,
  },
  methods: {
    selectphone(index) {
      this.phone = phones[index];
      this.selectedphoneIndex = index;
    },
    selectSizes(index) {
      this.size = sizes[index];
      this.selectSizesIndex = index;
    },
    selectColor(index) {
      this.color = colors[index];
      this.selectColorsIndex = index;
    },
  },
  computed: {
    searchPhones() {
      return this.phones.filter(phone => {
        return phone.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1 || phone.model.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      })
    }
  },
});