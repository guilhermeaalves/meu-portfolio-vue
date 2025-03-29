declare module "@/data/globe.json" {
  interface Feature {
    type: string;
    properties: {
      name: string;
    };
    geometry: {
      type: string;
      coordinates: number[][][];
    };
  }

  interface FeatureCollection {
    type: string;
    features: Feature[];
  }

  const value: FeatureCollection;
  export default value;
}
