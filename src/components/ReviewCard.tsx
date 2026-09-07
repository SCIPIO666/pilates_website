'use client';

import React from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

export interface ReviewCardProps {
  name: string;
  role?: string;
  avatar: string | StaticImageData;
  quote: string;
  rating?: number;
  tag?: string;
  index?: number;
  total?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  role = 'Member',
  avatar,
  quote,
  rating = 5,
  tag = 'Verified Client',
  index,
  total,
  className = '',
  style,
}) => {
  return (
    <div
      className={`w-full max-w-2xl bg-bone border border-ink/10 rounded-2xl p-8 md:p-10 shadow-lg flex flex-col justify-between transition-shadow duration-300 ${className}`}
      style={style}
    >
      <div>
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-ink/10">
          <span className="label-xs text-olive tracking-widest">{tag}</span>
          <div className="flex gap-1 text-olive text-sm">
            {Array.from({ length: rating }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
        </div>

        <blockquote className="text-lg md:text-xl font-display font-medium text-ink leading-relaxed mb-8">
          "{quote}"
        </blockquote>
      </div>

      <div className="flex items-center justify-between pt-4">
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-olive/30 flex-shrink-0">
            <Image
              src={avatar}
              alt={name}
              fill
              className="object-cover"
              placeholder="blur"
              sizes="56px"
              loading="lazy"
            />
          </div>
          <div>
            <h4 className="font-semibold text-ink text-base md:text-lg">{name}</h4>
            <p className="text-xs text-ink/60">{role}</p>
          </div>
        </div>

        {typeof index === 'number' && typeof total === 'number' && (
          <div className="text-xs font-mono font-medium text-ink/40">
            0{index + 1} / 0{total}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewCard;