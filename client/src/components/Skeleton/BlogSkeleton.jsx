import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BlogSkeleton = () => {
  return (
    <>
      <div
        id="skeleton-main"
        style={{
          backgroundColor: "black",
          height: "300px",
          width: "300px",
          marginTop: "10px",
          borderRadius: "10px",
          padding: "10px 10px 40px 10px",
          position: "relative",
        }}
      >
        <SkeletonTheme baseColor="#1D2023" highlightColor="#8BA7AF">
          <div>
            <Skeleton
              style={{
                height: "100px",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <Skeleton
              style={{
                height: "30px",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <Skeleton
              style={{
                height: "120px",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
          </div>
        </SkeletonTheme>
      </div>
    </>
  );
};

export default BlogSkeleton;
