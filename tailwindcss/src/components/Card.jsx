import React from 'react'
function Card(props){
    console.log("props",props);
            return (
              <div className="relative min-h-screen overflow-hidden">
                <nav className=" container relative mx-auto flex w-full items-center justify-between px-5 py-3 text-xl ">
                  <div>Logo</div>
                  <div className="flex items-center justify-around">
                    <ul className="mx-3 flex">
                      <li className="mx-3">Links</li>
                      <li className="mx-3">Links</li>
                      <li className="mx-3">Links</li>
                    </ul>
                    <button className="hidden rounded-xl bg-white/20 px-4 py-2 text-[#FF00E5] sm:block">
                      CTA Button
                    </button>
                  </div>
                </nav>
          
                <div className="relative flex flex-col items-center justify-center">
                  <div className="relative top-32 max-w-3xl font-Manrope">
                    <h1 className="text-5xl font-extrabold sm:text-7xl">
                      Making bitcoin more than an investment.
                    </h1>
                    <div>
                      <button className="m-1 rounded-xl  bg-[#FF00E5] px-16 py-3">
                        Learn More
                      </button>

                    </div>
                  </div>
                </div>
                <div className="relative   top-[10vh] max-w-full sm:top-0 ">
                  
                </div>
              </div>
            );
          }
        
export default Card
