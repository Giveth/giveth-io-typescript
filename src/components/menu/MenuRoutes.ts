import config from '../../../config'
import Routes from '../../lib/constants/Routes'

export const menuRoutes = [
  {
    title: 'Home',
    href: Routes.Home,
    desktopOnly: true
  },
  {
    title: 'Projects',
    href: Routes.Projects,
    desktopOnly: true
  },
  {
    title: 'GIVeconomy',
    href: config.LINKS.GIVECONOMY,
    desktopOnly: true
  },
  {
    title: 'Community',
    href: Routes.Join,
    desktopOnly: true
  },
  {
    title: 'Create a Project',
    href: Routes.CreateProject,
    desktopOnly: false
  }
]
