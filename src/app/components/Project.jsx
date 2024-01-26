'use client';

import Image from 'next/image';
import Skill from './Skill';
import SkillWrap from './SkillWrap';
import Link from 'next/link';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Project({ project,index }) {

    useEffect(() => {
        AOS.init({
          duration: 500,
        });
      }, []);

    return (
        <div key={index} className='w-auto flex flex-col gap-3 mb-10' data-aos="zoom-out">
            <Link href={project.link}>
                <Image className='border-[1px] border-gray-300 rounded-[35px]' src={project.image} alt={project.name} layout='responsive' width={500} height={300} />
            </Link>

            <Link className='font-semibold text-xl lg:text-2xl pl-5 text-[#212121]' href={project.link}>{project.name}</Link>

            <p className='pl-5 text-gray-600'>{project.description}</p>
            <SkillWrap>
                {project.skills.map((skill, index) => (
                    <Skill key={index} skill={skill} />
                ))}
            </SkillWrap>
        </div>
    );
}