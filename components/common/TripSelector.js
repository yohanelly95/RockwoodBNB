import Link from 'next/link';
import RightArrow from '../../public/assets/icons/arrow-right.svg' 

export default function TripSelector() {
    return (
    <div className="flex justify-center items-center mt-6">
        <div className="w-1/2 h-16 px-8 bg-gray-200 rounded-full">

        </div>
        <Link href="/Gallery" as="gallery">
            <a className="bg-black py-3 px-6 rounded-full ml-4"><img src={RightArrow} className="h-10 w-10"></img></a>
        </Link>
    </div>
    )
}