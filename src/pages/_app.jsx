import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";

import theme from "@/theme/index";
import Layout from "@/layouts/global";
import SEO from "next-seo.config";

import "@fontsource/poppins/latin-400.css";
import "@fontsource/poppins/latin-500.css";
import "@fontsource/poppins/latin-600.css";
import "@fontsource/poppins/latin-700.css";
import "@fontsource/yellowtail";
import "@/styles/index.css";
import ParticleBackground from "@/components/ParticleBackground";

const MyApp = ({ Component, pageProps }) => (
  <>
    <DefaultSeo {...SEO} />

    <ChakraProvider theme={theme}>
      <Layout>
        <ParticleBackground />
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  </>
);

export default MyApp;
