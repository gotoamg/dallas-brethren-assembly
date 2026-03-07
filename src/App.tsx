import { SiteRenderer } from './SiteRenderer';
import siteData from './site-data.json';
const businessName = "Dallas Brethren Assembly";
export default function App() {
  return <SiteRenderer content={siteData} businessName={businessName} />;
}