import Image from "next/image";
import React from "react";
import EmailWishList from "../global/EmailWishList";

const EmailSignup = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 mt-20">
      <div>
        <Image
          src={"/s3.png"}
          alt="s3"
          width={720}
          height={520}
          className="w-full lg:h-[100%]"
        />
      </div>
      <div className="px-20 py-10">
        <div>
          <h2 className="font-clash text-clash-32">
            Join the club and get the benefits
          </h2>
          <p className="font-satoshi text-clash-16">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop up stores and more
          </p>
        </div>
        <EmailWishList />
      </div>
    </section>
  );
};

export default EmailSignup;
