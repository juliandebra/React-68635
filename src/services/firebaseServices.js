import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../config/firebaseConfig'

export const getProducts = async () => {
  const prodCollection = collection(db, 'Productos')
  const productos = await getDocs(prodCollection)
  return productos.docs.map(item => ({
    id: item.id,
    ...item.data(),
  }))
}
export const getProductById = async id => {
  const prodDoc = doc(db, 'Productos', id)
  const producto = await getDoc(prodDoc)
  return { id: producto.id, ...producto.data() }
}

//Servicio para llamar lista filtrada por categoría (query)
//query where

//Servicio para crear la orden en la collection Ordenes
//addDoc

//EXTRA: Servicio para actualizar stock
// updateDoc
