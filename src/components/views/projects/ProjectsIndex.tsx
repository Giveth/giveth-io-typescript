import styled from "@emotion/styled";
import {useEffect, useRef, useState} from "react";
import Select from 'react-select'
import Debounced from 'lodash.debounce'
import {useRouter} from "next/router";

import {ICategory, IProject, IProjects} from "../../../types/types";
import {H5, Subline, Body_P} from "../../styled-components/Typography";
import {
  Giv_100,
  Gray_700,
  Gray_900,
  Pinky_500,
  Primary_Deep_500
} from "../../styled-components/Colors";
import {Button} from "../../styled-components/Button";
import ProjectCard from "../../project-card/ProjectCard";
import {capitalizeFirstLetter} from "../../../lib/helpers";
import {FETCH_ALL_PROJECTS} from "../../../apollo/gql/gqlProjects";
import {client} from "../../../apollo/client";
import {gqlEnums} from "../../../apollo/gql/gqlEnums";
import SearchBox from "../../SearchBox";
import Routes from "../../../lib/constants/Routes";
import {Arc} from "../../styled-components/Arc";

interface ISelectObj {
  value: string
  label: string
  direction?: string
}

interface IQueries {
  orderBy: { field: string, direction: string }
  skip?: number
  limit?: number
  category?: string
  searchTerm?: string
}

const cardsMargin = '10px'
const allCategoryObj = {value: 'All', label: 'All'}
const sortByObj = [
  {label: 'Default', value: gqlEnums.QUALITYSCORE},
  {label: 'Amount Raised', value: gqlEnums.DONATIONS},
  {label: 'Hearts', value: gqlEnums.HEARTS},
  {label: 'Date Created - Descending', value: gqlEnums.CREATIONDATE},
  {label: 'Date Created - Ascending', value: gqlEnums.CREATIONDATE, direction: gqlEnums.ASC},
  {label: 'Verified', value: gqlEnums.VERIFIED}
]

const buildCategoryObj = (array: ICategory[]) => {
  let newArray = [allCategoryObj]
  array.forEach(e => {
    const obj: ISelectObj = {label: capitalizeFirstLetter(e.name), value: e.name}
    newArray.push(obj)
  })
  return newArray
}

const ProjectsIndex = (props: IProjects) => {
  const {projects, totalCount: _totalCount, categories} = props

  const [categoriesObj, setCategoriesObj] = useState<ISelectObj[]>()
  const [selectedCategory, setSelectedCategory] = useState<ISelectObj>(allCategoryObj)
  const [isLoading, setIsLoading] = useState(false)
  const [filteredProjects, setFilteredProjects] = useState<IProject[]>(projects)
  const [sortBy, setSortBy] = useState<ISelectObj>(sortByObj[0])
  const [search, setSearch] = useState<string>()
  const [totalCount, setTotalCount] = useState(_totalCount)

  const isFirstRender = useRef(true)
  const debouncedSearch = useRef<any>()
  const pageNum = useRef(0)

  const router = useRouter()

  useEffect(() => {
    setCategoriesObj(buildCategoryObj(categories))
    debouncedSearch.current = Debounced(setSearch, 1000)
  }, [])

  useEffect(() => {
    if (!isFirstRender.current) fetchProjects()
    else isFirstRender.current = false
  }, [selectedCategory.value, sortBy.label, search])

  const fetchProjects = (isLoadMore?: boolean, loadNum?: number ) => {
    const categoryQuery = selectedCategory.value

    const variables: IQueries = {
      orderBy: {field: sortBy.value, direction: gqlEnums.DESC},
      limit: projects.length,
      skip: projects.length * (loadNum || 0),
    }

    if (sortBy.direction) variables.orderBy.direction = sortBy.direction
    if (categoryQuery && categoryQuery !== 'All') variables.category = categoryQuery
    if (search) variables.searchTerm = search

    setIsLoading(true)

    client
      .query({
        query: FETCH_ALL_PROJECTS,
        variables,
        fetchPolicy: 'no-cache'
      })
      .then((res: any) => {
        const data = res.data?.projects?.projects
        const count = res.data?.projects?.totalCount
        if (count) setTotalCount(count)
        if (data) {
          if (isLoadMore) setFilteredProjects(filteredProjects.concat(data))
          else setFilteredProjects(data)
        }
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
        // Toast({
        //   content: err.message || JSON.stringify(err),
        //   type: 'error'
        // })
      })
  }

  const handleChange = (type: string, input: any) => {
    pageNum.current = 0
    if (type === 'search') debouncedSearch.current(input)
    else if (type === 'sortBy') setSortBy(input)
    else if (type === 'category') setSelectedCategory(input)
  }

  const loadMore = () => {
    fetchProjects(true, pageNum.current + 1)
    pageNum.current = pageNum.current + 1
  }

  const showLoadMore = totalCount > filteredProjects.length

  return (
    <>
      <BigArc />
      <Wrapper>
        <Title>Explore <span>{_totalCount} Projects</span></Title>

        <FiltersSection>
          <SelectComponent>
            <Label>CATEGORY</Label>
            <Select
              classNamePrefix="select"
              value={selectedCategory}
              onChange={e => handleChange('category', e)}
              options={categoriesObj}
            />
          </SelectComponent>
          <SelectComponent>
            <Label>SORT BY</Label>
            <Select
              classNamePrefix="select"
              value={sortBy}
              onChange={e => handleChange('sortBy', e)}
              options={sortByObj}
            />
          </SelectComponent>
          <div>
            <Label/>
            <SearchBox onChange={(e: string) => handleChange('search', e)}/>
          </div>
        </FiltersSection>

        {isLoading && <div className='dot-flashing mx-auto my-3'/>}

        <ProjectsContainer>
          {filteredProjects.map(project =>
            <div key={project.id} style={{margin: cardsMargin}}>
              <ProjectCard project={project}/>
            </div>
          )}
        </ProjectsContainer>

        {showLoadMore && (
          <>
            <Button
              onClick={loadMore}
              className='mx-auto mt-5'
              outline
              color={Pinky_500}
            >
              {isLoading ? <div className='dot-flashing' /> : 'LOAD MORE'}
            </Button>
            <Button
              onClick={() => router.push(Routes.CreateProject)}
              color={Pinky_500}
              ghost className='mx-auto mt-2'>
              Create a Project
            </Button>
          </>
        )}
      </Wrapper>
    </>
  )
}

const BigArc = styled(Arc)`
  border-width: 250px;
  border-color: ${Giv_100};
  opacity: 40%;
  top: -2340px;
  right: 300px;
  width: 3600px;
  height: 3600px;
  z-index: 0;
`

const SelectComponent = styled(Body_P)`
  width: 343px;
  font-weight: 500;
  color: ${Gray_900};
`

const Label = styled(Subline)`
  color: ${Primary_Deep_500};
  height: 18px;
`

const FiltersSection = styled.div`
  padding: 32px 21px;
  background: white;
  border-radius: 16px;
  margin-bottom: 14px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  position: relative;
`

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -${cardsMargin};
`

const Wrapper = styled.div`
  padding: 166px 30px 4px 30px;
`

const Title = styled(H5)`
  margin-bottom: 25px;
  span {
    color: ${Gray_700};
  }
`

export default ProjectsIndex
