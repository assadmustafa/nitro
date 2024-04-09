"use client"
import { useState } from "react"
import Image from "next/image"
import { CarProps } from "@/types"
import { CarDetails, CustomButton } from "."
import { calculateCarRent, generateCarImageUrl } from "@/utils"

interface CarCardProps {
    car: CarProps
}
const CarCard = ({car}: CarCardProps) => {
    const {city_mpg,year,make,model,transmission,drive} = car;
    const [isOpen,setIsOpen] = useState(false);
    const carRent = calculateCarRent(city_mpg,year);
  return (
    <div className="car-card group">
        
        {/* HEADER */}
        <div className="car-card__content">
            <h2 className="car-card__content-title">
                {make} {model}
            </h2>
        </div>

        {/* PRICE */}
        <p className="flex mt-6 text-[32px] font-extrabold">
            <span className="self-start text-[14px] font-semibold">
                €
            </span>
            {carRent}
            <span className="self-end text-[14px] font-medium">
                /day
            </span>
        </p>

        {/* IMAGE */}
        <div className="relative w-full h-40 my-3 object-contain">
            <Image
                src={generateCarImageUrl(car)}
                alt={car.make}
                fill
                priority
                className="object-contain"
            />
        </div>
        
        {/* SPECS */}
        <div className="relative flex w-full mt-2">
            <div className="flex group-hover:invisible w-full justify-between text-gray">
                {/* transmission */}
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src={"/steering-wheel.svg"} alt="steering wheel" width={20} height={20} />
                    <p className="text-[14px]">
                        {transmission === 'a' ? 'Automatic' : 'Manual'}
                    </p>
                </div>
                {/* drive */}
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src={"/tire.svg"} alt="tire" width={20} height={20} />
                    <p className="text-[14px]">
                        {drive.toUpperCase()}
                    </p>
                </div>
                {/* city mpg */}
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src={"/gas.svg"} alt="gas" width={20} height={20} />
                    <p className="text-[14px]">
                        {city_mpg} MPG
                    </p>
                </div>
            </div>

            <div className="car-card__btn-container">
                <CustomButton 
                    text="View More"
                    containerStyles="w-full py-[16px] rounded-full bg-primary-blue text-white text-[14px] leading-[17px] font-bold"
                    icon="/right-arrow.svg"
                    handleClick={() => setIsOpen(true)}
                />
            </div>
        </div>

        <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
    </div>
    
    
  )
}

export default CarCard