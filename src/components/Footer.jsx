export const Footer = () => {
  return (
    <footer className="page-container mb-8 md:mb-10" id="footer">
      <div className="bg-[#f8f9fa] py-14 md:py-20 rounded-[32px] md:rounded-[60px] overflow-hidden relative px-5 sm:px-6 md:px-12 lg:px-16 xl:px-20 w-full">
        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 lg:gap-16 mb-12 md:mb-20 border-b border-[#dee2e6] pb-12 md:pb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[72px] w-full md:w-[52%] font-normal leading-[1.05] tracking-tight text-[#101010]">
              Key Takeaways and Next Steps
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-[24px] w-full md:w-[44%] text-[#6c757d] leading-[1.5] text-left md:text-right font-medium">
              We are committed to environmental conservation and climate-resilient economic development.
            </p>
          </div>

          <div className="mb-16 md:mb-24">
            <label className="block text-lg sm:text-xl md:text-[24px] text-[#101010] font-semibold mb-5">Email Address</label>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-white p-2 md:p-3 rounded-[22px] sm:rounded-[100px] shadow-lg max-w-[850px] border border-[#eee] transition-shadow hover:shadow-2xl">
              <input type="email" placeholder="name@example.com" className="flex-1 px-5 md:px-6 py-3.5 md:py-4 text-base md:text-lg outline-none bg-transparent min-w-0" />
              <button className="w-full sm:w-auto bg-[#0C9458] text-white py-3.5 md:py-4 px-8 md:px-12 rounded-full font-bold text-base md:text-lg transition-all hover:brightness-110 shadow-lg active:scale-95">Send</button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16 md:mb-20 pb-12 md:pb-20 border-b border-[#dee2e6]">
            <div className="lg:col-span-2">
              <h4 className="text-base text-[#6c757d] mb-5 font-semibold uppercase tracking-wider">Navigate to</h4>
              <nav className="flex flex-col gap-3 text-base md:text-[20px] font-bold text-[#101010]">
                <a href="#home" className="hover:text-[#0C9458] transition-colors">Home</a>
                <a href="#about" className="hover:text-[#0C9458] transition-colors">About Us</a>
                <a href="#services" className="hover:text-[#0C9458] transition-colors">Services</a>
                <a href="#blogs" className="hover:text-[#0C9458] transition-colors">Blogs</a>
              </nav>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-base text-[#6c757d] mb-5 font-semibold uppercase tracking-wider">Our Business Lines</h4>
              <ul className="flex flex-col gap-3 text-base md:text-[20px] font-bold text-[#101010]">
                <li>Integrated Solid Waste Management</li>
                <li>Biomass Fuel & Green Energy</li>
                <li>Bio Gas - CBG Fuel</li>
              </ul>
            </div>

            <div className="lg:col-span-3 lg:pr-2">
              <h4 className="text-base text-[#6c757d] mb-5 font-semibold uppercase tracking-wider">Office Address</h4>
              <p className="text-sm md:text-[18px] font-medium mb-4 leading-relaxed text-[#101010]">Juhu Tara Rd, Uditi Tarang Housing Colony, Juhu Tara, Juhu, Mumbai, Maharashtra 400049, India</p>
              <p className="text-sm md:text-[18px] font-bold mb-2 break-all">Example@gmail.com</p>
              <p className="text-sm md:text-[18px] font-bold">+91 8554865952</p>
            </div>

            <div className="lg:col-span-3 lg:pr-2">
              <h4 className="text-base text-[#6c757d] mb-5 font-semibold uppercase tracking-wider">Plant Address</h4>
              <p className="text-sm md:text-[18px] font-medium mb-4 leading-relaxed text-[#101010]">Sahar Airport Road, Andheri - Kurla Rd, near Mumbai International Airport, Andheri East, Mumbai, Maharashtra 400059, India</p>
              <p className="text-sm md:text-[18px] font-bold mb-2 break-all">Example@gmail.com</p>
              <p className="text-sm md:text-[18px] font-bold">+91 8554865952 / 8554865952</p>
            </div>

            <div className="lg:col-span-1 flex flex-row lg:flex-col items-center justify-start lg:justify-start gap-5 pt-0 lg:pt-2">
              <button className="w-14 h-14 md:w-16 md:h-16 bg-[#25d366] text-white rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-110 group cursor-pointer z-10">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.01 2.014a9.962 9.962 0 018.47 4.981 9.932 9.932 0 010 9.982 9.96 9.96 0 01-14.88 3.522l-3.32.879.888-3.23a9.924 9.924 0 01-1.12-4.153A9.957 9.957 0 0112.01 2.014zm4.84 13.922c-.225-.6-.73-.83-1.077-.925-.347-.095-2.062-1.018-2.383-1.133-.32-.116-.554-.174-.787.173-.233.348-.897 1.134-1.1 1.365-.203.232-.407.26-.754.086-1.554-.78-2.73-1.847-3.415-3.037-.123-.213.116-.192.34-.416.19-.19.382-.457.573-.686.08-.095.127-.163.19-.272.12-.213.06-.4-.03-.574-.087-.174-.787-1.9-1.077-2.602-.284-.683-.573-.59-.787-.6-.2-.01-.43-.012-.662-.012a1.278 1.278 0 00-.916.425c-.32.348-1.22 1.192-1.22 2.905s1.25 3.364 1.424 3.596c.174.232 2.455 3.75 5.94 5.253.826.357 1.472.57 1.975.73.83.262 1.585.225 2.18.136.666-.098 2.063-.843 2.353-1.655.29-.812.29-1.507.203-1.655-.087-.148-.32-.234-.666-.407z"/>
                </svg>
              </button>
              <button className="w-14 h-14 md:w-16 md:h-16 bg-[#9e8450] text-white rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-110 group cursor-pointer z-10" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:-translate-y-1 transition-transform">
                  <path d="M5 15l7-7 7 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-7">
            <div className="flex flex-wrap justify-center lg:justify-start gap-5 sm:gap-8 text-sm md:text-[18px] font-medium text-[#6c757d]">
              <a href="#" className="hover:text-[#0C9458] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#0C9458] transition-colors">Privacy Policy</a>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8">
              <div className="flex gap-3 sm:gap-4">
                {['f', 'in', 'X'].map((s) => (
                  <button key={s} className="w-11 h-11 md:w-[52px] md:h-[52px] border border-[#dee2e6] rounded-full flex items-center justify-center text-base md:text-xl font-bold hover:bg-[#0C9458] hover:text-white hover:border-[#0C9458] transition-all transform hover:scale-110 text-[#6c757d]">{s}</button>
                ))}
              </div>
              <p className="text-sm md:text-base text-[#6c757d] font-medium">&copy; 2025. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
