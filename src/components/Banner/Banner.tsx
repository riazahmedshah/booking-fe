import {Hero} from '../Hero/Hero';
import {SearchBar} from '../SearchBar/SearchBar';

export function Banner() {
	return (
		<section className="page-banner">
			<Hero />
			<SearchBar />
		</section>
	);
}