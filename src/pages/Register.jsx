import banner from '../assets/images/loginBanner.jpg'
import RegisterForm from '../components/authComponents/RegisterComponenets/RegisterForm'

const Register = () => {
  return (
    <div className='px-4'>
      <div className="lg:max-w-[1000px] py-10 flex gap-6 flex-col md:flex-row mx-auto">
        {/* image */}
        <div className="md:w-1/2">
        <img src={banner} alt="" className="w-full h-full" />
        </div>
        {/* form */}
        <div className="md:w-1/2">
          <RegisterForm/>
        </div>
      </div>
    </div>
  )
}

export default Register