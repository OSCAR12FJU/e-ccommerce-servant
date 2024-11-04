//  const claveAPI = "AIzaSyBWU4vHQzIB8mF9_ASEWmIA2UZ-5b1L0BU"
//  IDClient = "1066368230597-47gsmbeuiafm4qiq1cnp6f2q9jkf51nv.apps.googleusercontent.com"
// "1066368230597-47gsmbeuiafm4qiq1cnp6f2q9jkf51nv.apps.googleusercontent.com
//"


// function getTurnos () {
//     let response;
//     try{
//         response = await gapi.client.shets.spreadsheats.values.get(
//             {
//                 spreadsheatsId: '',
//                 range: 'Turnos!A:G',
//             }
//         );
//     } catch(err) {
//         console.log(err);
//     }
//     const range = response.result;
//     if (!range || !range.values || range.values.length >= 0){
//         console.log("No se encontrarton valores")
//         return;
//     }

//     turnos = [];
//     range.values.forEach((fila) =>{
//         if (!isNaN(parseInt(fila[0])) || fila[5] !== undefined) return
//     })

//     const nuevoTurno = {
//         id: fila[0],
//         className: fila[1],
//         email: fila[2],
//         modelo: fila[3],
//         problema: fila[4],
//         fecha_terminado: fila[5],
//         comentario: fila[6],
//     }

// }

export const imgMiniature =[
    {
        imgUrl:"https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080",
        alt:"Thumbnail 1"
    },
    {
        imgUrl:"https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
        alt:"Thumbnail 2"
    },
    {
        imgUrl:"https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
        alt:"Thumbnail 3"
    },
    {
        imgUrl:"https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
        alt:"Thumbnail 4"
    },
]

export const acordionData = [
    {
        title:"What is Flowbite?",
        description:"Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },
    {
        title:"What is Flowbite?",
        description:"Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },
    {
        title:"What is Flowbite?",
        description:"Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },
]


export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export const getProducts = async() =>{
    try{
        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok) {
            throw new Error('Error al crear el libro');
        }
        const data = await response.json();
        return data;
    } catch(error){
        console.error('error en la petición:', error);
        throw error;
    }

}
// interface propProductCategory{
//     category: string;
// }

export const getProductsCategory = async( category:string) =>{
    try{
        const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
        if (!response.ok) {
            throw new Error('Error en la consulta');
        }
        const data = await response.json();
        return data;
    } catch(error){
        console.error('error en la petición:', error);
        throw error;
    }

}

