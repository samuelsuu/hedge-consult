import React from "react";
import ceo from "../assets/ceo.jpeg"

type CEOProps = {
  name: string;
  position: string;
  company: string;
  bio: string;
  imageUrl: string;
};

const CEODetails: React.FC<CEOProps> = ({ name, position, company, bio, imageUrl }) => {
  return (
    <div className="border p-9 rounded-lg shadow-lg max-w-sm text-center bg-gold text-white">
      <img src={ceo} alt={name} className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-white" />
      <h2 className="text-2xl font-bold uppercase">Ephraim B. Barango</h2>
      <p className="text-lg font-semibold">CEO at Hedgeway Global Services</p>
      <p className="mt-4 text-sm">{bio}</p>
    </div>
  );
};

export default CEODetails;
