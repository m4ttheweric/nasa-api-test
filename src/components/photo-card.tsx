import React from 'react';
import { Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import { ApodResponse } from '../types';

export const PhotoCard: React.FC<{ apod: ApodResponse }> = ({ apod }) => (
   <Flex p={4}>
      <VStack spacing={4}>
         <Flex direction={'column'} justifyContent='flex-start'>
            <Heading noOfLines={1} size={'md'} dir={'row'}>
               {apod.title}
            </Heading>
            <Text ml={2} fontSize={'s'} alignSelf='center'>
               ({apod.date})
            </Text>
         </Flex>
         <Flex maxH={500}>
            {apod.media_type === 'video' && (
               <video height={500} src={apod.url} />
            )}
            {apod.media_type === 'image' && (
               <Image
                  boxSize={{ sm: '350px', md: '500px' }}
                  objectFit='contain'
                  src={apod.url}
                  alt={apod.title}
               />
            )}
         </Flex>
         <Text fontSize='small' overflow={'auto'} h={150}>
            {apod.explanation}
         </Text>
      </VStack>
   </Flex>
);
