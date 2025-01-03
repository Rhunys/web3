/* eslint-disable react/prop-types */
import { useQuery } from '@apollo/client'
import { ALL_AUTHORS } from '../queries'
import BirthForm from './BirthForm'
const Authors = ({show, setError}) => {
  const authors = useQuery(ALL_AUTHORS,
    { pollInterval: 2000 }
  ).data?.allAuthors || []

  if (!show) {
    return null
  }

  return (
    <div>
      <h2>Authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <BirthForm setError={setError}/>
    </div>
  )
}

export default Authors
