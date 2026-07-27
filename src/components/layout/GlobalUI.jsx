import { useEffect, useRef, useState } from "react";
import { useFakeScrollbar } from "../hooks/useFakeScrollbar";
import CustomCursor from "../ui/CustomCursor";
import PageLoader from "../loader/PageLoader";
import { LoaderContext } from "../context/LoaderContext";
import { useLocation } from "react-router-dom";
import { RouteChangeStairsContext } from "../context/RouteChangeStairsContext";

export default function GlobalUI({ children }) {
  const thumbRef = useRef(null);

  useFakeScrollbar(thumbRef, {
    bgColor: "#4CAF4F",
  });

  const [loaded, setLoaded] = useState(false);
  const [isLoaded, setisLoaded] = useState(false);
  const [isRouteChanging, setIsRouteChanging] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsDesktop(window.matchMedia("(pointer: fine)").matches);
  }, []);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setIsRouteChanging(true);
  }, [location.pathname]);

  return (
    <>
      {!loaded && (
        <PageLoader play={loaded} onComplete={() => setLoaded(true)} />
      )}

      {isDesktop && <CustomCursor />}

      <div className="site_fake_scrollbar fixed right-[1px] top-0 h-screen w-[7px] z-30">
        <div
          style={{ opacity: 0 }}
          ref={thumbRef}
          className="site_fake_thumb_work opacity-0  w-full bg-[#4CAF4F] rounded-[10px] origin-top"
        />
      </div>

      <RouteChangeStairsContext.Provider
        value={{ isLoaded, setisLoaded, isRouteChanging, setIsRouteChanging }}
      >
        <LoaderContext.Provider value={{ loaded }}>
          {children}
        </LoaderContext.Provider>
      </RouteChangeStairsContext.Provider>
    </>
  );
}
