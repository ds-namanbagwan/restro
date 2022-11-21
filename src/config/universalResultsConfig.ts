import { StandardCard } from '../components/cards/StandardCard';
import { VerticalConfig } from '../components/UniversalResults';
import { LocationCard } from '../components/cards/LocationCard';
import { PlansCard } from '../components/cards/PlansCard';

export type UniversalResultsConfig = Record<string, VerticalConfig>;

export const universalResultsConfig: UniversalResultsConfig = {

  menu_items: {
    label: 'Switch',
    viewAllButton: true,
    cardConfig: {
      CardComponent: StandardCard,
      showOrdinal: false
    }
  },  
  locations: {
    label: 'Locations',
    viewAllButton: true,
    cardConfig: {
      CardComponent: LocationCard,
      showOrdinal: false
    }
  },

  plans: {
    label: 'Plans',
    viewAllButton: true,
    cardConfig: {
      CardComponent: PlansCard,
      showOrdinal: false
    }
  },
    faqs: {
    label: 'FAQs',
    viewAllButton: true,
    cardConfig: {
      CardComponent: StandardCard,
      showOrdinal: false
    }
  }
}