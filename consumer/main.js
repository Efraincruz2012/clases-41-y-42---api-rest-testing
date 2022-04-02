
const IMAGEN_GOKU = 'https://media.revistagq.com/photos/5f45010acb266484bb785c78/1:1/w_720,h_720,c_limit/dragon-ball-z.jpg';

let LAST_PRODUCT_ID = false;

// Para obtener los productos
const getProductos = async () => {
    return await axios.get('http://localhost:8080/api/productos')
        .then(({data}) => {
            const productos = data;
            // pregunto si existe y si es asi tomo el id del ultimo
            LAST_PRODUCT_ID = productos[productos.length-1] ? productos[productos.length-1]._id : false;
            console.log('todos los productos: ',productos)
        });
}

getProductos().then(() => {

    
    // para obtener los carritos
    axios.get('http://localhost:8080/api/carrito')
    .then(carritos => console.log('todos los carritos: ',carritos));
    
    
    // Para crear un producto
    // axios.post('http://localhost:8080/api/productos', {
    //     name: 'goku_juguete',
    //     thumbnail: IMAGEN_GOKU,
    //     price: 132
    // })
    
    // Para editar un producto
    axios.post('http://localhost:8080/api/productos?edit=true', {
        name: 'goku_juguete_modificado2',
        thumbnail: IMAGEN_GOKU,
        price: 5552,
        id: LAST_PRODUCT_ID
    });

    // para borrar un producto
    axios.delete('http://localhost:8080/api/productos/'+LAST_PRODUCT_ID);
    
    getProductos();
    
    // Para crear un usuario
    axios.post('http://localhost:8080/registro', {
        nombre: 'userTest02',
        password: 'userPass02',
        email: 'user02@mail.com',
        age: 32,
        address: 'av san martin 555',
        countrycode: '+54',
        phone: '1132445555',
        picturePath: IMAGEN_GOKU
    });

});
