export default function Footer() {
  return (
    <footer className="w-full py-8 bg-burlyWood px-8 lg:px-40 flex flex-col lg:flex-row items-center lg:justify-between shadow-md lg:gap-x-32">
      <div className="w-full h-full flex flex-col lg:flex-row items-center lg:items-start text-light gap-4 lg:order-1 lg:gap-x-32">
        <div className="h-full font-funnelSans">
          <ul className="h-full flex flex-col items-center leading-6 font-semibold">
            <li>lorem ipsum</li>
            <li>123 456 789</li>
            <li>lorem@ipsum.pl</li>
          </ul>
        </div>
        <div className="lg:order-0">
          <a href="https://www.facebook.com/test">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 50 50">
              <path fill="white" d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
            </svg>
          </a>
        </div>
      </div>
      <img src="https://placehold.co/200x200" alt="branding" className="max-w-40 lg:max-w-48 w-[60%]"/>
    </footer>
  )
}