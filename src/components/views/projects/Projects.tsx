import styled from "@emotion/styled";
import {useEffect, useRef, useState} from "react";
import Select from 'react-select'
import {ICategory, IProject, IProjects} from "../../../types/types";
import {H5, Subline, P} from "../../styled-components/Typography";
import {Gray_700, Primary_Deep_500} from "../../styled-components/Colors";
import Menubar from "../../Menubar";
import ProjectCard from "../../project-card/ProjectCard";
import {capitalizeFirstLetter} from "../../../lib/helpers";
import {FETCH_ALL_PROJECTS} from "../../../apollo/gql/gqlProjects";
import {client} from "../../../apollo/client";
import {gqlEnums} from "../../../apollo/gql/gqlEnums";
import SearchBox from "../../SearchBox";

interface ICategoryObj {
  value: string
  label: string
}

const cardsMargin = '10px'
const allCategoryObj = { value: 'All', label: 'All' }
const sortByObj = [
  { label: 'Default', value: gqlEnums.QUALITYSCORE },
  { label: 'Amount Raised', value: gqlEnums.DONATIONS },
  { label: 'Hearts', value: gqlEnums.HEARTS },
  { label: 'Date Created - Descending', value: gqlEnums.CREATIONDATE },
  { label: 'Date Created - Ascending', value: gqlEnums.CREATIONDATE, direction: gqlEnums.ASC },
  { label: 'Verified', value: gqlEnums.VERIFIED }
]

const buildCategoryObj = (array: ICategory[]) => {
  let newArray = [allCategoryObj]
  array.forEach(e => {
    const obj:ICategoryObj = { label: capitalizeFirstLetter(e.name), value: e.name }
    newArray.push(obj)
  })
  return newArray
}

const Projects = (props: IProjects) => {
  const { projects, totalCount: _totalCount, categories } = props

  const [categoriesObj, setCategoriesObj] = useState<ICategoryObj[]>()
  const [selectedCategory, setSelectedCategory] = useState<ICategoryObj>(allCategoryObj)
  const [isLoading, setIsLoading] = useState(false)
  const [totalCount, setTotalCount] = useState(_totalCount)
  const [filteredProjects, setFilteredProjects] = useState<IProject[]>()
  const [sortBy, setSortBy] = useState(sortByObj[0])
  const [currentPage, setCurrentPage] = useState(0)

  const pageCount = Math.ceil(totalCount / projects.length)

  const isFirstRender = useRef(true)

  useEffect(() => {
    setCategoriesObj(buildCategoryObj(categories))
    // debouncedSearch.current = Debounced(setSearch, 1000)
  }, [])

  useEffect(() => {
    if (!isFirstRender.current) {
      fetchProjects({
        categoryQuery: selectedCategory.value,
        sortByQuery: sortBy,
        // searchQuery: search,
        // skip: itemsPerPage * currentPage,
        // filterQuery: filterBy.value
      })
    } else isFirstRender.current = false
  }, [selectedCategory.value, sortBy.label])

  const fetchProjects = queries => {
    const { searchQuery, categoryQuery, sortByQuery, skip, filterQuery } = queries
    const variables = {
      orderBy: { field: sortByQuery.value, direction: gqlEnums.DESC },
      limit: projects.length,
      skip
    }

    if (sortByQuery.direction) variables.orderBy.direction = sortByQuery.direction
    if (categoryQuery && categoryQuery !== 'All') variables.category = categoryQuery
    // if (searchQuery) variables.searchTerm = searchQuery
    // if (filterQuery) variables.filterBy = { field: filterQuery, value: true }
    // else delete variables.filterBy

    setIsLoading(true)

    client
      .query({
        query: FETCH_ALL_PROJECTS,
        variables,
        fetchPolicy: 'no-cache'
      })
      .then(res => {
        const data = res.data?.projects?.projects
        const count = res.data?.projects?.totalCount
        if (data) setFilteredProjects(data)
        if (count) setTotalCount(count)
        setIsLoading(false)
      })
      .catch(err => {
        setIsLoading(false)
        // Toast({
        //   content: err.message || JSON.stringify(err),
        //   type: 'error'
        // })
      })
  }

  const selectCategory = (e: any) => {
    setSelectedCategory(e)
    setCurrentPage(0)
  }

  const selectSortBy = (e: any) => {
    setSortBy(e)
    setCurrentPage(0)
  }

  console.log(filteredProjects, selectedCategory)

  return(
    <>
      <Menubar />
      <Wrapper>
        <Title>Explore <span>{totalCount} Projects</span></Title>
        <FiltersSection>
          <SelectComponent>
            <Label>CATEGORY</Label>
            <Select classNamePrefix="select" value={selectedCategory} onChange={selectCategory} options={categoriesObj}/>
          </SelectComponent>
          <SelectComponent>
            <Label>SORT BY</Label>
            <Select classNamePrefix="select" value={sortBy} onChange={selectSortBy} options={sortByObj}/>
          </SelectComponent>
          <SearchBox />
        </FiltersSection>
        <ProjectsContainer>
          {(filteredProjects || projects).map(project =>
            <div key={project.id} style={{ margin: cardsMargin }}>
              <ProjectCard project={project} />
            </div>
          )}
        </ProjectsContainer>
      </Wrapper>
    </>
  )
}

const SelectComponent = styled(P)`
  width: 343px;
  font-weight: 500;
`

const Label = styled(Subline)`
  color: ${Primary_Deep_500};
`

const FiltersSection = styled.div`
  padding: 32px 21px;
  background: white;
  border-radius: 16px;
  margin-bottom: 14px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -${cardsMargin};
`

const Wrapper = styled.div`
  padding: 166px 30px;
  background: #00000003;
`

const Title = styled(H5)`
  margin-bottom: 25px;
  span {
    color: ${Gray_700};
  }
`

export default Projects
