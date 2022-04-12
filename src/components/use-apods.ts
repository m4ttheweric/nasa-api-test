import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { ApodResponse } from '../types';

export const API_KEY = '5S4k3dsfcgXgqqh1F3MASnHyiq0hZgZdGrt5ap2Z';
export const API_URL = 'https://api.nasa.gov/planetary/apod?';

export function useApods() {
   const [loading, setLoading] = useState(true);
   const [apods, setApods] = useState<ApodResponse[]>([]);

   const [count, setCount] = useState<string>(null);
   const [date, setDate] = useState(new Date());
   const [dateError, setDateError] = useState(false);

   useEffect(() => {
      if (date === null) return;

      setDateError(false);
      setCount(null);
      setLoading(true);
      fetch(
         API_URL +
            new URLSearchParams({
               api_key: API_KEY,
               date: format(date, 'yyyy-MM-dd')
            })
      )
         .then(response => response.json())
         .then(apod => {
            setApods([apod]);
         })
         .finally(() => setLoading(false));
   }, [date]);

   useEffect(() => {
      if (!parseInt(count, 10)) return;

      setDateError(false);
      setDate(null);
      setLoading(true);
      fetch(
         API_URL +
            new URLSearchParams({
               api_key: API_KEY,
               count: parseInt(count, 10).toString()
            })
      )
         .then(response => response.json())
         .then(apods => {
            setApods(apods);
         })
         .finally(() => setLoading(false));
   }, [count]);

   const handleDateChange = (date: Date) => {
      if (date > new Date()) {
         setDateError(true);
         return;
      } else {
         setDateError(false);
         setDate(date);
      }
   };

   return {
      date,
      handleDateChange,
      dateError,
      loading,
      apods,
      count,
      setCount
   };
}
