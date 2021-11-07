import styles from './Footer.module.scss'

interface Props {
}

const Footer: React.VFC<Props> = (props) => {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.visuallyHidden}>サイトマップ</h2>
      <div className={styles.container}>
        <ul className={styles.sitemap}>
          <li className={styles.sitemapListItem}>
            <section className={styles.categoryTitle}>
              <h3 className={styles.categoryTitle}>microCMSとは</h3>
              <ul className={styles.menuList}>
                <li className={styles.menuListItem}>
                  <a className={styles.menuLink} href="https://microcms.io/pricing">料金</a>
                </li>
                <li className={styles.menuListItem}>
                  <a className={styles.menuLink} href="https://microcms.io/#feature"
                    >microCMSの特徴</a
                  >
                </li>
                <li className={styles.menuListItem}>
                  <a
                    className={styles.menuLink}
                    href="https://blog.microcms.io/vs-wordpress/"
                    target="_blank"
                    rel="noreferrer"
                    >WordPressとの違い</a
                  >
                </li>
                <li className={styles.menuListItem}>
                  <a
                    className={styles.menuLink}
                    href="https://microcms.io/solutions/multidevice"
                    >活用方法 - マルチデバイス</a
                  >
                </li>
                <li className={styles.menuListItem}>
                  <a
                    className={styles.menuLink}
                    href="https://blog.microcms.io/category/usecase/page/1/"
                    >導入事例インタビュー</a
                  >
                </li>
                <li className={styles.menuListItem}>
                  <a className={styles.menuLink} href="https://microcms.io/projects"
                    >導入事例一覧</a
                  >
                </li>
                <li className={styles.menuListItem}>
                  <hr />
                </li>
                <li className={styles.menuListItem}>
                  <a className={styles.menuLink} href="https://microcms.io/service/produce"
                    >Jamstack制作</a
                  >
                </li>
              </ul>
            </section>
          </li>

          <li className={styles.sitemapListItem}>
            <section>
              <h3 className={styles.categoryTitle}>機能</h3>
              <ul className={styles.menuList}>
                <li className={styles.menuListItem}>
                  <a className={styles.menuLink} href="https://microcms.io/features/schema"
                    >スキーマ</a
                  >
                </li>
                <li className={styles.menuListItem}>
                  <a className={styles.menuLink} href="https://microcms.io/features/link-api"
                    >APIデータ連携</a
                  >
                </li>
                <li className={styles.menuListItem}>
                  <a
                    className={styles.menuLink}
                    href="https://microcms.io/features/image-api"
                    >画像編集</a
                  >
                </li>
                <li className={styles.menuListItem}>
                  <a className={styles.menuLink} href="https://microcms.io/features/sdk"
                    >SDK</a
                  >
                </li>
                <li className={styles.menuListItem}>
                  <a
                    className={styles.menuLink}
                    href="https://microcms.io/features/authority"
                    >権限管理</a
                  >
                </li>
                <li className={styles.menuListItem}>
                  <a className={styles.menuLink} href="https://microcms.io/features/workflow"
                    >ワークフロー</a
                  >
                </li>
                <li className={styles.menuListItem}>
                  <a className={styles.menuLink} href="https://microcms.io/features/security"
                    >セキュリティ</a
                  >
                </li>
                <li className={styles.menuListItem}>
                  <a className={styles.menuLink} href="https://microcms.io/features/support"
                    >サポート・トレーニング</a
                  >
                </li>
              </ul>
            </section>
          </li>

          <li className={styles.sitemapListItem}>
            <section>
              <h3 className={styles.categoryTitle}>サポート</h3>
              <ul className={styles.menuList}>
                <li className={styles.menuListItem}>
                  <a
                    className={styles.menuLink}
                    href="https://help.microcms.io/ja/knowledge"
                    target="_blank"
                    rel="noreferrer"
                    >よくある質問</a
                  >
                </li>
                <li className={styles.menuListItem}>
                  <a
                    className={styles.menuLink}
                    href="https://document.microcms.io/manual/getting-started"
                    target="_blank"
                    rel="noreferrer"
                    >microCMSの始め方</a
                  >
                </li>
                <li className={styles.menuListItem}>
                  <a className={styles.menuLink} href="https://microcms.io/workflow"
                    >導入までの流れ</a
                  >
                </li>
                <li className={styles.menuListItem}>
                  <a
                    className={styles.menuLink}
                    href="https://blog.microcms.io/category/update/page/1/"
                    target="_blank"
                    rel="noreferrer"
                    >更新情報</a
                  >
                </li>
                <li className={styles.menuListItem}>
                  <a
                    className={styles.menuLink}
                    href="https://document.microcms.io/"
                    target="_blank"
                    rel="noreferrer"
                    >ドキュメント</a
                  >
                </li>
                <li className={styles.menuListItem}>
                  <a
                    className={styles.menuLink}
                    href="https://blog.microcms.io/"
                    target="_blank"
                    rel="noreferrer"
                    >ブログ</a
                  >
                </li>
                <li className={styles.menuListItem}>
                  <a
                    className={styles.menuLink}
                    href="https://github.com/microcmsio"
                    target="_blank"
                    rel="noreferrer"
                    >GitHub</a
                  >
                </li>
                <li className={styles.menuListItem}>
                  <a
                    className={styles.menuLink}
                    href="https://status.microcms.io/"
                    target="_blank"
                    rel="noreferrer"
                    >ステータス</a
                  >
                </li>
              </ul>
            </section>
          </li>

          <li className={styles.sitemapListItem}>
            <section>
              <h3 className={styles.categoryTitle}>資料請求・セミナー</h3>
              <ul className={styles.menuList}>
                <li className={styles.menuListItem}>
                  <a className={styles.menuLink} href="https://microcms.io/download"
                    >サービス紹介資料</a
                  >
                </li>
                <li className={styles.menuListItem}>
                  <a className={styles.menuLink} href="https://microcms.io/download-features"
                    >ヘッドレスCMSの特徴</a
                  >
                </li>
                <li className={styles.menuListItem}>
                  <a className={styles.menuLink} href="https://microcms.io/download-usecase"
                    >導入事例集</a
                  >
                </li>
                <li className={styles.menuListItem}>
                  <a
                    className={styles.menuLink}
                    href="https://microcms.io/download-multidevice"
                    >活用方法 - マルチデバイス</a
                  >
                </li>
                <li className={styles.menuListItem}>
                  <a className={styles.menuLink} href="https://microcms.io/download-cms"
                    >CMS比較表</a
                  >
                </li>
                <li className={styles.menuListItem}>
                  <hr />
                </li>
                <li className={styles.menuListItem}>
                  <a
                    className={styles.menuLink}
                    href="https://microcms.io/seminar/product-introduction"
                    >サービス紹介セミナー</a
                  >
                </li>
                <li className={styles.menuListItem}>
                  <a
                    className={styles.menuLink}
                    href="https://jamjamjamstack.connpass.com/"
                    target="_blank"
                    rel="noreferrer"
                    >Jamstackミートアップ</a
                  >
                </li>
                <li className={styles.menuListItem}>
                  <a className={styles.menuLink} href="https://microcms.io/seminar"
                    >セミナー・イベント情報</a
                  >
                </li>
              </ul>
            </section>
          </li>

          <li className={styles.sitemapListItem}>
            <section>
              <h3 className={styles.categoryTitle}>コンタクト</h3>
              <ul className={styles.menuList}>
                <li className={styles.menuListItem}>
                  <a className={styles.menuLink} href="https://microcms.io/contact"
                    >お問い合わせ</a
                  >
                </li>
                <li className={styles.menuListItem}>
                  <a className={styles.menuLink} href="https://microcms.io/online-demo"
                    >オンラインミーティング</a
                  >
                </li>
                <li className={styles.menuListItem}>
                  <a className={styles.menuLink} href="https://microcms.io/partners"
                    >パートナーになる</a
                  >
                </li>
                <li className={styles.menuListItem}>
                  <a className={styles.menuLink} href="https://microcms.io/partners-list"
                    >パートナーを探す</a
                  >
                </li>
                <li className={styles.menuListItem}>
                  <hr />
                </li>
                <li className={styles.menuListItem}>
                  <a
                    className={styles.menuLink}
                    href="https://app.microcms.io/signin"
                    target="_blank"
                    rel="noreferrer"
                    >ログイン</a
                  >
                </li>
                <li className={styles.menuListItem}>
                  <a
                    className={styles.menuLink}
                    href="https://app.microcms.io/signup"
                    target="_blank"
                    rel="noreferrer"

                    >新規登録</a
                  >
                </li>
              </ul>
            </section>
          </li>
        </ul>
      </div>

      <ul className={styles.lists}>
        <li className={styles.list}>
          <a href="https://microcms.co.jp" target="_blank" rel="noreferrer">運営会社</a>
        </li>
        <li className={styles.list}>
          <a href="https://wanta.co.jp/news" target="_blank" rel="noreferrer">ニュース</a>
        </li>
        <li className={styles.list}>
          <a href="https://microcms.io/law">特定商取引法に基づく表記</a>
        </li>
        <li className={styles.list}>
          <a href="https://microcms.io/terms">利用規約</a>
        </li>
        <li className={styles.list}>
          <a href="https://microcms.io/policy">プライバシーポリシー</a>
        </li>
      </ul>
      <p className={styles.cr}>Copyright © microcms.io All rights reserved.</p>
    </footer>
  )
}

export default Footer
