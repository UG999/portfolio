import { Container, Heading, SimpleGrid, } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

import thumbKallero from '../public/thumbKallero.png'
import thumbAmno from '../public/thumbAmno.png'
import Layout from "@/components/layouts/article";
import Link from "next/link";
const Works = () => (
  <Layout>
  <Container>
    <Heading as="h3" fontSize={20} mb={4}>
      Works
    </Heading>

    <SimpleGrid columns={[1, 1, 2]} gap={6}>
    <Link href="https://kallero.vercel.app" target="_blank">
      <Section>
        <WorkGridItem id="kallero" title="Kallero" thumbnail={thumbKallero}>
        
          Clothing Brand Website.
        
        </WorkGridItem>
      </Section>
      </Link>
      <Section>
        <WorkGridItem
          id="amnoconstruction"
          title="amnoconstruction"
          thumbnail={thumbAmno}
        >
          Construction Company Website
        </WorkGridItem>
      </Section>
    </SimpleGrid>
  </Container>
  </Layout>
);
export default Works;
