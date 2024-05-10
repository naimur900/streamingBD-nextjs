import CategoryBox from './components/CategoryBox';
import CategoryBox2 from './components/CategoryBox2';

const page = () => {
  return (
    <>
      <CategoryBox img="/images/videoStreamingServices-min.jpg" id={"videoStreamingServices}"} headline={"Video Streaming Services"} price={"249"} endpoint={"videoStreamingServices"} detail={"Netlfix, prime video, disney plus, hbo max, hotstar, hoichoi and so on.Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime."}/>

      <CategoryBox2 img="/images/musicStreamingServices-min.jpg" id={"musicStreamingServices"} headline={"Music Streaming Services"} price={"99"} endpoint={"musicStreamingServices"} detail={"Spotify, youtube music and so on. Listen anywhere. Cancel anytime."}/>

      <CategoryBox img="/images/educationalServices-min.png" id={"educationalServices"} headline={"Educational Services"} price={"99"} endpoint={"educationalServices"} detail={"Grammarly, quillbot and so on. Make your writing beautiful, professional and concise."}/>

      <CategoryBox2 img="/images/vpnServices-min.jpg" id={"vpnServices"} headline={"VPN Services"} endpoint={"vpnServices"} price={"499"} detail={"Nord VPN, surfshark VPN, windscribe VPN and so on. Acces to every site throughout the web"}/>

      <CategoryBox img="/images/aiTools-min.jpg" id={"aiTools"} headline={"AI Tools"} endpoint={"aiTools"} price={"499"} detail={"Chat GPT+. Play with AI. Make life easier and convinient"}/>
      
      {/* <SubscriptionBox2 img="/images/combo1.jpg" id={"comboServices"} headline={"Combo Services"} endpoint={"comboServices"} price={"299"} detail={"Purchase multiple subscribtion at the same time with combo packages"}/> */}

    </>

  )
}

export default page