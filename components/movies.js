import { useSelector, shallowEqual } from 'react-redux'

const Movies = () => {

  const movies = useSelector((state) => state.movies.movies);

  return (
    <div>
      <ol>
        {
          movies.map((item) => <li key={item.id}> {item.title}</li>)
        }
      </ol>
    </div>
  );
}

export default Movies
