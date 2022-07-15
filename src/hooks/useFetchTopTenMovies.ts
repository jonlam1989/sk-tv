//Queries
import { useQueries } from 'react-query';
//API
import { fetchTopTenMovies } from '../api/api';
//custom hook
import { useGlobalContext } from '../context/context';

const useFetchTopTenMovies = () => {
	const { imdbMovieIds } = useGlobalContext();

	return useQueries(
		Object.values(imdbMovieIds).map((id) => {
			return {
				queryKey: [ 'top-ten-movies', id ],
				queryFn: () => fetchTopTenMovies(id)
			};
		})
	);
};

export default useFetchTopTenMovies;
