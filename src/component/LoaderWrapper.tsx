import { useLottie } from "lottie-react";
import animation from "../assets/lottie_loader/RDTaiLoader.json";

export const LoderWrapper = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // extract from view by using useLottie hook and passing options as args
  const { View: lottie } = useLottie(defaultOptions);
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "46%",
        width: "50px",
      }}
    >
      {lottie}
      <div>Loading...</div>
    </div>
  );
};
