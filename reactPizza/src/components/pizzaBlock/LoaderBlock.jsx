import React from "react"
import ContentLoader from "react-content-loader"

const LoaderBlock = (props) => (
    <ContentLoader
        speed={0}
        width={290}
        height={480}
        viewBox="0 0 290 470"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="138" cy="141" r="140" />
        <rect x="3" y="325" rx="10" ry="10" width="280" height="84" />
        <rect x="0" y="434" rx="0" ry="0" width="89" height="27" />
        <rect x="131" y="419" rx="20" ry="20" width="150" height="49" />
        <rect x="2" y="291" rx="0" ry="0" width="280" height="25" />
    </ContentLoader>
)


export default LoaderBlock