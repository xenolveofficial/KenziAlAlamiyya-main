export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="rounded-md bg-primary px-4 py-2 text-white">{children}</button>
  )
}
