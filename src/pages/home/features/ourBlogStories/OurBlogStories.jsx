import Shape from "../../../../assets/icons/shape.png";
import ArrowC from "../../../../assets/icons/Arrow.png";
import BlogCard from "./BlogCard";
const OurBlogStories = () => {
  return (
    <section className="bg-white">
      <div className="px-6 lg:px-24 pb-24">
        <h3 className="subtitle my-8 text-black flex items-center gap-2">
          <img src={ArrowC} alt="Arrow" className="w-10" />
          Blog Stories
        </h3>
        <div className="flex flex-col items-center text-center mb-14">
          <span>
            <img src={Shape} alt="Ahape" className="w-28" />
          </span>
          <h2 className="text-3xl font-medium text-black my-2">
            Our Expertise study & research
          </h2>
          <h3 className="text-slate-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </h3>
        </div>
        <BlogCard/>
      </div>
    </section>
  )
}

export default OurBlogStories