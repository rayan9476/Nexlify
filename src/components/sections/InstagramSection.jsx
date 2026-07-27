import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaPlay, FaArrowRight } from "react-icons/fa";
import { Eye } from "lucide-react";
import { useCountUp } from "../hooks/useCountUp";
import { lazy, Suspense } from "react";
const ReelModal = lazy(() => import("../ui/ReelModal"));

const profile = {
  username: "@nexlify",
  name: "Nexlify Creative Studio",
  avatar:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  posts: "284",
  followers: "48.2K",
  following: "612",
};

const allReels = [
  {
    id: 1,
    thumbnail:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80",
    duration: "0:28",
    views: "248K",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 2,
    thumbnail:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    duration: "0:22",
    views: "156K",
    video: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 3,
    thumbnail:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    duration: "0:35",
    views: "421K",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 4,
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    duration: "0:19",
    views: "97K",
    video: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 5,
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    duration: "0:31",
    views: "315K",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 6,
    thumbnail:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    duration: "0:26",
    views: "182K",
    video: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 7,
    thumbnail:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80",
    duration: "0:17",
    views: "74K",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 8,
    thumbnail:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    duration: "0:29",
    views: "267K",
    video: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 9,
    thumbnail:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    duration: "0:24",
    views: "138K",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

function StatItem({ val, label }) {
  const { count, ref } = useCountUp(val, 1600);

  return (
    <div ref={ref}>
      <h3 className="text-white text-3xl 3xl:text-4xl font-bold tabular-nums">
        {count || "0"}
      </h3>
      <p className="text-zinc-400 mt-2 3xl:text-xl">{label}</p>
    </div>
  );
}

export default function InstagramSection({ id }) {
  const [selectedReel, setSelectedReel] = useState(null);

  const [visibleCount, setVisibleCount] = useState(6);
  const visibleReels = allReels.slice(0, visibleCount);
  const hasMore = visibleCount < allReels.length;

  return (
    <>
      <section
        id={id}
        className="bg-black py-20  px-[var(--section-padding-x)] lg:px-[var(--section-padding-lg)] xl:px-[var(--section-padding-xl)]"
      >
        <div className="max-w-7xl  2mxl:max-w-full  mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="uppercase tracking-[5px] text-[#4CAF4F] text-sm lg:text-base xl:text-lg font-medium">
              Social Media
            </p>
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold mt-4">
              Follow Our Journey
            </h2>
            <p className="text-zinc-400 mt-5 max-w-2xl text-xl mx-auto leading-7">
              Take a look behind the scenes, our latest client work, creative
              process and trending reels.
            </p>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-10 shadow-[0_25px_80px_rgba(0,0,0,.45)]"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <img
                  src={profile.avatar}
                  alt=""
                  className="w-28 h-28 md:w-36 md:h-36  rounded-full object-cover border-4 border-[#4CAF4F]"
                />
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <FaInstagram className="text-pink-500 " size={22} />
                    <span className="text-white text-xl 3xl:text-2xl font-semibold">
                      {profile.username}
                    </span>
                  </div>
                  <h3 className="text-zinc-300 mt-2 text-lg 3xl:text-xl">
                    {profile.name}
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-6 cursor-pointer bg-[#4CAF4F] hover:bg-[#43A047] transition-all duration-200 ease-in text-white font-semibold 3xl:text-xl px-7 py-3 rounded-full flex items-center gap-2 hover:gap-3 mx-auto sm:mx-0  transform-gpu
    will-change-transform"
                  >
                    View Profile <FaArrowRight size={20} />
                  </motion.button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 md:gap-12 text-center w-full lg:w-auto">
                {[
                  { val: profile.posts, label: "Posts" },
                  { val: profile.followers, label: "Followers" },
                  { val: profile.following, label: "Following" },
                ].map((s) => (
                  <div key={s.label}>
                    <StatItem key={s.label} val={s.val} label={s.label} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Reels Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {visibleReels.map((reel, i) => (
              <motion.div
                key={reel.id}
                layoutId={`reel-card-${reel.id}`}
                className="h-full"
              >
                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.5,
                    delay: i >= 6 ? (i - 6) * 0.1 : 0,
                  }}
                  onClick={() => setSelectedReel(reel)}
                  data-cursor="pointer"
                  className="group relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/10 cursor-pointer"
                >
                  <motion.img
                    layoutId={`reel-image-${reel.id}`}
                    src={reel.thumbnail}
                    alt="reel thumbnail"
                    className="w-full aspect-[2/3] object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex justify-center items-center">
                    <motion.div
                      layoutId={`reel-play-${reel.id}`}
                      className="w-16 h-16 3xl:w-20 3xl:h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition"
                    >
                      <FaPlay className="text-white ml-1 text-xl 3xl:w-8 3xl:h-8" />
                    </motion.div>
                  </div>
                  <div className="absolute bottom-5 left-5">
                    <motion.span
                      layoutId={`reel-views-${reel.id}`}
                      className=" flex gap-1 items-center justify-center     bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm 3xl:text-xl"
                    >
                      <Eye
                        className="w-5 h-5 3xl:w-6 3xl:h-6 text-white"
                        strokeWidth={2.2}
                      />

                      {reel.views}
                    </motion.span>
                  </div>
                  <div className="absolute bottom-5 right-5">
                    <motion.span
                      layoutId={`reel-duration-${reel.id}`}
                      className="bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm 3xl:text-xl"
                    >
                      {reel.duration}
                    </motion.span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-14">
            {hasMore ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setVisibleCount((prev) => prev + 3)}
                className="border cursor-pointer border-[#4CAF4F] text-[#4CAF4F] hover:bg-[#4CAF4F] hover:text-black transition-all duration-300 px-8 py-4 rounded-full font-semibold flex items-center gap-3 2xl:text-xl 3xl:text-2xl"
              >
                Explore More Reels <FaArrowRight size={20} />
              </motion.button>
            ) : (
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                href="https://instagram.com/boodmoard"
                target="_blank"
                rel="noreferrer"
                className="border cursor-pointer border-[#4CAF4F] text-[#4CAF4F] hover:bg-[#4CAF4F] hover:text-black transition-all duration-300 px-8 py-4 rounded-full font-semibold flex items-center gap-3 3xl:text-2xl"
              >
                View on Instagram <FaArrowRight size={20} />
              </motion.a>
            )}
          </div>
        </div>
      </section>

      <AnimatePresence mode="wait">
        {selectedReel && (
          <Suspense fallback={null}>
            <ReelModal
              key={selectedReel.id}
              reel={selectedReel}
              onClose={() => setSelectedReel(null)}
            />
          </Suspense>
        )}
      </AnimatePresence>
    </>
  );
}
