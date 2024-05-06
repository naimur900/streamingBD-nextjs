import Details from "../../components/Details";

const page = () => {
  const img = "/images/spotifypremium2.jpg";

  return (
    <>
      <Details
        name={"SpotifyPremium-1month"}
        img={img}
        price={"159"}
        id={"SP1"}
        secondScreenOption={false}
        details={`  Renewable Account
                    Full Duration Warreanty
                    Full Playlist & Songs Backup guarantee
                    Provide Us Spotify Mail pass so that we can activate Spotify On your personal Account`}
      />
      <Details
        name={"SpotifyPremium-6month"}
        img={img}
        price={"799"}
        id={"SP2"}
        secondScreenOption={false}
        details={`  Renewable Account
                    Full Duration Warreanty
                    Full Playlist & Songs Backup guarantee
                    Provide Us Spotify Mail pass so that we can activate Spotify On your personal Account`}
      />
      <Details
        name={"SpotifyPremium-12month"}
        img={img}
        price={"1550"}
        id={"SP3"}
        secondScreenOption={false}
        details={`  Renewable Account
                    Full Duration Warreanty
                    Full Playlist & Songs Backup guarantee
                    Provide Us Spotify Mail pass so that we can activate Spotify On your personal Account`}
      />
    </>
  );
};

export default page;
