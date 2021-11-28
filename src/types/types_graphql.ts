import { ICategory, IProject, IProjectUpdate } from './types'

export interface IFetchAllProjects {
  projects: IProject[]
  totalCount: number
  categories: ICategory[]
}

export interface IProjectBySlug {
  project: IProject
}

export interface IFetchProjectUpdates {
  projectUpdate: IProjectUpdate
}
