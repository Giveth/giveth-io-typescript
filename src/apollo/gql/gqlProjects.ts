import gql from 'graphql-tag'

export const FETCH_HOME_PROJECTS = gql`
  query FetchAllProjects($limit: Int, $orderBy: OrderBy) {
    projects(take: $limit, orderBy: $orderBy) {
      projects {
        id
        title
        image
        slug
        description
        verified
        totalDonations
        traceCampaignId
        reactions {
          userId
        }
        adminUser {
          name
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
        title
        image
        slug
        description
        verified
        totalDonations
        traceCampaignId
        reactions {
          userId
        }
        adminUser {
          name
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
  query ProjectBySlug($slug: String!) {
    projectBySlug(slug: $slug) {
      title
      image
      slug
      description
      verified
      traceCampaignId
      reactions {
        userId
      }
      categories {
        name
      }
      adminUser {
        name
      }
      donations {
        id
      }
    }
  }
`
