export const Footer = () => {
  return (
    <footer className="page-container mb-10" id="footer">
      <div className="bg-[#f8f9fa] py-16 md:py-24 rounded-[40px] md:rounded-[60px] overflow-hidden relative px-6 md:px-12 lg:px-20 w-full">
        <div className="w-full">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 lg:gap-16 mb-16 md:mb-24 border-b border-[#dee2e6] pb-16 md:pb-24">
          <h2 className="text-4xl md:text-6xl lg:text-[72px] w-full md:w-[50%] font-normal leading-[1.05] tracking-tight text-[#101010]">
            Key Takeaways and Next Steps
          </h2>
          <p className="text-lg md:text-xl lg:text-[24px] w-full md:w-[40%] text-[#6c757d] leading-[1.5] text-left md:text-right font-medium">
            We are committed to environmental conservation and climate-resilient economic development.
          </p>
        </div>

        {/* Email Input */}
        <div className="mb-20 md:mb-32">
          <label className="block text-xl md:text-[24px] text-[#101010] font-semibold mb-6">Email Address</label>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 bg-white p-2 md:p-3 rounded-[30px] md:rounded-[100px] shadow-lg md:shadow-xl max-w-[850px] border border-[#eee] transition-shadow hover:shadow-2xl">
            <input type="email" placeholder="name@example.com" className="flex-1 px-6 py-4 md:py-5 text-lg md:text-xl outline-none bg-transparent" />
            <button className="w-full sm:w-auto bg-[#0C9458] text-white py-4 md:py-5 px-10 md:px-14 rounded-full font-bold text-lg md:text-xl transition-all hover:brightness-110 shadow-lg active:scale-95">Send</button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 md:mb-28 pb-16 md:pb-24 border-b border-[#dee2e6]">
          {/* Navigate to */}
          <div className="lg:col-span-2">
            <h4 className="text-base text-[#6c757d] mb-6 font-semibold uppercase tracking-wider">Navigate to</h4>
            <nav className="flex flex-col gap-4 text-lg md:text-[20px] font-bold text-[#101010]">
              <a href="#home" className="hover:text-[#0C9458] transition-colors">Home</a>
              <a href="#about" className="hover:text-[#0C9458] transition-colors">About Us</a>
              <a href="#services" className="hover:text-[#0C9458] transition-colors">Services</a>
              <a href="#blogs" className="hover:text-[#0C9458] transition-colors">Blogs</a>
            </nav>
          </div>

          {/* Business Lines */}
          <div className="lg:col-span-3">
            <h4 className="text-base text-[#6c757d] mb-6 font-semibold uppercase tracking-wider">Our Business Lines</h4>
            <ul className="flex flex-col gap-4 text-lg md:text-[20px] font-bold text-[#101010]">
              <li>Integrated Solid Waste Management</li>
              <li>Biomass Fuel & Green Energy</li>
              <li>Bio Gas - CBG Fuel</li>
            </ul>
          </div>

          {/* Office Address */}
          <div className="lg:col-span-3 lg:pr-4">
            <h4 className="text-base text-[#6c757d] mb-6 font-semibold uppercase tracking-wider">Office Address</h4>
            <p className="text-base md:text-[18px] font-medium mb-4 leading-relaxed text-[#101010]">Juhu Tara Rd, Uditi Tarang Housing Colony, Juhu Tara, Juhu, Mumbai, Maharashtra 400049, India</p>
            <p className="text-base md:text-[18px] font-bold mb-2">Example@gmail.com</p>
            <p className="text-base md:text-[18px] font-bold">+91 8554865952</p>
          </div>

          {/* Plant Address */}
          <div className="lg:col-span-3 lg:pr-4">
            <h4 className="text-base text-[#6c757d] mb-6 font-semibold uppercase tracking-wider">Plant Address</h4>
            <p className="text-base md:text-[18px] font-medium mb-4 leading-relaxed text-[#101010]">Sahar Airport Road, Andheri - Kurla Rd, near Mumbai International Airport, Andheri East, Mumbai, Maharashtra 400059, India</p>
            <p className="text-base md:text-[18px] font-bold mb-2">Example@gmail.com</p>
            <p className="text-base md:text-[18px] font-bold">+91 8554865952 / 8554865952</p>
          </div>

          {/* Floating Actions */}
          <div className="lg:col-span-1 flex flex-row lg:flex-col items-center justify-center lg:justify-start gap-6 pt-4 lg:pt-0">
            <button className="w-16 h-16 md:w-20 md:h-20 bg-[#25d366] text-white rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-110 group cursor-pointer z-10">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.01 2.014a9.962 9.962 0 018.47 4.981 9.932 9.932 0 010 9.982 9.96 9.96 0 01-14.88 3.522l-3.32.879.888-3.23a9.924 9.924 0 01-1.12-4.153A9.957 9.957 0 0112.01 2.014zm4.84 13.922c-.225-.6-.73-.83-1.077-.925-.347-.095-2.062-1.018-2.383-1.133-.32-.116-.554-.174-.787.173-.233.348-.897 1.134-1.1 1.365-.203.232-.407.26-.754.086-1.554-.78-2.73-1.847-3.415-3.037-.123-.213.116-.192.34-.416.19-.19.382-.457.573-.686.08-.095.127-.163.19-.272.12-.213.06-.4-.03-.574-.087-.174-.787-1.9-1.077-2.602-.284-.683-.573-.59-.787-.6-.2-.01-.43-.012-.662-.012a1.278 1.278 0 00-.916.425c-.32.348-1.22 1.192-1.22 2.905s1.25 3.364 1.424 3.596c.174.232 2.455 3.75 5.94 5.253.826.357 1.472.57 1.975.73.83.262 1.585.225 2.18.136.666-.098 2.063-.843 2.353-1.655.29-.812.29-1.507.203-1.655-.087-.148-.32-.234-.666-.407z"/>
              </svg>
            </button>
            <button className="w-16 h-16 md:w-20 md:h-20 bg-[#9e8450] text-white rounded-full flex items-center justify-center text-3xl shadow-xl transition-transform hover:scale-110 group cursor-pointer z-10" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:-translate-y-1 transition-transform">
                <path d="M5 15l7-7 7 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex gap-8 text-base md:text-[18px] font-medium text-[#6c757d]">
            <a href="#" className="hover:text-[#0C9458] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#0C9458] transition-colors">Privacy Policy</a>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10">
            <div className="flex gap-4">
              {['f', 'in', 'X'].map((s) => (
                <button key={s} className="w-12 h-12 md:w-[56px] md:h-[56px] border border-[#dee2e6] rounded-full flex items-center justify-center text-lg md:text-xl font-bold hover:bg-[#0C9458] hover:text-white hover:border-[#0C9458] transition-all transform hover:scale-110 text-[#6c757d]">{s}</button>
              ))}
            </div>
            <p className="text-base md:text-lg text-[#6c757d] font-medium">© 2025. All rights reserved</p>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};
