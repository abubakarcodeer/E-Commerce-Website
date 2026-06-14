import React, { useContext, useState } from 'react'
import myContext from '../context/myContext'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {

    const {getAllProduct} = useContext(myContext)

    const [search, setSearch] = useState('')

    const navigate = useNavigate()

    const filterSearchData = getAllProduct.filter((item) => item.title.toLowerCase().includes(search)).slice(0, 8)

    return (
        <div className='relative'>
            <div className="input flex justify-center">
                <input 
                    type="text" 
                    placeholder='🔍 Search products...' 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='backdrop-blur-sm bg-slate-700/50 placeholder-gray-400 rounded-xl px-4 py-2.5 w-64 outline-none text-white border border-purple-500/30 hover:border-cyan-400/60 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30'
                />
            </div>

            <div className="flex justify-center">
                {search && <div className='block absolute bg-gradient-to-b from-slate-800 to-slate-900 w-64 z-50 my-2 rounded-xl px-2 py-3 border border-purple-500/30 shadow-2xl shadow-purple-500/30'>
                    {filterSearchData.length > 0 ?
                        <>
                            {filterSearchData.map((item, index) => (
                                <div 
                                    className='py-2.5 px-3 rounded-lg hover:bg-purple-600/30 cursor-pointer transition-all duration-200 group' 
                                    key={index} 
                                    onClick={()=>{
                                        setSearch(item.title.toLowerCase())
                                        navigate(`/productinfos/${item.id}`)
                                    }}>
                                    <div className="flex items-center gap-3">
                                        <img 
                                            className='w-10 h-10 rounded-lg object-cover shadow-lg group-hover:shadow-cyan-500/50 transition-shadow duration-300' 
                                            src={item.productImageUrl} 
                                            alt={`${item.title} image`}
                                        />
                                        <div className='flex-1'>
                                            <p className='text-white text-sm font-medium group-hover:text-cyan-300 transition-colors'>{item.title.substring(0, 20)}...</p>
                                            <p className='text-gray-400 text-xs'>Rs. {item.price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                        :
                        <>
                            <div className="flex justify-center items-center py-4 text-gray-400">
                               <span className='text-sm'>❌ No Results for "{search}"</span>
                            </div>
                        </>
                    }
                </div>}
            </div>

        </div>
    )
}

export default SearchBar