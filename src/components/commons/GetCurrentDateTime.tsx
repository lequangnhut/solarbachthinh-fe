"use client";

import React, { useEffect, useState } from "react";

function getCurrentDate() {
  const daysOfWeek = [
    "Chủ nhật",
    "Thứ 2",
    "Thứ 3",
    "Thứ 4",
    "Thứ 5",
    "Thứ 6",
    "Thứ 7",
  ];
  const now = new Date();

  const dayOfWeek = daysOfWeek[now.getDay()];
  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return `${dayOfWeek}, ${day.toString().padStart(2, "0")}/${month
    .toString()
    .padStart(2, "0")}/${year} ${formattedTime}`;
}

const GetCurrentDateTime = () => {
  const [currentDate, setCurrentDate] = useState<string | null>(null);

  useEffect(() => {
    setCurrentDate(getCurrentDate());

    const interval = setInterval(() => {
      setCurrentDate(getCurrentDate());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (currentDate === null) {
    return <div>Loading...</div>;
  }

  return <>{currentDate}</>;
};

export default GetCurrentDateTime;
