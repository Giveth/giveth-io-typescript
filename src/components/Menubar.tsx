import Image from 'next/image'
import { useRouter } from 'next/router';
import styled from '@emotion/styled'
import Logo from '../../public/images/giveth-logo-blue.svg'
import { Button } from "./styled-components/Button";
import {Gray, Primary_Deep_200, Primary_Deep_800} from "./styled-components/Colors";
import { FlexCenter } from "./styled-components/Grid";
import Routes from '../lib/constants/Routes'
import {Link_Big} from "./styled-components/Typography";

const Menubar = () => {
  const router = useRouter()
  return (
    <Wrapper>
      <LogoBackground onClick={() => router.push('/')}>
        <Image width={50} height={50} src={Logo} alt={'Logo'} />
      </LogoBackground>
      <MainRoutes>
        <RoutesItem className='active'>Home</RoutesItem>
        <RoutesItem>Projects</RoutesItem>
        <RoutesItem>GIVeconomy</RoutesItem>
        <RoutesItem>Join</RoutesItem>
      </MainRoutes>
      <Button medium onClick={() => router.push(Routes.CreateProject)}>CREATE A PROJECT</Button>
      <WalletDetails className='flex-center'>
        <UserAvatar></UserAvatar>
        <div className='pl-2 pr-4'>
          <UserAddress>0xF278...42cc</UserAddress>
          <UserNetwork>Connected to xDai</UserNetwork>
        </div>
      </WalletDetails>
    </Wrapper>
  )
}

const MenuItem = styled.div`
  border-radius: 72px;
  background: white;
  height: 48px;
  color: ${Primary_Deep_800};
`

const UserAvatar = styled.div`
  border-radius: 50%;
  width: 24px;
  height: 24px;
  background: green;
`

const UserAddress = styled.div`
  font-size: 14px;
  line-height: 22px;
`

const UserNetwork = styled.div`
  color: ${Primary_Deep_200};
  font-size: 10px;
`

const WalletDetails = styled(MenuItem)`
  padding: 0 12.5px;
`

const RoutesItem = styled(Link_Big)`
  padding: 7px 15px;
  font-weight: 400;
  cursor: pointer;
  border-radius: 72px;

  &.active {
    background: ${Gray};
  }
`

const MainRoutes = styled(MenuItem)`
  padding: 0 10px;
  width: 408px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px;
  z-index: 1000;
`

const LogoBackground = styled(FlexCenter)`
  background: white;
  width: 66px;
  height: 66px;
  border-radius: 50%;
  cursor: pointer;
`

export default Menubar
