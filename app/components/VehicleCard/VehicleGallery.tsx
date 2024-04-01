import Image from 'next/image'
import Galler_1 from '@/app/assets/car-profile/gallery/gallery_1.svg'
import Galler_2 from '@/app/assets/car-profile/gallery/gallery_2.svg'
import Galler_3 from '@/app/assets/car-profile/gallery/gallery_3.svg'
import Galler_4 from '@/app/assets/car-profile/gallery/gallery_4.svg'
import { cn } from '@/app/utils'

export default function VehicleGallery({ className }: { className?: string }) {
  return (
    <div className={cn('grid grid-cols-4 gap-2', className)}>
        <div className='col-span-2'>
            <Image src={Galler_1} width={200} height={200} alt={'vehicle'} />
        </div>
        <div className='col-span-2'>
            <Image src={Galler_2} width={200} height={200} alt={'vehicle'} />
        </div>
        <div className='col-span-2'>
            <Image src={Galler_3} width={200} height={200} alt={'vehicle'} />
        </div>
        <div className='col-span-2'>
            <Image src={Galler_4} width={200} height={200} alt={'vehicle'} />
        </div>
    </div>
  )
}
