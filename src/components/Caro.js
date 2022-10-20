import React, { useEffect, useState } from 'react'
import Slider from 'react-animated-slider';
import horizontalCss from 'react-animated-slider/build/horizontal.css';
import "./slider-animations.css";
import "./ss.css";


const Caro = () => {
    const [content, setContent] = useState({});
    useEffect(() => {
        fetch('./content.json')
            .then(res => res.json())
            .then(data => setContent(data))
    }, []);
    console.log(content);
    return (
        <div>
            {content.length > 0 ? <Slider className="slider-wrapper">
                {content.map((item, index) => (
                    <div
                        key={index}
                        className="slider-content"
                        style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                        <div className="inner">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <button>{item.button}</button>
                        </div>
                        <section>
                            <img src={item.userProfile} alt={item.user} />
                            <span>
                                Posted by <strong>{item.user}</strong>
                            </span>
                        </section>
                    </div>
                ))}
            </Slider> : ""}
        </div>
    )
}

export default Caro