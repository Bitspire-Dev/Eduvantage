"use client";

import React from "react";
import { StyleSheet } from "react-bits";
import useSWR from "swr";
import { useWindowSize } from "usehooks-ts";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function ReactBitsDemo() {
  const { data, error } = useSWR("https://jsonplaceholder.typicode.com/todos/1", fetcher);
  const { width, height } = useWindowSize();

  return (
    <section className="p-6 bg-surface rounded-md">
      <h3 className="text-lg font-semibold mb-2">React Bits / SWR Demo</h3>

      <div className="flex gap-4 items-start">
        {/* react-bits usage note: StyleSheet is imported and could be used with react-bits primitives like View/Text. */}
        <div className="hidden sm:block" style={styles.card as React.CSSProperties}>
          <img src="/grupa-dzieci-uczacych-sie-w-szkole.avif" alt="demo" style={styles.img as React.CSSProperties} />
          <div style={styles.title as React.CSSProperties}>React Bits Image</div>
        </div>

        <div className="flex-1">
          {error && <div className="text-red-500">Failed to load demo data</div>}
          {!data && !error && <div>Loading demo data…</div>}
          {data && (
            <div className="text-sm">
              <div>
                <strong>ID:</strong> {data.id}
              </div>
              <div>
                <strong>Title:</strong> {data.title}
              </div>
              <div>
                <strong>Completed:</strong> {data.completed ? "Tak" : "Nie"}
              </div>
            </div>
          )}

          <div className="mt-4 text-xs opacity-80">Window: {width}×{height}</div>
        </div>
      </div>
    </section>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
  },
  img: {
    width: 160,
    height: 120,
    objectFit: "cover",
  },
  title: {
    padding: 8,
    fontSize: 14,
  },
});
