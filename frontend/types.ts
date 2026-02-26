export interface RoadmapItem {
  year: string;
  title: string;
  description: string;
  details: string[];
}

export interface RouteItem {
  id: string;
  from: string;
  to: string;
  description: string;
  coordinates: {
    start: [number, number];
    end: [number, number];
  };
}

export interface Partner {
  name: string;
}
