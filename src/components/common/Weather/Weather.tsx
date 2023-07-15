import { useEffect, useState } from "react";
import { getWeather } from "@/services/weather";
import Image from "next/image";
import styles from "./Weather.module.scss";

const Weather = () => {
  const [description, setDescription] = useState<string>();
  const [clouds, setClouds] = useState<number>();
  const [userName, setUserName] = useState<any>("");

  useEffect(() => {
    getWeather().then((res) => {
      setClouds(res.clouds.all);
      setDescription(res.weather[0].description);
    });

    if (typeof window !== "undefined") {
      setUserName(localStorage?.getItem("user-name"));
    }
  }, []);

  return (
    <div className={styles.weather}>
      <div>
        <p className="paragraph">Welcome back,</p>
        <p className="paragraph">{userName && userName} !</p>
      </div>
      <div className={styles?.rightSide}>
        <div>
          <p className="paragraph">{description}</p>
          <p className={`${styles?.clouds} paragraph`}>{clouds} C</p>
        </div>
        <div>
          <Image
            alt="weather"
            src="/imgs/weather.png"
            height={100}
            width={120}
          />
        </div>
      </div>
    </div>
  );
};

export default Weather;
