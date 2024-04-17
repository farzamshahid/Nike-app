import { React, useState } from 'react'
import { bigShoe1 } from "../assets/images"
import { shoes } from '../constants'
import ShoeCard from "../components/ShoeCard"

const RightHeroSection = () => {
    const [bigShowImg, setBigShoeImg] = useState(bigShoe1)
    return (
        <>
            <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
                <img
                    src={bigShowImg}
                    alt='shoe collection'
                    width={610}
                    height={502}
                    className=' object-contain relative z-10'

                />
            </div>
            <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px=6'>
                {shoes.map((shoe) => (
                    <div key={shoe}>
                        <ShoeCard
                            imgURL={shoe}
                            changeBigShowImage={(shoe) => { setBigShoeImg(shoe) }}
                            bigShowImg={bigShowImg}
                        />
                    </div>
                )
                )
                }
            </div>

        </>

    )
}

export default RightHeroSection