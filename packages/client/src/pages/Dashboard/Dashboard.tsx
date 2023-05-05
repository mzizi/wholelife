import { FC } from "react";

interface Props {}

export const Dashboard: FC<Props> = (props) => {
  return (
    <div className="h-max flex flex-col gap-4">
      <h1 className="text-md">Dashboard Content</h1>
    </div>
  );
};
