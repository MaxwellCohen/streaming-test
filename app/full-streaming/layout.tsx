import RootLayout_ from "../_layout";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <RootLayout_>{children}</RootLayout_>
  )
}
