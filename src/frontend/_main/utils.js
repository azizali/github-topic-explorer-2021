import { API_URL } from './constants'

function getFetch (url) {
  return fetch(url)
    .then((data)=>data.json())
    .then((json)=>json)
    .catch((e)=>e)
}

export function fetchTopic (topic) {
  const url = `${API_URL}/topic/${topic}`
  return getFetch(url)
}
