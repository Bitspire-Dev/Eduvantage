/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useMemo } from "react";

type Deco = {
  id: string;
  src: string;
  top: number;
  left?: number;
  right?: number;
  width: number;
  rotate: number;
  opacity: number;
};

export default function WorkDecorations() {
  // Fixed positions for each SVG (deterministic) - computed once via useMemo
  const decors = useMemo<Deco[]>(() => [
    // LEFT SIDE
    {
      id: "kalkulator",
      src: "/layout/" + encodeURIComponent("kalkulator.svg"),
      top: 6,
      left: -58,
      width: 220,
      rotate: -12,
      opacity: 0.5,
    },
    {
      id: "ekierka",
      src: "/layout/" + encodeURIComponent("ekierka.svg"),
      top: 38,
      left: -59,
      width: 240,
      rotate: -6,
      opacity: 0.5,
    },
    {
      id: "cyrkiel",
      src: "/layout/" + encodeURIComponent("cyrkiel.svg"),
      top: 75,
      left: -57,
      width: 200,
      rotate: 8,
      opacity: 0.5,
    },
    // RIGHT SIDE (English-related) - hug the right edge
    {
      id: "kartka",
      src: "/layout/kartka-z-czasownikami-nieregularnymi.svg",
      top: 6,
      right: 73,
      width: 240,
      rotate: -6,
      opacity: 0.5,
    },
    {
      id: "ABC",
      src: "/layout/" + encodeURIComponent("ABC.svg"),
      top: 46,
      right: 72,
      width: 260,
      rotate: 30,
      opacity: 0.5,
    },
    {
      id: "ksiazka",
      src: "/layout/ksiazka-english.svg",
      top: 70,
      right: 70,
      width: 220,
      rotate: -32,
      opacity: 0.5,
    },
  ], []);

  return (
    <div
      className="work-decorations"
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}
    >
      {decors.map((d) => {
        // Instead of negative left/right (which can enlarge scroll width) anchor at edge and translate.
        const style: React.CSSProperties = {
          position: 'absolute',
          top: d.top + '%',
          width: d.width + 'px',
          opacity: d.opacity,
          filter: 'drop-shadow(0 8px 18px rgba(2,6,14,0.12))',
          willChange: 'transform, opacity',
        };
        if (d.left !== undefined) {
          style.left = 0; // anchor left edge
          style.transform = `translateX(${d.left}%) rotate(${d.rotate}deg)`; // d.left is already negative or small
        } else if (d.right !== undefined) {
          style.right = 0; // anchor right edge
          style.transform = `translateX(${d.right}%) rotate(${d.rotate}deg)`;
        } else {
          style.transform = `rotate(${d.rotate}deg)`;
        }
        return <img key={d.id} src={d.src} alt="" style={style} />;
      })}
    </div>
  );
}
