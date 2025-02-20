import {
  AspectRatio,
  Box,
  Center,
  Container,
  Image,
  Overlay,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';

export default function HomePage() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Prodile</Link>
      </nav>
      <div>
        <Box pos="relative" data-tauri-drag-region>
          <AspectRatio
            ratio={800 / 200}
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
              width={120}
              height={80}
              mx="auto"
            />
          </Center>
        </Box>

        <Container mt={50}>
          <Navigation />
        </Container>
      </div>
    </div>
  );
}
