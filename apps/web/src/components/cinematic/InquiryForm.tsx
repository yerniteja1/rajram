"use client";

import { useState } from "react";

type Archetype = "wedding" | "brand" | "motion";

export function InquiryForm() {
  const [archetype, setArchetype] = useState<Archetype>("wedding");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [eventLocale, setEventLocale] = useState("");
  const [eventCalendar, setEventCalendar] = useState("");
  const [clientVision, setClientVision] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-transparent border-b border-outline-variant/60 focus:border-primary py-2 text-on-surface font-body-md placeholder:text-outline/40 placeholder:font-light focus:outline-none transition-colors";

  if (submitted) {
    return (
      <div
        className="mt-6 p-4 bg-surface border border-primary/40 text-primary font-label-cinematic text-label-cinematic uppercase tracking-widest text-center"
        id="inquiry-success"
      >
        DISPATCH TRANSMITTED. THE ARCHIVE DIRECTORS WILL ENGAGE WITHIN 24 HOURS.
      </div>
    );
  }

  return (
    <form
      className="bg-surface-container-low p-6 md:p-12 shadow-2xl relative"
      id="inquiry-form"
      onSubmit={handleSubmit}
    >
      {/* Project Archetype Selector */}
      <div className="mb-12">
        <label
          className="font-label-cinematic text-label-cinematic uppercase tracking-[0.25em] text-primary block mb-3"
          htmlFor="inquiry-archetype"
        >
          01. NATURE OF STORY (PROJECT ARCHETYPE)
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {(
            [
              { value: "wedding", label: "SACRED WEDDING FILM" },
              { value: "brand", label: "AUTEUR BRAND COMMISSION" },
              { value: "motion", label: "ORIGINAL MOTION PICTURE" },
            ] as const
          ).map((opt) => (
            <label
              key={opt.value}
              className="cursor-pointer flex items-center gap-3 p-3 bg-surface hover:bg-surface-container transition-colors"
            >
              <input
                checked={archetype === opt.value}
                className="accent-primary"
                name="archetype"
                onChange={() => setArchetype(opt.value)}
                type="radio"
                value={opt.value}
              />
              <span className="font-label-metadata text-label-metadata uppercase tracking-wider text-secondary-fixed">
                {opt.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Contact Credentials */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col">
          <label
            className="font-label-metadata text-label-metadata uppercase tracking-[0.25em] text-on-surface-variant mb-2"
            htmlFor="client-name"
          >
            YOUR NAME &amp; FAMILY HOUSE
          </label>
          <input
            className={inputClass}
            id="client-name"
            onChange={(e) => setClientName(e.target.value)}
            placeholder="e.g. Maharaja &amp; Rani of Jaipur / Lord Sterling"
            required
            type="text"
            value={clientName}
          />
        </div>
        <div className="flex flex-col">
          <label
            className="font-label-metadata text-label-metadata uppercase tracking-[0.25em] text-on-surface-variant mb-2"
            htmlFor="client-email"
          >
            DIRECT DESPATCH (EMAIL)
          </label>
          <input
            className={inputClass}
            id="client-email"
            onChange={(e) => setClientEmail(e.target.value)}
            placeholder="director@houseofroyals.com"
            required
            type="email"
            value={clientEmail}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="flex flex-col">
          <label
            className="font-label-metadata text-label-metadata uppercase tracking-[0.25em] text-on-surface-variant mb-2"
            htmlFor="event-locale"
          >
            PRODUCTION LOCALE / DESTINATION
          </label>
          <input
            className={inputClass}
            id="event-locale"
            onChange={(e) => setEventLocale(e.target.value)}
            placeholder="e.g. Udaipur, Lake Como, Amalfi, or St. Moritz"
            type="text"
            value={eventLocale}
          />
        </div>
        <div className="flex flex-col">
          <label
            className="font-label-metadata text-label-metadata uppercase tracking-[0.25em] text-on-surface-variant mb-2"
            htmlFor="event-calendar"
          >
            TIMEFRAME &amp; SEASON
          </label>
          <input
            className={inputClass}
            id="event-calendar"
            onChange={(e) => setEventCalendar(e.target.value)}
            placeholder="e.g. Winter 2025 / Spring 2026"
            type="text"
            value={eventCalendar}
          />
        </div>
      </div>

      <div className="flex flex-col mb-12">
        <label
          className="font-label-metadata text-label-metadata uppercase tracking-[0.25em] text-on-surface-variant mb-2"
          htmlFor="client-vision"
        >
          SYNOPSIS OF THE VISION OR EMOTIONAL INTENT
        </label>
        <textarea
          className={`${inputClass} resize-none`}
          id="client-vision"
          onChange={(e) => setClientVision(e.target.value)}
          placeholder="Tell us what this gathering or narrative means to your heritage..."
          rows={3}
          value={clientVision}
        />
      </div>

      {/* Submission Trigger */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <div className="font-label-metadata text-label-metadata uppercase text-outline tracking-[0.2em] text-center sm:text-left">
          STRICT CONFIDENTIALITY &amp; NDA AVAILABLE UPON REQUEST
        </div>
        <button
          className="w-full sm:w-auto px-8 py-4 bg-primary text-on-primary hover:bg-primary-fixed transition-colors font-label-cinematic text-label-cinematic uppercase tracking-[0.28em] font-medium"
          type="submit"
        >
          REQUEST PRIVATE SCREENING &amp; PORTFOLIO ACCESS
        </button>
      </div>
    </form>
  );
}
