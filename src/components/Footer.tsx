export const Footer = () => {
  return (
    <footer className="footer bg-[#f8f9fa] py-28 mx-6 mt-10 rounded-[60px] overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-[1440px]">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 lg:gap-32 mb-28 border-b border-[#dee2e6] pb-24">
          <h2 className="text-5xl md:text-7xl lg:text-8xl w-full md:w-[55%] font-medium leading-[1.05] tracking-tight text-[#101010]">
            Key Takeaways and Next Steps
          </h2>
          <p className="text-xl lg:text-3xl w-full md:w-[40%] text-[#6c757d] leading-[1.4] text-left md:text-right font-medium">
            We are committed to environmental conservation and climate-resilient economic development.
          </p>
        </div>

        <div className="mb-32">
          <label className="block text-2xl md:text-3xl text-[#101010] font-semibold mb-8">Email Address</label>
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-3 rounded-[100px] shadow-2xl max-w-[850px] border border-[#eee]">
            <input type="email" placeholder="name@example.com" className="flex-1 px-8 py-5 text-2xl outline-none bg-transparent" />
            <button className="w-full sm:w-auto bg-primary text-white py-5 px-14 rounded-full font-bold text-2xl transition-all hover:brightness-110 shadow-lg active:scale-95">Send</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-24 mb-28 pb-24 border-b border-[#dee2e6]">
          <div className="col-span-1 lg:col-span-1">
            <h4 className="text-xl font-bold uppercase tracking-widest text-[#6c757d] mb-10">Navigate to</h4>
            <nav className="flex flex-col gap-6 text-2xl font-semibold text-[#101010]">
              <a href="#home">Home</a><a href="#about">About us</a><a href="#product">Product</a><a href="#sustainability">Sustainability</a>
            </nav>
          </div>

          <div className="col-span-1 lg:col-span-1">
            <h4 className="text-xl font-bold uppercase tracking-widest text-[#6c757d] mb-10">Our Business Lines</h4>
            <ul className="flex flex-col gap-6 text-2xl font-semibold text-[#101010]">
              <li>Integrated Solid Waste Management</li><li>Biomass Fuel & Green Energy</li><li>Bio Gas - CBG Fuel</li>
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-1">
            <h4 className="text-xl font-bold uppercase tracking-widest text-[#6c757d] mb-10">Office Address</h4>
            <p className="text-xl font-medium mb-6 leading-relaxed">Juhu Tara Rd, Uditi Tarang Housing Colony, Juhu Tara, Juhu, Mumbai, Maharashtra 400049, India</p>
            <p className="text-xl font-bold mb-3 italic">Example@gmail.com</p>
            <p className="text-xl font-bold">+91 8554865952</p>
          </div>

          <div className="col-span-1 lg:col-span-1">
            <h4 className="text-xl font-bold uppercase tracking-widest text-[#6c757d] mb-10">Plant Address</h4>
            <p className="text-xl font-medium mb-6 leading-relaxed">Sahar Airport Road, Andheri - Kurla Rd, near Mumbai International Airport, Andheri East, Mumbai, Maharashtra 400059, India</p>
            <p className="text-xl font-bold mb-3 italic">Example@gmail.com</p>
            <p className="text-xl font-bold">+91 8554865952 / 8554865952</p>
          </div>

          <div className="col-span-1 lg:col-span-1 flex flex-row lg:flex-col items-center justify-center gap-8">
            <button className="w-20 h-20 md:w-28 md:h-28 bg-[#25d366] text-white rounded-full flex items-center justify-center text-4xl shadow-xl transition-transform hover:scale-110">🗨</button>
            <button className="w-20 h-20 md:w-28 md:h-28 bg-accent text-white rounded-full flex items-center justify-center text-4xl shadow-xl transition-transform hover:scale-110">⌃</button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex gap-12 text-xl font-semibold text-[#6c757d]">
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex gap-6">
              {['f', '◎', 'X'].map((s) => (
                <button key={s} className="w-14 h-14 border border-[#dee2e6] rounded-full flex items-center justify-center text-2xl font-bold hover:bg-primary hover:text-white transition-all transform hover:scale-110">{s}</button>
              ))}
            </div>
            <p className="text-xl text-[#6c757d] font-medium">© 2025. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
