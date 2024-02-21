import React, { useRef } from "react";
import useScroll from "../../hooks/useScroll";
import { Layout } from "../../layout";
import { Benefits, Services, Calculator } from "../../features";
import { Address, Button, Logo } from "../../components";

export const Home = () => {
    const myRef = useRef(null);
    const { executeScroll } = useScroll(myRef);
    return (
      <Layout>
        <Layout.Header>
          <Logo />
          <Button className="outlinedButton" onClick={executeScroll}>
            Get a quote
          </Button>
        </Layout.Header>
        <Layout.Main>
          <Services />
          <Benefits />
          <Calculator innerRef={myRef} />
        </Layout.Main>
        <Layout.Footer>
          <Logo />
          <Address />
        </Layout.Footer>
      </Layout>
    );
};