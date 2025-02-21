import {
  AspectRatio,
  Box,
  Center,
  Container,
  Image,
  Overlay,
} from '@mantine/core';
import { Navigation } from '../components/Navigation';

export default function HomePage() {
  return (
    <Container fluid h="100vh" bg="gray.2">
      <Box pos="relative">
        <AspectRatio
          ratio={800 / 250}
          style={{
            pointerEvents: 'none',
          }}
        >
          <Image src="/assets/banner.jpg" alt="Banner" />
          <Overlay color="#000" backgroundOpacity={0.35} blur={5} />
        </AspectRatio>

        <Center
          pos="absolute"
          w="100%"
          style={{
            zIndex: 9999,
          }}
          bottom={-10}
        >
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={150}
            height={100}
            mx="auto"
          />
        </Center>
      </Box>

      <Container mt={50}>
        <Navigation />
      </Container>
    </Container>
  );
}
