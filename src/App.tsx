import { ChakraProvider, Flex, theme } from '@chakra-ui/react';
import { Apod } from './components/apod';
import * as React from 'react';
import { ApodResponse } from './types';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const testObject: ApodResponse = {
   'copyright': 'Wang LetianEyes at Night',
   'date': '2022-04-11',
   'explanation':
      "Typically, the International Space Station is visible only at night.  Slowly drifting across the night sky as it orbits the Earth, the International Space Station (ISS) can be seen as a bright spot several times a year from many locations.  The ISS is then visible only just after sunset or just before sunrise because it shines by reflected sunlight -- once the ISS enters the Earth's shadow, it will drop out of sight. The only occasion when the ISS is visible during the day is when it passes right in front of the Sun. Then, it passes so quickly that only cameras taking short exposures can visually freeze the ISS's silhouette onto the background Sun. The featured picture did exactly that -- it is actually a series of images taken earlier this month from Beijing, China with perfect timing.  This image series was later combined with separate images taken at nearly the same time but highlighting the texture and activity on the busy Sun. The solar activity included numerous gaseous prominences seen around the edge, highlighted in red, filaments seen against the Sun's face, and a dark sunspot.",
   'hdurl': 'https://apod.nasa.gov/apod/image/2204/IssSunspot_Letian_2400.jpg',
   'media_type': 'image',
   'service_version': 'v1',
   'title': 'A Space Station Crosses a Busy Sun',
   'url': 'https://apod.nasa.gov/apod/image/2204/IssSunspot_Letian_1080.jpg'
};

export const App = () => (
   <ChakraProvider theme={theme}>
      <Flex maxW={1800} m='auto' direction='column' p={10}>
         <ColorModeSwitcher alignSelf={'flex-end'} />
         <Apod />
      </Flex>
   </ChakraProvider>
);
