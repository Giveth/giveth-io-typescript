import styled from '@emotion/styled'
import { FunctionComponent, ReactNode, useState } from 'react'
import Select, { components, OptionProps, OnChangeValue, StylesConfig } from 'react-select'
import { defaultTheme } from 'react-select'
import { Gray_200, Gray_300, Gray_500, Gray_900 } from '../../styled-components/Colors'

interface ISelectObj {
  value: string
  label: string
  chainId?: number
  symbol?: string
  icon?: string
}

const { colors } = defaultTheme

const ImageIcon = ({ ...props }: any) => {
  const { value } = props
  let image_path = ''
  try {
    require(`../../../../public/images/tokens/${value.symbol?.toLowerCase()}.png`)
    image_path = `/images/tokens/${value.symbol?.toLowerCase()}.png`
  } catch (err) {
    image_path = '/images/tokens/eth.png' //set default image path
  }
  return (
    <Img
      key={value?.symbol}
      src={image_path}
      style={{ marginRight: '16px' }}
      width='24px'
      height='24px'
    />
  )
}

const Option = ({ children, ...props }: OptionProps<ISelectObj, false>) => {
  const value = props.data as any
  return (
    <components.Option {...props}>
      <RowContainer>
        <ImageIcon value={value} />
        {children}
      </RowContainer>
    </components.Option>
  )
}

const selectStyles: StylesConfig<ISelectObj, false> = {
  control: provided => ({
    ...provided,
    minWidth: 240,
    margin: 8,
    borderRadius: '8 !important',
    border: '2px solid #EBECF2'
  }),
  menu: () => ({
    borderRadius: 0,
    hyphens: 'auto',
    marginTop: 0,
    textAlign: 'left',
    wordWrap: 'break-word',
    padding: 8
  }),
  menuList: (base: any) => ({
    ...base,
    borderRadius: 0,
    padding: 0,
    width: '280px',
    height: '220px'
  }),
  singleValue: (base: any) => ({
    ...base,
    padding: 0
  }),
  container: (base: any) => ({
    ...base,
    borderColor: 'white'
  }),
  option: (provided, state) => ({
    ...provided,
    background: state.isSelected ? Gray_200 : 'white',
    ':hover': {
      background: Gray_200
    },
    color: Gray_900,
    padding: '8px 16px',
    borderRadius: '8px',
    cursor: 'pointer'
  })
}

const TokenPicker = (props: {
  tokenList: ISelectObj[] | undefined
  onChange: any
  onInputChange: any
}) => {
  const { tokenList, onChange, onInputChange } = props

  const [value, setValue] = useState<ISelectObj | null>()
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }
  const onSelectChange = (value: OnChangeValue<ISelectObj, false>) => {
    toggleOpen()
    setValue(value)
    onChange(value)
  }

  return (
    <Dropdown
      isOpen={isOpen}
      onClose={toggleOpen}
      target={
        <TargetContainer onClick={toggleOpen}>
          <TokenContainer>
            {value && <ImageIcon value={value} />}
            <p style={{ color: Gray_900 }}>{value ? `${value.label}` : 'Select a token'}</p>
          </TokenContainer>
          <ArrowImg
            src={!isOpen ? '/images/caret_down.svg' : '/images/caret_up.svg'}
            alt='arrow down'
            width='8px'
            height='6px'
          />{' '}
        </TargetContainer>
      }
    >
      <Select
        autoFocus
        backspaceRemovesValue={false}
        components={{ DropdownIndicator, IndicatorSeparator: null, Option }}
        controlShouldRenderValue={false}
        hideSelectedOptions={false}
        isClearable={false}
        menuIsOpen
        onChange={onSelectChange}
        onInputChange={onInputChange}
        options={tokenList}
        placeholder='Search...'
        styles={selectStyles}
        tabSelectsValue={false}
        value={value}
      />
    </Dropdown>
  )
}

// styled components

const Menu = (props: JSX.IntrinsicElements['div']) => {
  const shadow = 'hsla(218, 50%, 10%, 0.1)'
  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: 4,
        boxShadow: `0 0 0 1px ${shadow}, 0 4px 11px ${shadow}`,
        marginTop: 8,
        position: 'absolute',
        zIndex: 2
      }}
      {...props}
    />
  )
}
const Blanket = (props: JSX.IntrinsicElements['div']) => (
  <div
    style={{
      bottom: 0,
      left: 0,
      top: 0,
      right: 0,
      position: 'fixed',
      zIndex: 1
    }}
    {...props}
  />
)
interface DropdownProps {
  readonly isOpen: boolean
  readonly target: ReactNode
  readonly onClose: () => void
}
const Dropdown: FunctionComponent<DropdownProps> = ({ children, isOpen, target, onClose }) => (
  <div style={{ position: 'relative' }}>
    {target}
    {isOpen ? <Menu>{children}</Menu> : null}
    {isOpen ? <Blanket onClick={onClose} /> : null}
  </div>
)
const Svg = (p: JSX.IntrinsicElements['svg']) => (
  <svg width='24' height='24' viewBox='0 0 24 24' focusable='false' role='presentation' {...p} />
)
const DropdownIndicator = () => (
  <div style={{ color: colors.neutral20, height: 24, width: 32 }}>
    <Svg>
      <path
        d='M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z'
        fill='currentColor'
        fillRule='evenodd'
      />
    </Svg>
  </div>
)

const TargetContainer = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: row;
  justify-content: space-between;
  height: 54px;
  border: 2px solid ${Gray_300};
  padding: 14px 16px;
  background: ${Gray_200};
  border-radius: 6px 0px 0px 6px;
  align-items: center;
`

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const TokenContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
`
const Img = styled.img`
  margin-left: -10px;
`
const ArrowImg = styled.img`
  margin-left: 5px;
`

export default TokenPicker
