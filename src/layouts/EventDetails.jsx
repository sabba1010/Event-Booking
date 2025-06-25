import React from "react";
import { NavLink } from "react-router-dom";
import { Star } from "lucide-react"; // Optional: DaisyUI supports Lucide icons

const EventCompanyDetails = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Logo + Header */}
      <div className="text-center mb-8">
       
        <h1 className="text-5xl font-bold text-primary mt-4">Dream Events Ltd.</h1>
        <p className="text-gray-600 mt-2 text-lg">
          Turning ideas into extraordinary moments.
        </p>
      </div>

      {/* Main Card */}
      <div className="card bg-gradient-to-br from-white via-base-100 to-gray-50 shadow-xl rounded-2xl border border-gray-200 transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
        <div className="card-body">
          {/* About */}
          <p className="text-lg text-gray-700 leading-relaxed">
            <span className="text-secondary font-semibold">Dream Events</span> is a premium event management company
            with over a decade of expertise in organizing corporate events, exhibitions, private parties,
            destination weddings, and concerts. We bring your imagination to life — with elegance and precision.
          </p>

          {/* Tag section */}
          <div className="mt-5 flex flex-wrap gap-3">
            {["Corporate Events", "Weddings", "Concerts", "Exhibitions", "Birthday Parties"].map((tag, i) => (
              <span key={i} className="badge badge-outline badge-primary text-sm">
                {tag}
              </span>
            ))}
          </div>

          {/* Contact Info */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-base">
            <p>
              <span className="font-semibold">📍 Location:</span> Banani, Dhaka, Bangladesh
            </p>
            <p>
              <span className="font-semibold">📧 Email:</span>{" "}
              <a href="mailto:contact@dreamevents.com" className="text-blue-600 hover:underline">
                contact@dreamevents.com
              </a>
            </p>
            <p>
              <span className="font-semibold">📞 Phone:</span>{" "}
              <a href="tel:+8801234567890" className="hover:underline text-blue-600">
                +880 1234 567 890
              </a>
            </p>
            <p>
              <span className="font-semibold">🕒 Hours:</span> 9 AM – 6 PM (Sun–Thu)
            </p>
          </div>

          {/* Ratings */}
          <div className="mt-6 flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
            <span className="ml-2 text-gray-600 text-sm">(4.9/5 based on 210+ reviews)</span>
          </div>

          {/* CTA */}
          <div className="mt-10 flex justify-end">
            <NavLink
              to="/"
              className="btn btn-primary px-6 py-3 rounded-xl text-white font-semibold tracking-wide hover:scale-105 hover:shadow-md transition"
            >
              Book an Event
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCompanyDetails;
