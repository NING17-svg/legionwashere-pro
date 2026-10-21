export interface AssetRecord {
  id: string;
  src: `/${string}`;
  alt: string;
  width: number;
  height: number;
  sourceUrl?: string;
  sourcePage?: string;
  usage?: string;
  pageIds?: string[];
  objectPosition?: string;
  fallback?: "surface" | "gradient" | "hide";
}

export type AssetManifest = Record<string, AssetRecord>;
