export default function HomePageBanner() {
   return <section className="grid grid-cols-8 items-center gap-5 mt-7">
      <div className="bg-green-200 h-52 rounded-r-xl overflow-hidden"></div>

      <div className="rounded-xl overflow-hidden col-span-6">
         <img className="object-cover h-72 w-full" src="/images/home_banner.png" alt="home_banner" />
      </div>

      <div className="bg-secondaryPurple h-52 rounded-l-xl overflow-hidden"></div>
   </section>
}