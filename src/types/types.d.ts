export interface Nasa {
  date: Date;
  explanation: string;
  media_type: string;
  service_version: string;
  title: string;
  hdurl?: string;
  url: string;
  copyright?: string;
}

type NasaData = {
  nasa?: Nasa;
  isLoading?: boolean;
  formattedDate?: string;
};
