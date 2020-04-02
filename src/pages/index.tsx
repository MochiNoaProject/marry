/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import { useEffect } from 'react'
import Page from '../components/page'

export default () => {
  useEffect(() => {
    let a
    while (a !== 'いい子') {
      alert((a = confirm('望月のあと結婚したいですか？') ? 'いい子' : 'は？'))
    }
  }, [])

  return (
    <Page>
      <style jsx>{`
        section {
          padding: var(--gap);
          text-align: center;
        }
        a {
          border-bottom: 4px dotted currentColor;
        }
        img {
          display: block;
          margin: auto;
        }
      `}</style>
      <section>
        <a href='/images/signed-marriage-registration.png' download>
          婚姻届をダウンロード！
        </a>
        <img src='/images/noa.png' alt='noa' />
      </section>
    </Page>
  )
}
