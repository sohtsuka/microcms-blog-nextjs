import { withRouter, NextRouter } from 'next/router'
import { useState } from 'react'
import styles from './Header.module.scss'

interface Props {
  router: NextRouter,
}

const Header: React.VFC<Props> = (props) => {
  const { router } = props
  const params = router.query || '';

  const [openDropDownMenu, setOpenDropDownMenu]
    = useState<boolean[]>(Array(desktopHeaderMenu.length).fill(false))
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  const handleOpenMenu = (index: number) => {
    setOpenDropDownMenu([
      ...openDropDownMenu.slice(0, index),
      true,
      ...openDropDownMenu.slice(index+1),
    ])
  }

  const handleCloseMenu =(index: number) => {
    setOpenDropDownMenu([
      ...openDropDownMenu.slice(0, index),
      false,
      ...openDropDownMenu.slice(index+1),
    ])
  }

  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.logo}>
          <a href="https://microcms.io">
            <img className={styles.logoImg} src="/images/logo.svg" alt="microCMS" />
          </a>
        </h1>
        <button className={styles.menuBtn} onClick={toggleOpen}>
          <img src="/images/icon_menu.svg" alt="menu" />
        </button>
        {
          open ?
            <div className={styles.mask} onClick={() => setOpen(false)}></div>
            : ''
        }

        <div className={(open ? [styles.menu, styles.isOpen] : [styles.menu]).join(' ')}>
          <ul className={[styles.lists, styles.isMobile].join(' ')}>
            <li className={styles.list}>
              <a href="https://microcms.io/pricing">料金</a>
            </li>
            <li className={styles.list}>
              <a href="https://microcms.io/projects">導入事例</a>
            </li>
            <li className={styles.list}>
              <a href="https://help.microcms.io/ja/knowledge" target="_blank" rel="noreferrer">よくある質問</a>
            </li>
            <li className={styles.list}>
              <a
                href="https://blog.microcms.io/category/update/page/1/"
                target="_blank" rel="noreferrer">更新情報</a>
            </li>
            <li className={styles.list}>
              <a href="https://blog.microcms.io/" target="_blank" rel="noreferrer">ブログ</a>
            </li>
            <li className={styles.list}>
              <a href="https://document.microcms.io/" target="_blank" rel="noreferrer">ドキュメント</a>
            </li>
            <li className={styles.list}>
              <a href="https://microcms.io/seminar/">セミナー</a>
            </li>
            <li className={styles.list}>
              <a href="https://microcms.io/download">資料請求</a>
            </li>
            <li className={styles.list}>
              <a href="https://microcms.io/contact">お問い合わせ</a>
            </li>
          </ul>

          <ul className={[styles.lists, styles.isDesktop].join(' ')}>
            {
              desktopHeaderMenu.map((menu, index) => (
                <li
                  key={index}
                  className={styles.list}
                  onMouseOver={() => handleOpenMenu(index)}
                  onMouseLeave={() => handleCloseMenu(index)}
                >
                  {
                    menu.isDropDown
                      ? <button className={styles.dropDown}>{menu.name}</button>
                      : <a href={menu.path}>{menu.name}</a>
                  }
                  {
                    /* dropdown menu */
                    /* <transition name="fade"> */
                    menu.contents.length > 0 ? (
                      <ul className={styles.dropDownMenu}
                        style={{display: (openDropDownMenu[index] ? undefined : 'none')}}>
                        {
                          menu.contents.map((content, contentIndex) => (
                            <li key={contentIndex} className={styles.dropDownMenuList}>
                              <a href={content.path}>{content.name}</a>
                            </li>
                          ))
                        }
                      </ul>
                    ) : ''
                  }
                </li>
              ))
            }
          </ul>

          <ul className={styles.lists}>
            <li className={styles.list}>
              <a className={styles.signin} href="https://app.microcms.io/signin">ログイン</a>
            </li>
            <li className={styles.list}>
              <a className={styles.signup} href={`https://app.microcms.io${params}`}>新規登録</a>
            </li>
          </ul>
        </div>
      </header>
      <div className={styles.empty}></div>
    </div>
  )
}

const desktopHeaderMenu = [
  {
    name: '機能',
    path: '',
    isDropDown: true,
    contents: [
      {
        name: 'スキーマ',
        path: 'https://microcms.io/features/schema',
      },
      {
        name: 'API連携',
        path: 'https://microcms.io/features/link-api',
      },
      {
        name: '画像編集',
        path: 'https://microcms.io/features/image-api',
      },
      {
        name: 'SDK',
        path: 'https://microcms.io/features/sdk',
      },
      {
        name: '権限管理',
        path: 'https://microcms.io/features/authority',
      },
      {
        name: 'ワークフロー',
        path: 'https://microcms.io/features/workflow',
      },
      {
        name: 'セキュリティ',
        path: 'https://microcms.io/features/security',
      },
      {
        name: 'サポート',
        path: 'https://microcms.io/features/support',
      },
    ],
  },
  {
    name: '料金',
    path: 'https://microcms.io/pricing',
    isDropDown: false,
    contents: [],
  },
  {
    name: '事例',
    path: '',
    isDropDown: true,
    contents: [
      {
        name: 'インタビュー',
        path: 'https://blog.microcms.io/category/usecase/page/1/',
      },
      {
        name: '導入事例一覧',
        path: 'https://microcms.io/projects',
      },
      {
        name: '導入事例集',
        path: 'https://microcms.io/download-usecase',
      },
    ],
  },
  {
    name: 'サポート',
    path: '',
    isDropDown: true,
    contents: [
      {
        name: 'よくある質問',
        path: 'https://help.microcms.io/ja/knowledge',
      },
      {
        name: '更新情報',
        path: 'https://blog.microcms.io/category/update/page/1/',
      },
      {
        name: 'ドキュメント',
        path: 'https://document.microcms.io/',
      },
      {
        name: 'ブログ',
        path: 'https://blog.microcms.io/',
      },
      {
        name: 'GitHub',
        path: 'https://github.com/microcmsio',
      },
      {
        name: '制作プラン',
        path: 'https://microcms.io/service/produce',
      },
      {
        name: 'パートナー',
        path: 'https://microcms.io/partners-list',
      },
    ],
  },
  {
    name: 'セミナー',
    path: 'https://microcms.io/seminar',
    isDropDown: false,
    contents: [],
  },
  {
    name: '資料請求・デモ',
    path: '',
    isDropDown: true,
    contents: [
      {
        name: 'オンライン説明会',
        path: 'https://microcms.io/online-demo',
      },
      {
        name: 'サービス紹介資料',
        path: 'https://microcms.io/download',
      },
      {
        name: 'お役立ち資料',
        path: 'https://microcms.io/ebook',
      },
    ],
  },
]

export default withRouter(Header)
