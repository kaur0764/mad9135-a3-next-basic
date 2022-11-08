import "../styles/globals.css";
import { TeamProvider } from "../context/teamContext";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <TeamProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TeamProvider>
  );
}

export default MyApp;
