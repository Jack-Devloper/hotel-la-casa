"use client";

import Image from "next/image";

export default function HotelLaCasaDemo() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="text-xl font-serif tracking-widest text-amber-400 font-bold">
          HOTEL LA CASA <span className="text-xs tracking-normal block text-slate-400 font-sans font-light">ENIKEPADU, VIJAYAWADA</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <a href="#rooms" className="hover:text-amber-400 transition">Rooms</a>
          <a href="#amenities" className="hover:text-amber-400 transition">Amenities</a>
          <a href="#location" className="hover:text-amber-400 transition">Location</a>
        </nav>
        <a 
          href="#book" 
          className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-5 py-2 rounded-full text-sm transition shadow-lg shadow-amber-500/20"
        >
          Book Direct
        </a>
      </header>

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-28 md:py-40 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-900">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
        <span className="text-amber-400 uppercase tracking-widest text-xs font-semibold mb-3">Boutique Comfort Beside Decathlon, Enikepadu</span>
        <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight max-w-3xl mb-6">
          Your Peaceful Stay Experience in Vijayawada
        </h1>
        <p className="text-slate-400 max-w-xl text-lg mb-10 leading-relaxed">
          Welcome to Hotel La Casa. Exceptional hospitality, pristine rooms, and fine multi-cuisine dining tailored for your comfort.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <a 
            href="#book" 
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-3.5 rounded-full transition shadow-xl shadow-amber-500/20 text-center"
          >
            Reserve Your Room
          </a>
          <a 
            href="#rooms" 
            className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium px-8 py-3.5 rounded-full transition text-center"
          >
            Explore Rooms
          </a>
        </div>
      </section>

      {/* ROOMS SECTION */}
      <section id="rooms" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold mb-3">Our Accommodation Options</h2>
          <p className="text-slate-400">Clean, well-maintained, and equipped with modern facilities.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/50 transition">
            <div className="h-48 bg-slate-800 flex items-center justify-center text-slate-500 font-mono text-sm">[ Standard Double Room ]</div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-serif font-semibold">Standard Double</h3>
                <span className="text-amber-400 font-semibold">₹1,899 / night</span>
              </div>
              <p className="text-slate-400 text-sm mb-6">Cozy full bed, air conditioning, private ensuite bathroom, flat-screen TV, and high-speed Wi-Fi.</p>
              <a href="#book" className="block text-center bg-slate-800 hover:bg-amber-500 hover:text-slate-950 font-medium py-2.5 rounded-xl transition text-sm">Book This Room</a>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/50 transition">
            <div className="h-48 bg-slate-800 flex items-center justify-center text-slate-500 font-mono text-sm">[ Deluxe Room ]</div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-serif font-semibold">Deluxe Room</h3>
                <span className="text-amber-400 font-semibold">₹2,499 / night</span>
              </div>
              <p className="text-slate-400 text-sm mb-6">Spacious layout featuring a queen bed, work desk, complimentary breakfast option, and 24/7 service.</p>
              <a href="#book" className="block text-center bg-slate-800 hover:bg-amber-500 hover:text-slate-950 font-medium py-2.5 rounded-xl transition text-sm">Book This Room</a>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/50 transition">
            <div className="h-48 bg-slate-800 flex items-center justify-center text-slate-500 font-mono text-sm">[ Family Suite ]</div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-serif font-semibold">Family Suite</h3>
                <span className="text-amber-400 font-semibold">₹3,799 / night</span>
              </div>
              <p className="text-slate-400 text-sm mb-6">Extra space, multi-bed setups, premium amenities, and ideal comfort for families or business groups.</p>
              <a href="#book" className="block text-center bg-slate-800 hover:bg-amber-500 hover:text-slate-950 font-medium py-2.5 rounded-xl transition text-sm">Book This Room</a>
            </div>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section id="amenities" className="py-20 bg-slate-900/50 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-3">Hotel Amenities & Features</h2>
            <p className="text-slate-400">Everything provided to ensure a seamless stay.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-slate-900 rounded-xl border border-slate-800"><div className="text-3xl mb-2">📶</div><h4 className="font-semibold mb-1">Free High-Speed WiFi</h4></div>
            <div className="p-6 bg-slate-900 rounded-xl border border-slate-800"><div className="text-3xl mb-2">🍽️</div><h4 className="font-semibold mb-1">Multi-Cuisine Restaurant</h4></div>
            <div className="p-6 bg-slate-900 rounded-xl border border-slate-800"><div className="text-3xl mb-2">🅿️</div><h4 className="font-semibold mb-1">Free Private Parking</h4></div>
            <div className="p-6 bg-slate-900 rounded-xl border border-slate-800"><div className="text-3xl mb-2">🛎️</div><h4 className="font-semibold mb-1">24-Hour Front Desk</h4></div>
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section id="book" className="py-24 px-6 max-w-3xl mx-auto">
        <div className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-3xl shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold mb-2">Direct Booking Request</h2>
            <p className="text-slate-400 text-sm">Skip OTA commissions. Book directly with Hotel La Casa.</p>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); alert("Booking request submitted successfully! The hotel management will receive your details instantly."); }} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Your Name</label>
                <input type="text" required placeholder="Enter full name" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-amber-500" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Phone Number</label>
                <input type="tel" required placeholder="+91 98765 43210" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-amber-500" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Check-in Date</label>
                <input type="date" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-amber-500" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Room Selection</label>
                <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-amber-500">
                  <option>Standard Double (₹1,899)</option>
                  <option>Deluxe Room (₹2,499)</option>
                  <option>Family Suite (₹3,799)</option>
                </select>
              </div>
            </div>
            <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-4 rounded-xl transition shadow-lg shadow-amber-500/20 mt-4">
              Submit Direct Booking
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="location" className="border-t border-slate-900 py-12 text-center text-sm text-slate-500">
        <p className="font-serif text-slate-300 text-base mb-1">Hotel La Casa</p>
        <p className="mb-2">Door No: 13-41/1, Gottipati Marg, Beside Decathlon, Enikepadu, Vijayawada, AP - 521108</p>
        <p>© {new Date().getFullYear()} Hotel La Casa. All rights reserved. Direct booking portal prototype.</p>
      </footer>
    </div>
  );
}
