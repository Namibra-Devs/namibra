import ContactusHero from "../../components/heroSections/ContactusHero"
import ContactForm from "./features/ContactForm"
import ContactInfo from "./features/ContactInfo"

const Contactus = () => {
  return (
    <>
      <ContactusHero/>
      <div className="flex flex-col lg:flex-row items-start gap-16 w-full ">
        <ContactInfo/>
        <ContactForm/>
      </div>
    </>
  )
}

export default Contactus