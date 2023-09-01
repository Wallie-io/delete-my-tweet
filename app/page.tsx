'use client'

import { useSession } from 'next-auth/react'
import styles from './page.module.css'

export default function Home() {
    const { data: session, status } = useSession()
    return (
        <main className={styles.main}>
            <div>
                Auth Status: {status}{' '}
                {status === 'authenticated' && (
                    <pre>{JSON.stringify(session, null, 4)}</pre>
                )}
            </div>
        </main>
    )
}
