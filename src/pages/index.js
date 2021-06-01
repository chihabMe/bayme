import * as React from "react"
import InfoBar from '../components/InfoBar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Ofers from '../components/Ofers'
import MainProducts from '../components/MainProducts'
import ProductsList from '../components/ProductsList'
import Search from '../components/Search'
import '../styles/global.css'
const IndexPage = () => {
const style = {'margin':'0px'}
  return (
    <main className='main' style={style}>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous"/>


      <title>Home Page</title>
      <InfoBar/>
      <Navbar/>
      <Hero/>
      <Ofers/>
      <MainProducts/>
      <ProductsList/>
    </main>
  )
}

export default IndexPage
