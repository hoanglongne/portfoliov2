export default function Contact() {
    return (
        <div className='flex flex-col md:flex-row justify-between gap-[10vw] md:gap-[20vw] lg:gap-[40vw] md:px-12'>
            <div className='flex flex-col justify-center gap-2'>
                <h4 className='text-xl md:text-2xl lg:text-4xl'>Contact Me</h4>
                <p className='text-sm lg:text-lg'>ngytrhoanglong61@gmail.com</p>
            </div>
            <hr className='border-t-2 border-gray-100 md:hidden' />
            <p className='text-sm md:text-base lg:text-lg'>
                Enthusiastic Full-Stack Dev | 2+ years building web apps. Always learning, thriving on cutting-edge tech!  Eyeing a pivot to DevOps soon & currently exploring the exciting world of blockchain projects.
            </p>
        </div>
    );
}