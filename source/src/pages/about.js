import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
function About() {
	return (
		<Layout title="Hello">
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "50vh",
					fontSize: "20px",
				}}
			>
				<p>
					<b>Coming soon...</b> <br></br>For now check out{" "}
					<Link to={"/docs/"}>Our Docs!</Link>
				</p>
			</div>
		</Layout>
	);
}

export default About;
