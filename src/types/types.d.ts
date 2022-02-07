type MenuItemContract = {
  type: string
  slug: string
  title: string
}

declare type ExampleMenuItem = MenuItemContract & {
  type: 'ExampleMenuItem'
  replUrl: string
}

declare type SubMenuMenuItem = MenuItemContract & {
  type: 'SubMenuMenuItem'
  menuItems: MenuItem[]
}

declare type BasicMenuItem = MenuItemContract & {
  type: 'BasicMenuItem'
  url: string
}

declare type MenuItem = ExampleMenuItem | SubMenuMenuItem | BasicMenuItem

declare type Menu = MenuItem[]
