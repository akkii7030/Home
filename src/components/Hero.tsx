import { Navbar } from './Navbar';

export const Hero = () => {
  return (
    <section
      className="relative mx-auto w-[1536.31px] h-[930px] mt-[15px] overflow-hidden flex flex-col justify-center border border-black"
      id="home"
    >
      <Navbar />
      
      <div className="absolute inset-x-0 top-0 h-full z-0">
        <img src="/32104_4564%201.png" alt="Hero Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto relative z-10 w-full h-full">
        <div
          className="absolute overflow-visible"
          style={{
            top: '191px',
            left: '100px',
            width: '994px',
            height: '366px',
            borderRadius: '30px',
          }}
        >
          <h1 className="leading-none tracking-normal">
            <span
              className="block whitespace-nowrap"
              style={{
                width: '916px',
                height: '98px',
                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                fontWeight: 200,
                fontSize: '100px',
                lineHeight: '100%',
                letterSpacing: '0',
                color: '#000000',
              }}
            >
              Unlocking Tomorrow's
            </span>
            <span
              className="block absolute top-[98px] left-[230px] whitespace-nowrap"
              style={{
                width: '763px',
                height: '124px',
                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                fontWeight: 400,
                fontStyle: 'italic',
                fontSize: '125px',
                lineHeight: '100%',
                letterSpacing: '0',
                color: '#000000',
              }}
            >
              Green Energy
            </span>
          </h1>
          <p
            className="absolute whitespace-normal"
            style={{
              top: '234px',
              left: '4px',
              width: '427px',
              height: '54px',
              fontFamily: '"Inter", sans-serif',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '150%',
              letterSpacing: '0',
              color: '#000000',
            }}
          >
            <span className="block whitespace-nowrap">Learn how sustainable energy from organic</span>
            <span className="block whitespace-nowrap">materials can create a greener future.</span>
          </p>
          <button className="absolute flex items-center text-white shadow-xl transition-all hover:brightness-105 active:scale-95 group overflow-hidden" 
            style={{ 
              top: '314px',
              left: '0',
              width: 'fit-content',
              height: '52px',
              padding: '8px 8px 8px 32px',
              borderRadius: '30px',
              gap: '12px',
              backgroundColor: '#0C9458',
              fontSize: '18px', 
              fontWeight: 500,
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              letterSpacing: '-0.02em',
              lineHeight: '20px'
            }}
          >
            Let's Started
            <span className="w-[36px] h-[36px] bg-white rounded-full flex items-center justify-center text-primary shadow-sm group-hover:rotate-45 transition-transform shrink-0">
              <img src="/arrow-right-up.png" alt="" className="w-4 h-4" />
            </span>
          </button>
        </div>

        <div className="absolute bottom-[20px] left-[101px] flex items-center gap-[20px] z-20">
          <div className="flex items-center gap-6 border border-white/20 p-6 shadow-2xl overflow-hidden" 
            style={{ 
              width: '541px',
              height: '186px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(18.8px)',
              WebkitBackdropFilter: 'blur(18.8px)',
              borderRadius: '20px'
            }}
          >
            <div className="hidden sm:block shrink-0">
              <img 
                src="/intrigrated_solid_waste%201.png" 
                alt="Integrated Waste" 
                className="object-cover rounded-2xl" 
                style={{ 
                  width: '183px', 
                  height: '154px', 
                  border: '1px solid #000000' 
                }} 
              />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-[500] leading-[1.4] mb-2" style={{ fontSize: '20px', maxWidth: '308px', fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                Integrated Solid Waste Management
              </h3>
              <p className="text-white font-normal leading-[1.4] mb-3" style={{ fontSize: '14px', maxWidth: '301px', fontFamily: '"Inter", sans-serif', letterSpacing: '-0.01em' }}>
                comprehensive approach to managing waste that combines various waste management
              </p>
              <a href="#services" className="text-white underline underline-offset-4" style={{ fontSize: '16px', fontWeight: 500, fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', lineHeight: '140%' }}>
                Discover Our Services
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center border border-white/20 shadow-2xl overflow-hidden" 
            style={{ 
              width: '206px',
              height: '186px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(18.8px)',
              WebkitBackdropFilter: 'blur(18.8px)',
              borderRadius: '20px'
            }}
          >
            <span className="text-white font-normal leading-none drop-shadow-lg" style={{ fontSize: '64px', fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', letterSpacing: '-0.01em' }}>
              150+
            </span>
            <span className="text-white text-base lg:text-lg font-bold opacity-80 uppercase tracking-widest mt-2">Customers</span>
          </div>
        </div>
        
        <div className="absolute top-[805px] left-[1332px] flex items-center justify-between z-50 overflow-visible" 
          style={{ width: '110.91px', height: '50.91px' }}>
          <button className="transition-all hover:scale-110 active:scale-95 shrink-0">
            <img src="/Frame%2043.png" alt="Prev" className="w-[36px] h-[36px]" />
          </button>
          <button className="transition-all hover:scale-110 active:scale-95 shrink-0">
            <img src="/Frame%202.png" alt="Next" className="w-[36px] h-[36px]" />
          </button>
        </div>
      </div>
    </section>
  );
};
