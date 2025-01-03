/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import { EDIT_BIRTHYEAR } from '../queries';
import { ALL_AUTHORS } from '../queries';

const BirthForm = ({ setError }) => {
  const [name, setName] = useState('');
  const [born, setBorn] = useState('');

  const [changeBirthYear, result] = useMutation(EDIT_BIRTHYEAR);
  const { data, loading, error } = useQuery(ALL_AUTHORS);

  useEffect(() => {
    if (data && data.allAuthors.length > 0) {
      // Set the first author as the default selection
      setName(data.allAuthors[0].name);
    }
  }, [data]);

  const submit = (event) => {
    event.preventDefault();

    changeBirthYear({ variables: { name, born: Number(born) } });

    setName('');
    setBorn('');
  };

  useEffect(() => {
    if (result.data && result.data.editBirthYear === null) {
      setError('Author not found');
    }
  }, [result.data, setError]);

  if (loading) return <div>Loading authors...</div>;
  if (error) return <div>Error loading authors</div>;

  const authors = data.allAuthors;

  return (
    <div>
      <h2>Change birth year</h2>

      <form onSubmit={submit}>
        <div>
          <label htmlFor="author-select">Author</label>
          <select
            id="author-select"
            value={name}
            onChange={({ target }) => setName(target.value)}
          >
            {authors.map((author) => (
              <option key={author.name} value={author.name}>
                {author.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="birth-year">Birth year</label>
          <input
            id="birth-year"
            type="number"
            value={born}
            onChange={({ target }) => setBorn(target.value)}
          />
        </div>
        <button type="submit">Change birth year</button>
      </form>
    </div>
  );
};

export default BirthForm;
