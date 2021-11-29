import { ICategory, IProject } from './types'

export interface IFetchAllProjects {
  projects: IProject[]
  totalCount: number
  categories: ICategory[]
}

export interface IProjectBySlug {
  project: IProject
}
