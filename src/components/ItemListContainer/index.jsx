import React, {useState, useEffect} from 'react';
import Title from '../Title';
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';

const productos = [
    {id: 1, category: 'productos', image: "https://i.pinimg.com/originals/2f/73/0e/2f730e93b6a6f8f48a18afa03ad96990.jpg", title: "Suéter Bonnie", precio: "$15.990"},
    {id: 2, category: 'sale', image: "https://i.pinimg.com/originals/58/0b/e3/580be3ac4f546fd4bc362f2fa994da85.jpg", title: "Suéter Ice", precio: "12.590"},
    {id: 3, category: 'productos', image: "https://i.pinimg.com/736x/a7/42/08/a742083dc1302d2e29697680d93bfe88.jpg", title: "Suéter Marshmallow", precio: "22.690"},
];

export const ItemListContainer = (props) => {

  const [data, setData] = useState([]);

  const { categoriaId } = useParams();

 useEffect(() => {
    const getData = new Promise(resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 1000);
    });
        if (categoriaId) {
            getData.then(res => setData(res.filter(producto => producto.category === categoriaId)));
        } else {
            getData.then(res => setData(res));
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