import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { ParsedUrlQuery } from 'node:querystring'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from './index.module.scss'
import { client } from '../lib/microcms-client'

interface OgImage {
  url: string
  alt: string
}

interface BlogPost {
  id: string
  title: string
  ogimage?: OgImage
}

interface Props {
  page: number
  contents: BlogPost[]
}

interface Params extends ParsedUrlQuery {
  id: string,
  categoryId: string,
  tagId: string,
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
  const pageStr = context.params?.id || '1';
  const page = Number(pageStr)
  const limit = 10;
  const data = await client.get({
    endpoint: 'blog',
    queries: {
      limit,
      offset: (page - 1) * limit,
    },
  });
  return {
    props: {
      contents: data.contents,
      page,
    },
  }
}

const Home: NextPage<Props> = (props) => {
  const { contents } = props

  return (
    <>
      <Head>
        <title>microCMSブログ</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>

      <div className={styles.wrapper}>
        <Header />
        <div className={styles.divider}>
          <div className={styles.container}>
            {/* <Breadcrumb :category="selectedCategory" :tag="selectedTag" /> */}
            {
              contents.length === 0 ? (
                <div className={styles.loader}>
                  記事がありません
                </div>
              ) : ''
            }
            <ul>
              {
                contents.map((content) => (
                  <li key={content.id} className={styles.list}>
                    <Link href={`/${content.id}`} passHref>
                      <a className={styles.link}>
                        {
                          content.ogimage ? (
                            <picture>
                              <source
                                type="image/webp"
                                srcSet={content.ogimage.url + '?w=670&fm=webp'}
                              />
                              <img
                                src={content.ogimage.url + '?w=670'} 
                                className={[styles.ogimage, styles.lazyload].join(' ')}
                                alt={content.ogimage.alt}
                              />
                            </picture>
                          ) : ''
                        }
                        <dl className={styles.content}>
                          <dt className={styles.title}>{ content.title }</dt>
                          <dd>
                            {/* <Meta
                              :created-at="content.publishedAt || content.createdAt"
                              :author="content.writer !== null ? content.writer.name : ''"
                              :category="content.category"
                              :tags="content.tag"
                            /> */}
                          </dd>
                        </dl>
                      </a>
                    </Link>
                  </li>
                ))
              }
            </ul>
            {/* <Pagination
              v-if="contents.length > 0"
              :pager="pager"
              :current="Number(page)"
              :category="selectedCategory"
              :tag="selectedTag"
            /> */}
          </div>
          {/* <aside className="aside">
            <Banner id="list" :banner="banner" />
            <Search />
            <Categories :categories="categories" />
            <Tags :tags="tags" />
            <PopularArticles :contents="popularArticles" />
          </aside> */}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home
