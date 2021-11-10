import gql from 'graphql-tag'

export const FETCH_HOME_PROJECTS = gql`
  query FetchAllProjects(
    $limit: Int
    $orderBy: OrderBy
  ) {
    projects(
      take: $limit
      orderBy: $orderBy
    ) {
      projects {
        id
        users{
          name
        }
        title
        image
        slug
        description
        verified
        reactions {
          userId
        }
      }
      totalCount
    }
  }
`

export const FETCH_ALL_PROJECTS = gql`
  query FetchAllProjects(
    $limit: Int
    $skip: Int
    $orderBy: OrderBy
    $filterBy: FilterBy
    $searchTerm: String
    $category: String
  ) {
    projects(
      take: $limit
      skip: $skip
      orderBy: $orderBy
      filterBy: $filterBy
      searchTerm: $searchTerm
      category: $category
    ) {
      projects {
        id
        users{
          name
        }
        title
        image
        slug
        description
        verified
        reactions {
          userId
        }
      }
      totalCount
      categories {
        name
      }
    }
  }
`

export const FETCH_PROJECT_BY_SLUG = gql`
  query ProjectWithAdminBySlug($slug: String!) {
    projectWithAdminBySlug(slug: $slug) {
      project {
        title
        image
        slug
        description
        verified
        reactions {
          userId
        }
        categories {
          name
        }
      }
      admin {
        name
      }
    }
  }
`
