interface Data {
  name: string;
  price: number;
  image: string;
}

const items: Data[] = [
  {
    name: "Латте",
    price: 449,
    image: "https://coffeefan.info/wp-content/uploads/2018/08/latte-art.gif"
  },
  {
    name: "Капучино",
    price: 329,
    image: "https://dd.restaurant/wp-content/uploads/2024/02/kapuchino.jpeg"
  },
  {
    name: "Флет Уайт",
    price: 399,
    image: "https://media.istockphoto.com/id/183138035/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%BB%D0%BE%D1%81%D0%BA%D0%B8%D0%BC-%D0%B1%D0%B5%D0%BB%D1%8B%D0%B9-%D0%BA%D0%BE%D1%84%D0%B5.jpg?s=612x612&w=0&k=20&c=CNJG0jzV3212Rk_zTz_zYbFl0lbqzGISHtcCIde-UmA="
  }
]

export default items