import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import bookAnimation from "../animations/magic-book-hp.json";

const BookAnimation = () => {
  const anime = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: anime.current,
      loop: true,
      autoplay: true,
      animationData: bookAnimation,
    });
    return () => lottie.stop();
  }, []);

  return <div className="book-animation" style={{ height: 350, width: 400 }} ref={anime}></div>;
};

export default BookAnimation;
