'use client'

import { useSession } from 'next-auth/react'
import { Avatar, Wrap, WrapItem } from '@chakra-ui/react'

export default function Home() {
    const { data: session, status } = useSession()
    if (status !== 'authenticated') {
        return null
    }
    return (
        <Wrap>
            <WrapItem>
                <Avatar
                    size="sm"
                    name={session.user?.name as string}
                    src={session.user?.image as string}
                />
                {session.user?.name}
            </WrapItem>
        </Wrap>
    )
}
