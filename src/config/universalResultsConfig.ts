import { VerticalConfig } from '../components/UniversalResults';
import { LocationCard } from '../components/cards/LocationCard';
import LocationSection from '../sections/LocationSection';
import { FaqCard } from '../components/cards/FaqCard';
import { MenuCard } from '../components/cards/MenuCard';

export type UniversalResultsConfig = Record<string, VerticalConfig>;

export const universalResultsConfig: UniversalResultsConfig = {

 
  locations: {
    label: 'Locations',
    SectionComponent: LocationSection,
    viewMapButton: true,
    viewAllButton: true,
    cardConfig: {
      CardComponent: LocationCard,
      showOrdinal: false,
    },
  },  
    faqs: {
    label: 'FAQs',
    viewAllButton: true,
    cardConfig: {
      CardComponent: FaqCard,
      showOrdinal: false
    }
  },
  menu_items: {
    label: 'Menu Item',
    viewAllButton: true,
    cardConfig: {
      CardComponent: MenuCard,
      showOrdinal: false
    }
  }

}