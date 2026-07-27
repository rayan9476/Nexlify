import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaTimes,
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";
import { Eye } from "lucide-react";

export default function ReelModal({ reel, onClose }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const controlsTimer = useRef(null);

  // stop lenis
  useEffect(() => {
    const lenis = window.__lenis;
    if (lenis) lenis.stop();
    return () => {
      if (lenis) lenis.start();
    };
  }, []);

  // ESC to close
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // auto play on open
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {});
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    setProgress((video.currentTime / video.duration) * 100);
  };

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current?.duration || 0);
  };

  const handleSeek = (e) => {
    const video = videoRef.current;
    if (!video) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = x / rect.width;
    video.currentTime = pct * video.duration;
  };

  const handleVideoClick = () => {
    togglePlay();
    setShowControls(true);
    clearTimeout(controlsTimer.current);
    controlsTimer.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 2500);
  };

  const handleMouseMove = () => {
    setShowControls(true);
    clearTimeout(controlsTimer.current);
    controlsTimer.current = setTimeout(() => setShowControls(false), 2500);
  };

  const formatTime = (secs) => {
    if (!secs || isNaN(secs)) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[99] bg-black/90 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none">
        <motion.div
          layoutId={`reel-card-${reel.id}`}
          onClick={(e) => e.stopPropagation()}
          onMouseMove={handleMouseMove}
          className="relative pointer-events-auto w-full h-full  max-w-sm md:max-w-md 3xl:max-w-2xl rounded-[28px] overflow-hidden bg-black border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.9)]"
          style={{ aspectRatio: "9/16", maxHeight: "85vh" }}
        >
          {/* Video */}
          <video
            ref={videoRef}
            src={reel.video}
            poster={reel.thumbnail}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
            onClick={handleVideoClick}
            playsInline
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.2 }}
            className="w-full h-full object-cover cursor-pointer "
          />

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Close button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 3xl:w-10 3xl:h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-all duration-200 cursor-pointer border-none"
          >
            <FaTimes size={18} />
          </motion.button>

          {/* Views + duration top left */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <motion.span
              layoutId={`reel-views-${reel.id}`}
              className="bg-black/50 flex gap-1 items-center justify-center backdrop-blur-md text-white text-xs 2xl:text-[14px] 3xl:text-base px-3 py-1.5 rounded-full border border-white/10"
            >
              <Eye
                className="w-5 h-5 3xl:w-6 3xl:h-6 text-white"
                strokeWidth={2.2}
              />

              {reel.views}
            </motion.span>
          </div>

          {/* Center play/pause  */}
          <motion.div
            initial={false}
            animate={{ opacity: !isPlaying || showControls ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <motion.div
              key={isPlaying ? "playing" : "paused"}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.2 }}
              layoutId={`reel-play-${reel.id}`}
              className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center"
            >
              {isPlaying ? (
                <FaPause className="text-white text-xl" />
              ) : (
                <FaPlay className="text-white ml-1 text-xl" />
              )}
            </motion.div>
          </motion.div>

          {/* Bottom controls */}
          <motion.div
            animate={{ opacity: showControls ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-0 right-0 p-5"
          >
            {/* Progress bar */}
            <div
              className="w-full h-1 bg-white/20 rounded-full cursor-pointer mb-4 group"
              onClick={handleSeek}
            >
              <div
                className="h-full bg-[#4CAF4F] rounded-full relative transition-all duration-100"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#4CAF4F] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Controls row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Play/Pause */}
                <button
                  onClick={togglePlay}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer border-none"
                >
                  {isPlaying ? (
                    <FaPause size={12} />
                  ) : (
                    <FaPlay size={12} className="ml-0.5" />
                  )}
                </button>

                {/* Mute */}
                <button
                  onClick={toggleMute}
                  className="w-9 h-9 3xl:w-10 3xl:h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer border-none"
                >
                  {isMuted ? (
                    <FaVolumeMute size={18} />
                  ) : (
                    <FaVolumeUp size={18} />
                  )}
                </button>

                {/* Time */}
                <motion.span
                  layoutId={`reel-duration-${reel.id}`}
                  className="text-white text-xs 2xl:text-base tabular-nums"
                >
                  {formatTime(videoRef.current?.currentTime)} /{" "}
                  {formatTime(duration)}
                </motion.span>
              </div>

              {/* Instagram badge */}
              <span className="text-[#4CAF4F] text-xs 2xl:text-base">
                @nexlify
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
