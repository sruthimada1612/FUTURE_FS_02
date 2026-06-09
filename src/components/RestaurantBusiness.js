import React, { useState } from 'react';

function RestaurantBusiness() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [reservation, setReservation] = useState({ name: '', email: '', date: '', time: '', guests: '2' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const menuItems = [
    { id: 1, name: 'Crispy Avocado Toast', price: '₹249', category: 'Breakfast', desc: 'Sourdough bread topped with mashed avocado, cherry tomatoes, and feta cheese.' },
    { id: 2, name: 'Classic Truffle Burger', price: '₹449', category: 'Main Course', desc: 'Juicy smashed beef or vegetable patty, melted cheddar, and rich truffle aioli.' },
    { id: 3, name: 'Arabiata Penne Pasta', price: '₹379', category: 'Main Course', desc: 'Spicy tomato sauce pasta tossed with fresh basil, garlic, and parmesan black pepper.' },
    { id: 4, name: 'Molten Lava Chocolate Cake', price: '₹219', category: 'Desserts', desc: 'Warm chocolate cake with a rich liquid chocolate center served with vanilla ice cream.' },
    { id: 5, name: 'Iced Matcha Latte', price: '₹189', category: 'Beverages', desc: 'Premium organic Japanese matcha whisked with chilled milk and vanilla syrup.' },
    { id: 6, name: 'Loaded Nachos Grande', price: '₹299', category: 'Breakfast', desc: 'Tortilla chips smothered in warm cheese sauce, black beans, jalapenos, and salsa.' }
  ];

  const filteredMenu = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const handleBookTable = (e) => {
    e.preventDefault();
    if (!reservation.name || !reservation.date || !reservation.time) {
      alert("Please fill in your name, preferred date, and time slot.");
      return;
    }
    // Form action simulation
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setReservation({ name: '', email: '', date: '', time: '', guests: '2' });
    }, 4000);
  };

  return (
    <div className="bistro-wrapper">
      {/* 1. HERO BANNER */}
      <header className="bistro-hero">
        <div className="bistro-hero-overlay">
          <h1>The Urban Bistro</h1>
          <p>Experience Culinary Excellence & Craft Flavors In A Cozy Ambience</p>
          <a href="#reserve" className="btn-bistro-accent">Book A Table</a>
        </div>
      </header>

      {/* 2. DYNAMIC DIGITAL MENU SECTION */}
      <section className="bistro-section">
        <h2 className="section-title">Explore Our Chef's Creations</h2>
        
        <div className="category-tabs-row">
          {['All', 'Breakfast', 'Main Course', 'Desserts', 'Beverages'].map(cat => (
            <button 
              key={cat} 
              className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="bistro-menu-grid">
          {filteredMenu.map(item => (
            <div key={item.id} className="menu-item-card">
              <div className="menu-card-header">
                <h3>{item.name}</h3>
                <span className="menu-price">{item.price}</span>
              </div>
              <p className="menu-desc">{item.desc}</p>
              <span className="menu-cat-tag">{item.category}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INTERACTIVE RESERVATION INTAKE */}
      <section id="reserve" className="bistro-section alt-bg">
        <div className="reservation-container">
          <div className="reservation-info">
            <h2>Secure Your Dining Experience</h2>
            <p>Planning a dinner date, weekend family brunch, or corporate gathering? Skip the long waiting lines and book your private table container layout instantly.</p>
            <div className="contact-meta">
              <p>📍 12-4, Beach Road, Visakhapatnam</p>
              <p>📞 +91 98765 43210</p>
              <p>⏰ Open Daily: 11:00 AM - 11:00 PM</p>
            </div>
          </div>

          <div className="reservation-form-card">
            <h3>Table Reservation Request</h3>
            {formSubmitted ? (
              <div className="success-banner">
                🎉 Table Reservation Request Registered Successfully! We will text your confirmation seat code shortly.
              </div>
            ) : (
              <form onSubmit={handleBookTable} className="vertical-bistro-form">
                <input 
                  type="text" placeholder="Your Full Name" required
                  value={reservation.name} onChange={e => setReservation({...reservation, name: e.target.value})} 
                />
                <input 
                  type="email" placeholder="Email Address (Optional)" 
                  value={reservation.email} onChange={e => setReservation({...reservation, email: e.target.value})} 
                />
                <div className="form-row-split">
                  <input 
                    type="date" required
                    value={reservation.date} onChange={e => setReservation({...reservation, date: e.target.value})} 
                  />
                  <input 
                    type="time" required
                    value={reservation.time} onChange={e => setReservation({...reservation, time: e.target.value})} 
                  />
                </div>
                <select value={reservation.guests} onChange={e => setReservation({...reservation, guests: e.target.value})}>
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="6">6+ Guests (Party)</option>
                </select>
                <button type="submit" className="btn-bistro-submit">Confirm Dynamic Booking</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default RestaurantBusiness;