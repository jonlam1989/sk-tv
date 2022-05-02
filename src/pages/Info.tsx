//Routing
import { useParams } from 'react-router-dom';
//Components
import { Breadcrumb, Details, Spinner } from '../components';
//custom hook
import useFetchSpecificSelection from '../hooks/useFetchSpecificSelection';

const Info: React.FC = () => {
	const { type, id } = useParams();
	const { state, loading, error } = useFetchSpecificSelection(`${type}`, `${id}`);
	console.log(state);

	if (error) return <div>Something went wrong...</div>;

	return (
		<main>
			{loading && <Spinner />}
			<Breadcrumb name={type === 'movie' ? state.title : state.name} />
			<Details details={state} type={`${type}`} />
		</main>
	);
};

export default Info;
