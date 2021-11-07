import styled from '@emotion/styled';
import {Neutral_Gray, Pink} from "./Colors";

interface ITypographyProps {
	size?: 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';
	wight?: 'bold' | 'normal';
	color?: string;
}

export const H1 = styled.h1<ITypographyProps>`
  font-family: TeX Gyre Adventor, sans-serif;
  font-size: 66px;
  font-style: normal;
  font-weight: 700;
  line-height: 86px;
  letter-spacing: -0.03em;
  color: inherit;
`

export const H2 = styled.h2`
  font-family: TeX Gyre Adventor, sans-serif;
	font-weight: 700;
	font-size: 52px;
	line-height: 80px;
	margin: 0;
	color: inherit;
`

export const H3 = styled.h3`
  font-family: TeX Gyre Adventor, sans-serif;
  font-size: 41px;
  font-weight: 700;
  line-height: 63px;
`

export const H4 = styled.h4`
  font-size: 24px;
  font-weight: 400;
  line-height: 34px;
  color: inherit;
`

export const H5 = styled.h5<ITypographyProps>`
  font-family: TeX Gyre Adventor, sans-serif;
  font-size: 25px;
  font-weight: 700;
  line-height: 38px;
  color: ${props => props.color || 'inherit'};
`

export const H6 = styled.h6<ITypographyProps>`
  font-family: TeX Gyre Adventor, sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.005em;
  color: ${props => props.color || 'inherit'};
`

export const Lead = styled.div`
  font-size: 21px;
  line-height: 32px;
`

export const D3 = styled.div`
  font-family: TeX Gyre Adventor, sans-serif;
  font-size: 88px;
  font-weight: 700;
  line-height: 106px;
  color: inherit;
`

export const Link_Big = styled.div`
  font-size: 16px;
  line-height: 21px;
`

export const P = styled.p<ITypographyProps>`
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.color || 'inherit'};
`

export const Caption = styled.div<ITypographyProps>`
  font-size: 14px;
  line-height: 21px;
  color: ${Neutral_Gray};
`

export const Overline_Small = styled.div`
  font-size: 10px;
  font-weight: 500;
  line-height: 13px;
  color: inherit;
`

export const Overline = styled.div`
  font-family: Red Hat Display, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: inherit;
`

export const Subline_Bold = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: inherit;
`

export const Button_Medium = styled.div`
  font-family: Red Hat Text, sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: ${Pink};
`
