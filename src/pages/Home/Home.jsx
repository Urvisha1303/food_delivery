import React, { useState } from 'react'
import "./Home.css"
import Header from '../../componet/Header/Header'
import Exploremenu from '../../componet/ExploreMenu/Exploremenu'
import FoodDisplay from '../../componet/food Display/FoodDisplay'
import AppDownload from '../../componet/appdownload/AppDownload'

const Home = () => {
  const [category, setCategory] = useState('All')
  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home