
import ButtonFilled from '../../../../components/buttons/ButtonFilled';
import cardData from './blogData'
import { RxArrowTopRight } from "react-icons/rx";

const BlogCard = () => {
  return (
    <div className='text-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 align-center gap-x-24 gap-y-14 mb-14'>
            {cardData.map((card, index) => (
                <div key={index}>
                    <a href={card.link} className='flex gap-2 group hover:shadow-inner duration-700 rounded-xl'>
                        <img src={card.img} alt={card.title} className='w-40 h-32 object-cover group-hover:brightness-75 duration-700 rounded-xl' />
                        <div className='flex flex-col items-start text-left gap-3 text-slate-600'>
                            <p className='text-sm'>{card.date}</p>
                            <h2 className='text-2xl font-medium text-slate-700'>{card.title}</h2>
                            <a href={card.link} className='flex items-center gap-2 text-sm group-hover:text-blue-700'>Read More <RxArrowTopRight className='text-lg' /></a>
                        </div>  
                    </a>
                </div>
            ))}
        </div>
        <ButtonFilled label="View More"/>
    </div>
  )
}

export default BlogCard