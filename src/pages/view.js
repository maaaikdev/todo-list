
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useAppContext } from "../store/store";
import { useEffect, useState } from "react";


export default function View(){

    const [item, setItem] = useState(null);
    const params = useParams();
    const store = useAppContext();

    useEffect(() => {
        const book = store.getItem(params.bookId);
        setItem(book);
    }, []);

    const itemStyles = {
        container: {
            display: "flex",
            gap: "20px",
            color: "white",
            width: "800px",
            margin: "0 auto"
        },
        textContainer: {
            textAlign: "left"
        }
    }

    if(!item) {
        return <Layout>Item not found</Layout>
    }

    return(
        <Layout>
            <div style={itemStyles.container}>
                <div>
                    {item?.cover ? <img src={item?.cover} width="300" alt={item?.title} /> : '' }
                </div>
                <div style={itemStyles.textContainer}>
                    <h2> {item?.title} </h2>
                    <div> {item?.author} </div>
                    <div> {item?.intro} </div>
                    <div> {item?.completed ? 'Leído' : 'Por terminar'} </div>
                    <div> {item?.review} </div>
                </div>
                
            </div>
            
        </Layout>
    )
}