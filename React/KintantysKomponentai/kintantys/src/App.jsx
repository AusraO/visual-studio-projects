import './App.css';
import Card from './components/Card';

import Header from './components/Header';
import Main from './components/Main';


const App = () => {

  const korteles = [ //sukurtos korteliu informacijos
    {
      imageData: {
        source: 'https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
        alternativeText: 'geles',
        CSS_class: 'img-med'
      },
      heading: 'pavadinimas',
      paragraph: 'paragrafas'
    }, {
      imageData: {
        source: 'https://png.pngtree.com/background/20210715/original/pngtree-double-row-tree-path-with-yellow-deciduous-autumn-leaves-picture-image_1293368.jpg',
        alternativeText: 'ruduo',
        CSS_class: 'img-med'
      },
      heading: 'pavadinimas2',
      paragraph: 'paragrafas2'
    }, {
      imageData: {
        source: 'https://expertphotography.b-cdn.net/wp-content/uploads/2011/06/how-to-take-good-pictures-waterlilly.jpg',
        alternativeText: 'water lilly',
        CSS_class: 'img-med'
      },
      heading: 'pavadinimas3',
      paragraph: 'paragrafas3'
    }
  ]



  return (
    <>


      {
        korteles.map((kortele, i) => {  //sukam cikla per duomenis 'korteles'. kortele - sugalvotas pavadinimas kuri veliau reikia paduoti aprasant ka sukam per cikla
          return < Card  //kad kiekvienos iteracijos metu grazintu Card elementa
            key={i}  // suteikia kiekvienos iteracijos kortelei rakta (butina)
            imageData={{
              source: kortele.imageData.source,  //kintanti korteles informacija nurodyta su keliu kuris auksciau nurodytas
              alternativeText: kortele.imageData.alternativeText,
              CSS_class: kortele.imageData.CSS_class
            }}
            heading={kortele.heading}// cia nera imageData dalyje (zr. const korteles)
            paragraph={kortele.paragraph}
          />
        })
      }
<Header/>
<Main/>


      {/* <Card
        imageData={{
          source: 'https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
          alternativeText: 'geles',
          CSS_class: 'img-med'
        }}
        heading='pavadinimas'
        paragraph='paragrafas'
      />

      <Card
        imageData={{
          source: 'https://png.pngtree.com/background/20210715/original/pngtree-double-row-tree-path-with-yellow-deciduous-autumn-leaves-picture-image_1293368.jpg',
          alternativeText: 'ruduo',
          CSS_class: 'img-med'
        }}
        heading='pavadinimas2'
        paragraph='paragrafas2'
      />

      <Card
        imageData={{
          source: 'https://expertphotography.b-cdn.net/wp-content/uploads/2011/06/how-to-take-good-pictures-waterlilly.jpg',
          alternativeText: 'water lilly',
          CSS_class: 'img-med'
        }}
        heading='pavadinimas3'
        paragraph='paragrafas3'
      /> */}

    </>
  );
}

export default App;