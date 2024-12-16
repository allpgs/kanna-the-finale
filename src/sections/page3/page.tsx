"use client";

import { useEffect, useState } from "react";
import { sendGTMEvent } from "@next/third-parties/google";

import ReactPlayer from "react-player/lazy";
// import ReactPlayer from "react-player/youtube";

import formatUrl from "@/modules/cdn/formatUrl";
import styles from "./styles.module.css";

export default function Page3() {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <div>
      <div className={styles.video}>
        {hasWindow && (
          <ReactPlayer
            //YT: url="https://youtu.be/eNbB4MWbZAI"
            url={formatUrl("/videos/pv.mp4")}
            // YT: light="https://i.ytimg.com/vi/eNbB4MWbZAI/maxresdefault.jpg"
            light={formatUrl("/images/og-image.png")}
            width="100%"
            height="100%"
            // YT: Remove controls
            controls
            playsinline
            onClick={() => sendGTMEvent({ event: "playPv" })}
          />
        )}
      </div>
    </div>
  );
}
