import { useEffect, useState } from "react";
import CardItem from "../../components/card/Card";
// import cardItems from '../../assets/data/data';

const Home = () => {

    const [photos, setPhotos] = useState([]);
    // https://jsonplaceholder.typicode.com/photos

    useEffect(() => {
        async function fetchPhotos() {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/photos');
                const data = await res.json();

                setPhotos(data);
            } catch (err) {
                console.error(err);
            }
        }

        fetchPhotos();
    }, []);

    console.log(photos);

    return (
        <>
            {
                photos.map((card) => {
                    return (
                        <CardItem 
                            key={card.id}
                            title={card.title}
                            description={card.title}
                            image={''}
                            btnTitle={'Button'}
                        />
                    )
                })
            }  
        </>
    )
}

export default Home;