// import axios from "axios";
// import { useEffect, useState } from "react";

// import useSWR from "swr";
import { profileData } from "@/utils/samplePortfolioData"

type AboutSectionProps = {
    summary: string;
}

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

function AboutSection({summary}: AboutSectionProps) {

  // const [data, setData] = useState();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("https://jsonblob.com/1358667904115204096");
  //       console.log(response.data);
  //       // console.log(response.data.message);
  //       // setData(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   fetchData();
  // }, []);

  // const { data, error, isLoading } = useSWR("https://jsonblob.com/1358667904115204096", fetcher)

  // if(error) return "Error";
  // if(isLoading) return "Loading...";

  const headlineArray = profileData?.profile?.headline?.split("|") ?? [];

  return (
    <div className="flex flex-col space-y-16 w-[70vw] px-20 pt-10 pb-32">
        <div className="flex flex-col space-y-4">
            <div className="text-2xl text-orange-500">Hi, I'm {profileData?.profile?.firstName} {profileData?.profile?.lastName}!</div>
            <div className="text-5xl font-semibold">{headlineArray[0]}</div>
        </div>
        <div className="w-[80vw] text-xl">
            {summary}
        </div>
    </div>
  )
}

export default AboutSection