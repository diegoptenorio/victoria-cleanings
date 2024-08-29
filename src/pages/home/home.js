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
          <Logo size="large" />
          <div className="mainMenu">
            <address style={{ display: 'inline-block' }}>
              (407) 729-3649
            </address>
            <Button
              onClick={() => (window.location.href = "tel:4077293649")}
              type="button"
              className="outlinedButton clickToCall"
            >
              Click to call
            </Button>
            <Button className="outlinedButton" onClick={executeScroll}>
              Get a quote
            </Button>
          </div>
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