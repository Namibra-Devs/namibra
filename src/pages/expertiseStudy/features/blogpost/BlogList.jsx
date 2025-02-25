
import ButtonFilled from '../../../../components/buttons/ButtonFilled';
import { RxArrowTopRight } from "react-icons/rx";

const BlogList = ({blogs, showMore}) => {
  return (
    <div className='text-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 align-center gap-x-24 gap-y-14 mb-14'>
            {blogs.map((blog, index) => (
                <div key={index}>
                    <a href={blog.link} className='flex gap-2 p-2 group hover:shadow-inner duration-700 rounded-2xl'>
                        <img src={blog.img} alt={blog.title} className='w-40 h-32 object-cover group-hover:brightness-75 duration-700 rounded-2xl' />
                        <div className='flex flex-col items-start text-left gap-3 text-slate-600'>
                            <p className='text-sm'>{blog.date}</p>
                            <h2 className='text-2xl font-medium leading-6 lg:leading-none text-slate-700'>{blog.title}</h2>
                            <a href={blog.link} className='flex items-center gap-2 text-sm group-hover:text-blue-700'>Read More <RxArrowTopRight className='text-lg group-hover:translate-x-2 duration-700' /></a>
                        </div>  
                    </a>
                </div>
            ))}
        </div>
        {/* "View More" button (Only show when needed) */}
      {showMore && (
        <div className="flex justify-center mt-4 text-center">
          <ButtonFilled label="Show More" link="/expertise-study" />
        </div>
      )}
    </div>
  )
}

export default BlogList