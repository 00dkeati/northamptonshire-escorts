import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Northamptonshire Escorts Agency",
  description: "Privacy policy for Northamptonshire Escorts Agency. Learn how we protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-b from-black via-zinc-900 to-zinc-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-playfair font-bold mb-6">
            <span className="text-amber-400">Privacy</span>
            <span className="text-white"> Policy</span>
          </h1>
          <div className="divider-gold my-8"></div>
        </div>
      </section>

      <section className="py-16 section-dark">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card-elegant prose prose-invert max-w-none">
            <h2 className="text-amber-400">Your Privacy Matters</h2>
            <p>
              At Northamptonshire Escorts Agency, we take your privacy extremely seriously. 
              This policy outlines how we collect, use, and protect your personal information.
            </p>

            <h3>Information We Collect</h3>
            <p>We may collect the following information when you contact us:</p>
            <ul>
              <li>Name or alias</li>
              <li>Email address</li>
              <li>Phone number (if provided)</li>
              <li>Location/area</li>
              <li>Booking preferences</li>
            </ul>

            <h3>How We Use Your Information</h3>
            <p>Your information is used solely for:</p>
            <ul>
              <li>Processing and confirming bookings</li>
              <li>Communicating with you about our services</li>
              <li>Matching you with suitable escorts</li>
            </ul>

            <h3>Information Security</h3>
            <p>
              All communications are handled with the utmost discretion. We do not share your 
              personal information with any third parties except the escort you are booking with, 
              and only the information necessary to facilitate the appointment.
            </p>

            <h3>Data Retention</h3>
            <p>
              We retain your information only as long as necessary to provide our services. 
              You may request deletion of your data at any time by contacting us.
            </p>

            <h3>Your Rights</h3>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Request correction of your data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
            </ul>

            <h3>Contact Us</h3>
            <p>
              For any privacy-related concerns, please contact us at 
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
