'use client'
import { useEffect } from 'react'
import { fetchMovies } from '@/serverActions'

export default function Home() {
  useEffect(() => {
    init()
  }, [])

  async function init() {
    const movies = await fetchMovies()
    console.log(movies)
  }
  return (
    <>
      <h1>Home Page!</h1>
    </>
  )
}
