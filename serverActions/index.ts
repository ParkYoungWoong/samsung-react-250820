'use server'
import axios from 'axios'
import { redirect } from 'next/navigation'

export async function hello() {
  console.log('Hello Server Actions!')
}
export async function fetchMovies() {
  const { data } = await axios(
    `https://omdbapi.com?apikey=${process.env.OMDB_API_KEY}&s=batman`
  )
  return data.Search
}
export async function signIn(formData: FormData) {
  const id = formData.get('id')
  const pw = formData.get('pw')
  console.log('ID/PW:', id, pw)
  redirect('/')
}
