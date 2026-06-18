"use client";

import React, { useState } from "react";
import { Megaphone, Filter, Settings, Users, Briefcase, Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { siteContent } from "@/data/siteContent";

const stats = [
  {
    value: "10+",
    label: "Years Experience",
    icon: null,
    color: "from-blue-500 to-indigo-500",
  },
  {
    value: null,
    label: "Paid Media Ops",
    icon: Megaphone,
    color: "from-purple-500 to-pink-500",
  },
  {
    value: null,
    label: "Funnels & CRM",
    icon: Filter,
    color: "from-cyan-500 to-blue-500",
  },
  {
    value: null,
    label: "AI & Automation",
    icon: Settings,
    color: "from-amber-500 to-orange-500",
  },
  {
    value: null,
    label: "Growth Marketing",
    icon: Users,
    color: "from-emerald-500 to-teal-500",
  },
];

export default function Experience() {
  const [showFullHistory, setShowFullHistory] = useState(false);

  return (
    <section id="experience" className="relative p-6 sm:p-10 lg:p-12 overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-blue-950/10 blur-[100px] pointer-events-none hidden md:block" />

      <div className="relative z-10 w-full">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.05]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Briefcase className="w-4.5 h-4.5" strokeWidth={1.5} />
            </div>
            <h2 className="font-display text-2xl font-bold text-white tracking-tight">
              Work History
            </h2>
          </div>
        </div>

        {/* Stats Row (5 columns) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-[1px] rounded-xl bg-gradient-to-b from-white/[0.06] to-transparent shadow-none sm:shadow-md flex"
              >
                <div className="p-4 w-full min-h-[105px] bg-[#0a0a12]/90 rounded-[calc(0.75rem-1px)] border border-white/[0.03] flex flex-col justify-between items-center text-center">
                  <div className="flex-1 flex items-center justify-center mb-2">
                    {stat.value ? (
                      <span className="font-display text-2xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                        {stat.value}
                      </span>
                    ) : (
                      Icon && (
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${stat.color} shadow-lg shadow-white/5 flex items-center justify-center text-white`}>
                          <Icon className="w-4 h-4" strokeWidth={1.5} />
                        </div>
                      )
                    )}
                  </div>
                  <span className="text-xs md:text-sm font-bold text-neutral-400 tracking-tight leading-snug">
                    {stat.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Centered Timeline (Full Width) */}
        <div className="max-w-4xl mx-auto relative mt-6">
          {/* Vertical Timeline Line (desktop/tablet only) */}
          <div className="hidden sm:block absolute left-3.5 top-8 bottom-6 w-[1px] bg-white/[0.05]" />

          <div className="space-y-6">
            {siteContent.workExperience.map((exp, idx) => {
              // Collapse experience on mobile: show only first 2 items unless expanded
              const isHiddenOnMobile = idx >= 2 && !showFullHistory;
              
              return (
                <div
                  key={idx}
                  className={`relative pl-0 sm:pl-9 flex-col items-start text-left transition-all duration-300 ${
                    isHiddenOnMobile ? "hidden sm:flex" : "flex"
                  }`}
                >
                  {/* Timeline Dot (desktop/tablet only) */}
                  <div className="hidden sm:flex absolute left-3.5 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-[#030303] border-2 border-purple-500 items-center justify-center z-10">
                    {idx === 0 && <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />}
                  </div>

                  <div className="w-full p-6 rounded-xl border border-white/[0.04] bg-[#07070a] sm:bg-[#07070a]/40 sm:backdrop-blur-md">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2.5">
                      <div>
                        <h3 className="font-display text-sm md:text-base font-bold text-white tracking-tight">
                          {exp.role}
                        </h3>
                        <span className="text-xs md:text-sm font-semibold text-purple-400 mt-0.5 block">
                          {exp.company}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs font-semibold text-neutral-500 shrink-0">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" strokeWidth={1.2} />
                          {exp.period}
                        </span>
                        <span className="hidden sm:inline">&bull;</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" strokeWidth={1.2} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-neutral-400 text-xs md:text-sm leading-relaxed font-sans font-medium">
                      {exp.summary}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Toggle button visible only on mobile when work list is longer than 2 */}
          {siteContent.workExperience.length > 2 && (
            <button
              onClick={() => setShowFullHistory(!showFullHistory)}
              className="sm:hidden mt-6 flex items-center justify-center gap-1.5 mx-auto px-4 py-3 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white transition-all duration-300 cursor-pointer w-full max-w-[200px]"
            >
              <span>{showFullHistory ? "Show Less" : "View Full Experience"}</span>
              {showFullHistory ? (
                <ChevronUp className="w-3.5 h-3.5" strokeWidth={1.5} />
              ) : (
                <ChevronDown className="w-3.5 h-3.5" strokeWidth={1.5} />
              )}
            </button>
          )}
        </div>

      </div>
    </section>
  );
}
