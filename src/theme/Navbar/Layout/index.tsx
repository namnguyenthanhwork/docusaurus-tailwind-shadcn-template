import clsx from 'clsx'
import type { ComponentProps, ReactNode } from 'react'
import { useEffect, useState } from 'react'

import { ThemeClassNames, useThemeConfig } from '@docusaurus/theme-common'
import { useHideableNavbar, useNavbarMobileSidebar } from '@docusaurus/theme-common/internal'
import { translate } from '@docusaurus/Translate'

import type { Props } from '@theme/Navbar/Layout'
import NavbarMobileSidebar from '@theme/Navbar/MobileSidebar'

import styles from './styles.module.css'

function NavbarBackdrop(props: ComponentProps<'div'>) {
  return (
    <div
      role='presentation'
      {...props}
      className={clsx('navbar-sidebar__backdrop', props.className)}
    />
  )
}

export default function NavbarLayout({ children }: Props): ReactNode {
  const {
    navbar: { hideOnScroll, style }
  } = useThemeConfig()
  const mobileSidebar = useNavbarMobileSidebar()
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      ref={navbarRef}
      aria-label={translate({
        id: 'theme.NavBar.navAriaLabel',
        message: 'Main',
        description: 'The ARIA label for the main navigation'
      })}
      className={clsx(
        ThemeClassNames.layout.navbar.container,
        'navbar',
        'navbar--fixed-top',
        hideOnScroll && [styles.navbarHideable, !isNavbarVisible && styles.navbarHidden],
        {
          'navbar--dark': style === 'dark',
          'navbar--primary': style === 'primary',
          'navbar-sidebar--show': mobileSidebar.shown,
          'shadow-none': !hasScrolled,
          [styles.navbarScrolled]: hasScrolled
        }
      )}
    >
      {children}
      <NavbarBackdrop onClick={mobileSidebar.toggle} />
      <NavbarMobileSidebar />
    </nav>
  )
}
