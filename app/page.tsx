"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("indieflow_waitlist");
    if (stored) {
      setSubmitted(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      try {
        await fetch("https://script.google.com/macros/s/AKfycbyuOxIq9ZOvuhmXmMbiQVc1jXtI4ccu4_rpJbjHrbjuAjlmb5vU4bzuhN1pllyEQt4KlA/exec", {
          method: "POST",
          mode: "no-cors",
          body: new URLSearchParams({ email }),
        });
        localStorage.setItem("indieflow_waitlist", email);
        setSubmitted(true);
      } catch (err) {
        console.error("Failed to submit email:", err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-6 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="gradient-text">From Zero to 10K Followers</span>
          <br />
          Without the Hustle
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12">
          Let AI automatically cross-post your content to Twitter, LinkedIn, and Reddit
          while you focus on building your product.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#waitlist"
            className="px-8 py-4 bg-gradient-to-r from-primary-purple to-primary-blue rounded-lg font-semibold hover:opacity-90 transition"
          >
            Join Waitlist
          </a>
          <a
            href="#features"
            className="px-8 py-4 border border-gray-700 rounded-lg font-semibold hover:border-gray-500 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Everything You Need to <span className="gradient-text">Scale</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl gradient-border">
            <div className="w-12 h-12 mb-6 rounded-xl bg-gradient-to-br from-primary-purple to-primary-blue flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">AI-Powered Content Generation</h3>
            <p className="text-gray-400">
              Our AI learns your voice and generates engaging content tailored for each platform.
            </p>
          </div>
          <div className="p-8 rounded-2xl gradient-border">
            <div className="w-12 h-12 mb-6 rounded-xl bg-gradient-to-br from-primary-purple to-primary-blue flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">One-Click Multi-Platform Publishing</h3>
            <p className="text-gray-400">
              Write once, publish everywhere. Automatically adapts your content for each platform&apos;s style.
            </p>
          </div>
          <div className="p-8 rounded-2xl gradient-border">
            <div className="w-12 h-12 mb-6 rounded-xl bg-gradient-to-br from-primary-purple to-primary-blue flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Smart Scheduling</h3>
            <p className="text-gray-400">
              AI determines the optimal time to post on each platform for maximum engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Simple <span className="gradient-text">Pricing</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl border border-gray-800 hover:border-primary-purple/50 transition">
            <h3 className="text-xl font-bold mb-2">Free</h3>
            <div className="text-4xl font-bold mb-6">
              $0<span className="text-lg text-gray-500 font-normal">/mo</span>
            </div>
            <p className="text-gray-400 mb-6">Perfect for getting started</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-purple" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                5 posts/day
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-purple" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Twitter & LinkedIn
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-purple" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Basic analytics
              </li>
            </ul>
            <button className="w-full py-3 border border-gray-700 rounded-lg hover:border-gray-500 transition">
              Get Started
            </button>
          </div>
          <div className="p-8 rounded-2xl border-2 border-primary-purple bg-gradient-to-b from-primary-purple/10 to-transparent hover:scale-105 transition transform">
            <div className="inline-block px-3 py-1 text-xs font-semibold bg-primary-purple rounded-full mb-4">
              Popular
            </div>
            <h3 className="text-xl font-bold mb-2">Pro</h3>
            <div className="text-4xl font-bold mb-6">
              $29<span className="text-lg text-gray-500 font-normal">/mo</span>
            </div>
            <p className="text-gray-400 mb-6">For serious creators</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-purple" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Unlimited posts
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-purple" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                All platforms + Reddit
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-purple" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Advanced analytics
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-purple" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Priority support
              </li>
            </ul>
            <button className="w-full py-3 bg-gradient-to-r from-primary-purple to-primary-blue rounded-lg font-semibold hover:opacity-90 transition">
              Get Pro
            </button>
          </div>
          <div className="p-8 rounded-2xl border border-gray-800 hover:border-primary-blue/50 transition">
            <h3 className="text-xl font-bold mb-2">Team</h3>
            <div className="text-4xl font-bold mb-6">
              $99<span className="text-lg text-gray-500 font-normal">/mo</span>
            </div>
            <p className="text-gray-400 mb-6">For growing teams</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Everything in Pro
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                5 team members
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Collaboration features
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Dedicated support
              </li>
            </ul>
            <button className="w-full py-3 border border-gray-700 rounded-lg hover:border-gray-500 transition">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="px-6 py-24 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Join the <span className="gradient-text">Waitlist</span>
        </h2>
        <p className="text-gray-400 mb-12">
          Be the first to know when we launch. No spam, we promise.
        </p>
        {submitted ? (
          <div className="py-4 px-6 bg-primary-purple/20 rounded-lg text-primary-purple font-semibold">
            Thanks! We&apos;ll be in touch soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-4 rounded-lg bg-gray-900 border border-gray-800 focus:border-primary-purple focus:outline-none transition"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-primary-purple to-primary-blue rounded-lg font-semibold hover:opacity-90 transition"
            >
              Join
            </button>
          </form>
        )}
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xl font-bold gradient-text">IndieFlow</div>
          <p className="text-gray-500 text-sm">
            &copy; 2026 IndieFlow. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}