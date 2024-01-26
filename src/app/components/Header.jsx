import Image from 'next/image';

export default function Header() {
    return (
        <div className='relative flex flex-col'>
            <h1 className='text-[16vw] leading-[90%] tracking-[-0.275rem] font-semibold mt-[45px] md:mt-[100px]'>
                Websites& <br />Branding
            </h1>
            <div className='w-full absolute right-0 bottom-0 flex pr-8 md:pr-12 justify-end mt-20'>
                <div className='inline-flex rounded-full bg-gray-100 p-5 md:p-8 flex-row gap-2 items-center'>
                    <p className='hidden lg:block'>
                        SCROLL DOWN
                    </p>
                    <Image src="/ScrollDown.svg" alt="Scrolldown image" width={15} height={15} />
                </div>
            </div>
        </div>
    );
}