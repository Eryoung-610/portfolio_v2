import {
  Box,
  Button,
  chakra,
  Heading,
  Text,
  useColorModeValue,
  Divider,
  StackDivider,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import NextImage from "next/image";
import NextLink from "next/link";

import { seo, data } from "config";

const Home = () => {
  const color = useColorModeValue("telegram.500", "telegram.400");

  const isOdd = (num) => num % 2;

  const title = "Home";
  const description = seo.description;

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
      <Box
        as="section"
        d="flex"
        alignItems="center"
        flexDir="column"
        textAlign="center"
        py="4"
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
            </Text>{" "}
            digital products, Brands, And experience.
          </Heading>
          <Text py="4">
            A{" "}
            <Text as="span" fontWeight="600">
              web designer
            </Text>{" "}
            and{" "}
            <Text as="span" fontWeight="600">
              front-end web developer
            </Text>{" "}
            based in the San Francisco, I specialize in UI/UX design, Responsive
            web design, And accessibility.
          </Text>
          <Button
            colorScheme="telegram"
            variant="ghost"
            size="lg"
            fontSize="20px"
          >
            Get in touch
          </Button>
        </Box>
      </Box>

      {/* About Me Section Horizontal Divider */}
      <Box
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
      </Box>

      {/* About Me Section Vertical Divider */}
      <Box
        as="section"
        d="flex"
        alignItems="center"
        flexDir="column"
        textAlign={{ base: "center", lg: "left" }}
        py="4"
      >
        <Box
          d={{ lg: "flex" }}
          justifyContent={{ base: "center", lg: "left" }}
          w={{ lg: "90%" }}
          borderLeft="5px solid #229ED9"
          borderRadius="4px 4px 4px 4px"
        >
          <Box></Box>
          <Box>
            <Heading color={color} pl={4}>
              About Me
            </Heading>
            <Text py={5} pl={4}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              architecto reprehenderit eaque? Dolorem mollitia eius quae esse
              distinctio delectus excepturi, aliquid dolorum ipsam, nam quis aut
              cupiditate laborum nesciunt laudantium?
            </Text>
          </Box>
        </Box>

        {data.map((item, index) => (
          <Box
            d={{ lg: "flex" }}
            justifyContent={{ lg: "center" }}
            alignItems={{ lg: "center" }}
            flexDir={{ lg: isOdd(index) == 1 && "row-reverse" }}
            key={index}
            pb="8"
          >
            <Box
              w={{ base: "80%", lg: "35%" }}
              mx={{ base: "auto", lg: "0" }}
              pl={{ lg: isOdd(index) == 1 && "10" }}
              pr={{ lg: isOdd(index) == 0 && "10" }}
            >
              <NextImage
                src={item.image}
                width="500"
                height="500"
                alt={item.title}
                placeholder="blur"
                blurDataURL="L8LE.{~60000_3V@ITx^00t:V?-P"
              />
            </Box>

            <Box
              w={{ lg: "50%" }}
              // d={{ base: "flex", lg: "flex" }}
              // justifyContent="space-evenly"
            >
              <Heading as="h1">{item.title}</Heading>
              <Text py="4">{item.description}</Text>

              <Box
                d={{ base: "flex", lg: "flex" }}
                justifyContent="flex-start"
              >
                <Text
                  as="a"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.link}
                >
                  Demo
                </Text>
                {/* <Divider orientation="vertical" my={2}/> */}
                <Text
                  as="a"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.source}
                  ml="2em"
                >
                  Source
                </Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Home;
