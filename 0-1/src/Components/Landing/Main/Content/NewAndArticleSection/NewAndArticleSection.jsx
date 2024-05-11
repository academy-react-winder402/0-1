import React from "react";
import { NewsCardList } from "../../../../Common/NewsAndArticle/NewsCardList";
import { NewsCardTail } from "../../../../Common/NewsAndArticle/NewsCardTail";
import { CustomButton } from "../../../../Common/CustomElements/CustomButton";


const NewsAndArticlesSection = () => {

  const NewsAndArticles = [
    {
      id: 1,
      title: "خبر شماره 1",
      question:"چونه مطالعه موثر را برای شما اسانتر کنبم؟" ,
      imageSrc:
        "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
      seen: "1400",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد.",
      sDate: "1403.01.01",

    },
    {
      id: 2,
      title: "خبر شماره 2",
      question:"چونه مطالعه موثر را برای شما اسانتر کنبم؟" ,
      imageSrc:
        "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
      seen: "1400",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد.",
      sDate: "1403.01.01",
    },
    {
      id: 3,
      title: "خبر شماره 3",
      question:"چونه مطالعه موثر را برای شما اسانتر کنبم؟" ,      
      imageSrc:
        "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
      seen: "1400",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد.",
      sDate: "1403.01.01",
    },
    
    // More products...
  ];
  return (
    <div>
      <div className="course-section-header flex justify-center mt-2 ">
        <h2 className="border-b-2 border-solid border-blue-400  text-xl dark:text-white  ">
          اخبار و مقالات{" "}
        </h2>
      </div>
      <div className=" flex flex-row ">
        <div className="right w-1/2 ">
          <NewsCardTail
            seen="22"
            sdate="1403.01.28"
            imgSrc="src/assets/Images/news1.png"
            title="چگونه مطالعه موثر را برای شما آسانتر کنیم."
            desc="لورم  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از  طراحان گرافیک است   چاپگرها و متون بلکه روزنامه و مجله در ستون و  سطرآنچنان که لازم است   و برای شرایط فعلی تکنولوژی مورد."
          />
        </div>
        <div className="left w-1/2">
          {NewsAndArticles.map((product) => (
            <div key={product.id}> <NewsCardList
            seen={product.seen}
            question={product.question}
            imgSrc={product.imageSrc}
            sdate={product.sDate}
            title={product.title}
            desc={product.desc}
          /></div>
          ))}
         
        </div>
      </div>
      <div className="course-section-footer flex justify-center mt-2"><CustomButton message="مشاهده همه " /></div>   

    </div>
  );
};

export { NewsAndArticlesSection };