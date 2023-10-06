import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import InfiniteScroll from 'react-infinite-scroll-component'
import Spinner from './Spinner'

const News = (props) => {
  const [data, setData] = useState({})
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [totalResults, setTotalResults] = useState(0)
  const [page, setPage] = useState(1)
  const { countryName, category } = props
  const fetchInitialData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${countryName}&category=${category}&page=${page}&apiKey=16e216f9dfe843038ea714b028d58b35`
    setLoading(true)
    let response = await fetch(url)
    let parseData = await response.json()
    setData(parseData)
    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(false)
  }
  useEffect(() => {
    fetchInitialData()
    // eslint-disable-next-line
  }, [])
  const hasMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${countryName}&category=${category}&apiKey=16e216f9dfe843038ea714b028d58b35&page=${page+1}`
    setPage(page + 1)
    let response = await fetch(url)
    let parseData = await response.json()
    setArticles(articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults)
  }
  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1, word.length)
  }
  document.title = `${capitalizeFirstLetter(category)} - Get News`
  return (
    <>
      <InfiniteScroll
        dataLength={articles.length}
        next={hasMoreData}
        hasMore={articles.length !== totalResults}
        loader={!loading && <Spinner />}
      >
        <div>
          <Newsitem Data={data} articles={articles} category={category} />
        </div>
      </InfiniteScroll>
    {loading && <Spinner/>}
    </>
  )
}

export default News
