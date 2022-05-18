import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue,
  Button,
  List,
  ListItem
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import NextLink from "next/link"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from "../components/bio";
import Layout from "@/components/layouts/article";
import { IoLogoFacebook, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5';

const Page = () => {
  return (
    <Layout>
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a front-end developer based in Mongolia!
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Uguumur Amartuvshin
          </Heading>
          <p>Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            maxHeight="100px"
            display="inline-block"
            borderRadius="full"
            src="/profile.jpeg"
            alt="Profile image"
          ></Image>
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">Work</Heading>
        <Paragraph>Uguumur is a front-end developer for a company named Solid Frameworks LLC based in Ulaanbaatar, Mongolia.</Paragraph>
      </Section>
      <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>Born-Year</BioYear>
          Born at a very young age. :D
        </BioSection>
        {/* <BioSection>
          <BioYear>2001</BioYear>
          Born in Ulaanbaatar (Улаанбаатар), Mongolia.
        </BioSection> */}
        {/* <BioSection>
          <BioYear>2010</BioYear>
        </BioSection> */}
        <BioSection>
          <BioYear>2019</BioYear>
          Graduated New Mongol High School.
        </BioSection>
        <BioSection>
          <BioYear>2021 to present</BioYear>
          Started his career as a Developer and working as a Solid Frameworks LLC front-end developer.
        </BioSection>
        <BioSection>
        <BioYear>My Life in a nutshell</BioYear>
          If I could sum up my life in one line I would die of embarrassment.
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art,{' '}
          <Link href="https://www.youtube.com/channel/UC0BletW9phE4xHFM44q4qKA" target="_blank">
            Music
            </Link>
          , Playing Morin Khuur{' '}
          
          , TFT, Coding, Sleeping
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          My Socials
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/UG999" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @UG999
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://facebook.com/Uguumur.A" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoFacebook />}
              >
                Uguumur Amartuvshin
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/uguumur0828" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @uguumur999
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
    </Layout>
  );
};
export default Page;
