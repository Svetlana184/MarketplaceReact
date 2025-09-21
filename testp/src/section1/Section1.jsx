import './Section1.css'
import icon from '/sec1_icon.svg'

export default function Section1() {
    return(
      <section className='hero'>
        <div className='hero_text'>
            <div className='hero_title'>
                <h1>Discover and
Collect The Best NFTs <span className='yellow_text'>Digital Art.</span></h1>
                <p>Get started with the easiest and most secure platform to buy
                     and trade digital ART and NFT’s. Start exploring the world of digital art and NFTs 
                     today and take control of your digital assets with confidence!</p>
                <div>
                    <button className='btn_yellow'><a href="#">Explore Now</a></button>
                    <button className='btn_border'><a href="#">Learn More</a></button>
                </div>
            </div>
            <ul className='hero_numbers'>
                <li>
                    <h6><span className='yellow_text'>8.9</span>K</h6>
                    <p>Art work</p>
                </li>
                <li>
                    <h6><span className='yellow_text'>65</span>K</h6>
                    <p>Artist</p>
                </li>
                <li>
                    <h6><span className='yellow_text'>87</span>K</h6>
                    <p>Collection</p>
                </li>
            </ul>
        </div>
        <div className='hero_pics'>
            <div className='first_hero_pic'>
                <img className='icon_card' src={icon} alt="" />
            </div>
             <div className='add_card'>
        <div className='st_add_card'>
                    <div>
                        <h6>Ends in</h6>
                        <p>05:45:47</p>
                    </div>
                    <div className='st_add_card'>
                        <h6>Current bid</h6>
                        <p>0.24ETH</p>
                    </div>
                </div>
                <button className='btn_bid1 '>Place A Bid</button>
        </div>
           
                
        </div>
        
      </section>
    )
}