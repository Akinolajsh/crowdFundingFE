
const Footer = () => {

const data:any=[
  {
    title: "Fundraiser for",
    text: "medical",
    text1: "emergency",
    text2: "memorial",
    text3: "education",
    text4: "crisis relief",
    text5: "nonprofit",
    text6: "COVID-19 fundraiser",
  },
  {
    title: "learn more",
    text: "how AbegFundMe works",
    text1: "common questions",
    text2: "Why AgebFundMe",
    text3: "success stories",
    text4: "supported countries",
    text5: "pricing",
    text6: "charity fundrasing",
  },
  {
    title: "resources",
    text: "help center",
    text1: "blog",
    text2: "press center",
    text3: "careers",
    text4: "about",
    text5: "more resources",
    text6: "AbegFundMe stories",
  },
]

  return (
    <div className="w-full flex justify-center border my-8">
{/* main */}
<div className="w-[90%] flex  justify-between my-9 flex-wrap text-[#222b33]">
<div className="w-[300px] capitalize text-[20px] font-bold my-5 meduim:w-[270px]">AbegFundMe</div>
{
  data?.map((el:any)=>(
    <div className="w-[300px]  ">
  <div className="capitalize font-semibold my-5">{el.title}</div>
  <div className="py-1 capitalize hover:underline hover:cursor-pointer text-[15px] hover:text-blue-700">{el.text1}</div>
  <div className="py-1 capitalize hover:underline hover:cursor-pointer text-[15px] hover:text-blue-700">{el.text2}</div>
  <div className="py-1 capitalize hover:underline hover:cursor-pointer text-[15px] hover:text-blue-700">{el.text3}</div>
  <div className="py-1 capitalize hover:underline hover:cursor-pointer text-[15px] hover:text-blue-700">{el.text4}</div>
  <div className="py-1 capitalize hover:underline hover:cursor-pointer text-[15px] hover:text-blue-700">{el.text5}</div>
  <div className="py-1 capitalize hover:underline hover:cursor-pointer text-[15px] hover:text-blue-700">{el.text6}</div>
</div>
  ))
}

</div>
    </div>
  )
}

export default Footer