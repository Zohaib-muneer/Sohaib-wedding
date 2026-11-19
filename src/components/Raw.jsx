import { useState, useEffect } from 'react';

export default function LandingPage() {
  // 1. COUNTDOWN TIMER LOGIC (Targeting a placeholder wedding date)
  const calculateTimeLeft = () => {
    const weddingDate = new Date('2027-06-18T16:00:00'); // Set your wedding date here
    const difference = +weddingDate - +new Date();
    
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60000); // Updates every minute
    return () => clearInterval(timer);
  }, []);

  // 2. RSVP FORM HANDLING STATE
  const [guestName, setGuestName] = useState('');
  const [isAttending, setIsAttending] = useState('yes');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleRSVP = (e) => {
    e.preventDefault();
    // Later, you will link this to Supabase/Firebase database strings
    console.log({ guestName, isAttending });
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-amber-100">
      
      {/* SECTION 1: HERO CONTAINER */}
      <header className="relative h-screen flex flex-col items-center justify-center text-center p-4 bg-gradient-to-b from-amber-50/50 to-stone-50">
        <span className="text-xs uppercase tracking-[0.3em] text-amber-800 font-semibold mb-3">
          The Wedding Invitation
        </span>
        <h1 className="font-serif text-5xl md:text-7xl font-light tracking-wide text-stone-900 mb-4">
          Alex & Taylor
        </h1>
        <p className="text-sm md:text-base italic text-stone-500 font-serif max-w-md">
          Together with their families, invite you to celebrate their union
        </p>
        
        {/* Wedding Date Details badge */}
        <div className="mt-12 px-6 py-3 border-y border-stone-200 text-stone-600 tracking-widest text-xs uppercase">
          June 18, 2027 • New York, NY
        </div>
      </header>

      {/* SECTION 2: LIVE COUNTDOWN GRID */}
      <section className="py-16 bg-white border-y border-stone-100 flex flex-col items-center">
        <h3 className="font-serif text-lg text-stone-600 mb-8 tracking-wide">Counting Down the Days</h3>
        <div className="grid grid-cols-3 gap-6 max-w-sm text-center">
          <div className="bg-stone-50 p-4 rounded-lg w-20 shadow-sm">
            <span className="block font-serif text-3xl font-light text-amber-800">{timeLeft.days || 0}</span>
            <span className="text-[10px] uppercase tracking-wider text-stone-400">Days</span>
          </div>
          <div className="bg-stone-50 p-4 rounded-lg w-20 shadow-sm">
            <span className="block font-serif text-3xl font-light text-amber-800">{timeLeft.hours || 0}</span>
            <span className="text-[10px] uppercase tracking-wider text-stone-400">Hours</span>
          </div>
          <div className="bg-stone-50 p-4 rounded-lg w-20 shadow-sm">
            <span className="block font-serif text-3xl font-light text-amber-800">{timeLeft.minutes || 0}</span>
            <span className="text-[10px] uppercase tracking-wider text-stone-400">Mins</span>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE RSVP FORM BOX */}
      <section className="py-20 px-4 max-w-md mx-auto">
        <div className="bg-white border border-stone-200/60 p-8 rounded-xl shadow-xl shadow-stone-200/40 text-center">
          <h2 className="font-serif text-2xl text-stone-900 mb-2">Kindly RSVP</h2>
          <p className="text-xs text-stone-400 mb-6">Please respond by May 1st, 2027</p>

          {!formSubmitted ? (
            <form onSubmit={handleRSVP} className="space-y-4 text-left">
              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-500 font-semibold mb-1">Your Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-2 border border-stone-200 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-600 bg-stone-50 text-sm"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-500 font-semibold mb-1">Will You Attend?</label>
                <select 
                  className="w-full px-4 py-2 border border-stone-200 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-600 bg-stone-50 text-sm"
                  value={isAttending}
                  onChange={(e) => setIsAttending(e.target.value)}
                >
                  <option value="yes">Joyfully Accept 🎉</option>
                  <option value="no">Regretfully Decline ✉️</option>
                </select>
              </div>

              <button 
                type="submit" 
                className="w-full mt-4 py-2.5 bg-amber-800 hover:bg-amber-900 text-white rounded-md text-xs uppercase font-semibold tracking-widest transition-colors shadow-sm"
              >
                Submit Response
              </button>
            </form>
          ) : (
            <div className="py-8 space-y-3">
              <span className="text-3xl">❤️</span>
              <h3 className="font-serif text-lg text-stone-800">Thank You!</h3>
              <p className="text-xs text-stone-500 max-w-xs mx-auto">Your RSVP response has been successfully logged.</p>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
