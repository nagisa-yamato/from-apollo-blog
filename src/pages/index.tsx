import client from "@/gql/apollo-client";
import { ContinentsQuery } from "@/gql/generated/graphql";
import { ContinentsQueryDocument } from "@/gql/queries/Continents";
import styles from "@/styles/Home.module.css";

export async function getStaticProps() {
  const { data } = await client.query({ query: ContinentsQueryDocument });

  return {
    props: {
      continents: data.continents,
    },
  };
}

export default function Home({
  continents,
}: {
  continents: ContinentsQuery["continents"];
}) {
  return (
    <div className={styles.main}>
      <h1>index</h1>
      {continents.map((continent) => (
        <article key={continent.code}>
          <h2>{continent.name}</h2>
          <dl>
            <dt>code</dt>
            <dd>{continent.code}</dd>
          </dl>
        </article>
      ))}
    </div>
  );
}
