import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface BreadcrumbProps {
	path: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ path }) => {
	const pathSegments = path.split('/').filter(segment => segment); // Remove empty segments

	return (
		<pre className="mb-6">
			<ul className="is-flex">
				{pathSegments.map((segment, index) => {
					return(

					<li key={index} className={index === pathSegments.length - 1 ? 'is-active' : ''}>
						<>
							{index === 0 && <><FontAwesomeIcon icon={faHouse} />&nbsp;</>}
							{segment}
							{index < pathSegments.length - 1 ?
								<>&nbsp;<FontAwesomeIcon icon={faArrowRight} />&nbsp;</>
							: null}
						</>
					</li>
				)}
				)}
			</ul>
		</pre>
	);
};

export default Breadcrumb;
