import { 
  collection, 
  doc, 
  addDoc, 
  getDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  limit,
  onSnapshot,
  type DocumentData,
  type QueryConstraint,
  type Unsubscribe
} from 'firebase/firestore'
import { db } from './config'

export class FirestoreService {
  /**
   * Add a document to a collection
   */
  static async addDocument(collectionName: string, data: DocumentData) {
    try {
      const docRef = await addDoc(collection(db, collectionName), data)
      return docRef.id
    } catch (error) {
      console.error('Error adding document:', error)
      throw error
    }
  }

  /**
   * Get a single document by ID
   */
  static async getDocument(collectionName: string, docId: string) {
    try {
      const docRef = doc(db, collectionName, docId)
      const docSnap = await getDoc(docRef)
      
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() }
      } else {
        return null
      }
    } catch (error) {
      console.error('Error getting document:', error)
      throw error
    }
  }

  /**
   * Get all documents from a collection
   */
  static async getCollection(collectionName: string, constraints: QueryConstraint[] = []) {
    try {
      const collectionRef = collection(db, collectionName)
      const q = constraints.length > 0 ? query(collectionRef, ...constraints) : collectionRef
      const querySnapshot = await getDocs(q)
      
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
    } catch (error) {
      console.error('Error getting collection:', error)
      throw error
    }
  }

  /**
   * Update a document
   */
  static async updateDocument(collectionName: string, docId: string, data: Partial<DocumentData>) {
    try {
      const docRef = doc(db, collectionName, docId)
      await updateDoc(docRef, data)
      return true
    } catch (error) {
      console.error('Error updating document:', error)
      throw error
    }
  }

  /**
   * Delete a document
   */
  static async deleteDocument(collectionName: string, docId: string) {
    try {
      const docRef = doc(db, collectionName, docId)
      await deleteDoc(docRef)
      return true
    } catch (error) {
      console.error('Error deleting document:', error)
      throw error
    }
  }

  /**
   * Listen for real-time updates to a collection
   */
  static subscribeToCollection(
    collectionName: string, 
    callback: (data: DocumentData[]) => void,
    constraints: QueryConstraint[] = []
  ): Unsubscribe {
    const collectionRef = collection(db, collectionName)
    const q = constraints.length > 0 ? query(collectionRef, ...constraints) : collectionRef
    
    return onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      callback(data)
    }, (error) => {
      console.error('Error in collection subscription:', error)
    })
  }

  /**
   * Listen for real-time updates to a document
   */
  static subscribeToDocument(
    collectionName: string, 
    docId: string, 
    callback: (data: DocumentData | null) => void
  ): Unsubscribe {
    const docRef = doc(db, collectionName, docId)
    
    return onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        callback({ id: docSnap.id, ...docSnap.data() })
      } else {
        callback(null)
      }
    }, (error) => {
      console.error('Error in document subscription:', error)
    })
  }

  /**
   * Query helper functions
   */
  static where = where
  static orderBy = orderBy
  static limit = limit
}

export default FirestoreService
