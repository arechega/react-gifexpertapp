
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({category}) => {
     
    const {data:images,loading} = useFetchGifs( category );


    return (
        <>
        <h3 className="categoria">{category}</h3> 
        {loading && <p>Loading</p>}
        <div className="lista"> 
            {
            images.map(image => (
            <GifGridItem 
            key = {image.id}
            {...image}/>
            ))
            }   
        </div>
        </>
    )
}


export default GifGrid
