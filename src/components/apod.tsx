import {
   CircularProgress,
   Flex,
   Heading,
   NumberDecrementStepper,
   NumberIncrementStepper,
   NumberInput,
   NumberInputField,
   NumberInputStepper,
   SimpleGrid,
   Text,
   VStack
} from '@chakra-ui/react';
import { SingleDatepicker } from 'chakra-dayzed-datepicker';
import React from 'react';
import { PhotoCard } from './photo-card';
import { useApods } from './use-apods';

export const Apod = () => {
   const {
      apods,
      date,
      handleDateChange,
      dateError,
      count,
      setCount,
      loading
   } = useApods();

   const datePicker = () => (
      <VStack>
         <Heading size='md'>Pick a Date:</Heading>
         <VStack spacing={1}>
            <SingleDatepicker
               name='date-input'
               date={date}
               onDateChange={handleDateChange}
            />
            {dateError && (
               <Text color='red.500' fontSize='sm'>
                  Date cannot be in the future!
               </Text>
            )}
         </VStack>
      </VStack>
   );

   const photoCounter = () => (
      <>
         <Heading size={'md'}>Give Me Some Random!</Heading>
         <NumberInput
            min={1}
            max={50}
            value={count || ''}
            onChange={val =>
               setCount(prev =>
                  parseInt(val, 10) && parseInt(val, 10) > 50 ? prev : val
               )
            }
         >
            <NumberInputField />
            <NumberInputStepper>
               <NumberIncrementStepper />
               <NumberDecrementStepper />
            </NumberInputStepper>
         </NumberInput>
      </>
   );

   const loadingSpinner = () => (
      <>
         {loading && (
            <CircularProgress
               sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0
               }}
               isIndeterminate
               padding={10}
            />
         )}
      </>
   );

   return (
      <Flex direction='column'>
         <VStack spacing={8}>
            <VStack>
               {datePicker()}
               {photoCounter()}
            </VStack>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }}>
               {apods
                  .filter(a => a.media_type === 'image')
                  .map(apod => (
                     <PhotoCard key={apod.url} apod={apod} />
                  ))}
            </SimpleGrid>
            {loadingSpinner()}
         </VStack>
      </Flex>
   );
};
