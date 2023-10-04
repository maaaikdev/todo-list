import { useAppContext } from "../store/store"
import Layout from "../components/Layout";
import Book from "../components/Book/Book";

export default function Index(){

    const store = useAppContext();
    console.log("STORE", store)
    const booksContainer = {
        display: "flex",
        flexWrap: "wrap",
        gar: "10px"
    }

    return(
        <Layout>
            <div style={booksContainer}>
                {store.items.map(item =>
                    <Book key={item.id} item={item} />
                )}
            </div>
            
        </Layout>
    )
}