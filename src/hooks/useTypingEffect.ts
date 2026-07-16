import { useEffect, useState } from 'react'

interface Options {
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
}

export function useTypingEffect(words: string[], options: Options = {}) {
  const { typingSpeed = 70, deletingSpeed = 40, pauseTime = 1600 } = options
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (words.length === 0) return
    const current = words[wordIndex % words.length]

    if (!isDeleting && text === current) {
      const t = setTimeout(() => setIsDeleting(true), pauseTime)
      return () => clearTimeout(t)
    }

    if (isDeleting && text === '') {
      setIsDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
      return
    }

    const t = setTimeout(() => {
      setText((prev) =>
        isDeleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      )
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(t)
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime])

  return text
}
