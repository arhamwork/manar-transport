import { readFileSync, writeFileSync } from "node:fs";

const files = [
  "client/src/pages/SearchPage.tsx",
  "client/src/pages/ContactPage.tsx",
  "client/src/pages/info/InfoPage.tsx",
  "client/src/pages/Home.tsx",
  "client/src/pages/about/AboutPages.tsx",
  "client/src/pages/policies/PolicyPages.tsx",
  "client/src/pages/travel-agent/TravelAgentPages.tsx",
  "client/src/pages/fleet/FleetPage.tsx",
  "client/src/pages/services/ServicesPage.tsx",
];

for (const file of files) {
  const path = new URL(`../${file}`, import.meta.url);
  const source = readFileSync(path, "utf8");
  const fixed = source.replace(
    /useEffect\(\(\) => setPageMetadata\((.*?)\), (\[[^\]]*\])\)/g,
    "useEffect(() => { setPageMetadata($1); }, $2)",
  );
  writeFileSync(path, fixed);
}

const layoutPath = new URL("../client/src/components/layout/SiteLayout.tsx", import.meta.url);
const layoutSource = readFileSync(layoutPath, "utf8");
const layoutFixed = layoutSource.replace(
  /useEffect\(\(\) => window\.scrollTo\((.*?)\), \[location\]\);/g,
  "useEffect(() => { window.scrollTo($1); }, [location]);",
);
writeFileSync(layoutPath, layoutFixed);
