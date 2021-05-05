import { fetchMovies } from '../actions';
import SearchView from '../components/searchView';
import { initializeStore } from '../store';
import Link from 'next/link'

export const getServerSideProps = async () => {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;
  await dispatch(fetchMovies());
  return { props: { initialReduxState: reduxStore.getState() } }
}

export default function Index() {
  return (
    <>
      <SearchView />
      <Link href="/show-redux-state">
        <a>Show Redux State</a>
      </Link>
    </>
  )
};
