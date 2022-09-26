import React, {useState, useEffect} from 'react';
import ItemCount from '../ItemCount';
import Title from '../Title';
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

export const ItemListContainer = (props) => {

  const [data, setData] = useState([]);

  const { categoriaId } = useParams();

 useEffect(() => {

    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'productos');
    if (categoriaId) {
    const queryFilter = query(queryCollection, where('category', '==', categoriaId))
    getDocs(queryFilter)
    .then(res => setData(res.docs.map( producto => ({ id: producto.id, ...producto.data()}))))
    } else {
        getDocs(queryCollection)
        .then(res => setData(res.docs.map( producto => ({ id: producto.id, ...producto.data()}))))
    }
    }, [categoriaId])

    const onAdd = (quantity) => {
        console.log("Compraste ${quantity} unidades");
    }

    console.log(props);
    return (
        <>
        <Title greeting="Crochet Bunker" />
<ItemList data={data}/>
        </>
    );
}

export default ItemListContainer;