import { rawDb } from './mongoConnection'

interface User {
    _id: string
    twitter_refresh_token: string
    twitter_access_token: string
}

const users = rawDb.collection<User>('users')

export default users
