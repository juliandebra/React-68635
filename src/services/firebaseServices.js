import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  writeBatch,
} from 'firebase/firestore'
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

export const createOrder = async newOrder => {
  const orderCollection = collection(db, 'Ordenes')
  const orderCreated = await addDoc(orderCollection, newOrder)
  return orderCreated
}

//EXTRA: Servicio para actualizar stock
// writeBatch
export const createOrderAndUpdateStock = async newOrder => {
  const batch = writeBatch(db)

  const orderCollection = collection(db, 'Ordenes')
  const orderCreated = doc(orderCollection)
  batch.set(orderCreated, newOrder)
  console.log('orderCreated', orderCreated)

  newOrder.items.forEach(prod => {
    const producto = doc(db, 'Productos', prod.id)
    console.log('producto', producto)
    batch.update(producto, { stock: prod.stock - prod.quantity })
  })

  try {
    await batch.commit()
    return orderCreated
  } catch (err) {
    console.log(err)
  }
}
