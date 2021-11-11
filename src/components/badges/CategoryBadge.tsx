import {ICategory} from "../../types/types";
import styled from "@emotion/styled";
import {Gray_600} from "../styled-components/Colors";
import {Subline} from "../styled-components/Typography";

const CategoryBadge = (props: { category: ICategory }) => {
  return(
    <Wrapper>
      {props.category.name}
    </Wrapper>
  )
}

const Wrapper = styled(Subline)`
  padding: 0 10px;
  height: 26px;
  display: flex;
  align-items: center;
  color: ${Gray_600};
  border: 1px solid ${Gray_600};
  border-radius: 48px;
  text-transform: uppercase;
`

export default CategoryBadge
