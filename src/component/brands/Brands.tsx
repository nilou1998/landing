import Image from "next/image";
import React from "react";
import photo from "https://cdn.prod.website-files.com/632a253b6e9c1587d2b8853d/65c296379b2ed3380a7dabc7_logo-hubspot-featured.svg";

const Brands = () => {
  return (
    <div className="bg-white w-full font-Lahzeh">
      <div className="bg-pink-300 h-96 inline md:hidden">
        <div className="w-1/2 mx-auto mb-4">
          <Image
            src="https://cdn.prod.website-files.com/632a253b6e9c1587d2b8853d/65c296379b2ed3380a7dabc7_logo-hubspot-featured.svg"
            width={200}
            height={200}
            alt=""
          />
        </div>
        <div className="flex flex-row justify-center items-center mx-auto w-full">
          <div className="w-1/2 flex justify-center border border-gray-300 px-8 py-8">
            <Image
              src="https://cdn.prod.website-files.com/632a253b6e9c1587d2b8853d/65c296379b2ed3380a7dabc7_logo-hubspot-featured.svg"
              width={150}
              height={150}
              alt="logo 1"
            />
          </div>
          <div className="w-1/2 flex justify-center border border-gray-300 px-8 py-8">
            <Image
              src="https://cdn.prod.website-files.com/632a253b6e9c1587d2b8853d/65c296379b2ed3380a7dabc7_logo-hubspot-featured.svg"
              width={150}
              height={150}
              alt="logo 2"
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center mx-auto w-full mb-8">
          <div className="w-1/2 flex justify-center border border-gray-300 px-8 py-8">
            <Image
              src="https://cdn.prod.website-files.com/632a253b6e9c1587d2b8853d/65c296379b2ed3380a7dabc7_logo-hubspot-featured.svg"
              width={150}
              height={150}
              alt="logo 1"
            />
          </div>
          <div className="w-1/2 flex justify-center border border-gray-300 px-8 py-8">
            <Image
              src="https://cdn.prod.website-files.com/632a253b6e9c1587d2b8853d/65c296379b2ed3380a7dabc7_logo-hubspot-featured.svg"
              width={150}
              height={150}
              alt="logo 2"
            />
          </div>
        </div>
        <div className="w-1/2 mx-auto">
          <Image
            src="https://cdn.prod.website-files.com/632a253b6e9c1587d2b8853d/65c296379b2ed3380a7dabc7_logo-hubspot-featured.svg"
            width={200}
            height={200}
            alt=""
          />
        </div>
      </div>
      <div className="hidden md:inline">
        {" "}
        <div className="flex gap-24 w-full sm:w-auto mx-auto px-6 lg:px-80 py-8 border border-gray-300 ">
          <Image
            src="https://cdn.prod.website-files.com/632a253b6e9c1587d2b8853d/65c296379b2ed3380a7dabc7_logo-hubspot-featured.svg"
            width={200}
            height={200}
            alt=""
          />{" "}
          <Image
            src="https://cdn.prod.website-files.com/632a253b6e9c1587d2b8853d/65c296379b2ed3380a7dabc7_logo-hubspot-featured.svg"
            width={200}
            height={200}
            alt=""
          />{" "}
          <Image
            src="https://cdn.prod.website-files.com/632a253b6e9c1587d2b8853d/65c296379b2ed3380a7dabc7_logo-hubspot-featured.svg"
            width={200}
            height={200}
            alt=""
          />{" "}
          <Image
            src="https://cdn.prod.website-files.com/632a253b6e9c1587d2b8853d/65c296379b2ed3380a7dabc7_logo-hubspot-featured.svg"
            width={200}
            height={200}
            alt=""
          />{" "}
          <Image
            src="https://cdn.prod.website-files.com/632a253b6e9c1587d2b8853d/65c296379b2ed3380a7dabc7_logo-hubspot-featured.svg"
            width={200}
            height={200}
            alt=""
          />{" "}
          <Image
            src="https://cdn.prod.website-files.com/632a253b6e9c1587d2b8853d/65c296379b2ed3380a7dabc7_logo-hubspot-featured.svg"
            width={200}
            height={200}
            alt=""
          />
        </div>
      </div>

      <div className="w-full sm:w-auto mx-auto px-6 lg:px-80 text-black py-12 lg:py-24 border border-gray-300">
        <h2 className="font-semibold lg:text-2xl lg:px-12 text-2xl py-2 lg:flex lg:justify-center">
          با سیستم‌های پراکنده خداحافظی کنید
        </h2>
        <p className="lg:px-12 leading-loose font-semibold lg:text-[16px] lg:py-4 lg:text-3xl text-black/80 lg:leading-loose text-justify">
          کسب‌وکارها برای پشتیبانی از مشتریان، ارائه پیشنهادات و آماده‌سازی
          تجزیه‌وتحلیل‌های آماری، به ابزارهای متعددی وابسته‌اند—که به ناکارآمدی
          و از دست رفتن فرصت‌ها منجر می‌شود. دلاورس با کارگزاران هوشمندش،
          همه‌چیز را یکپارچه می‌کند و پشتیبانی هوشمندتر، پیشنهادات شخصی‌سازی‌شده
          و بینش‌هایی عملی را در قالب یک پلتفرم ارائه می‌دهد.
        </p>
      </div>
    </div>
  );
};

export default Brands;
