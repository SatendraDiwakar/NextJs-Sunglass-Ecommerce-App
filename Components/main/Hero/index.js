import React from 'react'
// style
import HeroStyle from './Hero.module.css';

export default function Hero() {
    return (
        <div className={HeroStyle.hero}>
            <img src="/Images/hero.jpg" alt="heroImage" className={HeroStyle.heroImage} />
            <div className="container" style={{ height: '100%' }}>
                <div className={HeroStyle.containerItems}>
                    <div className={HeroStyle.headContainer}>
                        <img src="/Images/hero2.png" alt="heroImage" className={HeroStyle.heroCharacter} />
                        <p className={HeroStyle.headline}>Sun Glasses</p>
                    </div>
                    <div className={HeroStyle.tagLineContainer}>
                        <p className={HeroStyle.tagline}>Beat the heat this summer</p>
                        <button className={HeroStyle.btnCta}>Shop Now</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
