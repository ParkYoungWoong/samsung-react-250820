import { signIn } from '@/serverActions'

export default function SignIn() {
  return (
    <>
      <h1>Sign In Page!</h1>
      <form action={signIn}>
        <input
          name="id"
          type="text"
        />
        <input
          name="pw"
          type="password"
        />
        <button type="submit">로그인</button>
      </form>
    </>
  )
}
