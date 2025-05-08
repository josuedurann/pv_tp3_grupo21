import { mostrarproductos } from "./utilArray.js"
import { filtrarproductos } from "./utilArray.js"
import { preciosconiva } from "./utilArray.js"

const productos = [
    {   descripcion: "Teclado",
        precio: 100000    },
    {   descripcion: "Mouse",
        precio: 50000     },
    {   descripcion: "Monitor",
        precio: 200000    },
    {   descripcion: "CPU",
        precio: 500000    },
    {   descripcion: "Parlantes",
        precio: 150000    },
    {   descripcion: "Webcam",
        precio: 80000     },       
]


mostrarproductos(productos);
filtrarproductos(productos);
preciosconiva(productos);