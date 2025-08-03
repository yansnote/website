import { ref, onUnmounted, type Ref } from 'vue'
import { 
  type DocumentData, 
  type QueryConstraint,
  type Unsubscribe 
} from 'firebase/firestore'
import FirestoreService from '@/firebase/firestore'

export function useFirestore() {
  const loading = ref(false)
  const error = ref<string | null>(null)

  /**
   * Add a document to a collection
   */
  const addDocument = async (collectionName: string, data: DocumentData) => {
    loading.value = true
    error.value = null
    
    try {
      const docId = await FirestoreService.addDocument(collectionName, data)
      return docId
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'An error occurred'
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Get a single document
   */
  const getDocument = async (collectionName: string, docId: string) => {
    loading.value = true
    error.value = null
    
    try {
      const doc = await FirestoreService.getDocument(collectionName, docId)
      return doc
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'An error occurred'
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Get a collection of documents
   */
  const getCollection = async (collectionName: string, constraints: QueryConstraint[] = []) => {
    loading.value = true
    error.value = null
    
    try {
      const docs = await FirestoreService.getCollection(collectionName, constraints)
      return docs
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'An error occurred'
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Update a document
   */
  const updateDocument = async (collectionName: string, docId: string, data: Partial<DocumentData>) => {
    loading.value = true
    error.value = null
    
    try {
      await FirestoreService.updateDocument(collectionName, docId, data)
      return true
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'An error occurred'
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Delete a document
   */
  const deleteDocument = async (collectionName: string, docId: string) => {
    loading.value = true
    error.value = null
    
    try {
      await FirestoreService.deleteDocument(collectionName, docId)
      return true
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'An error occurred'
      throw err
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    error,
    addDocument,
    getDocument,
    getCollection,
    updateDocument,
    deleteDocument
  }
}

/**
 * Composable for real-time collection listening
 */
export function useCollection(collectionName: string, constraints: QueryConstraint[] = []) {
  const data: Ref<DocumentData[]> = ref([])
  const loading = ref(true)
  const error = ref<string | null>(null)
  let unsubscribe: Unsubscribe | null = null

  const startListening = () => {
    loading.value = true
    error.value = null

    unsubscribe = FirestoreService.subscribeToCollection(
      collectionName,
      (newData) => {
        data.value = newData
        loading.value = false
      },
      constraints
    )
  }

  const stopListening = () => {
    if (unsubscribe) {
      unsubscribe()
      unsubscribe = null
    }
  }

  // Start listening immediately
  startListening()

  // Clean up on component unmount
  onUnmounted(() => {
    stopListening()
  })

  return {
    data,
    loading,
    error,
    startListening,
    stopListening
  }
}

/**
 * Composable for real-time document listening
 */
export function useDocument(collectionName: string, docId: string) {
  const data: Ref<DocumentData | null> = ref(null)
  const loading = ref(true)
  const error = ref<string | null>(null)
  let unsubscribe: Unsubscribe | null = null

  const startListening = () => {
    loading.value = true
    error.value = null

    unsubscribe = FirestoreService.subscribeToDocument(
      collectionName,
      docId,
      (newData) => {
        data.value = newData
        loading.value = false
      }
    )
  }

  const stopListening = () => {
    if (unsubscribe) {
      unsubscribe()
      unsubscribe = null
    }
  }

  // Start listening immediately
  startListening()

  // Clean up on component unmount
  onUnmounted(() => {
    stopListening()
  })

  return {
    data,
    loading,
    error,
    startListening,
    stopListening
  }
}
