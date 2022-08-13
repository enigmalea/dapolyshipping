import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from './index.module.css';

export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout description="Past DA Poly Exchanges">
			<main>
				<iframe
                    className={styles.form}
					src="https://airtable.com/embed/shrBBekw5t3Txrx2h?backgroundColor=cyan"
					width={500}
					height={1100}
					style= {{ background: 'transparent', border: '0', }}
                    title='An Airtable form to request an extension on your deadline for the exchange.'
				></iframe>
			</main>
		</Layout>
	);
}
