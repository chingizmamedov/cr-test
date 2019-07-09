import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import BreadCrumbs from '~/components/BreadCrumbs/BreadCrumbs';
import './ourwork.scss';
import imgLeft from '../../../static/vector-left.svg'
import Categories from '~/components/Categories/Categories';
import RealCategories from '~/components/realcategories/RealCategories';

function Jobs() {
  const tabItems = ['Все проекты','Учебные заведения', 'Медицинские учреждения', 'Спортивные объекты', 'Самые крупные'],
  contentItems = ['Все проекты','Учебные заведения' , 'Медицинские учреждения', 'Спортивные объекты', 'Самые крупные']

  return (
    <div className="ourwork container">
      <BreadCrumbs />
      <Tabs>
        <TabList>
          <Tab>реализованные проекты</Tab>
          <Tab>доступная среда</Tab>
          <Tab>карта объектов</Tab>
          <Tab>новости</Tab>
          <Tab>блог</Tab>
        </TabList>
        <TabPanel>
          <div className="completed-projects">
            <div className="completed-projects_card">
                <span>Span</span>
            </div>
            <div className="completed-projects_card">
                <span>Span</span>
            </div>
            <div className="completed-projects_card">
                <span>Span</span>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 5</h2>
        </TabPanel>
      </Tabs>
      <div className="categories">
        {/* <Categories /> */}
        <RealCategories title={'Реализованные проекты'} tabItems={tabItems} contentItems={contentItems} />
      </div>
    </div>
  )
}

export default Jobs;