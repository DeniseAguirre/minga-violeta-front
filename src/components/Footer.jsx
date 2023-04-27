import Star from '../assets/images/Star.png'
import FooterImg from '../assets/images/img-footer.png'

export default function Footer(){
  return (
    <div>
      <div className='flex justify-center '>
            <div className='mpb-2 rounded-[0px_0px_50%_50%] overflow-hidden w-screen'>
              <img className='sm:mt-1 w-full' src={FooterImg}/>
            </div>
        </div>
        <div  className='flex flex-col sm:flex-row items-center justify-between sm:mx-2 md:mx-10 sm:mb-10 mt-0 pb-5 border-b-2 border-[#cbd5e1]'>
        <div className='flex relative mt-14 text-white font-medium'>
                <img className='ml-[0.08rem] mt-1 w-20 mr-1' src={Star}/>
                <div className='bg-black absolute p-0 top-11 py-1 left-[1.9rem] px-1 text-sm '>
                <p className='h-4'>ー</p>
                <p className='h-5'>ブ</p>
                </div>
                <div className='bg-black absolute top-[2.1rem] p-0 right-0'>
                <p className='w-[5.5rem] text-center text-sm'> M i n g a</p>
                </div>
                <div className='bg-black absolute p-0 top-0 left-[1.9rem] px-1 pt-1 text-sm'>
                <p className='h-4'>ス</p>
                <p className='h-4'>リ</p>
                </div>
            </div>
            <div className='flex flex-col items-center mt-4'>
              <div className='flex w-full justify-evenly'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"> <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
              </div>
              <button className="rounded-none flex border-none bg-gradient-to-r from-[#F9A8D4] to-[#F472B6] w-56 p-2 justify-center mt-4 text-xl">Donate ❤️</button>
            </div>
        </div>
    </div>
  );
}
