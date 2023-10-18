import { useEffect, useState } from "react";
import { getWeather } from "@/services/weather";
import Image from "next/image";
import useGetUser from "@/components/auth/Hooks/useGetUser";
import styles from "./Weather.module.scss";

const Weather = () => {
  const [description, setDescription] = useState<string>();
  const [clouds, setClouds] = useState<number>();
  const { data: userInfo } = useGetUser();

  useEffect(() => {
    getWeather().then((res) => {
      setClouds(res?.clouds?.all);
      setDescription(res?.weather[0]?.description);
    });

    // if (typeof window !== "undefined") {
    //   if (localStorage.getItem("tasks-management")) {
    //     const user: any = JSON.parse(localStorage.getItem("tasks-management")!);
    //     setUserName(user?.name);
    //   }
    // }
  }, []);

  return (
    <div className={styles.weather}>
      <div>
        <p className="paragraph">Welcome back,</p>
        <p className="paragraph">
          {userInfo?.firstName} {userInfo?.lastName}
        </p>
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
