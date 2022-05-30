import {
  Box,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Icon,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import NextImage from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FadeIn from "react-fade-in/lib/FadeIn";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import { seo, data } from "config";

const Home = () => {
  const color = useColorModeValue("telegram.500", "telegram.400");

  const isOdd = (num) => num % 2;

  const title = "Home";
  const description = seo.description;

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={seo.canonical}
        openGraph={{
          title,
          description,
          images: [
            {
              url: `${seo.canonical}portfolioPic.png`,
              width: "350px",
              height: "350px",
            },
          ],
        }}
      />

      {/* Intro Section */}
      <FadeIn delay="350" transitionDuration="1000">
        <Box
          as="section"
          d="flex"
          alignItems="center"
          justifyContent="center"
          flexDir="column"
          textAlign="center"
          // py="4"
          h="85vh"
          // border="2px solid red"
        >
          <NextImage
            src="/portfolioPic.png"
            width="280"
            height="280"
            placeholder="blur"
            blurDataURL="L5I~of#i004mgjw]-4XA00?wL#xu"
            priority
          />
          <Box>
            <Heading as="h1" fontSize="2xl" fontWeight="500" py="2">
              Hi, I'm Eric Young{" "}
              <span role="img" aria-label="hand" id="hand">
                👋🏻
              </span>
            </Heading>
            <Heading fontSize={["3xl", "4xl"]} fontWeight="700">
              <Text as="span" color={color}>
                Building
              </Text>
              {""}, Designing, and Improving User Experiences
            </Heading>
            <Text py="4">
              A{" "}
              <Text as="span" fontWeight="600">
                web designer
              </Text>{" "}
              and{" "}
              <Text as="span" fontWeight="600">
                software engineer
              </Text>{" "}
              based in the San Francisco Bay Area
            </Text>
            <Button
              as="a"
              colorScheme="telegram"
              variant="ghost"
              size="lg"
              fontSize="20px"
              href="mailto:eryoung610@gmail.com"
            >
              <a>Get in touch</a>
            </Button>
          </Box>
        </Box>
      </FadeIn>

      {/* About Me Section Horizontal Divider */}
      {/* <Box
        as="section"
        flexDir="column"
        d={{ lg: "flex" }}
        justifyContent={{ base: "center", lg: "center" }}
        alignItems="center"
        textAlign="center"
      >
        <Box
          // d={{ lg: "flex" }}
          justifyContent={{ base: "center", lg: "center" }}
          alignItems="center"
        >
          <Heading
            color={color}
            // borderBottom="3px solid #229ED9"
            // borderRadius="4px"
          >
            About Me
          </Heading>

          <Divider borderColor={color}></Divider>

          <Text py={5}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            architecto reprehenderit eaque? Dolorem mollitia eius quae esse
            distinctio delectus excepturi, aliquid dolorum ipsam, nam quis aut
            cupiditate laborum nesciunt laudantium?
          </Text>
        </Box>
      </Box> */}

      {/* About Me Section Vertical Divider */}
      <Box
        as="section"
        d="flex"
        alignItems="center"
        justifyContent="center"
        my="10em"
        h="70vh"
        // border="2px solid red"
      >
        <Box
          d={{ lg: "flex" }}
          // justifyContent={{ base: "center", lg: "left" }}
          flexDir="column"
          w={{ lg: "90%" }}
          borderLeft="5px solid #229ED9"
          borderRadius="4px 4px 4px 4px"
          data-AOS="fade-right"
          data-AOS-delay="300"
          // border="2px solid red"
        >
          <Heading color={color} pl={4} fontSize={["3xl", "4xl"]}>
            About Me
          </Heading>
          <Text as="p" py={5} pl={4} fontSize={["lg", "xl"]}>
            I am a 23 year old software engineer from the San Francisco Bay Area with a BS in Computer Science from The University of California, Davis. I graduated from
            General Assembly's Software Engineering Immersive bootcamp in August
            of 2020 where I learned web development skills and was provided
            experience with the latest front and back-end programming languages.
          </Text>
          <Text as="p" py={5} pl={4} fontSize={["lg", "xl"]}>
            My passion for software engineering stemmed from the first computer
            science course I took back in high school. Ever since then, I've had
            the pleasure of learning different modern frameworks and
            technologies found in today's world.
          </Text>
        </Box>
      </Box>

      {/* Projects Section */}
      <Box
        as="section"
        d="flex"
        alignItems="center"
        flexDir="column"
        textAlign={{ base: "center", lg: "left" }}
        mt="6em"
        // border="2px solid red"
      >
        <Heading
          mb="4rem"
          data-aos="fade-up"
          data-aos-delay="500"
          color={color}
          fontSize={["3xl", "4xl"]}
          // border="2px solid red"
        >
          Projects
        </Heading>

        {data.map((item, index) => (
          <Box
            d={{ lg: "flex" }}
            justifyContent={{ lg: "center" }}
            alignItems={{ lg: "center" }}
            flexDir={{ lg: isOdd(index) == 1 && "row-reverse" }}
            key={index}
            mb="5rem"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <Box
              w={{ base: "80%", lg: "35%" }}
              mx={{ base: "auto", lg: "0" }}
              pl={{ lg: isOdd(index) == 1 && "10" }}
              pr={{ lg: isOdd(index) == 0 && "10" }}
              href={item.link}
            >
              <NextImage
                src={item.image}
                width="700"
                height="500"
                alt={item.title}
                placeholder="blur"
                blurDataURL="L8LE.{~60000_3V@ITx^00t:V?-P"
                href={item.link}
              />
            </Box>

            <Box w={{ base: "100%", lg: "50%" }}>
              <Heading as="h3" size="lg">
                {item.title}
              </Heading>
              <Text py="4">{item.description}</Text>

              <Box
                d={{ base: "flex", lg: "flex" }}
                // justifyContent="space-evenly"
              >
                <ChakraLink
                  href={item.link}
                  aria-label={item.title}
                  mx="2"
                  _focus={{ outline: "none" }}
                  isExternal
                >
                  <Icon as={FaExternalLinkAlt} w="6" h="6"></Icon>
                </ChakraLink>
                <ChakraLink
                  href={item.source}
                  aria-label={item.title}
                  mx="2"
                  _focus={{ outline: "none" }}
                  isExternal
                >
                  <Icon as={FaGithub} w="6" h="6" ml="2rem"></Icon>
                </ChakraLink>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Home;
