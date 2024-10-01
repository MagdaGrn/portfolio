import React from 'react';
import { projects } from '../data';
import { PinContainer } from '../ui/3d-pin';
import { FaLocationArrow } from 'react-icons/fa';
import Image from 'next/image';

const RecentProjects = () => {
  return (
    <div>
      <div className="py-20" id="projects">
        <h1 className="heading">
          A small section of {""}
          <span className="text-purple">recent projects</span>
				</h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
          {
          	projects.map( ({id, title, des, img, iconLists, link})=> (
							<div key={id} className="sm:h=[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-96 w-[80vw]">
								<PinContainer title={title} href={link}>
									<div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
											<div className="relative w-full h-full overflow-hidden lg:rounded-3xl gb-[#13162d]">
												<Image src={img} width="100" height="100" alt="bg-img" />
											</div>
											
											<img 
												src={img}
												alt={title} />
									</div>
									<h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
										{title}
									</h1>
									<p className="font-light lg:text-xl lg:font-normal text-sm line-clamp-2">
										{des}
									</p>
									<div className="flex items-center justify-between mt-7 mb-3">
										<div className="flex items-center">
											{iconLists.map((icon, index) => (
												<div
													key={index}
													className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
													style={{
														transform: `translateX(-${5 * index + 2}px)`,
													}}
												>
													<img src={icon} alt="icon5" className="p-2" />
												</div>
											))}
										</div>
										<div className="flex justify-center items-center">
											<p className="flex lg:text-xl md:text-xs text-sm text-purple">
												Check Live Site
											</p>
											<FaLocationArrow className="ms-3" color="#CBACF9" />
										</div>
									</div>
								</PinContainer>
							</div>

            ))
          }
        </div>
        
      </div>
    </div>
  )
}

export default RecentProjects
