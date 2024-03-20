import React, { FC } from 'react'
import Counter from '../../components/Counter';

interface AboutPageProps {
    
}

const AboutPage: FC<AboutPageProps> = ({  }) => {
    return (
        <div>
            <div>about page</div>
            <div>hellow World</div>
            <Counter></Counter>
        </div>
    )
}

export default AboutPage;