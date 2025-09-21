import './section2.css'
import card1 from '/card1.png'
import card2 from '/card2.png'
import card3 from '/card3.png'
import icon1 from '/ic_art_1.svg'
import clock from '/clock.svg'


export default function Section2(){
    return(
        <section className='artwork'>
            <div className='art_title'>
                <h2><span className='yellow_text'>Amazing</span> and Super Unique Art of This <span className='yellow_text'>Week</span></h2>
                <button className='btn_yellow'>See All</button>
            </div>
            <ul>
                <li className='card_art'>
                    <img className='card_img' src={card1} alt="" />
                    <div className='card_desc'>
                        <div className='card_title'>
                            <h6>Cyberpunk Cocomo
                            </h6>
                            <div>
                                <img src={icon1} alt="" />
                                <p>490ETH</p>
                            </div>
                        </div>
                        <div className='card_timing'>
                            <div className='left_time'>
                                <p className='ending'>Ending In</p>
                                <div className='clock'>
                                    <img src={clock} alt="" />
                                    <p>03:24:56</p>
                                </div>
                            </div>
                            <button className='btn_bid'>Place A Bid</button>
                        </div>
                    </div>
                </li>
                <li className='card_art'>
                    <img className='card_img' src={card2} alt="" />
                    <div className='card_desc'>
                        <div className='card_title'>
                            <h6>Charge, Qi tiao yu
                            </h6>
                            <div>
                                <img src={icon1} alt="" />
                                <p>490ETH</p>
                            </div>
                            </div>
                        <div className='card_timing'>
                            <div className='left_time'>
                                <p className='ending'>Ending In</p>
                                <div className='clock'>
                                    <img src={clock} alt="" />
                                    <p>03:24:56</p>
                                </div>
                            </div>
                            <button className='btn_bid'>Place A Bid</button>
                        </div>
                    </div>
                </li>
                <li className='card_art'>
                    <img className='card_img' src={card3} alt="" />
                    <div className='card_desc'>
                        <div className='card_title'>
                            <h6>Surgeon, Josh Rife
                            </h6>
                            <div>
                                <img src={icon1} alt="" />
                                <p>490ETH</p>
                            </div>
                            </div>
                        <div className='card_timing'>
                            <div className='left_time'>
                                <p className='ending'>Ending In</p>
                                <div className='clock'>
                                    <img src={clock} alt="" />
                                    <p>03:24:56</p>
                                </div>
                            </div>
                            <button className='btn_bid'>Place A Bid</button>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    )
}