import { fetchMovies } from '../actions';
import SearchView from '../components/searchView';
import { initializeStore } from '../store';

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
    </>
  )
};
