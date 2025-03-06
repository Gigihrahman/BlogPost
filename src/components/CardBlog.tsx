import React from "react";

interface CardProps {
  title: string;
  category: string;
  date: string;
  imgSrc: string;
}

const Card: React.FC<CardProps> = ({ title, category, date, imgSrc }) => {
  return (
    <div className="relative">
      <img
        src={imgSrc}
        alt="Card Image"
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
        <span className="text-xs">{category}</span>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm">{date}</p>
      </div>
    </div>
  );
};

export default Card;
