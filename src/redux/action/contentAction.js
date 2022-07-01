import Axios from 'axios'

export const getContent = () => (dispatch) => {
  Axios.get(
    'https://newsapi.org/v2/top-headlines?country=id&apiKey=682ddb013cd84bbba72e88e7bedaabc8',
  )
    .then((res) => {
      dispatch({ type: 'SET_CONTENT', value: res.data.articles })
      console.log(res.data.articles)
    })
    .catch((err) => {
      console.log(err)
    })
}
