import { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const Home: FC<Props> = ({ children }) => {
  return (
    <div className="w-full h-max flex flex-col gap-4">
      <h1 className="text-3xl text-current">Homepage</h1>
    </div>
  );
};
