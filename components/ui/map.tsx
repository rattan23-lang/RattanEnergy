"use client";

import { useRef } from 'react';

interface MapProps {
  address: string;
}

export function Map({ address }: MapProps) {
  const mapRef = useRef<HTMLIFrameElement>(null);

  return (
    <div className="relative h-[520px] w-full overflow-hidden rounded-lg">
      <iframe
        ref={mapRef}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3430.694052936286!2d76.76558299999999!3d30.736111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDQ0JzE0LjAiTiA3NsKwNDUnNTYuMSJF!5e0!3m2!1sen!2sus!4v1702062808259!5m2!1sen!2sus"
        className="absolute inset-0"
        title="Location Map"
      />
      <div className="mt-2 text-center">
        <p className="font-semibold">{address}</p>
      </div>
    </div>
  );
}