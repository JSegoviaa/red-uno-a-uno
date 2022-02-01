import { GetStaticProps } from "next";
import { production } from "../../credentials/credentials";
import NotFound from "../404";

export const getStaticProps: GetStaticProps = async () => {
  const resp = await fetch(`${production}/inmuebles/`);
  const data = await resp.json();

  return { props: { data }, revalidate: 15 };
};

const Index = () => {
  return <NotFound />;
};

export default Index;
