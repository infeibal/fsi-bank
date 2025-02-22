import { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  globalImgAppearanceConfig,
  globalTransitionConfig,
} from "../../../common/config/animation.config";
import FeedbackCardImg from "../../../common/images/feedback/feedback_card.svg";

type FeedbackCardType = {
  text: string;
  author: string;
  decoration: ReactNode;
};

export const FeedbackItem = ({
  text,
  author,
  decoration,
}: FeedbackCardType) => {
  const formattedAuthor = author.split(" ");

  return (
    <motion.div
      {...globalImgAppearanceConfig("y", 80, 0, 0)}
      transition={{ ...globalTransitionConfig, delay: 0 }}
      className="relative w-[281px] h-[400px] group"
    >
      <img
        className="w-full h-full group-hover:scale-[1.01] duration-300"
        src={FeedbackCardImg}
        alt="feedback_card"
      />

      <p className="absolute top-8 flex items-center justify-center text-black p-9 text-start overflow-hidden group-hover:scale-105 duration-300">
        “{text}”
      </p>

      <h3 className="font-bold absolute bottom-10 left-32 group-hover:scale-105 duration-300">
        {formattedAuthor[0]} <br /> {formattedAuthor[1]}
      </h3>

      {decoration}
    </motion.div>
  );
};
