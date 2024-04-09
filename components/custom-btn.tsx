'use client';
import { CustomButtonProps } from '@/types';
import Image from 'next/image';

const CustomButton = ({text, containerStyles, handleClick, type, icon} : CustomButtonProps) => {
  return (
    <button disabled={false} type={type || "button"} className={`custom-btn ${containerStyles}`} onClick={handleClick}>
        <span className="flex-1">{text}</span>
        {icon && (
          <div className='relative w-6 h-6'>
            <Image
              src={icon}
              alt='icon'
              fill
              className='object-contain'
            />
          </div>
        )}
    </button>
  )
}

export default CustomButton