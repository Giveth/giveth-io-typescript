import styled from '@emotion/styled';
import { Pink } from "./Colors";

interface IButtonProps {
	secondary?: boolean;
	neutral?: boolean;
	outline?: boolean;
	ghost?: boolean;
  medium?: boolean;
  color?: string;
  background?: string;
}

export const Button = styled.button<IButtonProps>`
	background: ${props => {
    if (props.background) return props.background
    else if (props.ghost) return 'unset'
		else return Pink
	}};
	border-style: none;
	border-radius: ${props => {
	  if (props.medium) return '72px'
    else return '88px'
  }};
  color: ${props => {
    if (props.color) return props.color
    else return 'white'
  }};
  height: ${props => {
    if (props.medium) return '48px'
    else return '68px'
  }};
  font-weight: ${props => {
    if (props.ghost) return '400'
    else return '700'
  }};
	font-size: ${props => {
    if (props.medium) return '14px'
    else return '16px'
  }};
	line-height: 18px;
	text-align: center;
	cursor: pointer;
	display: block;
  padding: ${props => {
    if (props.medium) return '0 20px'
    else return '0 80px'
  }};
`;
