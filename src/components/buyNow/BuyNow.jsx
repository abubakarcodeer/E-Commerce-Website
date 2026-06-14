import React, { useState } from 'react'
import { Button, Dialog, DialogBody } from '@material-tailwind/react'

const BuyNow = ({ address, setAddress, buyNowFunction }) => {

    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(!open)

    return (
        <>
            <Button
                type='button'
                onClick={handleOpen}
                className="w-full px-4 py-3 text-center text-gray-100
            bg-green-600 border border-transparent dark:border-gray-700 hover:bg-green-500 rounded-xl"
            >
                Buy Now
            </Button>
            <Dialog open={open} handler={handleOpen} className='bg-transparent backdrop-blur-xs flex items-center justify-center'>
                <DialogBody className=' min-w-[350px] w-120 bg-green-200 px-8 lg:px-8 py-6 border border-green-100 rounded-xl shadow-md'>
                      <div className="mb-3">
                <input type="text" name='name' value={address.name} placeholder='Enter your name' onInput={(e) => setAddress({
                    ...address, name: e.target.value
                })}
                    className='bg-green-50 border border-green-200 px-2 py-2 w-full rounded-md outline-none placeholder-green-600' />
            </div>
            <div className="mb-3">
                <input type="text" name='address' value={address.address} placeholder='Enter your address' onInput={(e) => setAddress({
                    ...address, address: e.target.value
                })}
                    className='bg-green-50 border border-green-200 px-2 py-2 w-full rounded-md outline-none placeholder-green-600' />
            </div>
            <div className="mb-3">
                <input type="number" name='pincode' value={address.pincode} placeholder='Enter your pincode' onInput={(e) => setAddress({
                    ...address, pincode: e.target.value
                })}
                    className='bg-green-50 border border-green-200 px-2 py-2 w-full rounded-md outline-none placeholder-green-600' />
            </div>
            <div className="mb-3">
                <input type="number" name='mobileNumber' value={address.mobileNumber} placeholder='Enter your mobile number' onInput={(e) => setAddress({
                    ...address, mobileNumber: e.target.value
                })}
                    className='bg-green-50 border border-green-200 px-2 py-2 w-full rounded-md outline-none placeholder-green-600' />
            </div>

            <div className="">
                <Button
                    type='button'
                    onClick={() => {
                        handleOpen()
                        buyNowFunction()
                    }}
                    className='w-full px-4 py-3 text-center text-gray-100
                     bg-green-600 border border-transparent dark:border-gray-700 hover:bg-green-500 rounded-xl'>
                        Buy Now
                     </Button>
            </div>
                </DialogBody>
            </Dialog>
        </>
    )
}

export default BuyNow