import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import leviosa from "../animations/wingardium-leviosa.json";
const InitialLoader = () => {
  const anime = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: anime.current,
      loop: true,
      autoplay: true,
      animationData: leviosa,
    });
    return () => lottie.stop();
  }, []);

  return (
    <section className="initial-loader-container">
      <div className="initial-loader" style={{ height: 350, width: 400 }} ref={anime}></div>
    </section>
  );
};

export default InitialLoader;
