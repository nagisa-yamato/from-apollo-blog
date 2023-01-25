import styles from "@/styles/Home.module.css";
import client from "@/gql/apollo-client";
import { GetServerSidePropsCountriesQueryDocument } from "@/gql/queries/Countries";
import { GetServerSidePropsCountriesQuery } from "@/gql/generated/graphql";

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GetServerSidePropsCountriesQueryDocument,
  });

  return {
    props: {
      countries: data.countries,
    },
  };
}

export default function GetServerSideProps({
  countries,
}: {
  countries: GetServerSidePropsCountriesQuery["countries"];
}) {
  return (
    <div className={styles.main}>
      {countries.map((country) => (
        <article className={styles.article} key={country.code}>
          <h2>{country.name}</h2>
          <dl className={styles.list}>
            <dt>code</dt>
            <dd>{country.code}</dd>
          </dl>
          <dl className={styles.list}>
            <dt>emoji</dt>
            <dd>{country.emoji}</dd>
          </dl>
        </article>
      ))}
    </div>
  );
}
