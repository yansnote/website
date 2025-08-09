import { Timestamp } from 'firebase/firestore'

export interface HobbyType {
  id: string
  name: string
}

export interface SocialType {
  id: string
  name: string
  link: string
}

export interface TimelineType {
  id: string
  type: string
  description: string
  date: Timestamp
}

export interface InfoType {
  id: string
  type: string
  name: string | null
  description: string | null
  link: string | null
}
