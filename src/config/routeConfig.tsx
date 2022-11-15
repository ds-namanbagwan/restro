import UniversalSearchPage from '../pages/UniversalSearchPage';
import FAQsPage from '../pages/FAQsPage';
import { universalResultsConfig } from './universalResultsConfig';
import LocationsPage from '../pages/LocationsPage'; 
import TechnologyPage from '../pages/TechnologyPage';
import IndustryPage from '../pages/IndustryPage';
import ExpertiesPage from '../pages/ExpertiesPage';
import { Data } from '@react-google-maps/api';
import Test from '../templates/Test';

export const routeConfig = [
  {
    path: '/',
    exact: true,
    page: <UniversalSearchPage universalResultsConfig={universalResultsConfig} />
  },
  {
    path: '/faqs',
    page: <FAQsPage verticalKey='faqs'/>
  },
  {
    path: '/locations',
    page: <LocationsPage verticalKey="locations" />
  },

  {
    path: '/expertise',
    page: <ExpertiesPage verticalKey='cf-plans' />
  },

  {
    path: '/menu_items',
    page: <TechnologyPage verticalKey='switch' />
  },

  {
    path: '/offers',
    page: <IndustryPage verticalKey='videos' />
  },
  {
    path: '/test',
    page: <Test path={''} relativePrefixToRoot={''} document={Data} __meta={{
      mode: 'development'
    }}  />
  },
];