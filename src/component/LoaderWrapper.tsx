import { useLottie } from "lottie-react";

// const Home = lazy(() => import("../page/TodoPage"));
// <Suspense fallback="loding">kuldeep</Suspense>;

interface loderProps {
  loaderFile: any;
}
export const LoderWrapper = (props: loderProps) => {
  const { loaderFile } = props;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loaderFile,
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
        borderRadius: "30px",
        width: "100px",
        height: "100px",
      }}
    >
      {lottie}
    </div>
  );
};
