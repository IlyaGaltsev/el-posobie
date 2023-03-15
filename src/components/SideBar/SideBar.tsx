import { navBook } from '../../constants/navBook'
import * as S from './SideBar.styled'

interface ISideBar {
  selectPageBook: any
  selectValue: any
  setOpen: any
  open: boolean
}

const SideBar = ({ selectPageBook, selectValue, setOpen, open }: ISideBar) => {
  const onClose = () => {
    setOpen(false)
  }

  const setWidthLeftMenu = () => {
    let width = 400

    if (window.innerWidth < 440) {
      width = 280
    }
    return width
  }

  return (
    <>
      <S.LeftMenu
        title="Оглавление"
        closable={false}
        onClose={onClose}
        width={setWidthLeftMenu()}
        placement="left"
        open={open}
      >
        <S.NavMenu
          defaultSelectedKeys={selectValue.toString()}
          selectedKeys={selectValue.toString()}
          defaultOpenKeys={['1']}
          mode="inline"
          theme="light"
          items={navBook}
          onClick={selectPageBook}
        />
      </S.LeftMenu>
    </>
  )
}

export { SideBar }
