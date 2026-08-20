import { lazy, Suspense } from "react";

const ThreeScene = lazy(() => import("./ThreeScene"));

export default function LazyScene(props) {
  return (
    <Suspense fallback={null}>
      <ThreeScene {...props} />
    </Suspense>
  );
}