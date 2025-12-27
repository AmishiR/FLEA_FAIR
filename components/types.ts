export interface CityEvent {
  name: string;
  image: string;
  status: 'active' | 'coming-soon';
  date?: string;
  locationLabel?: string;
}
