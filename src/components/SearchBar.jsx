import React, { useContext, useState } from 'react'
import myContext from '../context/myContext'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {

    const {getAllProduct} = useContext(myContext)

    const [search, setSearch] = useState('')

    const navigate = useNavigate()

    const filterSearchData = getAllProduct.filter((item) => item.title.toLowerCase().includes(search)).slice(0, 8)

    return (
        <div className=''>
            <div className="input flex justify-center">
                <input type="text" placeholder='Search here' value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='bg-gray-200 placeholder-gray-400 rounded-lg px-2 py-2 w-96 lg:w-96 md:w-96 outline-none text-black' />
            </div>

            <div className="flex justify-center">
                {search && <div className='block absolute bg-gray-200 w-96
                z-50 my-1 rounded-lg px-2 py-2'>
                    {filterSearchData.length > 0 ?
                        <>
                            {filterSearchData.map((item, index) => (
                                <div className='py-2 px-2' key={index} onClick={()=>{
                                    setSearch(item.title.toLowerCase())
                                    navigate(`/productinfos/${item.id}`)
                                    }}>
                                    <div className="flex items-center gap-2">
                                        <img className='w-10' src={item.productImageUrl} alt={`${item.title} image`} />
                                        {item.title}
                                    </div>
                                </div>
                            ))}
                        </>
                        :
                        <>
                            <div className="flex justify-center items-center overflow-scroll hide-scroll-bar">
                               {`No Results Found: ${search}`}
                            </div>
                        </>
                    }
                </div>}
            </div>

        </div>
    )
}

export default SearchBar