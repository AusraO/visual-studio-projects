import CardUzd from './CardUzd';
import CardUzd2 from './CardUzd2';
import Card3 from './CardUzd3';
const Main = () => {
    const uzdKorteles = [
        {
            pictureData: {
                source: 'https://picsum.photos/id/73/5000/3333',
                altText: 'baseball',
                klase: 'picture'
            },
            textBellow: "Lorem, ipsum."
        },
        {
            pictureData: {
                source: 'https://picsum.photos/id/98/3264/2176',
                altText: 'summer',
                klase: 'picture'
            },
            textBellow: "Lorem, ipsum."
        },
        {
            pictureData: {
                source: 'https://picsum.photos/id/212/2000/1394',
                altText: 'street',
                klase: 'picture'
            },
            textBellow: "Lorem, ipsum."
        }
    ]

    const uzdKorteles2 = [
        {
            pictureData2: {
                source2: 'https://picsum.photos/id/466/3264/2176',
                altText2: 'stream',
                klase2: 'picture'
            },
            textBellow2: "Vanduo cia pat"
        },
        {
            pictureData2: {
                source2: 'https://picsum.photos/id/347/5000/3334',
                altText2: 'sea',
                klase2: 'picture'
            },
            textBellow2: "Vanduo cia pat"
        },
        {
            pictureData2: {
                source2: 'https://picsum.photos/id/372/4871/3247',
                altText2: 'summer',
                klase2: 'picture'
            },
            textBellow2: "Vanduo cia pat"
        }
    ]

    const uzdKorteles3 = [
        {
            headerText: 'Labas',
            pictureData3: {
                source3: 'https://picsum.photos/id/468/5000/3337',
                altText3: 'flowery field',
                klase3: 'picture'
            },
            paragText: 'vienas du trys keturi penki'
        },
        {
            headerText: 'Rytas',
            pictureData3: {
                source3: 'https://picsum.photos/id/485/4084/2713',
                altText3: 'rocky beach',
                klase3: 'picture'
            },
            paragText: 'vienas du trys penki keturi'
        },
        {
            headerText: 'Jums',
            pictureData3: {
                source3: 'https://picsum.photos/id/502/1920/1280',
                altText3: 'sunny forest',
                klase3: 'picture'
            },
            paragText: 'du vienas trys keturi penki'
        }
    ]


    return (
        <div className='main'>
            <h1>Portfolio</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque nemo aut neque ea illo ratione facere voluptas accusamus nisi eos commodi hic laboriosam id, porro nostrum aperiam sapiente alias! Eius?</p>
            <div className='allCardsTop'>
                {
                    uzdKorteles.map((kortele, i) => {
                        return <CardUzd
                            key={i}
                            pictureData={{
                                source: kortele.pictureData.source,
                                altText: kortele.pictureData.altText,
                                klase: kortele.pictureData.klase
                            }}
                            textBellow={kortele.textBellow}
                        />
                    })
                }
            </div>

            <div className='allCardsBottom'>
                {
                    uzdKorteles2.map((kortele, i) => {
                        return <CardUzd2
                            key={i}
                            pictureData2={{
                                source2: kortele.pictureData2.source2,
                                altText2: kortele.pictureData2.altText2,
                                klase2: kortele.pictureData2.klase2
                            }}
                            textBellow2={kortele.textBellow2}

                        />
                    })
                }

            </div>
            <div className='allCardsAdditional'>
                {
                    uzdKorteles3.map((kortele, i) => {
                        return <Card3
                            key={i}
                            headerText={kortele.headerText}
                            pictureData3={{
                                source3:kortele.pictureData3.source3,
                                altText3: kortele.pictureData3.altText3,
                                klase3:kortele.pictureData3.klase3
                            }}
                            paragText={kortele.paragText}
                        />
                    })}
            </div>

        </div>


    );
}

export default Main;