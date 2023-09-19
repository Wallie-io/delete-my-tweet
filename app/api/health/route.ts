import { NextApiRequest, NextApiResponse } from 'next'
import db from '../db'
import { NextResponse } from 'next/server'

type HealthRes = {
    success: boolean
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const users = await db.users.findOne({})
    console.log(users)
    return NextResponse.json<HealthRes>({ success: true })
}

export { handler as GET }
