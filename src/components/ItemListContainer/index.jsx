import React, {useState, useEffect} from 'react';
import Title from '../Title';
import ItemCount from '../ItemCount';
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';

const films = [
    {id: 1, category: 'films', image: "https://i.pinimg.com/originals/2f/73/0e/2f730e93b6a6f8f48a18afa03ad96990.jpg", title: "Hola"},
    {id: 2, category: 'series', image: "https://i.pinimg.com/originals/58/0b/e3/580be3ac4f546fd4bc362f2fa994da85.jpg", title: "Chao"},
    {id: 3, category: 'films', image: "https://i.pinimg.com/736x/a7/42/08/a742083dc1302d2e29697680d93bfe88.jpg", title: "Hasta luego"},
];

export const ItemListContainer = (props) => {

  const [data, setData] = useState([]);

  const { categoriaId } = useParams();

 useEffect(() => {
    const getData = new Promise(resolve => {
        setTimeout(() => {
            resolve(films);
        }, 1000);
    });
        if (categoriaId) {
            getData.then(res => setData(res.filter(film => film.category === categoriaId)));
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
        <Title greeting="Catalina" />
<ItemCount initial={1} stock={5} onAdd={onAdd} />
<ItemList data={data}/>
        </>
    );
}

export default ItemListContainer;