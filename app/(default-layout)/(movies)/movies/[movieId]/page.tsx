import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

interface Movie {
  Title: string
  Plot: string
  Poster: string
}

fetch('')

export const generateMetadata = async ({
  params,
  searchParams
}: {
  params: Promise<{ movieId: string }>
  searchParams: Promise<{ plot: string }>
}): Promise<Metadata> => {
  const { movieId } = await params
  const { plot = 'short' } = await searchParams
  const res = await fetch(
    `https://omdbapi.com?apikey=7035c60c&i=${movieId}&plot=${plot}`,
    {
      cache: 'force-cache'
    }
  )
  const movie: Movie = await res.json()

  const title = movie.Title
  const description = movie.Plot
  const image = movie.Poster // 300
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image]
    },
    twitter: {
      title,
      description,
      images: [image]
    }
  }
}

export default async function MovieDetails({
  params,
  searchParams
}: {
  params: Promise<{ movieId: string }>
  searchParams: Promise<{ plot: string }>
}) {
  const { movieId } = await params
  const { plot = 'short' } = await searchParams
  const res = await fetch(
    `https://omdbapi.com?apikey=7035c60c&i=${movieId}&plot=${plot}`,
    {
      cache: 'force-cache'
    }
  )
  const movie: Movie = await res.json()

  // throw new Error('에러가 발생했어유~😘')

  return (
    <>
      <h1 className="text-[50px] font-bold">{movie.Title}</h1>
      <Link href={`/poster/${movieId}`}>
        <Image
          src={movie.Poster}
          alt={movie.Title}
          width={700}
          height={700 * 1.5}
        />
      </Link>
      <p>{movie.Plot}</p>
    </>
  )
}
