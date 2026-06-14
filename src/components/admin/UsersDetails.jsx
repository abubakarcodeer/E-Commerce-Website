import React, { useContext } from 'react'
import myContext from '../../context/myContext'

const UsersDetails = () => {

    const { getAllUsers } = useContext(myContext)

    return (
        <div>
            <div className="py-5">
                <h1 className='text-xl text-green-300 font-bold'>All Users</h1>
            </div>
            <div className='w-full overflow-x-auto'>
                <table className='w-full text-left border border-collapse sm:border-separate border-green-200 text-green-400'>
                    <tbody>
                        <tr>
                            <th scope='col' className='h-12 px-6 text-md border-l
                            first:border-l-0 border-green-100 text-slate-700 fill-slate-100 font-bold fontPara'>S.No.</th>
                            <th scope='col' className='h-12 px-6 text-md border-l
                            first:border-l-0 border-green-100 text-slate-700 fill-slate-100 font-bold fontPara'>Name</th>
                            <th scope='col' className='h-12 px-6 text-md border-l
                            first:border-l-0 border-green-100 text-slate-700 fill-slate-100 font-bold fontPara'>Email</th>
                            <th scope='col' className='h-12 px-6 text-md border-l
                            first:border-l-0 border-green-100 text-slate-700 fill-slate-100 font-bold fontPara'>Id</th>
                            <th scope='col' className='h-12 px-6 text-md border-l
                            first:border-l-0 border-green-100 text-slate-700 fill-slate-100 font-bold fontPara'>Role</th>
                            <th scope='col' className='h-12 px-6 text-md border-l
                            first:border-l-0 border-green-100 text-slate-700 fill-slate-100 font-bold fontPara'>Date</th>
                            {/* <th scope='col' className='h-12 px-6 text-md border-l
                            first:border-l-0 border-green-100 text-slate-700 fill-slate-100 font-bold fontPara'>Action</th>
                            <th scope='col' className='h-12 px-6 text-md border-l
                            first:border-l-0 border-green-100 text-slate-700 fill-slate-100 font-bold fontPara'>Action</th> */}
                        </tr>
                        {getAllUsers.map((user, index) => {

                            return (
                                <tr key={index} className='text-green-300'>
                                    <td className='h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500'>{index + 1}.</td>
                                    <td className='h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500'>{user.name}</td>
                                    <td className='h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500'>{user.email}</td>
                                    <td className='h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500'>{user.uid}</td>
                                    <td className='h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500'>{user.role}</td>
                                    <td className='h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500'>{user.date}</td>
                                    {/* <td className='h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-green-600'>Edit</td>
                                    <td className='h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-red-500'>Delete</td> */}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UsersDetails