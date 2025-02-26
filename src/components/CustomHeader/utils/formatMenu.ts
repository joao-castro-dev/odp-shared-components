import {
  FormattingMenuData,
  FormattingSubMenuData,
  FormattingSubMenuThirdLevelData,
  MenuData,
  MenuFormattingProps,
  UnformattedMenuItemProps,
} from "../CustomHeaderTypes";

export function formatMenu(
  unformattedMenu: UnformattedMenuItemProps[]
): MenuData[] {
  const map = new Map();

  sortUnformattedMenu(unformattedMenu);
  

  unformattedMenu?.forEach((item) => {
    map.set(item.id, {
      parentId: item.parentId,
      position: item.position,
      title: item.title,
      href: item.url,
      sublevel: [],
    });
  });

  const result: FormattingMenuData[] = [];

  unformattedMenu?.forEach((item) => {
    if (item.parentId) {
      if (map.has(item.parentId)) {
        const parent = map.get(item.parentId);
        const child = map.get(item.id);
        parent.sublevel.push(child);
      }
    } else {
      result.push(map.get(item.id));
    }
  });

  hierachizeMenu(result);

  removeUnusedProps(result, ["parentId", "position", "sublevel"]);

  return result;
}

function sortUnformattedMenu(unformattedMenu: UnformattedMenuItemProps[]) {
  unformattedMenu?.sort((a, b) => a.position - b.position);
  unformattedMenu?.sort((a, b) => {
    if (a.parentId && !b.parentId) {
      return -1;
    } else if (!a.parentId && b.parentId) {
      return 1;
    } else {
      return 0;
    }
  });
}

function hierachizeMenu(menu: FormattingMenuData[]) {
  menu.forEach((item) => {
    if (item.sublevel.length) {
      item.submenu = item.sublevel as (FormattingSubMenuData &
        MenuFormattingProps)[];
      item.submenu.forEach((submenuItem) => {
        if (submenuItem.sublevel.length) {
          const chunkSize = 7;
          submenuItem.submenuThirdLevel = [];
          for (let i = 0; i < submenuItem.sublevel.length; i += chunkSize) {
            const chunk = submenuItem.sublevel.slice(i, i + chunkSize);
            submenuItem.submenuThirdLevel.push(
              chunk as (FormattingSubMenuThirdLevelData & MenuFormattingProps)[]
            );
          }

          submenuItem.submenuThirdLevel.forEach((column) => {
            column.forEach((thirdLvlMenuItem) => {
              if (thirdLvlMenuItem.sublevel.length) {
                thirdLvlMenuItem.submenuFourthLevel = thirdLvlMenuItem.sublevel;
              }
            });
          });
        }
      });
    }
  });
}

function removeUnusedProps(
  menuArray: FormattingMenuData[],
  props: (keyof MenuFormattingProps)[]
) {
  menuArray.forEach((item) => {
    props.forEach((prop) => {
      delete item[prop];
    });

    if (item.submenu) {
      item.submenu.forEach((submenu) => {
        props.forEach((prop) => {
          delete submenu[prop];
        });

        if (submenu.submenuThirdLevel) {
          submenu.submenuThirdLevel.forEach((thirdLvlColumn) => {
            thirdLvlColumn.forEach((thirdLevel) => {
              props.forEach((prop) => {
                delete thirdLevel[prop];
              });

              if (thirdLevel.submenuFourthLevel) {
                thirdLevel.submenuFourthLevel.forEach((fourthLevel) => {
                  props.forEach((prop) => {
                    delete fourthLevel[prop];
                  });
                });
              }
            });
          });
        }
      });
    }
  });
}
