import { ICategory, IProject } from './types'

export interface IFetchAllProjects {
  projects: IProject[]
  totalCount: number
  categories: ICategory[]
}

export interface IUserByAddress {
  id?: string
  firstName?: string
  lastName?: string
  name?: string
  email?: string
  avatar?: string
  walletAddress?: string
  url?: string
  location?: string
}
