import { ogImageSize, renderSiteOgImage } from "@/lib/og-image";

export const alt = "ADESEN — Community Development in Gatsibo District, Rwanda";
export const size = ogImageSize;
export const contentType = "image/png";

export default function Image() {
  return renderSiteOgImage();
}
