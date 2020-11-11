var boton=document.getElementById('boton');//obtener elemento
var contenedor=document.getElementById('contenedor');//obtener elemento
var contBandera=document.getElementById('conteBandera');//obtener elemento

boton.addEventListener('click',function(){//realizar una accion cuando se de un click
    getPosts()//llamar a metodo para obtenet fetch
    .then(data => data.json())//promesa
        .then(json => {
        datos=json;//promesa
        verdatos(datos)//pasar dato a la función
        return getBandera()  
        // llamar a metodo para obtenet fetch  se puede ejecutar dentro de metodo anterior
    })
    .then(data=>data.json())//promesa
    .then(json=>{
        datob=json;//promesa
        verbandera(datob);//pasar dato a la función
    })
});

function getPosts(){
    return fetch('https://jsonplaceholder.typicode.com/posts')//url de datos 
}
function getBandera(){
    return fetch('https://restcountries.eu/rest/v2/all')//url de datos 
}
function verbandera(datob){//función para insertar datos en html(api2)
    contBandera.innerHTML="";//remplazar valores 
    datob.map((bandera)=>{//iterar en todo el documento 
        let imgBandera=document.createElement('img');//crear un elemento imagen en html
        imgBandera.src=bandera.flag;//optener el atributo flag
        imgBandera.width='20';//tamaño del elemeto creado 
        imgBandera.height='20';
        contBandera.append(imgBandera);//colocar elemento creado en el contenedor 
    })
}
function verdatos(datos){//función para insertar datos en html(api1)
    datos.map((dato,i)=> {
        let titulo=document.createElement('h2');//insertar un elemento h2
        let contenido=document.createElement('p');//insertar un elemento p

        titulo.innerHTML=i+'-'+dato.title;//al elemento colocarle el titulo del atributo de api
        contenido.innerHTML=dato.body;//al elemento colocarle el atributo body

        contenedor.appendChild(titulo);//colocar el elento creado en el contenedro en html
        contenedor.appendChild(contenido);//colocar el elento creado en el contenedro en html
    })
}