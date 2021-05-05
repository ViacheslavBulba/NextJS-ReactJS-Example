import { useSelector } from 'react-redux'
import Link from 'next/link'

const codeStyle = {
  background: '#ebebeb',
  padding: 10,
  border: '1px solid grey',
  marginBottom: 10,
}

const ShowReduxState = () => {
  const state = useSelector((state) => state)

  return (
    <>
      <pre style={codeStyle}>
        {JSON.stringify(state, null, 4)}
      </pre>
      <Link href="/">
        <a>Go Back Home</a>
      </Link>
    </>
  )
}

export default ShowReduxState
