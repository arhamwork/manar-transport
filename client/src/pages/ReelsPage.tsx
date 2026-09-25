import { useEffect } from "react";
import { PageIntro } from "@/pages/PageBlocks";
import { ReelGallery } from "@/components/home/HomeSections";
import { media } from "@/data/siteData";
import { setPageMetadata } from "@/utils/metadata";

export default function ReelsPage() {
  useEffect(() => { setPageMetadata("From the Road", "A vertical reel-style gallery of Manar Transport journeys and Saudi travel moments."); }, []);
  return <div><PageIntro eyebrow="From the road" title="Twelve moments. One considered way to move." body="An Instagram-inspired vertical reel gallery for approved Manar Transport social content. The cards are ready for licensed video embeds or final social assets." image={media.desert} /><section className="section container reels-page"><div className="reels-page__intro"><span className="eyebrow">The social library</span><h2>Keep the journey<br /><em>in motion.</em></h2><p>On desktop and mobile, the reel rail moves automatically and remains swipeable. Replace the current image placeholders with approved vertical videos when the Instagram library is ready.</p></div><ReelGallery /></section></div>;
}
