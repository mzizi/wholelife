import { FC, useMemo, useState } from "react";

export interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: string | number;
  height?: string | number;
}

export const Image: FC<ImageProps> = ({
  width = 300,
  height = 300,
  ...props
}) => {
  const [isReady, setIsReady] = useState(false);

  const onLoadHandler = () => {
    return void setIsReady(true);
  };

  return (
    <div className={`block relative h-[${height}] w-[${width}]`}>
      <img
        {...props}
        width={width}
        loading="lazy"
        height={height}
        onLoad={onLoadHandler}
        className={`bg-gray-400 dark:bg-gray-800/25 transition duration-100 ${
          isReady ? "scale-100 blur-0" : "scale-105 blur-2xl"
        } ${props.className}`}
      />
    </div>
  );
};
