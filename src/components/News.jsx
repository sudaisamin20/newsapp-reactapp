import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import InfiniteScroll from 'react-infinite-scroll-component'
import loadingImage from "./loading.gif"
import { useLocation, useTheme } from './ThemeContext'
import Footer from './Footer'

const News = (props) => {
  const [data, setData] = useState({})
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [totalResults, setTotalResults] = useState(0)
  // eslint-disable-next-line
  const [page, setPage] = useState(1)
  const { location } = useLocation()
  const { theme } = useTheme()
  const { category, progress } = props
  const fetchInitialData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${location.toLowerCase()}&category=${category}&page=${page}&apiKey=a81ac6fe5dcd4c95a5ef76228c6af0a4`
    progress(10)
    setLoading(true)
    let response = await fetch(url)
    progress(40)
    let parseData = await response.json()
    progress(80)
    setData(parseData)
    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(false)
    progress(100)
  }
  useEffect(() => {
    fetchInitialData()
    // eslint-disable-next-line
  }, [location.toLowerCase()])

  const hasMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${location.toLowerCase()}&category=${category}&apiKey=a81ac6fe5dcd4c95a5ef76228c6af0a4&page=${page + 1}`
    let response = await fetch(url)
    let parseData = await response.json()
    setArticles(articles.concat(parseData.articles))
    // setArticles(prevArticles => [...prevArticles, ...parseData.articles])
    setTotalResults(parseData.totalResults)
  }
  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1, word?.length)
  }
  document.title = `${capitalizeFirstLetter(category)} - Get News`
  return (
    <>
      <InfiniteScroll
        dataLength={articles?.length}
        next={hasMoreData}
        hasMore={articles?.length !== totalResults}
        loader={!loading && <div className={`flex justify-center ${theme === "light" ? "bg-white" : "bg-black"}`}><img src={loadingImage} alt="" /></div>}>
        <div>
          <Newsitem Data={data} articles={articles} category={category} />
        </div>
      </InfiniteScroll>
      {loading && <div className={`flex justify-center ${theme === "light" ? "bg-white" : "bg-black"}`}><img src={loadingImage} alt="" /></div>}
      {articles?.length === totalResults ? <Footer /> : ""}
    </>
  )
}

export default News
