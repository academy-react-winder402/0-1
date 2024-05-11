import React from 'react'
import { HeroSection } from '../HeroSection/HeroSection'
import { Services } from '../Services/Services'
import { CourseSection } from './CourseSection/CourseSection'
import { CategoriesSection } from './CategoriesSection/CategoriesSection'
import { TeacherSection } from './TeacherSection/TeacherSection'
import { NewsAndArticlesSection } from './NewAndArticleSection/NewAndArticleSection'

const Content = () => {
  return (
      <div className='h-auto w-full flex flex-wrap ' dir='rtl'>
          <HeroSection />
          <Services />
          <CourseSection />
          <CategoriesSection />
          <TeacherSection />
          <NewsAndArticlesSection />
    </div>
  )
}

export  {Content}