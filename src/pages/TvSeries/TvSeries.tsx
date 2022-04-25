//Components
import { Grid, HeroImage, Spinner } from '../../components';
//custom hook
import useFetchTvSeries from '../../hooks/useFetchTvSeries';

const TvSeries: React.FC = () => {
	const { state, loading, error } = useFetchTvSeries();
	console.log(state);

	if (error) return <div>Something went wrong...</div>;

	return (
		<main>
			{loading && <Spinner />}
			{state.results[0] && (
				<HeroImage
					backdrop_path={state.results[0].backdrop_path}
					title={state.results[0].name}
					overview={state.results[0].overview}
				/>
			)}
			<Grid page='TV Series' />
		</main>
	);
};

export default TvSeries;