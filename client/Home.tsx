import React from 'react';

import CoverCard from './components/CoverCard';
import Heading from './components/Heading';
import useDocumentTitle from './hooks/useDocumentTitle';
import Layout from './layouts/Layout';

const Home = () => {
    useDocumentTitle('CSS Layout');

    return (
        <Layout>
            <div className="mt5 bl br bt b--black-20 br4 br--top">
                <div className="relative">
                    <h1
                        className="absolute bg-white f2 fw6 left-2 lh-copy ma0 ph2 top-0 br-pill ph3 white bg-dark-blue"
                        style={{ left: '50%', transform: 'translate(-50%, -50%)' }}
                    >
                        CSS Layout
                    </h1>

                    <h2 className="fw3 f3 tc lh-copy ma0 pa4">
                        a collection of popular layouts and patterns made with CSS
                    </h2>

                    <div className="w-30 center mb4">
                        <ul className="ma0 pa0 list f4 lh-copy">
                            <li className="flex items-center justify-between">
                                <div>Zero dependencies</div>
                                <div>🎉</div>
                            </li>
                            <li className="flex items-center justify-between">
                                <div>No frameworks</div>
                                <div>🎉</div>
                            </li>
                            <li className="flex items-center justify-between">
                                <div>No CSS hacks</div>
                                <div>🎉</div>
                            </li>
                            <li className="flex items-center justify-between">
                                <div>Real use cases</div>
                                <div>🎉</div>
                            </li>
                            <li className="flex items-center justify-between">
                                <div>Good practices</div>
                                <div className="br-pill ph2 white bg-dark-blue f6">soon</div>
                            </li>
                            <li className="flex items-center justify-between">
                                <div>Accessibility</div>
                                <div className="br-pill ph2 white bg-dark-blue f6">soon</div>
                            </li>
                        </ul>
                    </div>
                </div>

                <section>
                    <Heading title="Layouts" />

                    <div className="flex flex-wrap items-start pa4">
                        <CoverCard pattern="Holy grail" />
                        <CoverCard pattern="Sidebar" />
                        <CoverCard pattern="Split screen" />
                        <CoverCard pattern="Sticky footer" />
                        <CoverCard pattern="Sticky header" />
                    </div>
                </section>

                <section>
                    <Heading title="Patterns" />

                    <div className="flex flex-wrap items-start pa4">
                        <CoverCard pattern="Badge" />
                        <CoverCard pattern="Breadcrumb" />
                        <CoverCard pattern="Button with icon" />
                        <CoverCard pattern="Card" />
                        <CoverCard pattern="Centering" />
                        <CoverCard pattern="Docked at corner" />
                        <CoverCard pattern="Dot navigation" />
                        <CoverCard pattern="Feature list" />
                        <CoverCard pattern="Fixed at corner" />
                        <CoverCard pattern="Input add-on" />
                        <CoverCard pattern="Media object" />
                        <CoverCard pattern="Menu" />
                        <CoverCard pattern="Modal" />
                        <CoverCard pattern="Notification" />
                        <CoverCard pattern="Pagination" />
                        <CoverCard pattern="Previous next buttons" />
                        <CoverCard pattern="Pricing table" />
                        <CoverCard pattern="Progress bar" />
                        <CoverCard pattern="Questions and answers" />
                        <CoverCard pattern="Radio switch" />
                        <CoverCard pattern="Same height columns" />
                        <CoverCard pattern="Search box" />
                        <CoverCard pattern="Separator" />
                        <CoverCard pattern="Simple grid" />
                        <CoverCard pattern="Slider" />
                        <CoverCard pattern="Split navigation" />
                        <CoverCard pattern="Stepper input" />
                        <CoverCard pattern="Switch" />
                        <CoverCard pattern="Tab" />
                        <CoverCard pattern="Toggle password visibility" />
                        <CoverCard pattern="Wizard" />
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Home;