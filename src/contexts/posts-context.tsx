import { createContext, useContext, useState, ReactNode } from 'react'
import { PostCard, postCards } from './data/post-card'
import { useRouter } from 'next/navigation'
import { Post, postsFeed } from './data/post'

interface PostContextType {
  cards: PostCard[]
  setCards: React.Dispatch<React.SetStateAction<PostCard[]>>
  posts: any
  setPosts: React.Dispatch<React.SetStateAction<any>>
  activePost: Post | null
  setActivePostById: (id: number) => void
}

const PostContext = createContext<PostContextType | undefined>(undefined)

export function PostProvider({ children }: { children: ReactNode }) {
  const [cards, setCards] = useState<PostCard[]>(postCards)
  const [posts, setPosts] = useState<Post[]>(postsFeed)
  const [activePost, setActivePost] = useState<Post | null>(null)
  const router = useRouter()

  const setActivePostById = (id: number) => {
    const card = cards?.find((card: PostCard) => card.id === id)
    const post = posts?.find((post: Post) => post.id === id)
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
