import React from "react";
import { Mail, Calendar, Compass } from "lucide-react";
import { siteContent } from "@/data/siteContent";

const GithubIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-4 h-4 ${className}`}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-4 h-4 ${className}`}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const XIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-4 h-4 ${className}`}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Contact() {
  const { email, linkedin, github, twitter, travelBlog, bookingLink } = siteContent.contact;

  return (
    <section id="contact" className="relative py-10 sm:py-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-blue-900/10 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        {/* Large Glass Banner Card */}
        <div className="p-[1px] rounded-[2rem] bg-gradient-to-b from-white/[0.08] to-transparent shadow-2xl">
          <div className="p-8 lg:p-12 bg-[#0a0a12]/80 rounded-[calc(2rem-1px)] border border-white/[0.03] flex flex-col items-start gap-8">
            
            {/* Left Content Column */}
            <div className="flex items-start gap-4 lg:gap-6 max-w-4xl">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <Mail className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col text-left">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-2">
                  Need help with marketing systems, CRM, funnels, reporting, paid media, or AI workflows?
                </h2>
                <p className="text-neutral-500 text-sm sm:text-base font-sans font-medium">
                  Let&apos;s connect and build a system that works.
                </p>
              </div>
            </div>

            {/* Right Action Buttons Column */}
            <div className="flex flex-wrap items-center gap-3 w-full lg:pl-[72px]">
              <a
                href={`mailto:${email}`}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-white/10 hover:border-white/20 bg-white/5 text-xs font-bold text-neutral-300 hover:text-white transition-all duration-300 w-full sm:w-auto text-center"
              >
                <Mail className="w-4 h-4 text-neutral-400" strokeWidth={1.5} />
                <span>Email Me</span>
              </a>

              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-white/10 hover:border-white/20 bg-white/5 text-xs font-bold text-neutral-300 hover:text-white transition-all duration-300 w-full sm:w-auto text-center"
              >
                <LinkedinIcon className="w-4 h-4 text-neutral-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-white/10 hover:border-white/20 bg-white/5 text-xs font-bold text-neutral-300 hover:text-white transition-all duration-300 w-full sm:w-auto text-center"
              >
                <GithubIcon className="w-4 h-4 text-neutral-400" />
                <span>GitHub</span>
              </a>

              {twitter && (
                <a
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-white/10 hover:border-white/20 bg-white/5 text-xs font-bold text-neutral-300 hover:text-white transition-all duration-300 w-full sm:w-auto text-center"
                >
                  <XIcon className="text-neutral-400" />
                  <span>X (Twitter)</span>
                </a>
              )}

              {travelBlog && (
                <a
                  href={travelBlog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-white/10 hover:border-white/20 bg-white/5 text-xs font-bold text-neutral-300 hover:text-white transition-all duration-300 w-full sm:w-auto text-center"
                >
                  <Compass className="w-4 h-4 text-neutral-400" strokeWidth={1.5} />
                  <span>Travel Blog</span>
                </a>
              )}

              <a
                href={bookingLink === "#" ? `mailto:${email}?subject=Booking%20a%20Strategy%20Call` : bookingLink}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white transition-all duration-300 w-full sm:w-auto text-center shadow-[0_0_20px_rgba(37,99,235,0.2)]"
              >
                <Calendar className="w-4 h-4 text-white" strokeWidth={1.5} />
                <span>Book a Call</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
