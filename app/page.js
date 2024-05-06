import SubscriptionBox from "./components/SubscriptionBox";
import SubscriptionBox2 from "./components/SubscriptionBox2";


const page = () => {
  return (
    <>
      {/* <Carousel/> */}
      <SubscriptionBox img="/images/netflix-min.jpg" id={"netflix}"} headline={"NETFLIX"} price={"249"} endpoint={"netflix"} detail={"Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime."}/>

      <SubscriptionBox2 img="/images/amazon-prime-min.jpg" id={"amazon"} headline={"AMAZON PRIME"} price={"99"} endpoint={"prime"} detail={"Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime."}/>

      <SubscriptionBox img="/images/yt-music.jpg" id={"ytmusic"} headline={"YOUTUBE PREMIUM"} price={"99"} endpoint={"ytmusic"} detail={"Listen anywhere. Cancel anytime."}/>

      <SubscriptionBox2 img="/images/spotify.jpg" id={"spotify"} headline={"SPOTIFY"} price={"159"} endpoint={"spotify"} detail={"Listen anywhere. Cancel anytime."}/>

      <SubscriptionBox img="/images/hbo-max.jpg" id={"hbomax"} headline={"HBO MAX"} price={"199"} endpoint={"hbomax"} detail={"Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime."}/>

      <SubscriptionBox2 img="/images/chatgpt1.jpg" id={"chatgpt"} headline={"CHAT GPT+"} endpoint={"chatgpt"} price={"499"} detail={"Play with AI"}/>

      <SubscriptionBox img="/images/disneyplus1.jpg" id={"disneyplus"} headline={"DISNEY+"} endpoint={"disneyplus"} price={"199"} detail={"Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime."}/>

      <SubscriptionBox2 img="/images/quillbotpremium1.jpg" id={"quillbot"} headline={"QUILLBOT PREMIUM"} endpoint={"quillbot"} price={"599"} detail={"Make your writing beautiful, professional and concise."}/>
      
      <SubscriptionBox img="/images/vpn1.jpg" id={"vpn"} headline={"NORD VPN"} endpoint={"vpn"} price={"499"} detail={"Acces to every site throughout the web"}/>

      <SubscriptionBox2 img="/images/combo1.jpg" id={"combo"} headline={"COMBO"} endpoint={"combo"} price={"299"} detail={"Purchase multiple subscribtion at the same time with combo packages"}/>

    </>

  )
}

export default page