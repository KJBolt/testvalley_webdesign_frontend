import React, {useState, useEffect} from 'react';
import '../../src/index.css';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import IconsCarousel from '../components/IconsCarousel';
import axios from 'axios';
import ProductArray from '../components/ProductArray';
import Footer from '../components/Footer';
import ChatIcon from '../components/ChatIcon';

function HomePage() {
  const [firstTitle, setFirstTitle] = useState([]);
  const [secondTitle, setSecondTitle] = useState([]);
  const [thirdTitle, setThirdTitle] = useState([]);
  const [fourthTitle, setFourthTitle] = useState([]);
  const [fifthTitle, setFifthTitle] = useState([]);
  const [sixthTitle, setSixthTitle] = useState([]);
  const [seventhTitle, setSeventhTitle] = useState([]);
  const [eightTitle, setEightTitle] = useState([]);
  const [ninthTitle, setNinthTitle] = useState([]);

  const [firstSubtitle, setFirstSubtitle] = useState([]);
  const [secondSubtitle, setSecondSubtitle] = useState([]);
  const [thirdSubtitle, setThirdSubtitle] = useState([]);
  const [fourthSubtitle, setFourthSubtitle] = useState([]);
  const [fifthSubtitle, setFifthSubtitle] = useState([]);
  const [sixthSubtitle, setSixthSubtitle] = useState([]);
  const [seventhSubtitle, setSeventhSubtitle] = useState([]);
  const [eightSubtitle, setEightSubtitle] = useState([]);
  const [ninthSubtitle, setNinthSubtitle] = useState([]);
  
  const [firstProductArray, setFirstProductArray] = useState([]);
  const [secondProductArray, setSecondProductArray] = useState([]);
  const [thirdProductArray, setThirdProductArray] = useState([]);
  const [fourthProductArray, setFourthProductArray] = useState([]);
  const [fifthProductArray, setFifthProductArray] = useState([]);
  const [sixthProductArray, setSixthProductArray] = useState([]);
  const [seventhProductArray, setSeventhProductArray] = useState([]);
  const [eightProductArray, setEightProductArray] = useState([]);
  const [ninthProductArray, setNinthProductArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const res = await axios.get('https://api.testvalley.kr/collections?prearrangedDiscount');
        const collectionsArray = res.data.items || [];
        const filteredData = collectionsArray.filter(data => data.type === 'SINGLE' && data.viewType === 'TILE');
        setFirstTitle(filteredData[0]);
        setSecondTitle(filteredData[1]);
        setThirdTitle(filteredData[2]);
        setFourthTitle(filteredData[3]);
        setFifthTitle(filteredData[4]);
        setSixthTitle(filteredData[5]);
        setSeventhTitle(filteredData[6]);
        setEightTitle(filteredData[7]);
        setNinthTitle(filteredData[8]);

        setFirstSubtitle(filteredData[0]);
        setSecondSubtitle(filteredData[1]);
        setThirdSubtitle(filteredData[2]);
        setFourthSubtitle(filteredData[3]);
        setFifthSubtitle(filteredData[4]);
        setSixthSubtitle(filteredData[5]);
        setSeventhSubtitle(filteredData[6]);
        setEightSubtitle(filteredData[7]);
        setNinthSubtitle(filteredData[8]);
        
        setFirstProductArray(filteredData[0]);
        setSecondProductArray(filteredData[1]);
        setThirdProductArray(filteredData[2]);
        setFourthProductArray(filteredData[3]);
        setFifthProductArray(filteredData[4]);
        setSixthProductArray(filteredData[5]);
        setSeventhProductArray(filteredData[6]);
        setEightProductArray(filteredData[7]);
        setNinthProductArray(filteredData[8]);

    }
    fetchData();
});

  return (
    <div className='bg-white shadow-sm'>
        <Navbar />
          <Carousel />
          <IconsCarousel />
          <ProductArray data={firstProductArray} title={firstTitle} subtitle={firstSubtitle} />
          <ProductArray data={secondProductArray} title={secondTitle} subtitle={secondSubtitle} />
          <ProductArray data={thirdProductArray} title={thirdTitle} subtitle={thirdSubtitle}/>
          <ProductArray data={fourthProductArray} title={fourthTitle} subtitle={fourthSubtitle}/>
          <ProductArray data={fifthProductArray} title={fifthTitle} subtitle={fifthSubtitle}/>
          <ProductArray data={sixthProductArray} title={sixthTitle} subtitle={sixthSubtitle}/>
          <ProductArray data={seventhProductArray} title={seventhTitle} subtitle={seventhSubtitle}/>
          <ProductArray data={eightProductArray} title={eightTitle} subtitle={eightSubtitle}/>
          <ProductArray data={ninthProductArray} title={ninthTitle} subtitle={ninthSubtitle}/>
          <ChatIcon />
          <Footer /> 
    </div>
  )
}

export default HomePage