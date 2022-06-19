import { SessionProvider as NextAuthProvider } from 'next-auth/react'
import React, { ReactNode } from "react"

interface SessionMockProps {
  sessionInfo?: {
    user: {
      name: string
    }
    expires: string
  }
}

export const SessionMock: React.FC<SessionMockProps> = ({ sessionInfo, children }) => {
  return (
    <NextAuthProvider session={sessionInfo}>
      {children}
    </NextAuthProvider>
  )
}
