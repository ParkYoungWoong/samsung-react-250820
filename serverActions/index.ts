'use server'
import axios from 'axios'

export async function hello() {
  console.log('Hello Server Actions!')
}
export async function fetchMovies() {
  const { data } = await axios(
    `https://omdbapi.com?apikey=${process.env.OMDB_API_KEY}&s=batman`
  )
  return data.Search
}
