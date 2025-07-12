
export default function NavBar() {
  return (
    <nav className="w-full flex justify-center mt-10 select-none">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center bg-[rgba(30,40,80,0.6)] backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl px-16 py-2 min-w-[1000px] max-w-4xl">
          <div className="relative flex items-center gap-10">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold font-poppins" style={{ color: '#00ffc3' }}>Anonimity</span>
              <div className="w-24 h-2 bg-gradient-to-r from-[#00ffc3] via-[#00bfff] to-transparent rounded-full blur-md mt-1" />
            </div>
            <a className="text-white font-normal text-lg px-4 py-2 hover:text-[#00ffc3] transition cursor-pointer font-poppins">About us</a>
            <a className="text-white font-normal text-lg px-4 py-2 hover:text-[#00ffc3] transition cursor-pointer font-poppins">Send Message</a>
            <a className="text-white font-normal text-lg px-4 py-2 hover:text-[#00ffc3] transition cursor-pointer font-poppins">Send Message</a>
          </div>
        </div>
      </div>
    </nav>
  );
}