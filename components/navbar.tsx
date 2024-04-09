import Link from "next/link"
import Image from "next/image"
import { CustomButton } from "."

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
        <nav className="w-full mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
            <Link href={"/"} className="flex justify-center items-center">
                <Image src={"/bmw.png"} alt="logo" width={50} height={50} className="object-contain" />
            </Link>
            <CustomButton 
            text="Sign in"
            type="button"
            containerStyles="text-white rounded-full bg-primary-blue min-w-[130px] font-bold transition duration-300 hover:bg-black hover:text-white sm:text-primary-blue sm:bg-white" />
        </nav>
    </header>
  )
}

export default Navbar