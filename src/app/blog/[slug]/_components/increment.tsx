"use client";

import { axiosInstance } from "@/lib/axios";
import { useEffect, type FC } from "react";

interface IncrementViewsProps {
  objectId: string;
  views: number;
}

const IncrementViews: FC<IncrementViewsProps> = ({ objectId, views }) => {
  const incrementView = async () => {
    try {
      await axiosInstance.put(`/data/blog/${objectId}`, {
        views: views + 1,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    incrementView();
  }, []);
  return <div></div>;
};

export default IncrementViews;
