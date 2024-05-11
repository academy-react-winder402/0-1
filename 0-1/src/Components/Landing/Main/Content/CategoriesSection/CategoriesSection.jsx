import React from "react";
import { CategoriesBox } from "../../../../Common/CategoriesCard/CategoriesBox";
import style from './../../../../../assets/images/LandingImages/CategoriesSection/categories-bg.png'


const CategoriesSection = () => {
  return (
    <>
      <div className="dark:bg-black ">
        <div className="flex flex-row w-full bg-cover bg-center dark:bg-black " style={{width: `100%` , height: `100%`   , backgroundImage: `url(${style})`}}>
          <div className="right mr-9 w-2/5 h-20 mt-60 flex-col justify-center text-right dark:text-white ">
            <h1 className="text-xl font-bold dark:text-white">دسته بندی دوره ها</h1>
            <p className="w-100 text-sm font-normal dark:text-white">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم فراوان جوابگوی و
              سطرآنچنان گیرد., و و امید طراحی اهل گذشته کاربردی چاپ،پگرها الخصوص
              هدف دستاوردهای توان فراوان. پایان{" "}
            </p>
          </div>
          <div className="  w-3/5 h-full flex flex-row ">
            <div className=" w-1/2 m-5 mt-2 ">
              <CategoriesBox
                imgSrc="src/assets/Icons/Icon(8).png"
                title=" تحلیل داده"
                desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم فراوان جوابگوی و سطرآنچنان گیرد"
              />
              <CategoriesBox
                imgSrc="src/assets/Icons/Icon(10).png"
                title="وب دیزاین"
                desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم فراوان جوابگوی و سطرآنچنان گیرد"
              />
            </div>
            <div className=" w-1/2 m-5 mt-10">
              <CategoriesBox
                imgSrc="src/assets/Icons/Icon(9).png"
                title="امنیت شبکه "
                desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم فراوان جوابگوی و سطرآنچنان گیرد"
              />
              <CategoriesBox
                imgSrc="src/assets/Icons/Icon(11).png"
                title="بازی"
                desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم فراوان جوابگوی و سطرآنچنان گیرد"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { CategoriesSection };