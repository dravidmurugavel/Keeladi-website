import Hero from '../components/Hero';
import Discovery from '../components/Discovery';
import Stratigraphy from '../components/Stratigraphy';
import { Structures, Literacy, Craft, Trade, Burials, Chronology } from '../components/Sections';
import ExcavationsPage from './ExcavationsPage';
import ArtifactsPage from './ArtifactsPage';
import GalleryPage from './GalleryPage';
import ContactPage from './ContactPage';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Discovery />
      <Stratigraphy />
      <Structures />
      <Literacy />
      <Craft />
      <Trade />
      <Burials />
      <Chronology />
      <div id="excavations">
        <ExcavationsPage />
      </div>
      <div id="artifacts">
        <ArtifactsPage />
      </div>
      <div id="gallery">
        <GalleryPage />
      </div>
      <div id="contact">
        <ContactPage />
      </div>
    </>
  );
}
