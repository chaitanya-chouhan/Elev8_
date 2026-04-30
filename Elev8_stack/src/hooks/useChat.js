import {
  collection, addDoc, onSnapshot,
  query, orderBy, serverTimestamp, limit,
  deleteDoc, doc, getDocs
} from 'firebase/firestore'
import { useEffect, useState, useRef } from 'react'
import { db } from '../firebase'

const ROOM_ID = 'elev8-community' // single community chat room

/**
 * Hook: subscribe to real-time messages in a chat room
 * @param {string} roomId
 */
export function useChat(roomId = ROOM_ID) {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const messagesRef = collection(db, 'chats', roomId, 'messages')
    const q = query(messagesRef, orderBy('timestamp', 'asc'), limit(100))

    const unsub = onSnapshot(q, (snap) => {
      const msgs = snap.docs.map(d => ({ id: d.id, ...d.data() }))
      setMessages(msgs)
      setLoading(false)
    })

    return unsub
  }, [roomId])

  /**
   * Send a message to the chat room
   */
  async function sendMessage(text, user) {
    if (!text.trim() || !user) return
    const messagesRef = collection(db, 'chats', roomId, 'messages')
    await addDoc(messagesRef, {
      text: text.trim(),
      uid: user.uid,
      displayName: user.displayName || user.email,
      photoURL: user.photoURL || null,
      timestamp: serverTimestamp(),
    })
  }

  /**
   * Delete a specific message
   */
  async function deleteMessage(msgId) {
    if (!msgId) return
    await deleteDoc(doc(db, 'chats', roomId, 'messages', msgId))
  }

  /**
   * Clear all messages in the chat (Admin/Demo feature)
   */
  async function clearChat() {
    const messagesRef = collection(db, 'chats', roomId, 'messages')
    const snap = await getDocs(query(messagesRef, limit(100)))
    const deletePromises = snap.docs.map(d => deleteDoc(d.ref))
    await Promise.all(deletePromises)
  }

  return { messages, loading, sendMessage, deleteMessage, clearChat }
}
