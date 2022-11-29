import React, { FC } from 'react';
import SectionDesc from '../../../site/section/SectionDesc';

const Elements: FC = () => {
    const elementsSection = [
        {
            title: 'Buttons',
            items: 22,
            img: 'images/sections/button.png',
            link: '/components/buttons',
        },
        {
            title: 'Badges',
            items: 15,
            img: 'images/sections/badges.png',
            link: '/components/badges',
        },
        {
            title: 'Avatars',
            items: 11,
            img: 'images/sections/avatar.png',
            link: '/components/avatar',
        },
        {
            title: 'Menu list',
            items: 7,
            img: 'images/sections/ddm.png',
            link: '/components/ddm',
        },
        {
            title: 'Alerts',
            items: 11,
            img: 'images/sections/alerte.png',
            link: '/components/alert',
        },
        {
            title: 'Dashboards',
            items: 26,
            img: 'images/sections/data.png',
            link: '/components/data',
        },
        {
            title: 'Progress bars',
            items: 5,
            img: 'images/sections/progress.png',
            link: '/components/progress',
        },
        {
            title: 'Skeleton',
            items: 3,
            img: 'images/sections/skeleton.png',
            link: '/components/skeleton',
        },
        {
            title: 'Tabs',
            isNew: true,
            items: 3,
            img: 'images/sections/tabs.png',
            link: '/components/tabs',
        },
    ];

    return <SectionDesc withPub id="elements" items={elementsSection} title="Elements" />;
};

export default Elements;
