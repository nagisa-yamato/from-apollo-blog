import styles from "@/styles/Home.module.css";
import client from "@/gql/apollo-client";
import { GetStaticPropsCountriesQueryDocument } from "@/gql/queries/Countries";
import { GetStaticPropsCountriesQuery } from "@/gql/generated/graphql";

export async function getStaticProps() {
  const { data } = await client.query({
    query: GetStaticPropsCountriesQueryDocument,
  });
  console.log(data);

  return {
    props: {
      countries: data.countries,
    },
  };
}

export default function GetStaticProps({
  countries,
}: {
  countries: GetStaticPropsCountriesQuery["countries"];
}) {
  return (
    <div className={styles.main}>
      {countries.map((country) => (
        <article className={styles.article} key={country.code}>
          <h2>{country.name}</h2>
          <dl className={styles.list}>
            <dt>capital</dt>
            <dd>{country.capital}</dd>
          </dl>
          <dl className={styles.list}>
            <dt>currency</dt>
            <dd>{country.currency}</dd>
          </dl>
        </article>
      ))}
    </div>
  );
}
