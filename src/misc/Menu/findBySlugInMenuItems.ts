import { menuItems } from './menu'

const findMenuItemBySlugInMenuItems = (
  slug: string,
  menuItems: MenuItem[]
): MenuItem | undefined => {
  return menuItems.reduce((acc, menuItem) => {
    if (menuItem.slug === slug) {
      return menuItem
    } else {
      if (menuItem.type === 'SubMenuMenuItem') {
        return findMenuItemBySlugInMenuItems(slug, menuItem.menuItems) ?? acc
      } else {
        return acc
      }
    }
  }, undefined as MenuItem | undefined)
}

export const findMenuItemBySlug = (slug: string): MenuItem | undefined => {
  return findMenuItemBySlugInMenuItems(slug, menuItems)
}
