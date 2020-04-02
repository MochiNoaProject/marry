type Props = {
  title?: string
  children: React.ReactNode
}

const Page = ({ children }: Props) => (
  <>
    <main>{children}</main>

    <style jsx>{`
      main {
        margin: 0 auto;
        padding-top: calc(env(safe-area-inset-top) + 73px);
        padding-bottom: calc(env(safe-area-inset-bottom) + 73px);
        max-width: 40em;
        height: 100%;
        min-height: 100vh;
        background: var(--base);
        transition: var(--transition-colors);
      }
    `}</style>
  </>
)

export default Page
