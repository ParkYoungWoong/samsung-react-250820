export default function Layout({
  children,
  p
}: {
  children: React.ReactNode
  p: React.ReactNode
}) {
  return (
    <>
      {children}
      {p}
    </>
  )
}
