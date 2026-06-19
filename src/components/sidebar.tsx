"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import type { Profile } from "@/types";

interface SidebarProps {
  profile: Profile;
}

export function Sidebar({ profile }: SidebarProps) {
  const [active, setActive] = useState(false);

  return (
    <aside
      className={`bg-card border border-border rounded-[20px] p-[15px] shadow-lg mb-[15px]
        sm:p-[30px] sm:mb-[30px]
        xl:sticky xl:top-[60px] xl:max-h-max xl:h-full xl:mb-0 xl:pt-[60px]
        transition-all duration-500 ease-in-out overflow-hidden
        ${active ? "max-h-[405px] sm:max-h-[584px]" : "max-h-[112px] sm:max-h-[180px]"}
        xl:max-h-none xl:overflow-visible`}
    >
      <div className="relative flex items-center gap-[15px] sm:gap-[25px] xl:flex-col">
        {/* Avatar */}
        <figure className="bg-primary rounded-[20px] shrink-0 sm:rounded-[30px]">
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={80}
            height={80}
            className="rounded-[20px] sm:rounded-[30px] sm:w-[120px] sm:h-[120px] xl:w-[150px] xl:h-[150px]"
            priority
          />
        </figure>

        {/* Name & Title */}
        <div className="min-w-0 xl:text-center">
          <h1
            className="text-[17px] sm:text-[26px] font-medium text-foreground tracking-tight mb-[10px] sm:mb-[15px] xl:whitespace-nowrap xl:text-center"
            title={profile.name}
          >
            {profile.name}
          </h1>
          <p
            className="text-[11px] sm:text-[12px] font-light text-foreground bg-primary w-max px-3 py-[3px] rounded-[8px] sm:px-[18px] sm:py-[5px] xl:mx-auto"
          >
            {profile.title}
          </p>
        </div>

        {/* Show Contacts button — hidden on xl+ */}
        <button
          onClick={() => setActive(!active)}
          className="xl:hidden bg-primary text-primary-foreground
            absolute top-[-15px] right-[-15px]
            sm:top-[-30px] sm:right-[-30px]
            rounded-[0_15px] p-[10px] sm:px-[15px] sm:py-[10px]
            shadow-lg hover:bg-secondary hover:text-secondary-foreground
            transition-colors cursor-pointer z-10
            flex items-center gap-2"
        >
          <span className="hidden sm:block text-[13px] sm:text-[12px]">Show Contacts</span>
          <ChevronDown
            className={`h-4 w-4 sm:hidden transition-transform ${
              active ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Expanded contact info */}
      <div
        className={`transition-all duration-500 ease-in-out
          opacity-0 invisible h-0 overflow-hidden
          ${active ? "opacity-100 visible h-auto" : ""}
          sm:opacity-100 sm:visible sm:h-auto sm:overflow-visible
          xl:opacity-100 xl:visible`}
      >
        <div className="w-full h-[1px] bg-border my-4 sm:my-[32px]" />

        <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-[30px_15px] sm:space-y-0 xl:grid-cols-1 xl:space-y-4">
          {/* Email */}
          <li className="flex items-center gap-4 sm:gap-[16px]">
            <div className="bg-primary w-[30px] h-[30px] sm:w-[48px] sm:h-[48px] rounded-[8px] sm:rounded-[12px] flex items-center justify-center shrink-0">
              <svg className="h-4 w-4 sm:h-[18px] sm:w-[18px] text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="min-w-0 sm:max-w-[calc(100%-64px)] sm:w-[calc(100%-64px)]">
              <p className="text-[11px] sm:text-[12px] uppercase text-muted-foreground mb-[2px]">Email</p>
              <a href={`mailto:${profile.email}`} className="text-[13px] sm:text-[14px] text-muted-foreground hover:text-secondary transition-colors truncate block">
                {profile.email}
              </a>
            </div>
          </li>

          {/* Phone */}
          <li className="flex items-center gap-4 sm:gap-[16px]">
            <div className="bg-primary w-[30px] h-[30px] sm:w-[48px] sm:h-[48px] rounded-[8px] sm:rounded-[12px] flex items-center justify-center shrink-0">
              <svg className="h-4 w-4 sm:h-[18px] sm:w-[18px] text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="min-w-0 sm:max-w-[calc(100%-64px)] sm:w-[calc(100%-64px)]">
              <p className="text-[11px] sm:text-[12px] uppercase text-muted-foreground mb-[2px]">Phone</p>
              <a href={`tel:${profile.phone}`} className="text-[13px] sm:text-[14px] text-muted-foreground hover:text-secondary transition-colors truncate block">
                {profile.phone}
              </a>
            </div>
          </li>

          {/* LinkedIn */}
          <li className="flex items-center gap-4 sm:gap-[16px]">
            <div className="bg-primary w-[30px] h-[30px] sm:w-[48px] sm:h-[48px] rounded-[8px] sm:rounded-[12px] flex items-center justify-center shrink-0">
              <svg className="h-4 w-4 sm:h-[18px] sm:w-[18px] text-primary-foreground" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <div className="min-w-0 sm:max-w-[calc(100%-64px)] sm:w-[calc(100%-64px)]">
              <p className="text-[11px] sm:text-[12px] uppercase text-muted-foreground mb-[2px]">LinkedIn</p>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-[13px] sm:text-[14px] text-muted-foreground hover:text-secondary transition-colors truncate block">
                {profile.linkedinHandle}
              </a>
            </div>
          </li>

          {/* Location */}
          <li className="flex items-center gap-4 sm:gap-[16px]">
            <div className="bg-primary w-[30px] h-[30px] sm:w-[48px] sm:h-[48px] rounded-[8px] sm:rounded-[12px] flex items-center justify-center shrink-0">
              <svg className="h-4 w-4 sm:h-[18px] sm:w-[18px] text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="min-w-0 sm:max-w-[calc(100%-64px)] sm:w-[calc(100%-64px)]">
              <p className="text-[11px] sm:text-[12px] uppercase text-muted-foreground mb-[2px]">Location</p>
              <address className="text-[13px] sm:text-[14px] text-muted-foreground not-italic truncate">
                {profile.location}
              </address>
            </div>
          </li>
        </ul>

        <div className="w-full h-[1px] bg-border my-4 sm:my-[32px] xl:last-of-type:opacity-0" />

        {/* Social links */}
        <ul className="flex items-center gap-[15px] pl-[7px] pb-1 xl:justify-center">
          {profile.socials.map((social) => (
            <li key={social.platform}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[18px] text-muted-foreground hover:text-secondary transition-colors"
              >
                {social.icon === "linkedin" && (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                )}
                {social.icon === "github" && (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
