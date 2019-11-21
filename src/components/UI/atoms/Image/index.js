import React from "react";

const Image = ({ alt, classes, src }) => (
	<img src={src} className={classes} alt={alt} />
);

export default Image;
