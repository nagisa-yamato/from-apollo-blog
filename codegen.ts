// NOTE:
// https://the-guild.dev/graphql/codegen/docs/guides/react-vue#installation
import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://countries.trevorblades.com",
  documents: ["src/**/*.(ts|tsx)"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/gql/generated/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
