/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios"
import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import NavbarBS from "./Components/Navbar"
import SearchBar from "./Components/SearchBar"
import TableBS from "./Components/Table"
import TableItem from "./Components/Table/TableItem"

const App = () => {
  const [data, setData] = useState([])
  const [keyword, setKeyword] = useState("")
  const [category, setCategory] = useState("country")
  const [country, setCountry] = useState("id")

  const fetchData = async () => {
    try {
      const res = await axios.get(
        category === "country"
          ? `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=5c9767073055482ea0626f9aea47e76d`
          : `https://newsapi.org/v2/everything?q=${keyword}&apiKey=5c9767073055482ea0626f9aea47e76d`
      )
      setData(res.data.articles)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    fetchData()
  }, [country])

  const onChangeInput = (e) => {
    const value = e.target.value
    setKeyword(value)
  }

  const onSearch = () => {
    fetchData()
  }

  const onChangeCountry = (country) => {
    setCountry(country)
  }

  const onChangeCategory = () => {
    const newCategory = category === "country" ? "keyword" : "country"
    setCategory(newCategory)
  }

  return (
    <div>
      <NavbarBS />
      <Container>
        <SearchBar
          onChangeCategory={onChangeCategory}
          category={category}
          onChangeInput={onChangeInput}
          onSearch={onSearch}
          keyword={keyword}
          onChangeCountry={onChangeCountry}
        />
        <TableBS>
          {data.map((item, index) => (
            <TableItem no={index} data={item} />
          ))}
        </TableBS>
      </Container>
    </div>
  )
}

export default App
