import ResultsCount from '../components/ResultsCount';
import AlternativeVerticals from '../components/AlternativeVerticals';
import AppliedFilters from '../components/AppliedFilters';
import DirectAnswer from '../components/DirectAnswer';
import VerticalResults from '../components/VerticalResults';
import SpellCheck from '../components/SpellCheck';
import LocationBias from '../components/LocationBias';
import usePageSetupEffect from '../hooks/usePageSetupEffect';
import { FaqCard } from '../components/cards/FaqCard';
import { MenuCard } from '../components/cards/MenuCard';
import Footer from '../components/Footer';

export default function Menupage({ verticalKey }: {
  verticalKey: string
}) {
  usePageSetupEffect(verticalKey);

  return (
    <><div>
      <DirectAnswer />
      <SpellCheck />
      <ResultsCount />
      <AppliedFilters
        hiddenFields={['builtin.entityType']} />
      <AlternativeVerticals
        currentVerticalLabel='FAQs'
        verticalsConfig={[
          { label: 'Locations', verticalKey: 'locations' },          
          { label: 'Faqs', verticalKey: 'faqs' },
          {label:  'Menuitem',verticalKey: 'menu_items'}
        ]} />
      <VerticalResults
        CardComponent={MenuCard} />
      <LocationBias />
      <Footer />
    </div></>
  )
}