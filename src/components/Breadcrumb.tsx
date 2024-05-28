import React from 'react';
import { HomeFilled, ArrowRightFilled } from "@fluentui/react-icons";
import {makeStyles} from "@fluentui/react-components";

interface BreadcrumbProps {
	path: string;
}

const useStyles = makeStyles({
	root: {
		display: "flex"
	},
	listElement: {
		display: "flex",
		alignItems: "center"
	}
});

const Breadcrumb: React.FC<BreadcrumbProps> = ({ path }) => {
	const pathSegments = path.split('/').filter(segment => segment); // Remove empty segments
	const styles = useStyles();

	return (
		<pre className={styles.root}>
			<>
				{pathSegments.map((segment, index) => {
					return(
						<span key={index}>
							<span className={styles.listElement}>
								{index === 0 && <><HomeFilled />&nbsp;</>}
								{segment}
								{index < pathSegments.length - 1 ?
									<>&nbsp;<ArrowRightFilled />&nbsp;</>
									: null}
							</span>
						</span>
				)}
				)}
			</>
		</pre>
	);
};

export default Breadcrumb;
