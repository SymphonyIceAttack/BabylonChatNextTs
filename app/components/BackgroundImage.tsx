"use client";
import NextImage from "next/image";
interface Props {
	imageUrl: string;
}

export default function ({ imageUrl }: Props) {
	return (
		<div className={"h-full w-full absolute z-[-10]"}>
			<NextImage src={imageUrl} fill={true} alt="background" />
		</div>
	);
}
