import { useNProgress } from "@tanem/react-nprogress";
import Spinner from "./Spinner";
import Container from "./Container";
import Bar from "./Bar";

const Loading: React.FC<{ isRouteChanging: boolean }> = ({
  isRouteChanging,
}) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating: isRouteChanging,
  });

  return (
    <>
      <style jsx>{`
        .container {
          opacity: ${isFinished ? 0 : 1};
          pointerevents: none;
          transition: opacity ${animationDuration}ms linear;
        }
        .bar {
          background: #f4d688;
          height: 2px;
          left: 0;
          margin-left: ${(-1 + progress) * 100}%;
          position: fixed;
          top: 0;
          transition: margin-left ${animationDuration}ms linear;
          width: 100%;
          z-index: 1031;
        }
        .spinner {
          box-shadow: 0 0 10px red, 0 0 5px red;
          display: block;
          height: 100%;
          opacity: 1;
          position: absolute;
          top: 50%:
          margin: 0;
          transform: rotate(3deg) translate(0px, -4px) translateY(-50%);
          width: 100px;
        }
      `}</style>
      <Container animationDuration={animationDuration} isFinished={isFinished}>
        <Bar animationDuration={animationDuration} progress={progress} />
        <Spinner />
      </Container>
    </>
  );
};

export default Loading;
