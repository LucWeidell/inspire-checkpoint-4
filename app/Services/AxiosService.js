export const sandApiWeather = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/weather',
  timeout: 5000
})
export const sandApiQuotes = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/quotes',
  timeout: 5000

  /**
   * {
"_id": "2a7xKeQ1JWGy",
"tags": [
"famous-quotes"
],
"content": "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.",
"author": "Buddha",
"authorSlug": "buddha",
"length": 110,
"dateAdded": "2020-02-22",
"dateModified": "2020-02-22"
}
   */
})
export const sandApiImages = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/images',
  timeout: 5000
})
/**
 * {
"id": "1010",
"author": "Samantha Sophia",
"width": 5184,
"height": 3456,
"url": "https://unsplash.com/photos/NaWKMlp3tVs",
"imgUrl": "https://picsum.photos/id/1010/5184/3456"
}
 */


export const sandApiTodo = axios.create({
  baseURL: '',
  timeout: 5000
})