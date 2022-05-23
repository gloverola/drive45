import React from "react";
import Head from "next/head";
import styled from "styled-components";

const Layout = ({ children, pageTitle, description, path }) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='canonical' href='/' />
        <meta charSet='utf-8' />

        {/* <!-- Primary Meta Tags --> */}
        <title>{pageTitle}</title>
        <meta name='title' content={pageTitle} />
        <meta name='description' content={description} data-rh='true' />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://' />
        <meta property='og:title' content={pageTitle} />
        <meta property='og:description' content={description} />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/dcd1lhe7x/image/upload/v1653313465/ogimage_mrqx2m.jpg'
        />

        {/* <!-- Twitter --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='' />
        <meta property='twitter:title' content={pageTitle} />
        <meta property='twitter:description' content={description} />
        <meta
          property='twitter:image'
          content='https://res.cloudinary.com/dcd1lhe7x/image/upload/v1653313465/ogimage_mrqx2m.jpg'
        />
      </Head>
      <main>
        <View>{children}</View>
      </main>
    </>
  );
};

export default Layout;

const View = styled.main`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
