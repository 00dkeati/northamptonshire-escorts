import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Northamptonshire Escorts Agency",
  description: "Terms of service for Northamptonshire Escorts Agency.",
};

export default function TermsPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-b from-black via-zinc-900 to-zinc-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-playfair font-bold mb-6">
            <span className="text-amber-400">Terms of</span>
            <span className="text-white"> Service</span>
          </h1>
          <div className="divider-gold my-8"></div>
        </div>
      </section>

      <section className="py-16 section-dark">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card-elegant prose prose-invert max-w-none">
            <h2 className="text-amber-400">Introduction</h2>
            <p>
              By using the Northamptonshire Escorts Agency website and services, you agree to 
              these terms of service. Please read them carefully.
            </p>

            <h3>Age Requirement</h3>
            <p>
              You must be at least 18 years of age to use our services. By accessing this 
              website, you confirm that you are 18 or older.
            </p>

            <h3>Nature of Services</h3>
            <p>
              Northamptonshire Escorts Agency acts solely as an introduction agency. We 
              facilitate introductions between clients and independent escorts. Any 
              arrangements made between clients and escorts are at their own discretion.
            </p>

            <h3>Escort Independence</h3>
            <p>
              All escorts listed on our website are independent contractors, not employees 
              of Northamptonshire Escorts Agency. They set their own rates, services, and 
              boundaries.
            </p>

            <h3>Payment</h3>
            <p>
              Payment terms are agreed upon at the time of booking. Payment is typically 
              made directly to the escort. Any fees paid to the agency are for introduction 
              services only.
            </p>

            <h3>Cancellations</h3>
            <p>
              Cancellation policies vary by escort and are communicated at the time of 
              booking. We request that cancellations be made with as much notice as possible.
            </p>

            <h3>Conduct</h3>
            <p>
              Clients are expected to treat escorts with respect at all times. Any 
              inappropriate behaviour may result in termination of services and being 
              banned from future bookings.
            </p>

            <h3>Limitation of Liability</h3>
            <p>
              Northamptonshire Escorts Agency is not liable for any disputes, issues, or 
              incidents that may occur between clients and escorts. We act solely as an 
              introduction service.
            </p>

            <h3>Changes to Terms</h3>
            <p>
              We reserve the right to update these terms at any time. Continued use of 
              our services constitutes acceptance of any changes.
            </p>

            <h3>Contact</h3>
            <p>
              For any questions about these terms, please contact us at 
              info@bedfordshireescorts.agency
            </p>

            <p className="text-sm text-gray-500 mt-8">
              Last updated: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
