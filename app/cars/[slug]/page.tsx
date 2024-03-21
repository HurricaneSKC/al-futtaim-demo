import React from "react";

interface Props {
  params: { slug: string };
}

const CarDetailPage = ({ params: { slug } }: Props) => {
  return <div>CarDetailPage {slug}</div>;
};

export default CarDetailPage;
