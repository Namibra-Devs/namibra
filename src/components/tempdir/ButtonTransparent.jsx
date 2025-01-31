const ButtonTransparent = ({label}) => {
  return (
    <button className='bg-transparent border-2 hover:bg-gray-950 py-3 px-10 rounded-lg text-[24px] font-semibold text-white'>
        {label}
    </button>
  )
}

export default ButtonTransparent