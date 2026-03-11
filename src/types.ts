export interface Rocket {
  id: string;
  name: string;
  type: string;
  thrust: string;
  payload: string;
  description: string;
  image: string;
}

export interface Satellite {
  id: string;
  name: string;
  type: 'Communication' | 'Remote Sensing' | 'Navigation';
  orbit: string;
  lifespan: string;
  description: string;
  image: string;
}

export interface TestService {
  id: string;
  category: 'Mechanical' | 'Environmental' | 'EMC' | 'Software' | 'AIT';
  name: string;
  description: string;
  standards: string[];
  equipment: string[];
  location: string;
  capacity: string;
}

export interface PlatformFeature {
  title: string;
  description: string;
  icon: string;
}
