import React, { useState } from 'react'
import { Button, Dialog, DialogBody } from '@material-tailwind/react'

const BuyNow = ({ address, setAddress, buyNowFunction }) => {

    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(!open)

    return (
        <>
            <button
                type='button'
                onClick={handleOpen}
                className="w-full px-6 py-3 text-center text-white font-bold
            bg-gradient-to-r from-cyan-500 to-purple-600 border border-transparent hover:scale-105 active:scale-95 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
            >
                ✨ Checkout Now
            </button>
            <Dialog open={open} handler={handleOpen} className='bg-transparent backdrop-blur-xs flex items-center justify-center'>
                <DialogBody className='min-w-[350px] w-120 relative backdrop-blur-md bg-gradient-to-br from-slate-800/50 to-slate-900/50 px-8 lg:px-10 py-8 border border-purple-500/30 rounded-2xl shadow-2xl overflow-hidden'>
                    {/* Gradient overlay */}
                    <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10'></div>
                    
                    <div className="relative z-10">
                        <h3 className='text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6'>📦 Delivery Address</h3>
                        
                        <div className="mb-4">
                            <input type="text" name='name' value={address.name} placeholder='Enter your name' onInput={(e) => setAddress({
                                ...address, name: e.target.value
                            })}
                                className='backdrop-blur-sm bg-slate-700/50 border border-purple-500/30 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/20 px-4 py-3 w-full rounded-xl outline-none placeholder-gray-400 text-white transition-all duration-300' />
                        </div>
                        <div className="mb-4">
                            <input type="text" name='address' value={address.address} placeholder='Enter your address' onInput={(e) => setAddress({
                                ...address, address: e.target.value
                            })}
                                className='backdrop-blur-sm bg-slate-700/50 border border-purple-500/30 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/20 px-4 py-3 w-full rounded-xl outline-none placeholder-gray-400 text-white transition-all duration-300' />
                        </div>
                        <div className="mb-4">
                            <input type="number" name='pincode' value={address.pincode} placeholder='Enter your pincode' onInput={(e) => setAddress({
                                ...address, pincode: e.target.value
                            })}
                                className='backdrop-blur-sm bg-slate-700/50 border border-purple-500/30 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/20 px-4 py-3 w-full rounded-xl outline-none placeholder-gray-400 text-white transition-all duration-300' />
                        </div>
                        <div className="mb-6">
                            <input type="number" name='mobileNumber' value={address.mobileNumber} placeholder='Enter your mobile number' onInput={(e) => setAddress({
                                ...address, mobileNumber: e.target.value
                            })}
                                className='backdrop-blur-sm bg-slate-700/50 border border-purple-500/30 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/20 px-4 py-3 w-full rounded-xl outline-none placeholder-gray-400 text-white transition-all duration-300' />
                        </div>

                        <div className="flex gap-4">
                            <button
                                type='button'
                                onClick={handleOpen}
                                className='flex-1 px-4 py-3 text-center text-white font-bold
                                 bg-gradient-to-r from-gray-600 to-gray-700 border border-transparent hover:scale-105 active:scale-95 rounded-xl transition-all duration-300'>
                                    ✕ Cancel
                            </button>
                            <button
                                type='button'
                                onClick={() => {
                                    handleOpen()
                                    buyNowFunction()
                                }}
                                className='flex-1 px-4 py-3 text-center text-white font-bold
                                 bg-gradient-to-r from-cyan-500 to-purple-600 border border-transparent hover:scale-105 active:scale-95 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50'>
                                    🎉 Place Order
                            </button>
                        </div>
                    </div>
                </DialogBody>
            </Dialog>
        </>
    )
}

export default BuyNow