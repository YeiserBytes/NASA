import { useEffect, useState } from "react"
import { type NasaData, type Nasa } from '../types/types.d';

const apiKey = import.meta.env.VITE_APP_API_KEY;



export default function useNasa(): NasaData {
  const [nasa, setNasa] = useState<Nasa | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchNasaData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
        );
        const data = await res.json();
        setNasa(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNasaData();
  }, [])

  const { date } = nasa ?? {};
  const formattedDate = date?.toString().split("-").reverse().join("-") ?? "";
  if (!nasa) return {nasa, isLoading, formattedDate };

  return { nasa, isLoading, formattedDate }
}
