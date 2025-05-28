import { createContext, useContext, useState, type ReactNode } from 'react'
import type { PostCard } from './data/post-card'
import { postCards } from './data/post-card'
import { useRouter } from 'next/navigation'
import type { Post } from './data/post'
import { postsFeed } from './data/post'

interface PostContextType {
  cards: PostCard[]
  setCards: React.Dispatch<React.SetStateAction<PostCard[]>>
  posts: Post[]
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>
  activePost: Post | null
  setActivePostById: (id: number) => void
}

const PostContext = createContext<PostContextType | undefined>(undefined)

export function PostProvider({ children }: { children: ReactNode }): JSX.Element {
  const [cards, setCards] = useState<PostCard[]>(postCards)
  const [posts, setPosts] = useState<Post[]>(postsFeed)
  const [activePost, setActivePost] = useState<Post | null>(null)
  const router = useRouter()

  const setActivePostById = (id: number): void => {
    const card = cards.find((card) => card.id === id)
    const post = posts.find((post) => post.id === id)
    if (post && card) {
      setActivePost(post)
      router.push(card.path)
    }
  }

  return (
    <PostContext.Provider
      value={{
        cards,
        setCards,
        posts,
        setPosts,
        activePost,
        setActivePostById,
      }}
    >
      {children}
    </PostContext.Provider>
  )
}

export function usePost(): PostContextType {
  const context = useContext(PostContext)
  if (!context) {
    throw new Error('usePost deve ser usado dentro de um PostProvider')
  }
  return context
}
