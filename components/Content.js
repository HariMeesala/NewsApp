import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './content.css'
import Card from './Card';

export default function Content( { category } ) {

    const [data, setData] = useState(null);
    const [page, setPage] = useState(1);

//https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=100674886f094523bd3d6245e61ae135
 
useEffect(() =>{
    async function fetchData(){
      
        await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=812c11a26d1640ec8eec6efabc771622&page=${page}&pageSize=10`)
        .then((response) => response.json())
        .then((result) =>{
            setData(result.articles)
        }
            
        )
        .catch(error => console.error(error));
    }
    fetchData();
  })

   const handlePrevClick = async() =>{
    console.log("previous");
    await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=812c11a26d1640ec8eec6efabc771622&page=${page>1 ? page-1 : 1}&pageSize=10`)
        .then((response) => response.json())
        .then((result) =>{
            setData(result.articles)
            setPage(page - 1)
        }
            
        )
        .catch(error => console.log(error));
  }

   const handleNextClick = async() => {
    console.log("next");
    
    await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=812c11a26d1640ec8eec6efabc771622&page=${page + 1}&pageSize=10`)   
    .then((response) => response.json())
        .then((result) =>{
            setData(result.articles)
            setPage(page + 1)
        }
            
        )
        .catch(error => console.log(error));
  }

  return (
    <div className='parent'>
     
    <div className='parent-content'>
    {
        data && 
        data.map((detail) => 
        <div key={detail.url} className='content'>
            <Card title={detail.title?detail.title.slice(0, 45):""} image={detail.urlToImage} description={detail.description?detail.description.slice(0, 120):""} />
        </div>
        )
    }
    </div>
    <div className='btns'>
      <button disabled={page<=1} type='button' onClick={handlePrevClick} >Previous</button>
      <button type='button' onClick={handleNextClick} >Next</button>
    </div>
    </div>
  )
}

Content.defaultProps = {
  category: 'general'
};

Content.propTypes = {
  categoty: PropTypes.string,
};