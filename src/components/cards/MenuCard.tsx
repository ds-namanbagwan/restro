import { useAnswersState } from '@yext/answers-headless-react';
import { useContext } from 'react';
import { ResponsiveContext } from '../../App';
import { useComposedCssClasses } from '../../hooks/useComposedCssClasses';
import { CardProps } from '../../models/cardComponent';

export interface TrainerCardConfig {
  showOrdinal?: boolean
}


export interface TrainerCardProps extends CardProps {
  configuration: TrainerCardConfig
}

export interface SimpleImage {
  url: string,
  width: number,
  height: number
}

export interface Image extends SimpleImage {
  sourceUrl: string,
  thumbnails: SimpleImage[]
}

interface PrimaryPhoto {
  image?: Image
}

export interface TrainerData {
  id: any | null | undefined;
  answer: string | undefined;
  name?: string,
  richTextDescription?:string,
  c_inspirationalQuote?: string,
  //primaryPhoto?: PrimaryPhoto,
  photoGallery?: any
}

export interface TrainerCardCssClasses {
  container?: string,
  descriptionContainer?: string,
  name?: string,
  richTextDescription?: string,
  // TODO: why can't I use the tailwind pixels here
  trainerPhoto?: string,
  ctaButton?: string,
  ctaButtonText?: string,
  photoGallery?: any
}

const builtInCssClasses: TrainerCardCssClasses = {
  container: 'flex flex-col p-4 shadow-sm my-2 align-items-center',
  descriptionContainer: 'w-full text-sm font-heading ',
  name: 'text-xl font-medium font-body font-bold',
  ctaButton: 'flex border rounded-md mt-4 px-4 bg-black justify-center hover:bg-orange-900',
  ctaButtonText: 'font-heading text-black font-bold text-base px-3 py-3 sm:py-0',
};

export function MenuCard(props: TrainerCardProps): JSX.Element {
  const { result } = props;
  const trainer = result.rawData as unknown as TrainerData;
  const trainerImg = trainer.photoGallery?.image?.url ?? '';
   //console.log("trainer",trainer);
  const screenSize = useContext(ResponsiveContext);

  const cssClasses = useComposedCssClasses(builtInCssClasses);

  function renderName(name?: string) {
    return <div className={cssClasses.name}>{name}</div>;
  }
  function renderDescription(richTextDescription?: string) {
    return <div className={cssClasses.richTextDescription}>{richTextDescription}</div>;
  }
  function renderCta(ctaButton?: string) {
    return <div className={cssClasses.ctaButton}>{ctaButton}</div>;
  }
  

  

  const isVertical = useAnswersState((s) => s.meta.searchType) === 'vertical';

  const img = trainer?.photoGallery?.map((img: any) => {
    // console.log (img);
    return (
      <>
        <img src={img?.image?.sourceUrl} />
      </>
    );
  });
  return (
<>
<div>
  <div className="centered-container">
    <div className="section">    
    <div
                className="bg-gray-100 p-2"
                style={{ color: "black", fontFamily: "cursive", backgroundColor:"white",fontSize:"25px"}}
              >{trainer.name}
    <div className="bg-gray-100 p-2"  style={{ color: "brown", fontFamily: "cursive" ,fontSize:"20px"}}>    
                      
                <p> {renderDescription(trainer.richTextDescription)}</p>
              </div>
              <div className="bg-gray-100 p-2"  style={{ color: "brown", fontFamily: "cursive" ,fontSize:"20px" ,width:"150px"}}>    
                      
                <p> {img}</p>
              </div>
              
     <div className="bg-gray-100 p-2" style={{ color: "white", fontFamily: "cursive" ,fontSize:"15px" }}>
      <button style={{backgroundColor:"black" , width:"100px"}}>OrderNow</button></div>            
      </div>     
    </div>
  </div>
</div>
</>



  );
}
