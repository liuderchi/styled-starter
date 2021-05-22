import About from '../src/pages/About'
import App from '../src/containers/App'
import { fetchAbout } from '../src/lib/fetchSpreadsheet'

export const getStaticProps = async () => {
  const aboutData = await fetchAbout()
  return {
    props: {
      about: {
        ...aboutData,
      },
    },
  }
}

export default (props) => {
  return (
    <App name="About" prefix="..">
      <>
        <About />
        <pre>{JSON.stringify({ props }, null, 2)}</pre>
      </>
    </App>
  )
}
